(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("comunFcty", comunFcty);
        
    comunFcty.$inject = ['$firebaseObject', '$firebaseArray', "$location", '$rootScope', "$q"];
    
    function comunFcty($firebaseObject, $firebaseArray, $location, $rootScope, $q) {
        var vm = this;
        
        vm.obtieneFecha = obtieneFecha;
        vm.obtieneFechaInicio = obtieneFechaInicio;
        vm.obtieneFechaFin = obtieneFechaFin;
        vm.getDatosEconomicos = getDatosEconomicos;
        vm.getFormasPagoVida = getFormasPagoVida;
        vm.getProductosVida = getProductosVida;
        vm.getFormasPagoAp = getFormasPagoAp;
        vm.getProductosAp = getProductosAp;
        vm.complementaDatos = complementaDatos;
        vm.getObjetoCotizacion = getObjetoCotizacion;
        vm.getDescSucursalZona = getDescSucursalZona;
        
        vm.objCotizacion = {};
        vm.datosEconomicos = {};
        vm.formasPagoVida = [];
        vm.productosVida = [];
        vm.formasPagoAp = [];
        vm.productosAp = [];
        
        $rootScope.$on("logout", function(event, args) {
            if (angular.isFunction(vm.datosEconomicos.$destroy)) { vm.datosEconomicos.$destroy(); }
            if (angular.isFunction(vm.formasPagoVida.$destroy)) { vm.formasPagoVida.$destroy(); }
            if (angular.isFunction(vm.productosVida.$destroy)) { vm.productosVida.$destroy(); }
            if (angular.isFunction(vm.formasPagoAp.$destroy)) { vm.formasPagoAp.$destroy(); }
            if (angular.isFunction(vm.productosAp.$destroy)) { vm.productosAp.$destroy(); }
            if (angular.isFunction(vm.objCotizacion.$destroy)) { vm.objCotizacion.$destroy(); }
        });
        
        function getDescSucursalZona(sSid, sZid) {
            return $q(function(resolve, reject) {
                var oDesc = { sucursal: "", zona: "" };
                
                $q.all([
                    $q(function(resolve, reject) {
                        firebase.database().ref("sucursal/" + sSid).once("value").then(function(oData) {
                            oDesc.sucursal = oData.val().descripcion;
                            resolve();
                        })
                    }),
                    $q(function(resolve, reject) {
                        firebase.database().ref("zona/" + sZid).once("value").then(function(oData) {
                            oDesc.zona = oData.val().descripcion;
                            resolve();
                        })
                    })
                ]).then(function() {
                    resolve(oDesc);
                });
            });
        }
        
        function obtieneFecha(){
            var d = new Date();
            var yyyy = d.getFullYear().toString();
            var mm = (d.getMonth() + 101).toString().slice(-2);
            var dd = (d.getDate() + 100).toString().slice(-2);
            return yyyy + mm + dd;
        }
        
        function obtieneFechaInicio(){
            var d = new Date();
            var yyyy = d.getFullYear().toString();
            var mm = (d.getMonth() + 101).toString().slice(-2);
            var dd = (d.getDate() + 100).toString().slice(-2);
            return dd+'/'+mm+'/'+yyyy;
        }
        
        function obtieneFechaFin(){
            var d = new Date();
            var yyyy = d.getFullYear() + 1;
            var mm = (d.getMonth() + 101).toString().slice(-2);
            var dd = (d.getDate() + 100).toString().slice(-2);
            return dd+'/'+mm+'/'+yyyy;
        }
        
        function getDatosEconomicos() {
            vm.datosEconomicos = $firebaseObject(firebase.database().ref("dato_economico"));
            return vm.datosEconomicos;
        }
        
        function getFormasPagoVida() {
            vm.formasPagoVida = $firebaseArray(firebase.database().ref("dato_economico/formas_pago_vida"));
            return vm.formasPagoVida;
        }
        
        function getProductosVida() {
            vm.productosVida = $firebaseArray(firebase.database().ref("producto").orderByChild("tipo").equalTo("VIDA"));
            return vm.productosVida;
        }
        
        function getFormasPagoAp() {
            vm.formasPagoAp = $firebaseArray(firebase.database().ref("dato_economico/formas_pago_ap"));
            return vm.formasPagoAp;
        }
        
        function getProductosAp() {
            vm.productosAp = $firebaseArray(firebase.database().ref("producto").orderByChild("tipo").equalTo("AP"));
            return vm.productosAp;
        }
        
        function complementaDatos(objCotizacion){
            vm.objCotizacion = objCotizacion;
            if(vm.objCotizacion.tipoProducto === "VIDA"){
                 $location.path("/complementar-datos-vida");
            }else{
                $location.path("/complementar-datos");
            }
        }
        function getObjetoCotizacion(){
            return vm.objCotizacion;
        }
    }
})();