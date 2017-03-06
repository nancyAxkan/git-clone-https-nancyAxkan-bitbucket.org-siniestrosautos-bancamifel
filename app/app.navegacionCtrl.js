(function(){
    "use strict";
    
    angular
        .module("mifel")
        .controller("navegacionCtrl", navegacionCtrl);
        
    navegacionCtrl.$inject = ["$location","shared", "Auth", "$mdDialog"];
    function navegacionCtrl($location, shared, Auth, $mdDialog) {
        var vm = this;
        vm.login = login;
        vm.close = close;
        function login(){
            var auth = firebase.auth(),
                provider = new firebase.auth.GoogleAuthProvider(),
                usr = vm.usuario.usuario,
                pwd = vm.usuario.pwd;
                
            firebase.auth().signInWithEmailAndPassword(usr, pwd).then(function(result) {
                $mdDialog.cancel();
            }, function(error) {
                $mdDialog.cancel();
                console.log(error);
            });
        };
        function close(){
            $mdDialog.cancel();
        }
    }
})();