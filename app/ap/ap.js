(function(){
    "use strict";
    
    angular
        .module("mifel")
        .controller("apCtrl", apCtrl);
        
    apCtrl.$inject = ["$mdDialog", "Auth", "$firebaseObject", "$firebaseArray", "comunFcty", "apService", "$scope", "$http", "$window", "$interval", "$timeout", "$q"];

    function apCtrl( $mdDialog, Auth, $firebaseObject, $firebaseArray, comunFcty, apService, $scope, $http, $window, $interval, $timeout, $q) {
        var ap = this;
        
        /*funciones*/
        ap.cotizar = cotizar;
        ap.guarda = guarda;
        ap.continua = continua;
        ap.imprime = imprime;
        ap.enviaImprimir = enviaImprimir;
        ap.validaEdad = validaEdad;
        ap.updateCoberturasYDeducible = updateCoberturasYDeducible;
        ap.filtroProductos = filtroProductos;
        
        /*variables*/
        ap.online = $scope.online;
        ap.datosEconomicos = comunFcty.getDatosEconomicos();
        ap.productos = comunFcty.getProductosAp();
        ap.formasPagoCat = comunFcty.getFormasPagoAp();
        ap.configProducto = {};
        ap.valoresFormaPago = {};
        ap.deducibles = [];
        ap.loading = false;
        ap.glow = false;
        
        ap.cobMuerteAcc = 0;
        ap.cobInvalidez = 0;
        ap.cobReemGasAcc = 0;
        ap.cobReemGasFun = 0;
        ap.cobPerdidaOr = 0;
        ap.idCot = '';
        ap.userUid = '';
        ap.urlImpresion = '';
        
        ap.muestraPrima = false;
        ap.banGuardar = false;
        ap.banGuardado = false;
        ap.muestraCoberturas = false;
        ap.muestraAhorro = false;
        ap.primaTotalAnualizada = 0;
        ap.primaTotal = 0;
        ap.porcFraccionado = 0;
        ap.montoAhorro = 0;
        ap.periodosPrima = 0;
        ap.numeroSuma = numeroSuma;
        
        $scope.$on("$destroy", function() {
            ap.datosEconomicos.$destroy();
            ap.productos.$destroy();
            ap.formasPagoCat.$destroy();
        });
        
        $scope.$watch('online', function(onlineStatus) { 
            ap.online = onlineStatus;
        });
        
        function numeroSuma(oSuma) {
            return parseFloat(oSuma.suma_asegurada);
        }
        
        function cotizar(ev){
            var cotizacion = {};
            ap.muestraPrima = false;
            ap.muestraAhorro = false;
            ap.primaTotalAnualizada = 0;
            ap.primaTotal = 0;
            ap.porcFraccionado = 0;
            ap.montoAhorro = 0;
            ap.periodosPrima = 0;
            
            ap.configProducto = ap.productos.$getRecord(ap.sumaAse);
            if(validaEdad(ap.configProducto, ap.edad)){
                ap.valoresFormaPago = ap.formasPagoCat.$getRecord(ap.formaPago);
    
                document.body.scrollTop = 100;
                cotizacion = apService.cotizaPrimaTotalAp(ap.configProducto, ap.edad, ap.sexo, ap.valoresFormaPago, ap.datosEconomicos);
                if(cotizacion.primaTotal !== 0){
                    ap.banGuardar = false;
                    ap.muestraPrima = true;
                    
                    guardaAlCotizar().then(function() {
                        ap.periodosPrima = cotizacion.periodos;
                        ap.primaNeta = cotizacion.primaNeta;
                        if(cotizacion.periodos!==1){
                             ap.muestraAhorro = true;
                             ap.montoAhorro = parseFloat(cotizacion.ahorro.toFixed(2));
                             ap.pagoFraccionado = cotizacion.primaTotal/cotizacion.periodos;
                             ap.primaTotal = cotizacion.primaTotal;
                             ap.primaTotalAnualizada = cotizacion.primaTotalAnualizada;
                        }else{
                            ap.primaTotal = cotizacion.primaTotal;
                            ap.pagoFraccionado = cotizacion.primaTotal;
                            ap.primaTotalAnualizada = cotizacion.primaTotalAnualizada;
                        }
                        
                        ap.loading = false;
                        $interval(function() {
                            ap.glow = ap.glow ? false : true;
                        }, 1000);
                        
                        document.body.scrollTop = 100;
                    });
                }
            }else{
                muestraMensaje("Aviso", "No es posible contratar el producto para esa suma asegurada", ev);
            }
            
            ga('send', 'event', 'AP', 'calculo', '', '2500', {
                'dimension1': "Zona 1",
                'dimension2': "Sucursal 1",
                'dimension3': "Ejecutivo 1",
                'dimension4': "h",
                'metric1': 19300,
                'metric2': 17000
            });
        }
        
        function guardaAlCotizar() {
            return $q(function(resolve, reject) {
                var cotizacion = {};
                var uid = Auth.$getAuth().uid;
                ap.loading = true;
                ap.userUid = uid;
                var usuario = $firebaseObject(firebase.database().ref("usuario/"+uid));
                usuario.$loaded().then(function() {
                    cotizacion = {
                    	"edad" : ap.edad,
                    	"genero" : ap.sexo,
                    	"producto" : ap.productos.$getRecord(ap.sumaAse).$id,
                    	"tipoProducto" : "AP",
                    	"sucursal" : usuario.sId,
                    	"zona": usuario.zId,
                    	"nombre" : ap.nombre,
                    	"apPat" : ap.apePaterno,
                    	"apMat" : ap.apeMaterno,
                    	"formaPago" : ap.formaPago,
                    	"primaTotal" : ap.primaTotal,
                    	"primaAnual": ap.primaTotalAnualizada,
                    	"ahorro" : ap.montoAhorro,
                    	"status" : 0,
                    	"empleado": usuario.empleado,
                    	"userEmail" : usuario.email,
                    	"nombreEjecutivo" : usuario.nombre,
                    	"timestamp" : comunFcty.obtieneFecha()
                    };
                    
                    usuario.$destroy();
                    
                    var cotizaciones = $firebaseArray(firebase.database().ref("cotizacion/" + uid)); 
                    cotizaciones.$add(cotizacion).then(function(ref) { 
                        var id = ref.key;
                        cotizacion.id = id;   
                        ap.idCot = cotizacion.id;
                        cotizaciones.$indexFor(id); 
                        
                        cotizaciones.$destroy();
                        
                        comunFcty.getDescSucursalZona(cotizacion.sucursal, cotizacion.zona).then(function(oDesc) {
                            ga('send', 'event', 'AP', 'cotizacion', '', parseInt(ap.primaTotal), {
                                'dimension1': oDesc.zona,
                                'dimension2': oDesc.sucursal,
                                'dimension3': cotizacion.nombreEjecutivo,
                                'dimension4': ap.sexo,
                                'dimension5': "AP",
                                'dimension6': "Cotización",
                                'metric1': ap.primaTotal,
                                'metric2': ap.primaNeta
                            }); 
                            
                            resolve(true);
                        });
                    });
                });
            });
            
        }
        
        function guarda(ev){
            enviaImprimir(ev);
        }
        
        function continua(){
            ap.loading = true;
            var objCotizacion = $firebaseObject(firebase.database().ref("cotizacion/"+ap.userUid+"/"+ap.idCot));
             objCotizacion.$loaded().then(function(ref) {
                 ap.loading = false;
                 objCotizacion.uid = ap.userUid;
                comunFcty.complementaDatos(objCotizacion);
            });
        }
        
        function enviaImprimir(ev){
            var objImpresion = {};
            var objCotizacion = $firebaseObject(firebase.database().ref("cotizacion/"+ap.userUid+"/"+ap.idCot));
            ap.loading = true;
            objCotizacion.$loaded().then(function(ref) {
                var prodImpresion = angular.extend({}, {}, ap.configProducto);
                objImpresion.uid = ap.userUid;
                objImpresion.cotizacion = objCotizacion;
                objImpresion.cotizacion.id = objImpresion.cotizacion.$id;
                objImpresion.producto = prodImpresion;
                objImpresion.producto.id = ap.configProducto.$id;
                objImpresion.formaPago = ap.valoresFormaPago;
                objImpresion.formaPago.id = ap.valoresFormaPago.$id;
                delete(objImpresion.producto.configuraciones);
                var config = {
                                headers : {
                                    'Content-Type': 'application/json'
                                }
                             };
                $http.post('https://gnp-mifel-firebase.appspot.com/_ah/api/emiteEndopoints/v1/emiteCotizacion', objImpresion, config)
                    .success(function (data, status, headers, config) {
                        ap.loading = false;
                        ap.urlImpresion = data;
                        muestraMensaje('Éxito', 'Su cotización se ha guardado con éxito', ev);
                        ap.banGuardar = true;
                        ap.banGuardado = true;
                    })
                    .error(function (data, status, header, config) {
                       console.log( "Data: " + data +
                                    "status: " + status +
                                    "headers: " + header +
                                    "config: " + config);
                    });
                });
        }
        
        function imprime(ev){
            $timeout(function() {
                if(ap.urlImpresion.fileURL != undefined) {
                    $window.open(ap.urlImpresion.fileURL);
                } else {
                    muestraMensaje("Error", ap.urlImpresion.error.error[0], ev);
                }                
            }, 500);
        }
        
        function updateCoberturasYDeducible(){
            //inicializa la lista de deducibles
            ap.deducibles = [];
            //obtiene los montos de sumas por coberturas basicas
            ap.cobMuerteAcc = ap.productos.$getRecord(ap.sumaAse).muerte_acc;
            ap.cobInvalidez = ap.productos.$getRecord(ap.sumaAse).invalidez;
            ap.cobReemGasAcc = ap.productos.$getRecord(ap.sumaAse).reembolso_acc;
            ap.cobReemGasFun = ap.productos.$getRecord(ap.sumaAse).reembolso_fun;
            ap.cobPerdidaOr = ap.productos.$getRecord(ap.sumaAse).perdidas_org;
            //se recarga deducible
            ap.deducible = ap.productos.$getRecord(ap.sumaAse).deducible;
            
            ap.muestraCoberturas = true;
        }
        
        function filtroProductos(item){
            return item.activo; 
        }
        
        function validaEdad(configProducto, edad){
            var ban = true;
            if(edad >= 70){
                if(configProducto.suma_asegurada !== "200000"){
                    ban = false;
                }
            }
            return ban;
        }
        
        function muestraMensaje(titulo, mensaje,ev){
             $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title(titulo)
                .textContent(mensaje)
                .ok('Ok')
                .targetEvent(ev)
            );
        }
        
    }
})();