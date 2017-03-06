(function() {
    "use strict";
    
    angular
        .module('mifel')
        .service('sucursalesSrvc', sucursalesSrvc);
        
    sucursalesSrvc.$inject = ['$firebaseArray', '$firebaseObject', 'logSrvc', "$q"];
    
    function sucursalesSrvc($firebaseArray, $firebaseObject, logSrvc, $q) {
        var vm = this;
        
        vm.sucursales = [];
        vm.addSucursal = addSucursal;
        vm.updateSucursal = updateSucursal;
        vm.deleteSucursal = deleteSucursal;
        vm.filtrar = filtrar;
        vm.getSucursales = getSucursales;
        
        function getSucursales() {
            vm.sucursales = $firebaseArray(firebase.database().ref('sucursal').orderByChild("activo").equalTo(true));
            
            vm.sucursales.$loaded(getZonas);
            
            return vm.sucursales;
        }
        
        function filtrar(sDescripcion, sZid) {
            return new jinqJs()
                .from(vm.sucursales)
                .where(function(sucursal) {
                    var condicion = true;
                    
                    if (sDescripcion != "") {
                        condicion = (sucursal.descripcion.indexOf(sDescripcion) > -1);
                    }
                    
                    if (sZid != "") {
                        condicion = (sucursal.zId == sZid);
                    }
                    
                    if (sDescripcion != "" && sZid != "") {
                        condicion = (sucursal.descripcion.indexOf(sDescripcion) > -1 && sucursal.zId == sZid);
                    }
                    
                    return (condicion);
                })
                .select();
        }
        
        function addSucursal(sDescripcion, sZid) {
            return validarDatos(sDescripcion).then(function() {
                var promise = vm.sucursales.$add({ 'descripcion': sDescripcion, 'zId': sZid, activo: true });
                
                promise.then(function(oRef) {
                    var oSucursal = vm.sucursales.$getRecord(oRef.key);
                
                    assignZona(getZonaObject(oSucursal.zId), oSucursal);
                });
                
                logSrvc.addMovimiento("Catálogo de Sucursales", "NUEVO");
                
                return promise;
            });
        }
        
        function deleteSucursal(sSid) {
            var oSucursal = vm.sucursales.$getRecord(sSid);
            
            oSucursal.activo = false;

            return $q(function(resolve, reject) {
                firebase.database().ref("usuario").orderByChild("activo").equalTo(true).once("value").then(function(oData) {
                    var bExiste = false;
                    
                    angular.forEach(oData.val(), function(oUsuario) {
                        if (oUsuario.sId == sSid) {
                            bExiste = true;
                        }
                    });
                    
                    if (bExiste) {
                        reject(true);
                    } else {
                        logSrvc.addMovimiento("Catálogo de Sucursales", "BORRADO", "sId: " + sSid);
                
                        vm.sucursales.$save(oSucursal).then(function() {
                            resolve(true);
                        });
                    }
                });
                
                
            });
        }
        
        function updateSucursal(sSid, sDescripcion, sZid) {
            var oSucursal = vm.sucursales.$getRecord(sSid);
            delete oSucursal.descripcionZona;
            
            return validarDatos(sDescripcion).then(function() {
                var promise;
                
                oSucursal.descripcion = sDescripcion;
                oSucursal.zId = sZid;
                oSucursal.activo = true;
                
                logSrvc.addMovimiento("Catálogo de Sucursales", "ACTUALIZADO", "sID: " + sSid);
                
                promise = vm.sucursales.$save(oSucursal);
                
                promise.then(function() {
                    assignZona(getZonaObject(oSucursal.zId), oSucursal);
                });
            
                return promise;
            });
        }
        
        function validarDatos(sDescripcion) {
            if (sDescripcion.trim() == "") {
                throw "La descripcion no puede estar vacia.";
            }
            
            return firebase.database().ref('sucursal').orderByChild('descripcion').equalTo(sDescripcion).once('value').then(function(snapshot) {
                if (snapshot.val()) {
                    //throw "Ya existe una sucursal con esa descripcion.";
                } 
            });
        }
        
        function getZonaObject(sZid) {
            var dbRefCat = firebase.database().ref('zona/' + sZid);
            
            return $firebaseObject(dbRefCat);
        }
        
        function assignZona(oZona, oSucursal) {
            oZona.$loaded(function(zona) {
                oSucursal.descripcionZona = zona.descripcion;
                
                oZona.$destroy();
            });
        }
        
        function getZonas() {
            vm.sucursales.forEach(function(sucursal) {
                assignZona(getZonaObject(sucursal.zId), sucursal);
            });
        }
    }
})();