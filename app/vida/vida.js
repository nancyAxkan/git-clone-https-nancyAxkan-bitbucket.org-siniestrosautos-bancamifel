(function() {
    "use strict";

    angular
        .module("mifel")
        .controller("vidaCtrl", vidaCtrl);

    vidaCtrl.$inject = ["$mdDialog", "Auth", "$firebaseObject", "$firebaseArray", "comunFcty", "vidaService", "autenticacion", "$http", "$scope", "$window", "$interval", "$timeout", "$q"];

    function vidaCtrl($mdDialog, Auth, $firebaseObject, $firebaseArray, comunFcty, vidaService, autenticacion, $http, $scope, $window, $interval, $timeout, $q) {
        var vida = this;

        /*funciones*/
        vida.cotiza = cotiza;
        vida.guarda = guarda;
        vida.continua = continua;
        vida.imprime = imprime;
        vida.enviaImprimir = enviaImprimir;
        vida.obtieneSuma = obtieneSuma;
        vida.validaEdad = validaEdad;
        vida.activaAdicionales = activaAdicionales;
        vida.filtroFormasPago = filtroFormasPago;
        vida.filtroProductos = filtroProductos;

        /*variables*/
        vida.online = $scope.online;
        vida.muestraPrima = false;
        vida.banGuardar = false;
        vida.banGuardado = false;
        vida.adicionales = false;
        vida.banIma = false;
        vida.banIse = false;
        vida.banDiba = false;
        vida.muestraAhorro = false;
        vida.loading = false;
        vida.glow = false;
        vida.urlImpresion = '';

        vida.datosEconomicos = comunFcty.getDatosEconomicos();
        vida.productos = comunFcty.getProductosVida();
        vida.formasPagoCat = comunFcty.getFormasPagoVida();
        vida.adicionales = [];
        vida.configProducto = {};
        vida.valoresFormaPago = {};
        vida.sumaAseCat = [];
        vida.idCot = '';
        vida.userUid = '';
        vida.primaFallecimiento = 0;
        vida.primaIMA = 0;
        vida.primaISE = 0;
        vida.primaDIBA = 0;
        vida.sumaAdicionales = 0;
        vida.pagoFraccionado = 0;
        vida.porcFraccionado = 0;
        vida.primaTotal = 0;
        vida.primaTotalAnualizada = 0;
        vida.primaCentavos = 0;
        vida.ahorroAnual = 0;
        vida.periodosPrima = 0;
        vida.numeroSuma = numeroSuma;

        $scope.$on("$destroy", function() {
            vida.datosEconomicos.$destroy();
            vida.productos.$destroy();
            vida.formasPagoCat.$destroy();
        });

        $scope.$watch('online', function(onlineStatus) {
            vida.online = onlineStatus;
        });

        function numeroSuma(oSuma) {
            return parseFloat(oSuma.suma_asegurada);
        }

        function cotiza(ev) {
            var adicionales = [];
            var cotizacion = {};
            vida.primaIMA = 0;
            vida.primaISE = 0;
            vida.primaDIBA = 0;
            vida.muestraAhorro = false;
            vida.muestraPrima = false;
            vida.primaTotal = 0;
            vida.porcFraccionado = 0;

            vida.valoresFormaPago = vida.formasPagoCat.$getRecord(vida.formaPago);
            vida.producto = vida.productos.$getRecord(vida.proteccionCon);

            var mensajesError = validaAdicionales(vida);
            if (mensajesError.length !== 0) {
                var mensajeError = "";
                for (var i = 0; i < mensajesError.length; i++) {
                    mensajeError = mensajesError[i].mensaje;
                }
                muestraMensaje('Mensaje', mensajeError, ev);
            }
            else {
                if (vida.sexo === 'm') {
                    if (vida.edad < 21) {
                        vida.edadConfiguracion = 18;
                    }
                    else {
                        vida.edadConfiguracion = vida.edad - 3;
                    }
                }
                else {
                    vida.edadConfiguracion = vida.edad;
                }

                vida.configProducto = vida.productos.$getRecord(vida.proteccionCon).configuraciones[vida.edadConfiguracion];

                if (vida.adicionales) {
                    if (vida.ima) {
                        adicionales.push({
                            cobertura: "ima"
                        });
                    }
                    if (vida.ise) {
                        adicionales.push({
                            cobertura: "ise"
                        });
                    }
                    if (vida.diba) {
                        adicionales.push({
                            cobertura: "diba"
                        });
                    }
                }

                cotizacion = vidaService.cotizaPrimaTotalVida(vida.configProducto, vida.producto, vida.datosEconomicos, adicionales, vida.valoresFormaPago);

                if (cotizacion.primaTotal !== 0) {
                    vida.banGuardar = false;
                    vida.muestraPrima = true;
                    
                    guardaAlCotizar().then(function() {
                        vida.periodosPrima = cotizacion.periodos;
                        vida.primaIMA = cotizacion.primaIMA;
                        vida.primaISE = cotizacion.primaISE;
                        vida.primaDIBA = cotizacion.primaDIBA;
                        if (cotizacion.periodos !== 1) {
                            vida.muestraAhorro = true;
                            vida.primaTotal = cotizacion.primaTotal;
                            vida.pagoFraccionado = cotizacion.primaTotal / cotizacion.periodos;
                            vida.porcFraccionado = parseFloat(cotizacion.ahorro.toFixed(2));
                            vida.primaTotalAnualizada = cotizacion.primaTotalAnualizada;
                        }
                        else {
                            vida.pagoFraccionado = cotizacion.primaTotal;
                            vida.primaTotal = cotizacion.primaTotal;
                            vida.primaTotalAnualizada = cotizacion.primaTotalAnualizada;
                        }
                        
                        vida.loading = false;
                        $interval(function() {
                            vida.glow = vida.glow ? false : true;
                        }, 1000);
                        
                        document.body.scrollTop = 100;
                    });
                        
                }
                
            }

            vida.banGuardar = false;
            vida.banGuardado = false;
            
            ga('send', 'event', 'VIDA', 'calculo', '', '2500', {
                'dimension1': "Zona 1",
                'dimension2': "Sucursal 1",
                'dimension3': "Ejecutivo 1",
                'dimension4': "h",
                'metric1': 19300,
                'metric2': 17000
            });

            
        }
        
        function guardaAlCotizar() {
            return $q(function(resolve, reject) {
                var cotizacion = {};
                var uid = Auth.$getAuth().uid;
                vida.userUid = uid;
    
                vida.loading = true;
                var usuario = $firebaseObject(firebase.database().ref("usuario/" + uid));
                usuario.$loaded().then(function() {
                    var adicionales = [];
                    adicionales = obtieneCoberturas(vida);
                    cotizacion = {
                        "coberturas": {
                            adicionales: adicionales
                        },
                        "edad": vida.edad,
                        "genero": vida.sexo,
                        "producto": vida.productos.$getRecord(vida.proteccionCon).$id,
                        "tipoProducto": "VIDA",
                        "sucursal": usuario.sId,
                        "zona": usuario.zId,
                        "nombre": vida.nombre,
                        "apPat": vida.apePaterno,
                        "apMat": vida.apeMaterno,
                        "formaPago": vida.formaPago,
                        "primaTotal": vida.primaTotal,
                        "primaAnual": vida.primaTotalAnualizada,
                        "primaIMA": vida.primaIMA,
                        "primaISE": vida.primaISE,
                        "primaDIBA": vida.primaDIBA,
                        "ahorro": vida.porcFraccionado,
                        "pagoFraccionado": vida.pagoFraccionado,
                        "status": 0,
                        "empleado": usuario.empleado,
                        "userEmail": usuario.email,
                        "nombreEjecutivo": usuario.nombre,
                        "timestamp": comunFcty.obtieneFecha()
                    };
    
                    usuario.$destroy();
    
                    var cotizaciones = $firebaseArray(firebase.database().ref("cotizacion/" + uid));
                    cotizaciones.$add(cotizacion).then(function(ref) {
                        var id = ref.key;
                        vida.idCot = id;
                        cotizacion.id = id;
                        cotizaciones.$indexFor(id);
    
                        cotizaciones.$destroy();
    
                        comunFcty.getDescSucursalZona(cotizacion.sucursal, cotizacion.zona).then(function(oDesc) {
                            ga('send', 'event', 'VIDA', 'cotizacion', '', parseInt(vida.primaTotal), {
                                'dimension1': oDesc.zona,
                                'dimension2': oDesc.sucursal,
                                'dimension3': cotizacion.nombreEjecutivo,
                                'dimension4': vida.sexo,
                                'dimension5': "VIDA",
                                'dimension6': "Cotización",
                                'metric1': vida.primaTotal,
                                'metric2': vida.primaTotalAnualizada
                            });
                            
                            resolve(true);
                        });
                            
                    });
    
                });
            });
                
        }

        function guarda(ev) {
            enviaImprimir(ev);
        }

        function continua() {
            var objCotizacion = $firebaseObject(firebase.database().ref("cotizacion/" + vida.userUid + "/" + vida.idCot));
            vida.loading = true;
            objCotizacion.$loaded().then(function(ref) {
                vida.loading = false;
                objCotizacion.uid = vida.userUid;
                comunFcty.complementaDatos(objCotizacion);
            });
        }

        function imprime(ev) {
            $timeout(function() {
                if (vida.urlImpresion.fileURL != undefined) {
                    $window.open(vida.urlImpresion.fileURL);
                }
                else {
                    muestraMensaje("Error", vida.urlImpresion.error.error[0], ev);
                }
            }, 500);
        }

        function enviaImprimir(ev) {
            vida.loading = true;
            var objImpresion = {};
            var objCotizacion = $firebaseObject(firebase.database().ref("cotizacion/" + vida.userUid + "/" + vida.idCot));
            objCotizacion.$loaded().then(function(ref) {
                var prodImpresion = angular.extend({}, {}, vida.producto);
                objImpresion.uid = vida.userUid;
                objImpresion.cotizacion = objCotizacion;
                objImpresion.cotizacion.id = objImpresion.cotizacion.$id;
                objImpresion.producto = prodImpresion;
                objImpresion.producto.id = vida.producto.$id;
                objImpresion.formaPago = vida.valoresFormaPago;
                objImpresion.formaPago.id = vida.valoresFormaPago.$id;
                delete(objImpresion.producto.configuraciones);
                var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                $http.post('https://gnp-mifel-firebase.appspot.com/_ah/api/emiteEndopoints/v1/emiteCotizacion', objImpresion, config)
                    .success(function(data, status, headers, config) {
                        vida.loading = false;
                        vida.urlImpresion = data;
                        muestraMensaje('Éxito', 'Su cotización se ha guardado con éxito', ev);
                        vida.banGuardar = true;
                        vida.banGuardado = true;
                    })
                    .error(function(data, status, header, config) {
                        vida.loading = false;
                    });
            });
        }

        function validaEdad(ev) {
            if (vida.sexo === 'm' && vida.edad < 21) {
                muestraMensaje('Mensaje', 'La edad minima para una cotización en mujer es de 21 años', ev);
                vida.edad = '';
                vida.sexo = '';
            }
        }

        function obtieneCoberturas(vida) {
            var coberturas = [];
            if (vida.adicionales) {
                if (vida.ima) {
                    coberturas.push({
                        "cobertura": "ima"
                    });
                }
                if (vida.ise) {
                    coberturas.push({
                        "cobertura": "ise"
                    });
                }
                if (vida.diba) {
                    coberturas.push({
                        "cobertura": "diba"
                    });
                }
            }
            return coberturas;
        }

        function validaAdicionales(vida) {
            var adicionales = obtieneCoberturas(vida);
            var mensajesError = [];
            for (var i = 0; i < adicionales.length; i++) {
                if (adicionales[i].cobertura === "ima") {
                    if (vida.edad < 11 || vida.edad > 65) {
                        mensajesError.push({
                            mensaje: "No puede contratar la cobertura de Indemnización por Muerte Accidental con " + vida.edad + " años"
                        });
                        vida.ima = false;
                        vida.proteccionConIma = "";
                    }
                }
                if (adicionales[i].cobertura === "ise") {
                    if (vida.edad < 17 || vida.edad > 55) {
                        mensajesError.push({
                            mensaje: "No puede contratar la cobertura Invalidez Sin Espera con " + vida.edad + " años"
                        });
                        vida.ise = false;
                        vida.proteccionConIse = "";
                    }
                }
                if (adicionales[i].cobertura === "diba") {
                    if (vida.edad < 11 || vida.edad > 65) {
                        mensajesError.push({
                            mensaje: "No puede contratar la cobertura Doble Indemnización por Muerte Accidental y Pérdidas de Miembros con " + vida.edad + " años"
                        });
                        vida.diba = false;
                        vida.proteccionConDiba = "";
                    }
                }
            }
            return mensajesError;
        }

        function obtieneSuma(ev) {
            var mensajeError = "";
            if (vida.edad !== undefined) {
                if (vida.ima) {
                    if (vida.edad > 11 && vida.edad <= 65) {
                        vida.proteccionConIma = vida.productos.$getRecord(vida.proteccionCon).suma_asegurada;
                        vida.banDiba = false;
                    }
                    else {
                        vida.proteccionConIma = "";
                        vida.ima = false;
                        mensajeError = "No puede contratar la cobertura de Indemnización por Muerte Accidental con " + vida.edad + " años";
                        muestraMensaje('Mensaje', mensajeError, ev);
                    }
                }
                else {
                    vida.proteccionConIma = "";
                    vida.banDiba = true;
                }
                if (vida.ise) {
                    if (vida.edad > 17 && vida.edad <= 55) {
                        vida.proteccionConIse = vida.productos.$getRecord(vida.proteccionCon).suma_asegurada;
                    }
                    else {
                        vida.proteccionConIse = "";
                        vida.ise = false;
                        mensajeError = "No puede contratar la cobertura Invalidez Sin Espera con " + vida.edad + " años";
                        muestraMensaje('Mensaje', mensajeError, ev);
                    }
                }
                else {
                    vida.proteccionConIse = "";

                }
                if (vida.diba) {
                    if (vida.edad > 11 && vida.edad <= 65) {
                        vida.banIma = false;
                        vida.proteccionConDiba = vida.productos.$getRecord(vida.proteccionCon).suma_asegurada;
                    }
                    else {
                        vida.proteccionConDiba = "";
                        vida.diba = false;
                        mensajeError = "No puede contratar la cobertura Indemnización por Muerte Accidental con Pérdidas Orgánicas con " + vida.edad + " años";
                        muestraMensaje('Mensaje', mensajeError, ev);
                    }
                }
                else {
                    vida.proteccionConDiba = "";
                    vida.banIma = true;
                }
            }

        }

        function activaAdicionales() {
            if (vida.proteccionCon !== "default") {
                vida.adicionales = true;
                vida.banIma = true;
                vida.banIse = true;
                vida.banDiba = true;
                if (vida.ima) {
                    vida.proteccionConIma = vida.productos.$getRecord(vida.proteccionCon).suma_asegurada;
                    vida.banDiba = false;
                }
                if (vida.ise) {
                    vida.proteccionConIse = vida.productos.$getRecord(vida.proteccionCon).suma_asegurada;
                }
                if (vida.diba) {
                    vida.proteccionConDiba = vida.productos.$getRecord(vida.proteccionCon).suma_asegurada;
                    vida.banIma = false;
                }
            }
            else {
                vida.adicionales = false;
                vida.banIma = false;
                vida.banIse = false;
                vida.banDiba = false;
                vida.ima = false;
                vida.ise = false;
                vida.diba = false;
                vida.proteccionConIma = "";
                vida.proteccionConIse = "";
                vida.proteccionConDiba = "";
            }
        }

        function filtroProductos(item) {
            return item.activo;
        }

        function filtroFormasPago(item) {
            return item.texto === 'Anual' || item.texto === 'Mensual';
        }

        function muestraMensaje(titulo, mensaje, ev) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title(titulo)
                .textContent(mensaje)
                .ok('Ok')
                .targetEvent(ev)
            );
        }

    }
})();
