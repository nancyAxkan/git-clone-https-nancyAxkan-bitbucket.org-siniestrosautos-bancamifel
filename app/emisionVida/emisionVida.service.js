(function() {
    "use strict";

    angular
        .module("mifel")
        .service("emisionVidaSrvc", emisionVidaSrvc);

    emisionVidaSrvc.$inject = ["$firebaseArray", "$firebaseObject", "Auth", "vidaService", "$http", "$q", "comunFcty"];

    function emisionVidaSrvc($firebaseArray, $firebaseObject, Auth, vidaService, $http, $q, comunFcty) {
        var evc = this;

        evc.actualizaTarifa = actualizaTarifa;
        evc.actualizaCotizacion = actualizaCotizacion;
        evc.validaCambioTarifa = validaCambioTarifa;
        evc.setEmision = setEmision;
        evc.setCobranza = setCobranza;
        evc.setReferencia = setReferencia;
        evc.servicioCancela = servicioCancela;

        function actualizaTarifa(producto, edad, pago, datosE, adicionales, genero) {
            var configProducto = [],
                tarifa = {},
                edadVida = 0;
            if (genero === "m") {
                if (edad < 21) {
                    edadVida = 18;
                } else {
                    edadVida = edad - 3;
                }
            } else {
                edadVida = edad;
            }

            configProducto = producto.configuraciones[edadVida];
            tarifa = vidaService.cotizaPrimaTotalVida(configProducto, producto, datosE, adicionales, pago);

            if (tarifa !== {} && typeof tarifa !== 'undefined') {
                tarifa.error = false;
                return tarifa;
            }
            else {
                return {
                    error: true
                };
            }
        }

        function actualizaCotizacion(cotizacion, tarifaActualizada) {
            if (tarifaActualizada.primaTotal !== cotizacion.primaTotal) {
                cotizacion.primaTotal = tarifaActualizada.primaTotal;
                cotizacion.primaAnual = tarifaActualizada.primaTotalAnualizada;
                return cotizacion.$save();
            }
            else {
                return Promise.resolve();
            }
        }

        function validaCambioTarifa(idCot, uid, cotizacionPrimaTotal, emisionPrimaTotal, emisionPrimaTotalAnualizada) {
            if (emisionPrimaTotal !== cotizacionPrimaTotal) {
                var updates = {};

                updates['/cotizacion/' + uid + idCot + '/primaTotal'] = emisionPrimaTotal;
                updates['/cotizacion/' + uid + idCot + '/primaAnual'] = emisionPrimaTotalAnualizada;

                return firebase.database().ref().update(updates);
            }
            else {
                return true;
            }
        }

        function setEmision(datosEmision) {
            return $q(function(resolve, reject) {
                var emision = {};
                emision = $firebaseObject(firebase.database().ref("emision/" + datosEmision.uid + "/" + datosEmision.idCot));
                emision.$loaded(function() {
                    emision.timeStamp = datosEmision.timeStamp;
                    emision.fechaInicioVigencia = datosEmision.fechaInicioVigencia;
                    emision.fechaFinVigencia = datosEmision.fechaFinVigencia;
                    emision.tipoProducto = datosEmision.tipoProducto;
                    emision.datosSolicitante = datosEmision.datosSolicitante;
                    if (typeof datosEmision.datosSaludSolicitante !== 'undefined') {
                        emision.datosSaludSolicitante = datosEmision.datosSaludSolicitante;
                    }
                    emision.datosContratante = datosEmision.datosContratante;
                    emision.datosPlan = datosEmision.datosPlan;
                    emision.datosBeneficiarios = datosEmision.datosBeneficiarios;
                    if (typeof datosEmision.datosBeneficiariosContingentes !== 'undefined') {
                        emision.datosBeneficiariosContingentes = datosEmision.datosBeneficiariosContingentes;
                    }
                    emision.datosNexos = datosEmision.datosNexos;
                    emision.datosConsentimiento = datosEmision.datosConsentimiento;
                }).then(function() {
                    emision.$save().then(function() {
                        resolve(emision);
                    }, function(error) {
                        reject(error);
                    });
                }, function(error) {
                    reject(error); 
                });
            });
                
        }

        function setCobranza(datosEmision) {
            return $q(function(resolve, reject) {
                var cobranza = $firebaseObject(firebase.database().ref("emision_cobranza/" + datosEmision.idCot));
                cobranza.timeStamp = datosEmision.timeStamp;
                cobranza.datosCobranza = datosEmision.datosCobranza;
                cobranza.$save().then(function() {
                    resolve(cobranza);
                }, function(error) {
                    reject(error); 
                });
            });
            

        }

        function setReferencia(objetoEmision, objetoCotizacion) {
            return $q(function(resolve, reject) {
                var peticion = $http.post('https://gnp-mifel-firebase.appspot.com/_ah/api/emiteEndopoints/v1/emitePoliza/VIDA', objetoEmision, {
                    'Content-Type': 'application/json'
                });
                peticion.then(function(respuesta) {
                    if (typeof respuesta.data.error !== 'undefined') {
                        reject(respuesta.data.error.error);
                    }
                    else {
                        objetoCotizacion.statusDate = comunFcty.obtieneFecha();
                        objetoCotizacion.status = 1;
                        objetoCotizacion.numeroReferencia = respuesta.data.consecutivo.noPoliza;
                        objetoCotizacion.$save();
                        resolve(respuesta.data);
                    }
                }, function(error) {
                    reject(error);
                });
            });

        }

        function servicioCancela(cotizacion, mensaje) {
            cotizacion.statusDate = comunFcty.obtieneFecha();
            cotizacion.status = 5;
            cotizacion.observacion = mensaje;
            return cotizacion.$save();
        }
    }
})();
