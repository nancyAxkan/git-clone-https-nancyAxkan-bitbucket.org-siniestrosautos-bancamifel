(function () {
    "use strict";
    
    angular
        .module("mifel")
        .service("observacionesSrvc", observacionesSrvc);
        
    observacionesSrvc.$inject = ["$mdDialog", "$q"];
    
    function observacionesSrvc($mdDialog, $q) {
        var vm = this;
        
        vm.mostrarDialogo = mostrarDialogo;
        vm.muestraAlerta = muestraAlerta;
        
        function mostrarDialogo(oParametros){
            return $q(function(resolve, reject) {
                var oDialogo = $mdDialog.prompt()
                    .title('Observaciones')
                    .textContent('Por favor ingrese sus comentarios al estatus asignado.')
                    .placeholder('Observaciones')
                    .ariaLabel('Observaciones')
                    .ok('Aceptar')
                    .cancel('Cancelar');
                    
                $mdDialog.show(oDialogo).then(function(oResultado) {
                    resolve(oResultado);
                }, function() {
                    reject("");
                });
            }); 
        }
        
        function muestraAlerta(sTitulo, sDescripcion) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('body')))
                    .clickOutsideToClose(true)
                    .title(sTitulo)
                    .textContent(sDescripcion)
                    .ok('Aceptar')
            );
        }
    }
})();