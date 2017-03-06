(function () {
    "use strict";
    
    angular
        .module("mifel")
        .service("caducarSrvc", caducarSrvc);
        
    caducarSrvc.$inject = ['$rootScope','$firebaseObject', '$firebaseArray', "$mdDialog", '$q', 'comunFcty'];
    function caducarSrvc($rootScope, $firebaseObject, $firebaseArray, $mdDialog, $q, comunFcty) {

        var vm = this;
        vm.hace6meses = getDate();
        
        vm.getDate = getDate;
        vm.caducar = caducar;
        vm.updateCaducar = updateCaducar;
        vm.getCotizaciones = getCotizaciones;
        vm.confirmarDialogo = confirmarDialogo;

        $rootScope.$on("logout", function(event, args) {
            vm.cotizaciones = [];
            vm.preCotizacion.$destroy();
        });
        
        function getDate() {
            var hoy = new Date(); hoy.setMonth(hoy.getMonth()-6);
            var meses = hoy.toLocaleDateString().split("/");
            return meses.map(function(key, index){ if(key.length == 1) { key = "0" + key; } return key}).reverse().join("");
        }
        
        function caducar() {
            var statusDate = comunFcty.obtieneFecha();
            angular.forEach(vm.cotizaciones, function(value, key){
                var referencia = "cotizacion/" + value.$user + "/" + value.$id;
                updateCaducar(referencia, statusDate);
            });
            vm.cotizaciones = [];
        }

        function updateCaducar(sReferencia, sDate) {
            firebase.database().ref(sReferencia).update({ "status" : 3, "statusDate" : sDate, "observacion" : "Tiempo de vigencia expirado" })
            .then(function successCallback(response){
                console.log("Caducado correctamente");
            },function errorCallback(error){
                console.error(error);
            });
        }
        
        function getCotizaciones(){
            vm.cotizaciones = [];
            vm.preCotizacion = $firebaseArray(firebase.database().ref('cotizacion'));
            return vm.preCotizacion.$loaded(function(data){
                angular.forEach(data, function(value, key) {
                    var $id = value.$id;
                    Object.keys(value).map(function(key, index) {
                        if((key != "$id" && key != "$priority") && value[key].status == 0 && value[key].timestamp < vm.hace6meses) {
                            value[key].$user = $id;
                            value[key].$id = key;
                            vm.cotizaciones.push(value[key]);
                        }
                    });
                    
                });
            });
        }

        function confirmarDialogo(){
            return $q(function(resolve, reject) {
                var oConfirm = $mdDialog.confirm()
                    .title('¿Desea caducar las cotizaciones?')
                    .textContent('Recuerde que no puede deshacer la accion.')
                    .ok('Aceptar')
                    .cancel('Cancelar');
                    
                $mdDialog.show(oConfirm).then(function() {
                    resolve();
                }, function() {
                    reject("");
                });
            }); 
        }
    }
})();
