(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("repProduccionSrvc", repProduccionSrvc);
        
    repProduccionSrvc.$inject = ["$firebaseArray", "$rootScope", "$q"];
    
    function repProduccionSrvc($firebaseArray, $rootScope, $q) {
        var vm = this;
        
        vm.emisiones = [];
        
        vm.getEmisiones = getEmisiones;
        
        $rootScope.$on("logout", function(event, args) {
            if (vm.emisiones.$destroy) { vm.emisiones.$destroy(); }
        });
        
        function getEmisiones() {
            return $q(function(resolve, reject) {
                $q.all([
                    firebase.database().ref("cotizacion").once("value"),
                    firebase.database().ref("emision").once("value"),
                    firebase.database().ref("sucursal").once("value"),
                    firebase.database().ref("zona").once("value"),
                    firebase.database().ref("producto").once("value")
                ]).then(function(aResultados){
                    var cotizaciones = [], emisiones = [], sucursales = [], zonas = [], productos = [];
                    
                    //cotizaciones
                    angular.forEach(aResultados[0].val(), function(value, key) {
                        angular.forEach(value, function(value, key) {
                            value.idCotizacion = key;
                            cotizaciones.push(value);
                        })
                    });
                    
                    //emisiones
                    angular.forEach(aResultados[1].val(), function(value, key) {
                        angular.forEach(value, function(value, key) {
                            value.idCotizacion = key;
                            emisiones.push(value);
                        })
                    });
                    
                    //sucursales
                    angular.forEach(aResultados[2].val(), function(value, key) {
                        sucursales.push({ "sucursal": key, "descripcionSucursal": value.descripcion });
                    });
                    
                    //zonas
                    angular.forEach(aResultados[3].val(), function(value, key) {
                        zonas.push({ "zona": key, "descripcionZona": value.descripcion });
                    });
                    
                    //productos
                    angular.forEach(aResultados[4].val(), function(value, key) {
                        productos.push({ "producto": key, "descripcionProducto": value.descripcion });
                    });
                    
                   var resultado = new jinqJs()
                        .from(cotizaciones)
                        .join(emisiones)
                            .on("idCotizacion")
                        .join(sucursales)
                            .on("sucursal")
                        .join(zonas)
                            .on("zona")
                        .join(productos)
                            .on("producto")
                        .where(function(row) {
                            return (row.status == 2 || row.status == 1) && (row.descripcionSucursal != "GNP Central");
                        })
                        .select(function(row, index) {
                            return {
                                "descripcionZona": row.descripcionZona,
                                "descripcionSucursal": row.descripcionSucursal,
                                "nombreEjecutivo": row.nombreEjecutivo,
                                "empleado": row.empleado,
                                "fechaEmision": row.fechaInicioVigencia,
                                "aseguradora": "GNP",
                                "descripcionProducto": row.descripcionProducto,
                                "numeroReferencia": row.numeroReferencia,
                                "tipoMovimiento": "Emisión",
                                "clienteMifel": row.datosSolicitante.mifel,
                                "contratante": row.datosContratante.nombre + " " + row.datosContratante.apPat + " " + row.datosContratante.apMat,
                                "tipoPersona": "Física",
                                "rfcContratante": row.datosContratante.rfc,
                                "primaNeta": row.primaAnual,
                                "derechos": (row.tipoProducto == "AP") ? (row.datosPlan.tarifa.derechoPoliza) : (""),
                                "primaTotal": row.primaTotal,
                                "paquete": row.datosPlan.sumaAseg,
                                "planPago": row.datosPlan.formaPago,
                                "fechaInicioVigencia": row.fechaInicioVigencia,
                                "fechaFinVigencia": row.fechaFinVigencia,
                                "renovacion": "NO",
                                "estatus": "VIGENTE",
                                "origenPoliza": "EMISIÓN NUEVA"
                            };
                        });
                    
                    resolve(resultado); 
                });
            });
        }
    }
})();