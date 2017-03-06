(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("misCotizacionesCtrl", misCotizacionesCtrl);
    
    misCotizacionesCtrl.$inject = ["cotizacionSrvc", "observacionesSrvc", "csvSrvc", "$firebaseArray", "$firebaseObject", "$scope", "$mdToast", "$q", "Auth", "comunFcty"];
    function misCotizacionesCtrl(cotizacionSrvc, observacionesSrvc, csvSrvc, $firebaseArray, $firebaseObject, $scope, $mdToast, $q, Auth, comunFcty) {
        var mc = this;
        mc.loading = true;
        mc.online = $scope.online;

        mc.minDate = getMinDate();
        mc.maxDate = new Date();
        mc.operacion = "";
        mc.producto  = "";
        mc.detalle = false;
        mc.emision = {};
        mc.cobranza = {};
        mc.cotizaciones = [];
        mc.opciones = [];
        mc.admin = false;

        mc.getDetalle = getDetalle;
        mc.getFormaPago = getFormaPago;
        mc.getIcono = getIcono;
        mc.setAdmin = setAdmin;
        mc.setOpciones = setOpciones;
        mc.filtrar = filtrar;
        mc.limpiarFiltro = limpiarFiltro;
        mc.toast = toast;
        mc.cancelar = cancelar;
        mc.pendiente = pendiente;
        mc.emitida = emitida;
        mc.comprar = comprar;
        mc.error = error;
        mc.reload = reload;
        mc.exportar = exportar;
        mc.getGenero = getGenero;
        mc.formatFecha = formatFecha;

        $scope.$watch('online', function(onlineStatus) { 
            mc.online = onlineStatus;
        });

        $scope.$on("$destroy", function() {
            mc.cotizaciones = [];
            mc.plan = [];
            mc.solicitante =  [];
            mc.laborales = [];
            mc.domicilio = [];
            mc.contratante = [];
            mc.beneficiario = [];
            mc.consentimiento = [];
            mc.contingente = [];
            mc.salud = [];
            mc.nexos = [];
            
            destroyCobranza();
        });

        $scope.$on("eventFired", function() {
            mc.toast();
        });
        
        function destroyCobranza() {
            if (mc.cobranza) { 
                if (angular.isFunction(mc.cobranza.$destroy)) { mc.cobranza.$destroy(); }
            }
        }

        function getIcono(iStatus) {
            var icono = "";
            switch(iStatus) {
                case 0: icono = "assignment_ind";       break;
                case 1: icono = "assignment";           break;
                case 2: icono = (mc.admin == true)? "assignment_turned_in": "assignment"; break;
                case 3: icono = "event_busy";           break;
                case 4: icono = "assignment_late";      break;
                case 5: icono = "remove_circle";        break;
            }
            return icono;
        }
        
        function getGenero(sSexo) {
            return (sSexo == "h")?"Masculino":"Femenino";
        }

        function reload() {
            mc.loading = true;
            mc.cotizaciones = [];
            cotizacionSrvc.getCotizaciones(Auth.$getAuth().uid).then(function() {
                mc.cotizaciones = cotizacionSrvc.cotizaciones;
                mc.setAdmin();
                mc.setOpciones();
                mc.loading = false;
                mc.filtrar();
            });
        }
        
        function setAdmin() {
            mc.admin = cotizacionSrvc.usuario.nivel == 0 ? true : false;
        }
        
        function setOpciones() {
            if(cotizacionSrvc.usuario.nivel == 0) {
                mc.opciones =  [{valor : 0, descripcion : "Cotización"},{valor : 1, descripcion : "Emisión Mifel"},{valor : 2, descripcion : "Emisión GNP"},{valor : 3, descripcion : "Caducada"},{valor : 4, descripcion : "Pendiente"},{valor : 5, descripcion : "No Emitida"}];
            }
            if(cotizacionSrvc.usuario.nivel == 1) {
                mc.opciones =  [{valor : 0, descripcion : "Cotización"},{valor : 12, descripcion : "Emisión"},{valor : 4, descripcion : "Pendiente"}];
            }
            if(cotizacionSrvc.usuario.nivel >= 2) {
                mc.opciones =  [{valor : 0, descripcion : "Cotización"},{valor : 12, descripcion : "Emisión"}];
            }
        }

        function cancelar() {
            if(mc.detalle && (mc.detalle.status == 1 || mc.detalle.status == 4)) {
                observacionesSrvc.mostrarDialogo().then(function(sObservacion) {
                    var sReferencia = "cotizacion/"+mc.detalle.$user+"/"+mc.detalle.$id;
                    cotizacionSrvc.setStatus(sReferencia, 5, sObservacion).then(function successCallback(response){
                        mc.detalle.status = 5;
                        mc.detalle.observacion = sObservacion;
                        mc.detalle.operacion = "No Emitida";
                    },function errorCallback(error){
                        mc.error();
                    });
                });
            }
        }

        function pendiente() {
            if(mc.detalle && mc.detalle.status == 1) {
                observacionesSrvc.mostrarDialogo().then(function(sObservacion) {
                    var sReferencia = "cotizacion/"+mc.detalle.$user+"/"+mc.detalle.$id;
                    cotizacionSrvc.setStatus(sReferencia, 4, sObservacion).then(function successCallback(response){
                        mc.detalle.status = 4;
                        mc.detalle.observacion = sObservacion;
                    },function errorCallback(error){
                        mc.error();
                    });
                });
            }
        }

        function emitida() {
            if(mc.detalle && (mc.detalle.status == 1 || mc.detalle.status == 4)) {
                var sReferencia = "cotizacion/"+mc.detalle.$user+"/"+mc.detalle.$id;
                cotizacionSrvc.setStatus(sReferencia, 2, "emitida").then(function successCallback(response){
                    mc.detalle.status = 2;
                },function errorCallback(error){
                    mc.error();
                });
            }
        }
        
        function error() {
            observacionesSrvc.muestraAlerta("Error al actualizar la cotizacion", "Reporte esta cotizacion con su administrador: " + mc.detalle.$id);
        }
        
        function comprar() {
            var objCotizacion = $firebaseObject(firebase.database().ref("cotizacion/"+mc.detalle.$user+"/"+mc.detalle.$id));
            objCotizacion.$loaded().then(function(ref) {
                objCotizacion.uid = mc.detalle.$user;
                comunFcty.complementaDatos(objCotizacion);
            });            
        }
        
        function getDetalle(cotizacion) {
            return $q(function(resolve, reject) {
                mc.activeItem = cotizacion;
                mc.detalle = cotizacion;
                if (mc.cobranza) { 
                    if (angular.isFunction(mc.cobranza.$destroy)) { mc.cobranza.$destroy(); }
                }
                
                var oFormasPago;
                    
                if (cotizacion.tipoProducto == "VIDA") {
                    oFormasPago = comunFcty.getFormasPagoVida();
                }
                
                if (cotizacion.tipoProducto == "AP") {
                    oFormasPago = comunFcty.getFormasPagoAp();
                }
                
                oFormasPago.$loaded().then(function() {
                    mc.detalle.formaPagoDesc = oFormasPago.$getRecord(cotizacion.formaPago).texto;
                    cotizacion.formaPagoDesc = oFormasPago.$getRecord(cotizacion.formaPago).texto;
                    oFormasPago.$destroy();
                });
                
                if (mc.detalle.coberturas && mc.detalle.coberturas.adicionales) {
                    mc.detalle.coberturasAdicionales = cotizacionSrvc.getCoberturasAdicionales(mc.detalle);
                }
                
                var oProducto = cotizacionSrvc.getDetalleProducto(mc.detalle.producto);
                oProducto.then(function(oDetalleProducto) {
                    mc.detalle.detalleProducto = oDetalleProducto;
                });
                
                if(mc.detalle.status > 0) {
                    
                    var oEmision = cotizacionSrvc.getEmision(cotizacion.$user, cotizacion.$id)
                    oEmision.$loaded().then(function() {
                        mc.plan = oEmision.datosPlan;
                        mc.solicitante =  oEmision.datosSolicitante;
                        mc.laborales = oEmision.datosLaborales;
                        mc.domicilio = oEmision.datosDomicilio;
                        mc.contratante =  oEmision.datosContratante;
                        mc.beneficiario =  oEmision.datosBeneficiarios;
                        mc.consentimiento =  oEmision.datosConsentimiento;
                        mc.contingente =  oEmision.datosBeneficiariosContingentes;
                        mc.salud =  oEmision.datosSaludSolicitante;
                        mc.nexos =  oEmision.datosNexos;
                        
                        //Exportar
                        cotizacion.emision = angular.extend({}, {}, oEmision);
                        oEmision.$destroy();
                    }).catch(function(error) {
                        console.log(error);
                    });
                    var oCobranza = cotizacionSrvc.getCobranza(cotizacion.$user, cotizacion.$id)
                    oCobranza.$loaded().then(function(data) {
                        mc.cobranza = oCobranza.datosCobranza;
                        //Exportar
                        cotizacion.emision_cobranza = angular.extend({}, {}, oCobranza);
                        oCobranza.$destroy();
                    }).catch(function(error) {
                        mc.cobranza = false;
                    });
                    
                    $q.all([
                        oEmision.$loaded(),
                        oCobranza.$loaded(),
                        oFormasPago.$loaded(),
                        oProducto
                    ]).then(function() {
                        resolve(true);
                    }, function(error) {
                        reject(error);
                    });
                }
            });
        }
        
        function getFormaPago(cotizacion) {
            return $q(function(resolve, reject) {
                var oFormasPago;
                    
                if (cotizacion.tipoProducto == "VIDA") {
                    oFormasPago = comunFcty.getFormasPagoVida();
                }
                
                if (cotizacion.tipoProducto == "AP") {
                    oFormasPago = comunFcty.getFormasPagoAp();
                }
                
                oFormasPago.$loaded().then(function() {
                    cotizacion.formaPagoDesc = oFormasPago.$getRecord(cotizacion.formaPago).texto;
                    oFormasPago.$destroy();
                    resolve(true);
                }).catch(function(error) {
                    reject(error);
                });
                
            });
        }
        
        function getMinDate() {
            var hoy = new Date();
            return new Date(hoy.getFullYear()-1,hoy.getMonth(),hoy.getDate());
        }
        
        function limpiarFiltro() {
            mc.filtroDescripcion = "";
            mc.filtroZona = "";
            filtrar();
        }
        
        function filtrar() {
            var inicio = (mc.fechaInicio != null)? mc.fechaInicio.toJSON().split("T")[0].split("-").join("") : "";
            var final = (mc.fechaFin != null)? mc.fechaFin.toJSON().split("T")[0].split("-").join("") : "";
            
            mc.cotizaciones = cotizacionSrvc.filtrar({
                fechaInicio : inicio,
                fechaFin : final,
                operacion : mc.operacion,
                producto : mc.producto
            });
        }

        function exportar() {
            mc.loading = true;
            var aEmisiones = [];
            var cotizacionCopy = angular.extend({}, {}, mc.cotizaciones);
            angular.forEach(cotizacionCopy, function(oCot, key) {
                if(oCot.status > 0) {
                    aEmisiones.push(mc.getDetalle(oCot));
                } else {
                    aEmisiones.push(mc.getFormaPago(oCot));
                }
            });

            $q.all(aEmisiones).then(function() {
                var descarga = csvSrvc.exportar(cotizacionCopy);
                descarga.then(function(resultado) {
                        mc.loading = false;
                        //observacionesSrvc.muestraAlerta("", resultado);
                    }).catch(function(error) {
                        mc.loading = false;
                        observacionesSrvc.muestraAlerta("Error", error);
                });
            });
        }

        function toast() {
            $mdToast.hide();
            $mdToast.show({
                template: '<md-toast>{{toast.content}} \
                           <md-button ng-click="toast.reload()"><md-icon class="material-icons" style="color:aquamarine">autorenew</md-icon></md-button> \
                           <md-button ng-click="toast.close()"><md-icon class="material-icons" style="color:#FFF">close</md-icon></md-button> \
                           </md-toast>',
                hideDelay : 2000,
                parent : document.querySelectorAll('#toaster'),
                position : 'top left',
                controller: [function () {
                    this.content = "Nuevos cambios realizados!!!";
                    this.close = function() {
                        $mdToast.hide();
                        console.log(mc.detalle)
                    }
                    this.reload = function() {
                        $mdToast.hide();
                        mc.reload();
                    }
                }],
                controllerAs: 'toast'
            });
        }
        
        function formatFecha (_fecha) {
            if(_fecha != undefined)
                return _fecha.substr(6,2) +"/"+ _fecha.substr(4,2) +"/"+ _fecha.substr(0,4);
            else
                return "";
        }
        
        mc.reload();
    }
})();