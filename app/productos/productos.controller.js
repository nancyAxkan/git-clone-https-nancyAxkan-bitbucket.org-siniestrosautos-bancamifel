(function() {
    "use strict";
    
    angular
        .module("mifel")
        .controller("productosCtrl", productosCtrl);
        
    productosCtrl.$inject = ["$scope", "$timeout", "productosSrvc", "$mdDialog", "$filter"];
        
    function productosCtrl($scope, $timeout, productosSrvc, $mdDialog, $filter) {
        var vm = this;
        
        vm.online = $scope.online;
        vm.loading = false;
        vm.tipos = [{ id: "AP", descripcion: "Accidentes personales" }, { id: "VIDA", descripcion: "Vida" }];
        vm.productos = productosSrvc.getProductos();
        vm.sliderOptions = {
            floor: 10,
            ceil: 80,
            readOnly: true
        }
        vm.descripcion = "";
        vm.suma = "";
        vm.tipo = undefined;
        vm.primas = [];
        vm.edadIni = "";
        vm.edadFin = "";
        vm.primaMasculina = "";
        vm.primaFemenina = "";
        vm.addAP = false;
        vm.prima = false;
        vm.showAddAP = showAddAP;
        vm.showAddVida = showAddVida;
        vm.cancelarAddAP = cancelarAddAP;
        vm.showPrima = showPrima;
        vm.showPrimaProducto = showPrimaProducto;
        vm.hidePrima = hidePrima;
        vm.hidePrimaProducto = hidePrimaProducto;
        vm.addPrima = addPrima;
        vm.addPrimaProducto = addPrimaProducto;
        vm.updatePrima = updatePrima;
        vm.hideUpdatePrima = hideUpdatePrima;
        vm.editPrima = editPrima;
        vm.edit = edit;
        vm.productoEdicion = {};
        vm.cancelUpdate = cancelUpdate;
        vm.update = update;
        vm.addProducto = addProducto;
        vm.delete = deleteProducto;
        vm.deleteNewPrima = deleteNewPrima;
        vm.deletePrima = deletePrima;
        vm.numeroSuma = numeroSuma;
        
        $scope.$on("$destroy", function() {
            vm.productos.$destroy();
        });
        
        $scope.$watch('online', function(onlineStatus) { 
            vm.online = onlineStatus;
        });
        
        function numeroSuma(oSuma) {
            return parseFloat(oSuma.suma_asegurada);
        }
        
        function deletePrima(oPrima) {
            vm.productoEdicion.primas.splice(vm.productoEdicion.primas.indexOf(oPrima), 1);
        }
        
        function deleteNewPrima(oPrima) {
            vm.primas.splice(vm.primas.indexOf(oPrima), 1);
        }
        
        function deleteProducto(oProducto) {
            var oDialogo = $mdDialog.confirm()
                .title('Borrar producto')
                .textContent('Favor de confirmar el borrado del producto ' + oProducto.descripcion + ' con suma asegurada de ' + $filter('currency')(oProducto.suma_asegurada, "$ ", 2))
                .ok('Aceptar')
                .cancel('Cancelar');
                
            $mdDialog.show(oDialogo).then(function(oResultado) {
                productosSrvc.deleteProducto(oProducto);
            });
        }
        
        function addProducto() {
            var oProducto = {};
            
            if (vm.tipo == "AP") {
                oProducto = {
                    deducible: vm.deducible,
                    default: 0,
                    descripcion: vm.descripcion,
                    invalidez: vm.invalidez,
                    muerte_acc: vm.muerte,
                    perdidas_org: vm.perdidas,
                    reembolso_acc: vm.accidentes,
                    reembolso_fun: vm.funerarios,
                    suma_asegurada: vm.suma,
                    tipo: vm.tipo,
                    primas: vm.primas
                }
            }
            
            if (vm.tipo == "VIDA") {
                oProducto = {
                    default: 0,
                    descripcion: vm.descripcion,
                    suma_asegurada: vm.suma,
                    tipo: vm.tipo,
                    primas: vm.primas
                }
            }
            
            productosSrvc.addProducto(oProducto);
            
            cancelarAddAP();
        }
        
        function update(oProducto) {
            oProducto.descripcion = vm.descripcion;
            oProducto.suma_asegurada = vm.suma;
            
            productosSrvc.updateProducto(oProducto);
            
            vm.descripcion = "";
            vm.suma = "";
        }
        
        function cancelUpdate(oProducto) {
            oProducto.edit = false;
            
            delete oProducto.primas;
        }
        
        function edit(oProducto) {
            vm.productoEdicion.edit = false;
            
            oProducto.primas = productosSrvc.getPrimas(oProducto);
            
            oProducto.edit = true;
            vm.productoEdicion = oProducto;
            
            vm.descripcion = vm.productoEdicion.descripcion;
            vm.suma = vm.productoEdicion.suma_asegurada;
            
            $timeout(function () { $scope.$broadcast('rzSliderForceRender'); },100);
        }
        
        function cancelarAddAP() {
            vm.deducible = "";
            vm.descripcion = "";
            vm.invalidez = "";
            vm.muerte = "";
            vm.perdidas = "";
            vm.accidentes = "";
            vm.funerarios = "";
            vm.suma = "";
            vm.tipo = "";
            vm.primas = [];
            
            vm.addAP = false;
        }
        
        function editPrima(oPrima) {
            oPrima.edit = true;
        }
        
        function updatePrima(oPrima) {
            oPrima.edit = false;
        }
        
        function hideUpdatePrima(oPrima) {
            oPrima.edit = false;
        }
        
        function addPrima() {
            if (vm.edadFin == "") {
                vm.edadFin = undefined;
            }
            
            if (vm.tipo == "AP") {
                vm.primas.push({ edadIni: vm.edadIni, edadFin: vm.edadFin, h: vm.primaMasculina, m: vm.primaFemenina, edit: false});    
            }
            
            if (vm.tipo == "VIDA") {
                vm.primas.push({ edadIni: vm.edadIni, edadFin: vm.edadFin, diba: vm.diba, fallecimiento: vm.fallecimiento, ima: vm.ima, ise: vm.ise, edit: false});
            }
            
            vm.hidePrima();
            
            $timeout(function () { $scope.$broadcast('rzSliderForceRender'); },100);
            
        }
        
        function addPrimaProducto(oProducto) {
            if (vm.edadFin == "") {
                vm.edadFin = undefined;
            }
            
            if (oProducto.tipo == "AP") {
                oProducto.primas.push({ edadIni: vm.edadIni, edadFin: vm.edadFin, h: vm.h, m: vm.m, edit: false});    
            }
            
            if (oProducto.tipo == "VIDA") {
                oProducto.primas.push({ edadIni: vm.edadIni, edadFin: vm.edadFin, diba: vm.diba, fallecimiento: vm.fallecimiento, ima: vm.ima, ise: vm.ise, edit: false});
            }
            
            vm.hidePrima();
            
            oProducto.prima = false;
            
            $timeout(function () { $scope.$broadcast('rzSliderForceRender'); },100);
        }
        
        function hidePrima() {
            vm.edadIni = "";
            vm.edadFin = "";
            vm.primaMasculina = "";
            vm.primaFemenina = "";
            vm.diba = "";
            vm.fallecimiento = "";
            vm.ima = "";
            vm.ise = "";
            vm.prima = false;
        }
        
        function showPrima() {
            vm.prima = true;
        }
        
        function showPrimaProducto(oProducto) {
            oProducto.prima = true;
        }
        
        function showAddAP() {
            vm.addAP = true;
            vm.tipo = "AP";
            document.getElementById("catalogoProductos").scrollTop = 0;
        }
        
        function showAddVida() {
            vm.addAP = true;
            vm.tipo = "VIDA";
            document.getElementById("catalogoProductos").scrollTop = 0;
        }
        
        function hidePrimaProducto(oProducto) {
            vm.edadIni = "";
            vm.edadFin = "";
            vm.primaMasculina = "";
            vm.primaFemenina = "";
            vm.diba = "";
            vm.fallecimiento = "";
            vm.ima = "";
            vm.ise = "";
            oProducto.prima = false;
        }
    }
})();