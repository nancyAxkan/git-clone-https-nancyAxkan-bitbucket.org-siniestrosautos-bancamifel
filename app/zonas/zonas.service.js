(function() {
    "use strict";
    
    angular
        .module('mifel')
        .service('zonasSrvc', zonasSrvc);
        
    zonasSrvc.$inject = ['$firebaseArray', 'logSrvc', "$q"];
    
    function zonasSrvc($firebaseArray, logSrvc, $q) {
        var vm = this;
        
        vm.zonas = [];
        vm.addZona = addZona;
        vm.updateZona = updateZona;
        vm.deleteZona = deleteZona;
        vm.filtrar = filtrar;
        vm.getZonas = getZonas;
        
        function getZonas() {
            vm.zonas = $firebaseArray(firebase.database().ref('zona').orderByChild("activo").equalTo(true));
            
            return vm.zonas;
        }
        
        function filtrar(sDescripcion) {
            return new jinqJs()
                .from(vm.zonas)
                .where(function(zona) {
                    return (zona.descripcion.indexOf(sDescripcion) > -1);
                })
                .select();
        }
        
        function addZona(sDescripcion) {
            return validarDatos(sDescripcion).then(function() {
                logSrvc.addMovimiento("Catálogo de Zonas", "NUEVO", "");
                return vm.zonas.$add({ 'descripcion': sDescripcion, 'activo': true });
            });
        }
        
        function deleteZona(sZid) {
            var oZona = vm.zonas.$getRecord(sZid);
            
            oZona.activo = false;
            
            
            
            return $q(function(resolve, reject) {
                firebase.database().ref("sucursal").orderByChild("activo").equalTo(true).once("value").then(function(oData) {
                    var bExiste = false;
                    
                    angular.forEach(oData.val(), function(oSucursal) {
                        if (oSucursal.zId == sZid) {
                            bExiste = true;
                        }
                    });
                    
                    if (bExiste) {
                        reject(true);
                    } else {
                        logSrvc.addMovimiento("Catálogo de Zonas", "BORRADO", "zId: " + sZid);
                
                        vm.zonas.$save(oZona).then(function() {
                            resolve(true);
                        });
                    }
                });
                
                
            });
        }
        
        function updateZona(sZid, sDescripcion) {
            var oZona = vm.zonas.$getRecord(sZid);
            
            return validarDatos(sDescripcion).then(function() {
                oZona.descripcion = sDescripcion;
                oZona.activo = true;
            
                logSrvc.addMovimiento("Catálogo de Zonas", "ACTUALIZADO", "zID: " + sZid);
                
                return vm.zonas.$save(oZona);
            });
        }
        
        function validarDatos(sDescripcion) {
            if (sDescripcion.trim() == "") {
                throw "La descripcion no puede estar vacia."
            }
            
            return firebase.database().ref('zona').orderByChild('descripcion').equalTo(sDescripcion).once('value').then(function(snapshot) {
                if (snapshot.val()) {
                    //throw "Ya existe una zona con esa descripcion.";
                } 
            });
        }
    }
})();