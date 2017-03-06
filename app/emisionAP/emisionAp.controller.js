(function() {
    "use strict";

    angular
        .module("mifel")
        .controller("emisionApCtrl", emisionApCtrl);

    emisionApCtrl.$inject = ["Auth", "comunFcty", "emisionApSrvc", "$q", "$scope", "$mdDialog", "$location", "observacionesSrvc", "$window", "$interval", "$timeout"];

    function emisionApCtrl(Auth, comunFcty, emisionApSrvc, $q, $scope, $mdDialog, $location, observacionesSrvc, $window, $interval, $timeout) {
        var ec = this;
        ec.online = $scope.online;
        ec.loading = true;
        ec.loadingEmision = false;
        ec.cotizacion = comunFcty.getObjetoCotizacion();
        ec.emision = {};
        ec.emision.uid = ec.cotizacion.uid;
        ec.emision.userEmail = Auth.$getAuth().email;
        ec.emision.idCot = ec.cotizacion.$id;
        ec.emision.timeStamp = comunFcty.obtieneFecha();
        ec.emision.tipoProducto = ec.cotizacion.tipoProducto;

        ec.tarifaActualizada = {};
        ec.emision.datosBeneficiarios = [];
        ec.emision.datosSolicitante = {
            apPat: ec.cotizacion.apPat,
            apMat: ec.cotizacion.apMat,
            nombre: ec.cotizacion.nombre,
            genero: ec.cotizacion.genero,
            edad: ec.cotizacion.edad,
            rfc: "",
            curp: ""
        };
        ec.datosBeneficiarios = {
            apPat: "",
            apMat: "",
            nombre: "",
            parentesco: "",
            porcentaje: ""
        }
        ec.mailEnvioPop = "";
        ec.porcentajeInicial = 100;
        ec.glow = false;
        ec.agnoValidoTarjeta = new Date();
        ec.porcentajeMinimo = 1;
        ec.eliminarContratante = eliminarContratante;
        ec.asignarContratante = asignarContratante;
        ec.completaDatosPlan = completaDatosPlan;
        ec.agregaBeneficiario = agregaBeneficiario;
        ec.cierraBeneficiario = cierraBeneficiario;
        ec.borrarBeneficiario = borrarBeneficiario;
        ec.cancelarCotizacion = cancelarCotizacion;
        ec.popEnvioPoliza = popEnvioPoliza;
        ec.operacionRealizada = operacionRealizada;
        ec.avisoCambioTarifa = avisoCambioTarifa;
        ec.emitir = emitir;
        ec.cambiaViaPago = cambiaViaPago;
        ec.opcionContratantePago = opcionContratantePago;
        //Variables RFC
        ec.validaEdadRFC = validaEdadRFC;
        ec.showHints = false;
        ec.errorValidaRfc = true;
        
        document.body.scrollTop = 0;
        inicializar();
        
        $scope.$watch('online', function(onlineStatus) { 
            ec.online = onlineStatus;
        });

        function validaEdadRFC(ev) {
            ec.errorValidaRfc = true;
            var RFC = ev.currentTarget.value;

            if(RFC.length >= 10) {
                var nac_anio = parseInt(RFC.substr(4,2));
                var nac_mes = parseInt(RFC.substr(6,2));
                var nac_dia = parseInt(RFC.substr(8,2));

                //Validamos año
                var anio = parseInt((new Date().getFullYear() - ec.emision.datosSolicitante.edad).toString().substr(2,2));
                if(nac_anio == anio) {

                    //Validamos mes
                    var mes = new Date().getMonth() + 1;
                    if(nac_mes <= mes) {

                        //Validamos dia
                        var dia = new Date().getUTCDate();
                        if(nac_dia <= dia) {
                            ec.errorValidaRfc = false;
                        }
                    }
                
                } else {
                    //Validamos mes
                    var mes = new Date().getMonth() + 1;
                    if(nac_mes > mes) {

                        anio--;
                        if(nac_anio == anio) {
                            ec.errorValidaRfc = false;
                        }

                    } else if(nac_mes == mes) {
                        var dia = new Date().getUTCDate();
                        if(nac_dia > dia) {
                            
                            anio--;
                            if(nac_anio == anio) {
                                ec.errorValidaRfc = false;
                            }

                        }
                    }
                }
                
                ec.showHints = ec.errorValidaRfc;
            }

        }

        function cambiaViaPago() {
            if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.tarjetaObligatoria !== 'undefined') { delete(ec.emision.datosCobranza.tarjetaObligatoria); }
            if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.tarjetaOpcional !== 'undefined') { delete(ec.emision.datosCobranza.tarjetaOpcional); }
            if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.datosClabe !== 'undefined') { delete(ec.emision.datosCobranza.datosClabe); }
            if (ec.emision.datosCobranza.viaPago === "pagoRef") {
                if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.titular !== 'undefined') { delete(ec.emision.datosCobranza.titular); }
                if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.nombreTitular !== 'undefined') { delete(ec.emision.datosCobranza.nombreTitular); }
                if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.parentescoTitular !== 'undefined') { delete(ec.emision.datosCobranza.parentescoTitular); }
            }
        };

        function opcionContratantePago() {
            if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.nombreTitular !== 'undefined') { delete(ec.emision.datosCobranza.nombreTitular); }
            if (typeof ec.emision.datosCobranza !== 'undefined' && typeof ec.emision.datosCobranza.parentescoTitular !== 'undefined') { delete(ec.emision.datosCobranza.parentescoTitular); }
        };

        function asignarContratante() {
            if (ec.igualSol == 1) {
                if (typeof ec.emision !== 'undefined') {
                    ec.emision.datosContratante = {};
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.mifel !== 'undefined') { ec.emision.datosContratante.apPat = ec.emision.datosSolicitante.mifel; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.apPat !== 'undefined') { ec.emision.datosContratante.apPat = ec.emision.datosSolicitante.apPat; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.apMat !== 'undefined') { ec.emision.datosContratante.apMat = ec.emision.datosSolicitante.apMat; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.nombre !== 'undefined') { ec.emision.datosContratante.nombre = ec.emision.datosSolicitante.nombre; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.genero !== 'undefined') { ec.emision.datosContratante.genero = ec.emision.datosSolicitante.genero; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.rfc !== 'undefined') { ec.emision.datosContratante.rfc = ec.emision.datosSolicitante.rfc; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.curp !== 'undefined') { ec.emision.datosContratante.curp = ec.emision.datosSolicitante.curp; }
                    if (typeof ec.emision.datosSolicitante !== 'undefined' && typeof ec.emision.datosSolicitante.profesion !== 'undefined') { ec.emision.datosContratante.profesion = ec.emision.datosSolicitante.profesion; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.noInterior !== 'undefined') { ec.emision.datosContratante.noInterior = ec.emision.datosDomicilio.noInterior; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.noExterior !== 'undefined') { ec.emision.datosContratante.noExterior = ec.emision.datosDomicilio.noExterior; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.calle !== 'undefined') { ec.emision.datosContratante.calle = ec.emision.datosDomicilio.calle; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.colonia !== 'undefined') { ec.emision.datosContratante.colonia = ec.emision.datosDomicilio.colonia; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.ciudad !== 'undefined') { ec.emision.datosContratante.ciudad = ec.emision.datosDomicilio.ciudad; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.municipio !== 'undefined') { ec.emision.datosContratante.municipio = ec.emision.datosDomicilio.municipio; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.estado !== 'undefined') { ec.emision.datosContratante.estado = ec.emision.datosDomicilio.estado; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.cp !== 'undefined') { ec.emision.datosContratante.cp = ec.emision.datosDomicilio.cp; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.telefono !== 'undefined') { ec.emision.datosContratante.telefono = ec.emision.datosDomicilio.telefono; }
                    if (typeof ec.emision.datosDomicilio !== 'undefined' && typeof ec.emision.datosDomicilio.email !== 'undefined') { ec.emision.datosContratante.email = ec.emision.datosDomicilio.email; }
                }
            }
        }

        function eliminarContratante() {
            if (ec.igualSol == 0) {
                ec.emision.datosContratante = {};
            }
        };

        function completaDatosPlan() {
            ec.emision.formaPagoAp = ec.emision.formaPagoAp.$getRecord(parseInt(ec.cotizacion.formaPago));
            ec.emision.productoAp = ec.emision.productoAp.$getRecord(ec.cotizacion.producto);
            ec.tarifaActualizada = emisionApSrvc.actualizaTarifa(
                ec.emision.productoAp,
                ec.cotizacion.edad,
                ec.cotizacion.genero,
                ec.emision.formaPagoAp,
                ec.emision.datosEconomicos
            );
            ec.actualizo = ec.tarifaActualizada.error;
            if (!ec.tarifaActualizada.error) {
                ec.emision.datosPlan = {
                    plan: ec.emision.productoAp.descripcion,
                    sumaAseg: ec.emision.productoAp.suma_asegurada,
                    deducible: ec.emision.productoAp.deducible,
                    formaPago: ec.emision.formaPagoAp.texto,
                    coberturasBasicas: {
                        muertAcc: ec.emision.productoAp.muerte_acc,
                        reGMMFun: ec.emision.productoAp.reembolso_fun,
                        invalidez: ec.emision.productoAp.invalidez,
                        perdidas: ec.emision.productoAp.perdidas_org,
                        accid: ec.emision.productoAp.reembolso_acc
                    },
                    tarifa: {
                        primaTotal: ec.tarifaActualizada.primaTotal,
                        primaTotalAnualizada: ec.tarifaActualizada.primaTotalAnualizada,
                        primaNeta: ec.tarifaActualizada.primaNeta,
                        periodos: ec.tarifaActualizada.periodos,
                        ahorro: ec.tarifaActualizada.ahorro,
                        porcFraccionado: ec.tarifaActualizada.porcFraccionado,
                        iva: ec.tarifaActualizada.iva,
                        derechoPoliza: ec.tarifaActualizada.derechoPoliza

                    }
                }

                $interval(function() {
                    ec.glow = ec.glow ? false : true;
                }, 1500);

                var promiseActualizaTarifa = [
                    emisionApSrvc.actualizaCotizacion(ec.cotizacion, ec.tarifaActualizada)
                ];
                $q.all(promiseActualizaTarifa).then(function(respuesta) {
                    if (typeof respuesta !== 'undefined' && typeof respuesta[0] !== 'undefined') {
                        ec.avisoCambioTarifa()
                    }
                });
            }
        };

        function avisoCambioTarifa() {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(true)
                .title('Aviso')
                .textContent('La tarifa cotizada anteriormente fue actualizada.')
                .ariaLabel('Cambio en la tarifa de loa cotización.')
                .ok('Entendido')
            );
        };

        function agregaBeneficiario() {
            var objeto = {};

            ec.porcentajeMinimo = 1;

            if (ec.porcentajeInicial > 0 || ec.emision.datosBeneficiarios.length === 10) {
                objeto.apPat = ec.datosBeneficiarios.apPat;
                objeto.apMat = ec.datosBeneficiarios.apMat;
                objeto.nombre = ec.datosBeneficiarios.nombre;
                objeto.parentesco = ec.datosBeneficiarios.parentesco;
                objeto.porcentaje = ec.datosBeneficiarios.porcentaje;

                ec.porcentajeInicial = ec.porcentajeInicial - ec.datosBeneficiarios.porcentaje;
                if (ec.porcentajeInicial === 0) {
                    ec.porcentajeMinimo = 0;
                }
                ec.emision.datosBeneficiarios.push(objeto);
            }
            ec.cierraBeneficiario();
        };

        function cierraBeneficiario() {
            ec.datosBeneficiarios.apPat = "";
            ec.datosBeneficiarios.apMat = "";
            ec.datosBeneficiarios.nombre = "";
            ec.datosBeneficiarios.parentesco = "";
            ec.datosBeneficiarios.porcentaje = "";

            ec.secAgrBen = false;
        };

        function borrarBeneficiario(indice) {
            var i = ec.emision.datosBeneficiarios.indexOf(indice);
            ec.porcentajeMinimo = 1;
            ec.porcentajeInicial = ec.porcentajeInicial + indice.porcentaje;
            ec.emision.datosBeneficiarios.splice(i, 1);
        };

        function emitir() {
            ec.asignarContratante();
            ec.loadingEmision = true;
            var fechaEmision = new Date();
            delete(ec.emision.datosEconomicos);
            delete(ec.emision.formaPagoAp);
            delete(ec.emision.productoAp);
            ec.emision.mailEnvio = ec.mailEnvioPop;
            ec.emision.fechaInicioVigencia = fechaEmision.getDate() + "/" + (fechaEmision.getMonth() + 1) + "/" + fechaEmision.getFullYear();
            ec.emision.fechaFinVigencia = fechaEmision.getDate() + "/" + (fechaEmision.getMonth() + 1) + "/" + (fechaEmision.getFullYear() + 1);
            if (typeof ec.emision.datosSolicitante.fechaNac === 'object') {
                ec.emision.datosSolicitante.fechaNac = ec.emision.datosSolicitante.fechaNac.getDate() + "/" + (ec.emision.datosSolicitante.fechaNac.getMonth() + 1) + "/" + ec.emision.datosSolicitante.fechaNac.getFullYear();
            }
            var promisesEmision = [
                    emisionApSrvc.setEmision(ec.emision),
                    emisionApSrvc.setCobranza(ec.emision)
                ],
                promiseBackEnd = [
                    emisionApSrvc.setReferencia(ec.emision, ec.cotizacion)
                ];

            $q.all(promiseBackEnd).then(function(respuesta) {
                var dataPoliza = respuesta[0];
                $q.all(promisesEmision).then(function() {
                    ec.operacionRealizada(dataPoliza);
                });
            }, function(error) {
                ec.loadingEmision = false;
                var parentEl = angular.element(document.body);
                $mdDialog.show({
                    parent: parentEl,
                    template: '  <div layout="column" flex flex-xs layout-padding>' +
                        '   <md-toolbar class="md-warn"><div class="md-toolbar-tools"><span>Error en el servicio</span></div></md-toolbar>' +
                        '  </div>' +
                        '  <div layout="column" flex flex-xs layout-padding>' +
                        '   <p>Por favor intentelo más tarde.</p>' +
                        '  </div>' +
                        '  <div layout="column" layout-padding>' +
                        '  <md-divider> </md-divider>' +
                        '    <md-button ng-click="cerrar()" class="md-primary">' +
                        '      Cerrar' +
                        '    </md-button>' +
                        ' </div>',
                    controller: controllerDialogo
                });
                
                controllerDialogo.$inject = ["$scope"];

                function controllerDialogo($scope) {
                    $scope.cerrar = function() {
                        $mdDialog.cancel();
                    }
                }
            });
        };

        function operacionRealizada(objPoliza) {
            var parentEl = angular.element(document.body);
            
            comunFcty.getDescSucursalZona(ec.cotizacion.sucursal, ec.cotizacion.zona).then(function(oDesc) {
                ga('send', 'event', 'AP', 'emision', '', parseInt(ec.emision.datosPlan.tarifa.primaTotal), {
                    'dimension1': oDesc.zona,
                    'dimension2': oDesc.sucursal,
                    'dimension3': ec.cotizacion.nombreEjecutivo,
                    'dimension4': ec.cotizacion.genero,
                    'dimension5': "AP",
                    'dimension6': "Emisión",
                    'metric1': ec.emision.datosPlan.tarifa.primaTotal,
                    'metric2': ec.emision.datosPlan.tarifa.primaNeta
                });
            });
            
                
            
            $mdDialog.show({
                parent: parentEl,
                template:   '<md-dialog aria-label="Emisión exitosa">'+
                            '     <md-toolbar>'+
                            '          <div class="md-toolbar-tools">'+
                            '               <h2>¡Emisión exitosa!</h2>'+
                            '          </div>'+
                            '     </md-toolbar>'+
                            '     <md-dialog-content>'+
                            '          <div class="md-dialog-content">'+
                            '               <p>Descarga o imprime tu póliza número {{poliza}}, en la ventana abierta.</p>'+
                            '          </div>'+
                            '     </md-dialog-content>'+
                            '     <md-dialog-actions layout="row">'+
                            '          <md-button ng-click="continuar()" class="md-primary">Terminar</md-button>'+
                            '     </md-dialog-actions>'+
                            '</md-dialog>',
                locals: {
                    poliza: objPoliza.consecutivo.noPoliza
                },
                controller: dController,
                escapeToClose: false
            });
            
            dController.$inject = ["$scope", "poliza"];
            
            function dController($scope, poliza) {
                $scope.poliza = poliza;
                $scope.continuar = function() {
                    $location.path("/inicio");
                    $mdDialog.cancel();
                }
            }

            $timeout(function() {
                ec.loadingEmision = false;
                $window.open(objPoliza.fileURL);
            }, 2000);
        };

        function popEnvioPoliza() {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                template: '<md-dialog aria-label="Enviar documentación contractual">' +
                    '<form name="popUpEmision">' +
                    '  <div layout="column" flex flex-xs layout-padding>' +
                    '   <p style="color: #ff0000">¡Importante! La suma asegurada acumulada no debe exceder los $500,000 pesos en Protección Accidentes </p>' +
                    '   <p>Por favor ingresar correo electrónico para envío de la documentación contractual de la póliza</p>' +
                    '   <md-divider> </md-divider>' +
                    '  </div>' +
                    '  <div layout="column" flex flex-xs layout-padding>' +
                    '    <md-input-container>' +
                    '       <label>Correo electrónico</label>' +
                    '       <input type="email" ng-model="mail" name="email" md-maxlength="50" ng-pattern="/^.+@.+\..+$/" required>' +
                    '       <div class="md-accent" ng-messages="popUpEmision.email.$error" role="alert">' +
                    '           <div class="md-accent" ng-message="required">Campo requerido.</div>' +
                    '           <div class="md-accent" ng-message="md-maxlength">Campo de 25 carácteres</div>' +
                    '           <div class="md-accent" ng-message="pattern">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>' +
                    '       </div>' +
                    '    </md-input-container>' +
                    '  </div>' +
                    '  <div layout="column" flex flex-xs layout-padding>' +
                    '  <md-dialog-actions>' +
                    '    <md-button ng-click="cancelar()" class="md-primary">' +
                    '      Cancelar' +
                    '    </md-button>' +
                    '    <md-button ng-click="continuar(mail)" ng-disabled="popUpEmision.$invalid" class="md-primary">' +
                    '      Aceptar' +
                    '    </md-button>' +
                    '   </md-dialog-actions>' +
                    ' </div>' +
                    ' </form>' +
                    '</md-dialog>',
                controller: controllerDialogo
            });
            
            controllerDialogo.$inject = ["scope"];

            function controllerDialogo(scope) {
                scope.continuar = function(mail) {
                    ec.mailEnvioPop = mail;
                    ec.emitir();
                    $mdDialog.cancel();
                }
                scope.cancelar = function() {
                    $mdDialog.cancel();
                }
            }
        };

        function cancelarCotizacion() {
            observacionesSrvc.mostrarDialogo().then(function(sObservacion) {
                emisionApSrvc.servicioCancela(ec.cotizacion, sObservacion);
                $location.path('/accidentes-personales');
            });
        };

        function inicializar() {
            var promises = {
                datosEconomicos: comunFcty.getDatosEconomicos().$loaded(),
                formasPagoAp: comunFcty.getFormasPagoAp().$loaded(),
                productosAp: comunFcty.getProductosAp().$loaded()
            };

            $q.all(promises).then(function(respuesta) {
                ec.emision.datosEconomicos = respuesta.datosEconomicos;
                ec.emision.formaPagoAp = respuesta.formasPagoAp;
                ec.emision.productoAp = respuesta.productosAp;
                ec.loading = false;
                ec.completaDatosPlan();
            });
        }
    }
})();
