(function() {
    "use strict";

    angular
        .module("mifel")
        .service("emisionApSrvc", emisionApSrvc);

    emisionApSrvc.$inject = ["$firebaseObject", "Auth", "apService", "$http", "$q", "comunFcty"];

    function emisionApSrvc($firebaseObject, Auth, apService, $http, $q, comunFcty) {
        var ec = this;

        ec.actualizaTarifa = actualizaTarifa;
        ec.actualizaCotizacion = actualizaCotizacion;
        ec.setReferencia = setReferencia;
        ec.setEmision = setEmision;
        ec.setCobranza = setCobranza;
        ec.servicioCancela = servicioCancela;

        function actualizaTarifa(producto, edad, genero, pago, datosE) {
            var tarifa = apService.cotizaPrimaTotalAp(producto, edad, genero, pago, datosE);

            if (tarifa !== {} && typeof tarifa !== 'undefined') {
                tarifa.error = false;
                return tarifa;
            }
            else {
                return {
                    error: true
                };
            }
        };

        function actualizaCotizacion(cotizacion, tarifaActualizada) {
            if (tarifaActualizada.primaTotal !== cotizacion.primaTotal) {
                cotizacion.primaTotal = tarifaActualizada.primaTotal;
                cotizacion.primaAnual = tarifaActualizada.primaTotalAnualizada;
                return cotizacion.$save();
            }
            else {
                return Promise.resolve();
            }
        };

        function servicioCancela(cotizacion, mensaje) {
            cotizacion.status = 5;
            cotizacion.statusDate = comunFcty.obtieneFecha();
            cotizacion.observacion = mensaje;
            return cotizacion.$save();
        };

        function setEmision(datosEmision) {
            return $q(function(resolve, reject) {
                var emision = {};
                emision = $firebaseObject(firebase.database().ref("emision/" + datosEmision.uid + "/" + datosEmision.idCot));
                emision.$loaded().then(function() {
                    emision.timeStamp = datosEmision.timeStamp;
                    emision.fechaInicioVigencia = datosEmision.fechaInicioVigencia;
                    emision.fechaFinVigencia = datosEmision.fechaFinVigencia;
                    emision.tipoProducto = datosEmision.tipoProducto;
                    emision.datosSolicitante = datosEmision.datosSolicitante;
                    emision.datosDomicilio = datosEmision.datosDomicilio;
                    emision.datosContratante = datosEmision.datosContratante;
                    emision.datosPlan = datosEmision.datosPlan;
                    emision.datosBeneficiarios = datosEmision.datosBeneficiarios;
                    emision.datosConsentimiento = datosEmision.datosConsentimiento;
                    emision.datosNexos = datosEmision.datosNexos;
                    
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
                var peticion = $http.post('https://gnp-mifel-firebase.appspot.com/_ah/api/emiteEndopoints/v1/emitePoliza/AP', objetoEmision, {'Content-Type': 'application/json'});
                peticion.then(function(respuesta) {
                    if(typeof respuesta.data.error !== 'undefined'){
                        reject(respuesta.data.error.error);    
                    }else{
                        objetoCotizacion.status = 1;
                        objetoCotizacion.statusDate = objetoEmision.timeStamp;
                        objetoCotizacion.numeroReferencia = respuesta.data.consecutivo.noPoliza;
                        objetoCotizacion.$save();
                        resolve(respuesta.data);
                    }
                }, function(error) {
                    reject(error);
                });    
            });
            
        };
    }
})();