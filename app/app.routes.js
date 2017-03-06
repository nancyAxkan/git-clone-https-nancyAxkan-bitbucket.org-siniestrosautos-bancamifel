(function(){
    "use strict";

    angular
        .module("mifel")
        .config(ruteo)
        .run(checkAuth)
        
        checkAuth.$inject = ['$rootScope', '$state', 'Auth'];
        
        function checkAuth($rootScope, $state, Auth) {
            $rootScope.$on("$stateChangeSuccess", function(event, toState) {
                switch (toState.url) {
                    case "/inicio":
                        ga('set', 'page', '/inicio');
                        ga('send', 'pageview');
                        break;
                    case "/vida":
                        ga('set', 'page', '/vida');
                        ga('send', 'pageview');
                        break;
                    case "/complementar-datos-vida":
                        ga('set', 'page', '/complementar-datos-vida');
                        ga('send', 'pageview');
                        break;
                    case "/accidentes-personales":
                        ga('set', 'page', '/accidentes-personales');
                        ga('send', 'pageview');
                        break;
                    case "/complementar-datos":
                        ga('set', 'page', '/complementar-datos');
                        ga('send', 'pageview');
                        break;
                }

            });
            
            $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error){
               if (error === "AUTH_REQUIRED"){
                   // User isn’t authenticated
                   $state.transitionTo("/");
                   event.preventDefault(); 
               }
            });
        }
        
        ruteo.$inject = ['$stateProvider', '$urlRouterProvider', 'AuthProvider'];
        function ruteo($stateProvider, $urlRouterProvider, Auth) {
            $urlRouterProvider.when('', '/');

            $stateProvider
                .state('/', {
                    url: '/',
                    title: 'Login',
                    views: {
                        'principal': {
                            templateUrl: "app/login/login.tpl.html",
                            controller: "loginCtrl",
                            controllerAs: 'lg'
                        }
                    }
                }).state('inicio', {
                    url: '/inicio',
                    title: 'Inicio',
                    views: {
                        'principal': {
                            templateUrl: "app/inicio/inicio.tpl.html",
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "inicioCtrl",
                            controllerAs: 'ic'
                        }
                    }
                }).state('vida', {
                    url: '/vida',
                    title: 'Vida',
                    views: {
                        'principal': {
                            templateUrl: 'app/vida/vida.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "vidaCtrl",
                            controllerAs: 'vida'
                        }
                    }
                }).state('/accidentes-personales', {
                    url: '/accidentes-personales',
                    title: 'Accidentes Personales',
                    views: {
                        'principal': {
                            templateUrl: 'app/ap/ap.tpl.html',
                            resolve: {
                                "autenticacion":autenticacion
                            },
                            controller: "apCtrl",
                            controllerAs: 'ap'
                        }
                    }
                }).state('/sucursales', {
                    url: '/sucursales',
                    title: 'Sucursales',
                    views: {
                        'principal': {
                            templateUrl: 'app/sucursales/sucursales.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "sucursalesCtrl",
                            controllerAs: 'vm'
                        }
                    }
                }).state('/zonas', {
                    url: '/zonas',
                    title: 'Zonas',
                    views: {
                        'principal': {
                            templateUrl: 'app/zonas/zonas.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "zonasCtrl",
                            controllerAs: 'vm'
                        }
                    }
                }).state('/mis-operaciones', {
                    url: '/mis-operaciones',
                    title: 'Mis operaciones',
                    views: {
                        'principal': {
                            templateUrl: 'app/cotizacion/mis_cotizaciones.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "misCotizacionesCtrl",
                            controllerAs: 'mc'
                        }
                    }
                }).state('/complementar-datos', {
                    url: '/complementar-datos',
                    title: 'Complementar datos',
                    views: {
                        'principal': {
                            templateUrl: 'app/emisionAP/emisionAp.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "emisionApCtrl",
                            controllerAs: "ec"
                        }
                    }
                }).state('/complementar-datos-vida', {
                    url: '/complementar-datos-vida',
                    title: 'Complementar datos',
                    views: {
                        'principal': {
                            templateUrl: 'app/emisionVida/emisionVida.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "emisionVidaCtrl",
                            controllerAs: "evc"
                        }
                    }
                }).state('/usuarios', {
                    url: '/usuarios',
                    title: 'Usuarios',
                    views: {
                        'principal': {
                            templateUrl: 'app/usuarios/usuarios.tpl.html',
                            resolve: {
                                "autenticacion": autenticacion
                            },
                            controller: "usuariosCtrl",
                            controllerAs: 'vm'
                        }
                    }
                }).state("productos", {
                    url: "/productos",
                    title: 'Productos',
                    views: {
                        'principal': {
                            templateUrl: 'app/productos/productos.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'productosCtrl',
                            controllerAs: 'vm'
                        }
                    }
                }).state("log", {
                    url: "/log",
                    title: 'Log',
                    views: {
                        'principal': {
                            templateUrl: 'app/log/log.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'logCtrl',
                            controllerAs: 'vm'
                        }
                    }
                }).state("caducar", {
                    url: "/caducar",
                    title: 'Caducar',
                    views: {
                        'principal': {
                            templateUrl: 'app/caducar/caducar.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'caducarCtrl',
                            controllerAs: 'cd'
                        }
                    }
                }).state("sesiones", {
                    url: "/sesiones",
                    title: 'Sesiones',
                    views: {
                        'principal': {
                            templateUrl: 'app/sesiones/sesiones.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'sesionesCtrl',
                            controllerAs: 'vm'
                        }
                    }
                }).state("repProduccion", {
                    url: "/repproduccion",
                    title: 'Reporte de Producción',
                    views: {
                        'principal': {
                            templateUrl: 'app/repProduccion/repProduccion.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'repProduccionCtrl',
                            controllerAs: 'vm'
                        }
                    }
                }).state("repBateo", {
                    url: "/repbateo",
                    title: 'Reporte de Bateo',
                    views: {
                        'principal': {
                            templateUrl: 'app/repBateo/repBateo.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'repBateoCtrl',
                            controllerAs: 'vm'
                        }
                    }
                }).state("repCobranza", {
                    url: "/repcobranza",
                    title: 'Reporte de Cobranza',
                    views: {
                        'principal': {
                            templateUrl: 'app/repCobranza/repCobranza.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'repCobranzaCtrl',
                            controllerAs: 'vm'
                        }
                    }
                }).state("repUdi", {
                    url: "/repudi",
                    title: 'Reporte de UDI',
                    views: {
                        'principal': {
                            templateUrl: 'app/repUdi/repUdi.tpl.html',
                            resolve: {
                                'autenticacion': autenticacion
                            },
                            controller: 'repUdiCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });

            function autenticacion(){
                return Auth.$get().$requireSignIn();
            }
        }

})();

(function() {
    "use strict";
    
    angular
        .module("mifel")
        .config(movilCfg);
        
    movilCfg.$inject = ["$mdGestureProvider"];
    
    function movilCfg($mdGestureProvider) {
        $mdGestureProvider.skipClickHijack();
    }
})();

(function() {
    "use strict";
    
    angular
        .module("mifel")
        .config(fechaCfg);
        
    fechaCfg.$inject = ["$mdDateLocaleProvider"];
    
    function fechaCfg($mdDateLocaleProvider) {
        $mdDateLocaleProvider.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        $mdDateLocaleProvider.shortMonths = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        
        $mdDateLocaleProvider.formatDate = function(oDate) {
            var sDate = "";
            
            if (oDate) {
                sDate = oDate.getDate() + "/" + (oDate.getMonth() + 1) + "/" + oDate.getFullYear();
            }
            
            return sDate;
        }
        
        $mdDateLocaleProvider.parseDate = function(dateString) {
            try {
                var fecha = dateString.split("/")
                var oFecha = new Date();
                if (fecha.length > 2) {
                    oFecha = new Date(fecha[2], Number(fecha[1] - 1), fecha[0]);
                }
                
                return oFecha; 
            } catch(d) {
                
            }
        };
    }
})();