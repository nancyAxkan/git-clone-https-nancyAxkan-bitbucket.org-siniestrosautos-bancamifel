(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("zonasCtrl", zonasCtrl);
    
    zonasCtrl.$inject = ["zonasSrvc", "$scope", "$q", "observacionesSrvc", "$mdDialog"];
    
    function zonasCtrl(zonasSrvc, $scope, $q, observacionesSrvc, $mdDialog) {
        var vm = this;
        
        vm.online = $scope.online;
        vm.add = false;
        vm.descripcion = "";
        vm.filtroDescripcion = "";
        
        vm.zonas = zonasSrvc.getZonas();
        vm.addZona = addZona;
        vm.updateZona = updateZona;
        vm.deleteZona = deleteZona;
        vm.cancelAdd = cancelAdd;
        vm.edit = edit;
        vm.cancelUpdate = cancelUpdate;
        vm.showAdd = showAdd;
        vm.limpiarFiltro = limpiarFiltro;
        vm.filtrar = filtrar;
        vm.loading = true;
        
        $scope.$on("$destroy", function() {
            vm.zonas.$destroy();
        });
        
        $scope.$watch('online', function(onlineStatus) { 
            vm.online = onlineStatus;
        });
        
        $q.all({ z: vm.zonas.$loaded() }).then(function() {
            vm.loading = false;
        });
        
        function limpiarFiltro() {
            vm.filtroDescripcion = "";
            
            filtrar();
        }
        
        function showAdd() {
            vm.add = true; 
            document.getElementById("catalogoZona").scrollTop = 0;
        }
        
        function filtrar() {
           vm.zonas = zonasSrvc.filtrar(vm.filtroDescripcion);
        }
        
        function edit(oZona) {
            oZona.edit = true;
            vm.descripcion = oZona.descripcion;
        }
        
        function cancelUpdate(oZona) {
            vm.descripcion = "";
            oZona.edit = false;
        }
        
        function addZona() {
            vm.add = true;
            
            zonasSrvc.addZona(vm.descripcion).then(function() {
                $scope.$apply(function() {
                    cancelar();
                });
            });
        }
        
        function cancelAdd() {
            cancelar();
        }
        
        function cancelar() {
            vm.add = false;
            vm.descripcion = "";
        }
        
        function updateZona(oZona) {
            delete oZona.edit;
            
            zonasSrvc.updateZona(oZona.$id, vm.descripcion);
            vm.descripcion = "";
        }
        
        function deleteZona(oZona) {
            var oDialogo = $mdDialog.confirm()
                .title('Borrar zona')
                .textContent('Favor de confirmar el borrado de la zona ' + oZona.descripcion)
                .ok('Aceptar')
                .cancel('Cancelar');
                
            $mdDialog.show(oDialogo).then(function(oResultado) {
                delete oZona.edit;
            
                zonasSrvc.deleteZona(oZona.$id).then(function() {
                    // Todo ok
                }, function() {
                    oDialogo = $mdDialog.alert()
                        .title('Borrar zona')
                        .textContent("La zona no puede ser eliminada pues existen sucursales que hacen uso de ella.")
                        .ok('Aceptar');
                        
                    $mdDialog.show(oDialogo);
                });
            });
            
        }
        
    }
})();