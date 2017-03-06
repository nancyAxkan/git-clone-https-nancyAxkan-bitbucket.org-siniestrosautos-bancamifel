(function(){
    "use strict";
    
    angular
        .module("mifel")
        .controller("sesionCtrl", sesionCtrl);
        
    sesionCtrl.$inject = ["$mdSidenav","$location", "$firebaseAuth", "$firebaseObject", "$rootScope", "sesionSrvc", "$state", "$timeout", "$scope", "Idle", "$mdDialog"];
    function sesionCtrl($mdSidenav, $location, $firebaseAuth, $firebaseObject, $rootScope, sesionSrvc, $state, $timeout, $scope, Idle, $mdDialog) {
        var sm = this;
        var userState = false, changeUser = false;

        sm.menuUsuario = false;
        sm.fauth = $firebaseAuth();
        sm.menuN0 = false;
        sm.menuN1 = false;
        sm.menuN2 = false;
        sm.menuN3 = false;
        sm.mensajePortal = false;
        sm.sesionDefault = "Última sesión: "+new Date().toLocaleDateString()+" a las "+new Date().toLocaleTimeString().substring(0, 5)+" hrs.";
        sm.usuario = {tipo : "Soy Usuario", tipoMin : "Soy Usuario", activo : false, email : "", nivel : -1, nombre : "", ultimaSesion : ""};

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            sm.pagina = toState.title;
        });
        
        $scope.$on('IdleStart', function() {
            sm.closeModals();
            sm.warning = sm.alerta("No se detecta actividad", "Tu sesión se cerrara en 5 segundos");
        });
        
        $scope.$on('IdleEnd', function() {
            sm.closeModals();
        });
        
        $scope.$on('IdleTimeout', function() {
            sm.closeModals();
            $scope.timedout = sm.alerta("Su sesión ha finalizado", "");
            Idle.unwatch();
            logout();
        });

        sm.fauth.$onAuthStateChanged(function(user){
            var enPortal = sesionSrvc.getEntradaPortal(user);
            if (user && enPortal.acceso) {
                if (!userState) {
                    userState = true;
                    $timeout(function() {
                        watchUser(user.uid)
                    }, 3000);
                }
                Idle.watch();
                sm.usuario.ultimaSesion = sm.sesionDefault;
                sm.user = sesionSrvc.getUsuario();
                sm.user.$loaded(function(data){
                    angular.extend(sm.usuario, data);
                    sm.setMenu();
                    if(sm.pagina == "Login") {
                        sm.go("/inicio");
                    }
                });
            } else {
                if(user && enPortal.portal && !sm.mensajePortal) {
                    sm.mensajePortal = sm.alerta("","La sesión de Gmail iniciada no concuerda con tu sesión de Portal GNP, inicia sesión con tu correo corporativo");
                }

                Idle.unwatch();
                sm.usuario = {tipo : "Soy Usuario", tipoMin : "Soy Usuario", activo : "", email : "", nivel : "", nombre : "", ultimaSesion : ""};
                sm.menuN0 = false; sm.menuN1 = false; sm.menuN2 = false; sm.menuN3 = false;
                sm.menuUsuario = false;
                sm.go("/");
            }
        });
        
        sm.go = go;
        sm.logout = logout;
        sm.openBar = openBar;
        sm.setMenu = setMenu;
        sm.closeModals = closeModals;
        sm.alerta = alerta;
        
        function watchUser(sUid) {
            var ref = firebase.database().ref("usuario/" + sUid);
            ref.on('value', function(snapshot) {
                if (changeUser) {
                    ref.off();
                    logout();
                } else if (!changeUser) {
                    changeUser = true;
                }
            });
        }
        
        function go(path){
            $mdSidenav("menuBar").close()
            $location.path(path);
        };
        
        function logout(){
            userState = false;
            changeUser = false;
            sesionSrvc.signOut();
            $location.path("/");
        };
        
        function openBar() {
            $mdSidenav("menuBar").toggle();
        }
        
        function setMenu() {
            sm.menuUsuario = false;
            sm.menuN0 = false; sm.menuN1 = false; sm.menuN2 = false; sm.menuN3 = false;

            if (sm.usuario.nivel == 0) {
                sm.usuario.tipo = "Administrador GNP";
                sm.usuario.tipoMin = "Admin GNP";
                sm.menuN0 = true; sm.menuN1 = true; sm.menuN2 = true; sm.menuN3 = true;
            }
            
            if (sm.usuario.nivel == 1) {
                sm.usuario.tipo = "Administrador MIFEL";
                sm.usuario.tipoMin = "Admin Mifel";
                sm.menuN1 = true; sm.menuN2 = true; sm.menuN3 = true;
            }

            if (sm.usuario.nivel == 2) {
                sm.usuario.tipo = "Administrador Regional";
                sm.usuario.tipoMin = "Admin Regional";
                sm.menuN2 = true; sm.menuN3 = true;
            }
            
            if (sm.usuario.nivel == 3) {
                sm.usuario.tipo = "Ejecutivo";
                sm.usuario.tipoMin = "Ejecutivo";
                sm.menuN3 = true;
            }
            
            sm.menuUsuario = (sm.usuario.activo)? true: false;
        }
        
        function closeModals() {
            if (sm.warning) {
                $mdDialog.hide( sm.warning, "finished" );
                sm.warning = null;
            }
            
            if (sm.timedout) {
                $mdDialog.hide( sm.timedout, "finished" );
                sm.timedout = null;
            }
        }
        
        function alerta(sTitulo, sDescripcion) {
            var alert = $mdDialog.alert()
                        .parent(angular.element(document.querySelector('body')))
                        .clickOutsideToClose(true)
                        .title(sTitulo)
                        .textContent(sDescripcion)
                        .ok('Aceptar');
        
            $mdDialog.show( alert ).finally(function() { 
                sm.mensajePortal = false;
            });
            
            return alert;
        }
    }
})();