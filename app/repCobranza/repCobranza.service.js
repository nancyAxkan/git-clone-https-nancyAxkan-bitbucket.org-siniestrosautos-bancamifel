(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("repCobranzaSrvc", repCobranzaSrvc);
        
    repCobranzaSrvc.$inject = ["$q"];
    
    function repCobranzaSrvc($q) {
        var vm = this;
        
        vm.emisiones = [];
        
        vm.getEmisiones = getEmisiones;
        
        function getBanco(row) {
            var sBanco = "";
            
            if (row.datosCobranza.datosClabe) {
                sBanco = row.datosCobranza.datosClabe.banco;
            }
            
            if (row.datosCobranza.tarjetaObligatoria) {
                sBanco = row.datosCobranza.tarjetaObligatoria.banco;
            }
            
            return sBanco;
        }
        
        function getNumeroCuenta(row) {
            var sCuenta = "";
            
            if (row.datosCobranza.datosClabe) {
                sCuenta = row.datosCobranza.datosClabe.numeroClabe;
            }
            
            if (row.datosCobranza.tarjetaObligatoria) {
                sCuenta = row.datosCobranza.tarjetaObligatoria.numero;
            }
            
            return sCuenta;
        }
        
        function getEmisiones() {
            return $q(function(resolve, reject) {
                $q.all([
                    firebase.database().ref("cotizacion").once("value"),
                    firebase.database().ref("emision").once("value"),
                    firebase.database().ref("emision_cobranza").once("value"),
                    firebase.database().ref("sucursal").once("value"),
                    firebase.database().ref("zona").once("value"),
                    firebase.database().ref("producto").once("value")
                ]).then(function(aResultados){
                    var cotizaciones = [], emisiones = [], cobranza = [], sucursales = [], zonas = [], productos = [];
                    
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
                    
                    //cobranza
                    angular.forEach(aResultados[2].val(), function(value, key) {
                        value.idCotizacion = key;
                        cobranza.push(value);
                    });
                    
                    //sucursales
                    angular.forEach(aResultados[3].val(), function(value, key) {
                        sucursales.push({ "sucursal": key, "descripcionSucursal": value.descripcion });
                    });
                    
                    //zonas
                    angular.forEach(aResultados[4].val(), function(value, key) {
                        zonas.push({ "zona": key, "descripcionZona": value.descripcion });
                    });
                    
                    //productos
                    angular.forEach(aResultados[5].val(), function(value, key) {
                        productos.push({ "producto": key, "descripcionProducto": value.descripcion });
                    });
                    
                   var resultado = new jinqJs()
                        .from(cotizaciones)
                        .join(emisiones)
                            .on("idCotizacion")
                        .join(cobranza)
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
                                "recibo": "",
                                "inicioRecibo": "",
                                "finRecibo": "",
                                "primaNeta": row.primaAnual,
                                "derechos": (row.tipoProducto == "AP") ? (row.datosPlan.tarifa.derechoPoliza) : (""),
                                "primaTotal": row.primaTotal,
                                "fechaEnvio": "",
                                "fechaPago": "",
                                "planPago": row.datosPlan.formaPago,
                                "respuestaBanco": "",
                                "motivoRechazo": "",
                                "banco": getBanco(row),
                                "tipoTarjeta": getNumeroCuenta(row),
                                "numeroTarjeta": getNumeroCuenta(row),
                                "clienteMifel": row.datosSolicitante.mifel,
                                "contratante": row.datosContratante.nombre + " " + row.datosContratante.apPat + " " + row.datosContratante.apMat,
                                "tipoPersona": "Física",
                                "rfcContratante": row.datosContratante.rfc,
                                "fechaInicioVigencia": row.fechaInicioVigencia,
                                "fechaFinVigencia": row.fechaFinVigencia,
                                "renovacion": "NO",
                                "estatus": "VIGENTE",
                                "origenPoliza": "EMISIÓN NUEVA",
                                "correoElectronico": row.datosContratante.email,
                                "telefono": row.datosContratante.telefono
                            };
                        });
                    
                    resolve(resultado); 
                });
            });
        }
    }
})();