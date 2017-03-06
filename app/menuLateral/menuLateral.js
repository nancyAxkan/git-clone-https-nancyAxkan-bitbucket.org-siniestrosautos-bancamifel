(function(){
    "use strict";
    
     angular
        .module("mifel")
        .controller("menuLateralCtrl", menuLateralCtrl);
    menuLateralCtrl.$inject = ["$mdDialog", "$location", "$firebaseArray"];
    function menuLateralCtrl($mdDialog, $location, $firebaseArray){
        var ml = this,
            options = {}, 
            optionsAdmin = {}, 
            items = [],
            itemsAdmin = [];
        try{    
            options = firebase.database().ref("menu/general");
            optionsAdmin = firebase.database().ref("menu/administrador");
            
            items = $firebaseArray(options);
            itemsAdmin = $firebaseArray(optionsAdmin);
            
            items.$loaded().then(function() {
                ml.items = items;
            });
            
            itemsAdmin.$loaded().then(function() {
                ml.itemsAdmin = itemsAdmin;
            });
            ml.menu = function(stateProvider){
                $location.path(stateProvider);
            }
        }catch(error){
            console.log(error);
        }
    }
})();
