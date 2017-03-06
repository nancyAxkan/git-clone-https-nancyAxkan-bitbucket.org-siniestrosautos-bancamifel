(function(){
    "use strict";
    
    angular
        .module("mifel")
        .controller("loginCtrl", loginCtrl);
        
    loginCtrl.$inject = ["$mdSidenav","$location","$mdDialog", "Auth", "sesionSrvc"];
    function loginCtrl($mdSidenav, $location, $mdDialog, Auth, sesionSrvc) {
        var lg = this;

        lg.loading = false;
        lg.login = login;
        lg.getMenssage = getMenssage;
        lg.alertMenssage = alertMenssage;
        
        Auth.$signOut();
        
        function login(){
            lg.loading = true;
            
            var auth = firebase.auth(),
                provider = new firebase.auth.GoogleAuthProvider(),
                usr = lg.usuario.usuario,
                pwd = lg.usuario.pwd;

            firebase.auth().signInWithEmailAndPassword(usr, pwd).then(function(result) {
                var enPortal =  sesionSrvc.getEntradaPortal(result);
                if(enPortal.acceso) {
                    var lastSesion = sesionSrvc.updateSession(result.uid);
                    lastSesion.then(function() {
                        $location.path("/inicio");
                    }, function(reason){
                        lg.loading = false;
                        lg.alertMenssage("La contraseña o el usuario no es válido.");
                    });
                } else {
                    lg.loading = false;
                    auth.$signOut();
                }
            }, function(error) {
                lg.loading = false;
                var mensaje = lg.getMenssage(error.code);
                lg.alertMenssage(mensaje);
            });
        }

        function getMenssage(sCode){
            var mensaje = "Ups tenemos incovenientes con tu acceso!!!";
            switch (sCode) {
                case "auth/user-not-found": 
                    mensaje = "La contraseña o el usuario no es válido."; 
                break;
                case "auth/wrong-password": 
                    mensaje = "La contraseña o el usuario no es válido."; 
                break;
            }
            
            return mensaje;
        }

        function alertMenssage(sMessage) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('.mifel_login')))
                    .clickOutsideToClose(false)
                    .title("Error")
                    .textContent(sMessage)
                    .ok('Aceptar')
            );
        }
        
    }
})();