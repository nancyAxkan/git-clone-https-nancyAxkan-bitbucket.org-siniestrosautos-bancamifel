(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("sesionSrvc", sesionSrvc);
        
    sesionSrvc.$inject = ["$firebaseArray", "$firebaseObject", "$http", "Auth", "$q", "$rootScope", "$location"];
    
    function sesionSrvc($firebaseArray, $firebaseObject, $http, Auth, $q, $rootScope, $location) {
        var vm = this;
        var user;

        vm.getUsuario = getUsuario;
        vm.validaState = validaState;
        vm.updateSession = updateSession;
        vm.getEntradaPortal = getEntradaPortal;
        vm.signOut = signOut;
        
        vm.pages = {
            '/sucursales' : 1,
            '/zonas' : 1,
            '/usuarios' : 2,
            '/mis-operaciones' : 3,
            '/vida' : 3,
            '/accidentes-personales' : 3,
            '/inicio' : 3,
            '/' : 3
        };
        
        function getUsuario() {
            vm.usuario = $firebaseObject(firebase.database().ref("usuario/" + Auth.$getAuth().uid));
            return vm.usuario;
        }
        
        function getEntradaPortal(user) {
            var portalEmail = $location.search().email;
            var portal = portalEmail != undefined ? true : false; //window != window.top ? true : false;
            var valido = (user && portal == false) ? true : (user && portal && user.email == portalEmail)? true : false;

            return {'acceso': valido, 'portal': portal};
        }

        function validaState(oUser, sPage) {
            return $q(function(resolve, reject) {
                if(oUser.activo) {
                    if(vm.pages[sPage] >= oUser.nivel) {
                        resolve();
                    } else{
                        reject("acceso denegado");
                    }
                } else {
                    reject("usuario inactivo")
                }
            });
        }
        
        function updateSession(sUid) {
            return $q(function(resolve, reject){
                user = vm.getUsuario(sUid);
                user.$loaded(function(data){
                    if(data.activo) {
                        var actualFecha =  "Última sesión: "+new Date().toLocaleDateString()+" a las "+new Date().toLocaleTimeString().substring(0, 5)+" hrs.";
                        var ultimaFecha = (data.actualSesion != undefined && data.actualSesion != "")? data.actualSesion : actualFecha;
                        firebase.database().ref("usuario/"+sUid).update({ "actualSesion" : actualFecha, "ultimaSesion" : ultimaFecha });
                        
                        resolve();
                    } else {
                        reject('Usuario Inactivo');
                    }
                });    
            });
        }
        
        function signOut() {
            if (user && user.$destroy) { user.$destroy(); }
            vm.usuario.$destroy();
            $rootScope.$broadcast("logout");
            Auth.$signOut();
            $rootScope.$broadcast('recarga_page');
            $location.path('/');
            window.location.reload();
        }
    }
})();