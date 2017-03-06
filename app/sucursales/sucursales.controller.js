(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("sucursalesCtrl", sucursalesCtrl);
    
    sucursalesCtrl.$inject = ["sucursalesSrvc", "zonasSrvc", "$scope", "$q", "$location", "$mdDialog"];
    
    function sucursalesCtrl(sucursalesSrvc, zonasSrvc, $scope, $q, $location, $mdDialog) {
        var vm = this;
        
        vm.online = $scope.online;
        vm.add = false;
        vm.descripcion = "";
        vm.filtroDescripcion = "";
        vm.filtroZona = "";
        
        vm.zonas = zonasSrvc.getZonas();
        vm.sucursales = sucursalesSrvc.getSucursales();
        vm.showAdd = showAdd;
        vm.addSucursal = addSucursal;
        vm.updateSucursal = updateSucursal;
        vm.deleteSucursal = deleteSucursal;
        vm.cancelarAdd = cancelarAdd;
        vm.edit = edit;
        vm.cancelUpdateSucursal = cancelUpdateSucursal;
        vm.filtrar = filtrar;
        vm.limpiarFiltro = limpiarFiltro;
        vm.loading = true;
        
        $scope.$on("$destroy", function() {
            if (angular.isDefined(vm.zonas.$destroy)) { vm.zonas.$destroy(); }
            if (angular.isDefined(vm.sucursales.$destroy)) { vm.sucursales.$destroy(); }
        });
        
        $scope.$watch('online', function(onlineStatus) { 
            vm.online = onlineStatus;
        });
        
        $q.all({ z: vm.zonas.$loaded(), s: vm.sucursales.$loaded() }).then(function() {
            vm.loading = false;
        });
        
        function showAdd() {
            vm.add = true; 
            document.getElementById("catalogoSucursal").scrollTop = 0;
        }
        
        function limpiarFiltro() {
            vm.filtroDescripcion = "";
            vm.filtroZona = "";
            
            filtrar();
        }
        
        function filtrar() {
            vm.sucursales = sucursalesSrvc.filtrar(vm.filtroDescripcion, vm.filtroZona);
        }
        
        function edit(oSucursal) {
            oSucursal.edit = true;
            vm.descripcion = oSucursal.descripcion;
        }
        
        function cancelUpdateSucursal(oSucursal) {
            oSucursal.edit = false;
            vm.descripcion = oSucursal.descripcion
        }
        
        function addSucursal() {
            vm.add = true;
            
            sucursalesSrvc.addSucursal(vm.descripcion, vm.zId).then(function() {
                $scope.$apply(function() {
                    cancelar();
                });
            });
        }
        
        function cancelarAdd() {
            cancelar();
        }
        
        function cancelar() {
            vm.add = false;
            vm.descripcion = "";
            vm.zId = "";
        }
        
        function updateSucursal(oSucursal) {
            delete oSucursal.edit;
            
            sucursalesSrvc.updateSucursal(oSucursal.$id, vm.descripcion, oSucursal.zId);
        }
        
        function deleteSucursal(oSucursal) {
            var oDialogo = $mdDialog.confirm()
                .title('Borrar sucursal')
                .textContent('Favor de confirmar el borrado de la sucursal ' + oSucursal.descripcion)
                .ok('Aceptar')
                .cancel('Cancelar');
                
            $mdDialog.show(oDialogo).then(function(oResultado) {
                delete oSucursal.edit;
            
                sucursalesSrvc.deleteSucursal(oSucursal.$id).then(function() {
                    // Todo ok
                }, function() {
                    oDialogo = $mdDialog.alert()
                        .title('Borrar sucursal')
                        .textContent("La sucursal no puede ser eliminada pues existen usuarios asignados a ella.")
                        .ok('Aceptar');
                        
                    $mdDialog.show(oDialogo);
                });
            });
        }
        
    }
})();