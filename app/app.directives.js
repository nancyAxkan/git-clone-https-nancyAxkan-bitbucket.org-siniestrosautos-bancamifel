(function() {
    "use strict";
    
    angular
        .module("mifel")
        .directive("catalogovalido", catalogovalido);
        
    catalogovalido.$inject = ["$q", "zonasSrvc", "sucursalesSrvc"];
        
    function catalogovalido($q, zonasSrvc, sucursalesSrvc) {
        return {
            require: "ngModel",
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$asyncValidators.catalogovalido = function(modelValue, viewValue) {
                    var def = $q.defer();
                    
                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    
                    var aOrigen = [];
                    var aResult;
                        
                    if(attrs.id) {
                        
                        
                        if (attrs.catalogo == "zona") {
                            aOrigen = zonasSrvc.zonas;
                            
                            aResult = new jinqJs()
                                .from(aOrigen)
                                .where("descripcion = " + modelValue, "$id != " + attrs.id)
                                .select()
                        }
                        
                        if (attrs.catalogo == "sucursal") {
                            aOrigen = sucursalesSrvc.sucursales;
                            
                            aResult = new jinqJs()
                                .from(aOrigen)
                                .where("descripcion = " + modelValue, "$id != " + attrs.id, "zId = " + attrs.zona)
                                .select()
                        }
                        
                        if (aResult.length == 0) {
                            def.resolve();
                        } else {
                            def.reject();
                        }
                        
                            
                    } else {
                        if (attrs.catalogo == "zona") {
                            firebase.database().ref(attrs.catalogo).orderByChild("descripcion").equalTo(modelValue).once("value").then(function(snapshot) {
                                if (snapshot.val()) {
                                    def.reject();
                                }
                                
                                def.resolve();
                            });
                        }
                        
                        if (attrs.catalogo == "sucursal") {
                            aOrigen = sucursalesSrvc.sucursales;
                            
                            aResult = new jinqJs()
                                .from(aOrigen)
                                .where("descripcion = " + modelValue, "zId = " + attrs.zona)
                                .select()
                                
                            if (aResult.length == 0) {
                                def.resolve();
                            } else {
                                def.reject();
                            }
                        }
                        
                    }
                    
                    return def.promise;
                }
            }
        }
    }
    
    angular
        .module('mifel')
        .directive('capitalize', function() {
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, modelCtrl) {
                    var capitalize = function(inputValue) {
                        if (inputValue == undefined) { inputValue = ''; }
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }
                        return capitalized;
                    }
                    modelCtrl.$parsers.push(capitalize);
                    capitalize(scope[attrs.ngModel]); // capitalize initial value
                }
            };
        });
})();