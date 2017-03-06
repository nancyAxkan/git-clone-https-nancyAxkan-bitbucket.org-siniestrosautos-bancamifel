(function () {
    "use strict";
    
    angular
        .module("mifel")
        .service("cotizacionSrvc", cotizacionSrvc);
        
    cotizacionSrvc.$inject = ['$rootScope','$firebaseObject', '$firebaseArray', '$q', 'comunFcty'];
    function cotizacionSrvc($rootScope, $firebaseObject, $firebaseArray, $q, comunFcty) {
        var vm = this;
        var preCotizacion = [];
        
        vm.zona = [];
        vm.sucursal = [];
        vm.emision = {};
        vm.cobranza = {};

        vm.getCotizaciones = getCotizaciones;
        vm.getEmision = getEmision;
        vm.getCobranza = getCobranza;
        vm.setUbicacion = setUbicacion;
        vm.setReferencia = setReferencia;
        vm.setEmision = setEmision;
        vm.setCobranza = setCobranza;
        vm.setStatus = setStatus;
        vm.getZona = getZona;
        vm.getSucursal = getSucursal;
        vm.getUsuario = getUsuario;
        vm.getCoberturasAdicionales = getCoberturasAdicionales;
        vm.getDetalleProducto = getDetalleProducto;
        vm.onWatch = onWatch;
        vm.filtrar = filtrar;

        $rootScope.$on("logout", function(event, args) {
            vm.cotizaciones = [];
            vm.zona.$destroy();
            vm.sucursal.$destroy();
            vm.usuario.$destroy();
            preCotizacion.$destroy();
            if (angular.isFunction(vm.emision.$destroy)) { vm.emision.$destroy(); }
            if (angular.isFunction(vm.cotizaciones.$destroy)) { vm.cotizaciones.$destroy(); }
            if (vm.cobranza) { 
                if (angular.isFunction(vm.cobranza.$destroy)) { vm.cobranza.$destroy(); }
            }
        });
        
        function getDetalleProducto(sPid) {
            return $q(function(resolve, reject) {
                var oProducto = $firebaseObject(firebase.database().ref("producto/" + sPid));
                
                oProducto.$loaded(function() {
                    resolve({
                        descripcion: oProducto.descripcion,
                        suma_asegurada: oProducto.suma_asegurada,
                        invalidez: (oProducto.tipo == "AP") ? (oProducto.invalidez) : (0),
                        muerte_acc: (oProducto.tipo == "AP") ? (oProducto.muerte_acc) : (0),
                        perdidas_org: (oProducto.tipo == "AP") ? (oProducto.perdidas_org) : (0),
                        reembolso_acc: (oProducto.tipo == "AP") ? (oProducto.reembolso_acc) : (0),
                        reembolso_fun: (oProducto.tipo == "AP") ? (oProducto.reembolso_fun) : (0)
                    });
                    
                    oProducto.$destroy();
                }, function(error) {
                    reject(error);
                });
            });
        }
        
        function getCoberturasAdicionales(oCotizacion) {
            var aCoberturas = [];
            
            angular.forEach(oCotizacion.coberturas.adicionales, function(oCobertura) {
                var sDescripcion = "";
                var dMonto = 0;
                
                if (oCobertura.cobertura == "ima") {
                    sDescripcion = "Indemnización por Muerte Accidental (MXN)";
                    dMonto = oCotizacion.primaIMA;
                }
                
                if (oCobertura.cobertura == "ise") {
                    sDescripcion = "Invalidez Sin Espera (MXN)";
                    dMonto = oCotizacion.primaISE;
                }
                
                if (oCobertura.cobertura == "diba") {
                    sDescripcion = "Indemnización por Muerte Accidental con Pérdidas Orgánicas (MXN)";
                    dMonto = oCotizacion.primaDIBA;
                }
                
                aCoberturas.push({ descripcion: sDescripcion, monto: dMonto });
            });
            
            return aCoberturas;
        }
        
        function getEmision(sUid, sCid) {
            vm.emision = $firebaseObject(firebase.database().ref('emision/'+sUid+'/'+sCid));
            return vm.emision;
        }

        function getCobranza(sUid, sCid) {
            vm.cobranza = $firebaseObject(firebase.database().ref('emision_cobranza/'+sCid));
            return vm.cobranza;
        }        

        function setEmision(oData) {
            vm.plan = oData.datosPlan;
            vm.solicitante = oData.datosSolicitante;
            vm.laborales = oData.datosLaborales;
            vm.domicilio = oData.datosDomicilio;
            vm.contratante = oData.datosContratante;
            vm.beneficiario = oData.datosBeneficiarios;
            vm.consentimiento = oData.datosConsentimiento;
        }

        function setCobranza(oData) {
            vm.cobranza = oData.datosCobranza;
        }
        
        function setStatus(sReferencia, iStatus, sObservacion) {
            var statusDate = comunFcty.obtieneFecha();
            return firebase.database().ref(sReferencia).update({ "status" : iStatus, "statusDate" : statusDate, "observacion" : sObservacion });
        }

        function getZona() {
            vm.zona = $firebaseObject(firebase.database().ref('zona'));
            return vm.zona;
        }

        function getSucursal() {
            vm.sucursal = $firebaseObject(firebase.database().ref('sucursal'));
            return vm.sucursal;
        }

        function getUsuario(sUid) {
            vm.usuario = $firebaseObject(firebase.database().ref('usuario/'+sUid));
            return vm.usuario;
        }

        function getCotizaciones(sUid, iNivel){
            return $q.all([
                getUsuario(sUid).$loaded(),
                getZona().$loaded(),
                getSucursal().$loaded()
            ]).then(function() {
                if(vm.usuario.nivel == 3) {
                    return getCotizacionesByNivel_3(vm.usuario);
                }
                if(vm.usuario.nivel == 2) {
                    return getCotizacionesByNivel_2(vm.usuario);
                }
                if(vm.usuario.nivel == 1) {
                    return getCotizacionesByNivel_1(vm.usuario);
                }
                if(vm.usuario.nivel == 0) {
                    return getCotizacionesByNivel_0(vm.usuario);
                }
            });
        }

        function getCotizacionesByNivel_0(oUser) {
            vm.cotizaciones = [];
            preCotizacion = $firebaseArray(firebase.database().ref('cotizacion'));
            return preCotizacion.$loaded(function(data){
                angular.forEach(data, function(value, key) {
                    var $id = value.$id;
                    Object.keys(value).map(function(key, index) {
                        if(key != "$id" && key != "$priority") {
                            value[key].$user = $id;
                            value[key].$id = key;
                            setUbicacionAdmin(value[key]);
                            vm.cotizaciones.push(value[key]);
                        }
                    });
                });
                //getUbicacion();
                vm.onWatch(preCotizacion, oUser);
            });             
        }

        function getCotizacionesByNivel_1(oUser) {
            vm.cotizaciones = [];
            preCotizacion = $firebaseArray(firebase.database().ref('cotizacion'));
            return preCotizacion.$loaded(function(data){
                vm.zona.$loaded(function(){
                    vm.sucursal.$loaded(function(){
                        angular.forEach(data, function(value, key) {
                            var $id = value.$id;
                            Object.keys(value).map(function(key, index) {
                                if((key != "$id" && key != "$priority") && value[key].status != 3 && value[key].status != 5) {
                                    value[key].$user = $id;
                                    value[key].$id = key;
                                    setUbicacion(value[key]);
                                    vm.cotizaciones.push(value[key]);
                                }
                            });
                        });
                        //getUbicacion();
                        vm.onWatch(preCotizacion, oUser);
                    })
                });
            });
        }

        function getCotizacionesByNivel_2(oUser) {
            vm.cotizaciones = [];
            vm.zId = oUser.zId;
            preCotizacion = $firebaseArray(firebase.database().ref('cotizacion'));
            return preCotizacion.$loaded(function(data){
                vm.zona.$loaded(function(){
                    vm.sucursal.$loaded(function(){
                        angular.forEach(data, function(value, key) {
                            var $id = value.$id;
                            Object.keys(value).map(function(key, index) {
                                if((key != "$id" && key != "$priority") && value[key].status <= 2 && value[key].zona == vm.zId) {
                                    value[key].$user = $id;
                                    value[key].$id = key;
                                    setUbicacion(value[key]);
                                    vm.cotizaciones.push(value[key]);
                                }
                            });
                        });
                        //getUbicacion();
                        vm.onWatch(preCotizacion, oUser);
                    })
                });
            });
        }

        function getCotizacionesByNivel_3(oUser) {
            vm.cotizaciones = [];
            vm.cotizaciones = $firebaseArray(firebase.database().ref('cotizacion/'+oUser.$id).orderByChild("status").startAt(0).endAt(2));
            return vm.zona.$loaded(function(){
                vm.sucursal.$loaded(function(){
                    vm.cotizaciones.$loaded(function(data){
                        angular.forEach(data, function(value, key) {
                            value.$user = vm.usuario.$id;
                            setUbicacion(value);
                        });
                        //getUbicacion();
                    });
                })
            });
        }

        function getUbicacion() {
            vm.cotizaciones.forEach(function(cotizacion) {
                cotizacion.operacion = cotizacion.status === 0? "Cotizacion" : "Emision";
                cotizacion.descripcionZona = vm.zona[cotizacion.zona].descripcion;
                cotizacion.descripcionSucursal = vm.sucursal[cotizacion.sucursal].descripcion;
            });
        }

        function setUbicacionAdmin(oCotizacion) {
            oCotizacion.operacion = oCotizacion.status === 0? "Cotización" : 
                                        oCotizacion.status === 1? "Emisión Mifel" :
                                            oCotizacion.status === 2? "Emisión GNP" :
                                                oCotizacion.status === 3? "Caducada" :
                                                    oCotizacion.status === 4? "Pendiente" : "No Emitida";

            oCotizacion.descripcionZona = vm.zona[oCotizacion.zona].descripcion;
            oCotizacion.descripcionSucursal = vm.sucursal[oCotizacion.sucursal].descripcion;
        }
        
        function setUbicacion(oCotizacion) {
            oCotizacion.operacion = oCotizacion.status === 0? "Cotización" : "Emisión";
            oCotizacion.descripcionZona = vm.zona[oCotizacion.zona].descripcion;
            oCotizacion.descripcionSucursal = vm.sucursal[oCotizacion.sucursal].descripcion;
        }

        function setReferencia(oCotizacion, sUser, sId) {
            oCotizacion.$user = sUser;
            oCotizacion.$id = sId;
        }

        function onWatch(oAngFire, oUser) {
            oAngFire.$watch(function(data) {
                $rootScope.$broadcast("eventFired");
            });
        }

        function filtrar(oFiltros) {
            return  new jinqJs()
                .from(vm.cotizaciones)       
                .where(function(row) {
                    if(row == null || typeof row != "object") {
                        return false;
                    }
                    
                    var validacion = false;

          
                    var f1 = (oFiltros.operacion == "") ? true : 
                                (oFiltros.operacion == 12) ?  (row.status == 1 || row.status == 2) ? true : false :
                                    (row.status == oFiltros.operacion) ? true : false;
                    var f2 = (oFiltros.producto == "") ? true : (row.tipoProducto == oFiltros.producto) ? true : false;
                    var f3 = (oFiltros.fechaInicio == "") ? true : 
                        (oFiltros.operacion == ""  || oFiltros.operacion == 0) ?
                            (row.timestamp >= oFiltros.fechaInicio) ? true : false :
                                (row.statusDate >= oFiltros.fechaInicio) ? true : false;
                    var f4 = (oFiltros.fechaFin == "") ? true : 
                        (oFiltros.operacion == ""  || oFiltros.operacion == 0) ?
                            (row.timestamp <= oFiltros.fechaFin) ? true : false :
                                (row.statusDate <= oFiltros.fechaFin) ? true : false;

                    //var f3 = (oFiltros.fechaInicio == "") ? true : (row.timestamp >= oFiltros.fechaInicio) ? true : false;
                    //var f4 = (oFiltros.fechaFin == "") ? true : (row.timestamp <= oFiltros.fechaFin) ? true : false;

                    if(f1 && f2 && f3 && f4) {
                        validacion = true;
                    }
                    
                    return (validacion); 
                })
                .select();
        }

    }
})();