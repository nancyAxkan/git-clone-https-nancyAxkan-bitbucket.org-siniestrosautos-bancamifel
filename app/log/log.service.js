(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("logSrvc", logSrvc);
        
    logSrvc.$inject = ["$firebaseArray", "$firebaseObject", "Auth", "$rootScope"];
    
    function logSrvc($firebaseArray, $firebaseObject, Auth, $rootScope){
        var vm = this;
        
        vm.movimientos = [];
        
        vm.getMovimientos = getMovimientos;
        vm.addMovimiento = addMovimiento;
        
        $rootScope.$on("logout", function(event, args) {
            if (vm.movimientos.$destroy) { vm.movimientos.$destroy(); }
        });
        
        function getUsuarioObject(sUid) {
            var dbRefCat = firebase.database().ref('usuario/' + sUid);
            
            return $firebaseObject(dbRefCat);
        }
        
        function assignUsuario(oUsuario, oMovimiento) {
            oUsuario.$loaded(function(usuario) {
                oMovimiento.usuario = { email: usuario.email, nombre: usuario.nombre };
                
                oUsuario.$destroy();
            });
        }
        
        function getUsuarios() {
            vm.movimientos.forEach(function(movimiento) {
                assignUsuario(getUsuarioObject(movimiento.uId), movimiento);
            });
        }
        
        function getMovimientos() {
            vm.movimientos = $firebaseArray(firebase.database().ref("log"));
            
            vm.movimientos.$loaded(getUsuarios);
            
            return vm.movimientos;
        }
        
        function addMovimiento(sPantalla, sMovimiento, sObservaciones) {
            vm.movimientos = $firebaseArray(firebase.database().ref("log"));
            
            return vm.movimientos.$add({ uId: Auth.$getAuth().uid, pantalla: sPantalla, movimiento: sMovimiento, observaciones: sObservaciones, fecha: new Date().getTime() });
        }
    }
})();