(function() {
    "use strict";
    
    angular
        .module("mifel")
        .directive("compareTo", compareTo);
        
    function compareTo() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {
        
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };
        
                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        }
    }
    
    angular
        .module("mifel")
        .directive("correoexistente", correoexistente);
        
    correoexistente.$inject = ["$q"];
        
    function correoexistente($q) {
        return {
            require: "ngModel",
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.correoexistente = function(modelValue, viewValue) {
                    
                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    
                    var def = $q.defer();
                    
                    firebase.database().ref("usuario").orderByChild("email").equalTo(modelValue).once("value").then(function(snapshot) {
                        if (snapshot.val()) {
                            def.reject();
                        }
                        
                        def.resolve();
                    });
                    
                    return def.promise;
                }
            }
        }
    }
    
    angular
        .module("mifel")
        .controller("usuariosCtrl", usuariosCtrl);
        
    usuariosCtrl.$inject = ["usuariosSrvc", "sucursalesSrvc", "zonasSrvc", "$q", "$scope", "$mdDialog"];
    
    function usuariosCtrl(usuariosSrvc, sucursalesSrvc, zonasSrvc, $q, $scope, $mdDialog) {
        var vm = this;
        
        vm.online = $scope.online;
        vm.add = false;
        vm.nombre = "";
        vm.email = "";
        vm.password = "";
        vm.confPassword = "";
        vm.zId = "";
        vm.sId = "";
        vm.nivel = 3;
        
        vm.filtroEmail = "";
        vm.filtroNombre = "";
        vm.filtroEmpleado = "";
        vm.filtroZona = "";
        vm.filtroSucursal = "";
            
        vm.zonas = zonasSrvc.getZonas();
        vm.sucursales = sucursalesSrvc.getSucursales();
        vm.usuarios = usuariosSrvc.getUsuarios();
        vm.showAdd = showAdd;
        vm.addUsuario = addUsuario;
        vm.cancelarAdd = cancelarAdd;
        vm.delete = deleteUsuario;
        vm.update = update;
        vm.edit = edit;
        vm.cancelUpdate = cancelUpdate;
        vm.niveles = [];
        vm.filtrar = filtrar
        vm.limpiarFiltro = limpiarFiltro;
        vm.loading = true;
        
        inicializar();
        
        $scope.$on("$destroy", function() {
            vm.zonas.$destroy();
            vm.sucursales.$destroy();
            vm.usuarios.$destroy();
        });
        
        $scope.$watch('online', function(onlineStatus) { 
            vm.online = onlineStatus;
        });
        
        $q.all({ z: vm.zonas.$loaded(), s: vm.sucursales.$loaded(), u: vm.usuarios.$loaded()}).then(function() {
            vm.loading = false;
        });
        
        function inicializar() {
            usuariosSrvc.setUsuario();
            usuariosSrvc.getNiveles().then(function (aNiveles) {
                vm.niveles = aNiveles;
            });
        }
        
        function filtrar() {
            vm.usuarios = usuariosSrvc.filtrar(vm.filtroEmail, vm.filtroNombre, vm.filtroEmpleado, vm.filtroZona, vm.filtroSucursal);
        }
        
        function limpiarFiltro() {
            vm.filtroEmail = "";
            vm.filtroNombre = "";
            vm.filtroEmpleado = "";
            vm.filtroZona = "";
            vm.filtroSucursal = "";
            
            filtrar();
        }
        
        function update(oUsuario) {
            delete oUsuario.edit;
            
            usuariosSrvc.updateUsuario(oUsuario.$id, oUsuario.email, oUsuario.nombre, oUsuario.empleado, oUsuario.zId, oUsuario.sId, oUsuario.nivel);
        }
        
        function cancelUpdate(oUsuario) {
            oUsuario.edit = false;
        }
        
        function edit(oUsuario) {
            oUsuario.edit = true;
        }
        
        function addUsuario() {
            usuariosSrvc.addUsuario(vm.email, vm.password, vm.nombre, vm.empleado, vm.zId, vm.sId, vm.nivel);
            
            cancelar();
        }
        
        function deleteUsuario(oUsuario) {
            var oDialogo = $mdDialog.confirm()
                .title('Borrar usuario')
                .textContent('Favor de confirmar el borrado del usuario ' + oUsuario.nombre)
                .ok('Aceptar')
                .cancel('Cancelar');
                
            $mdDialog.show(oDialogo).then(function(oResultado) {
                usuariosSrvc.deleteUsuario(oUsuario.$id);
            });
            
        }
        
        function showAdd() {
            vm.add = true;
        }
        
        function cancelarAdd() {
            cancelar();
        }
        
        function cancelar() {
            vm.add = false;
            vm.nombre = "";
            vm.empleado = "";
            vm.email = "";
            vm.password = "";
            vm.confPassword = "";
            vm.zId = "";
            vm.sId = "";
            vm.nivel = 3;
        }
    }
})();