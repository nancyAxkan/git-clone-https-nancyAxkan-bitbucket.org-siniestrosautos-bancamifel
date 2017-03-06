(function () {
    "use strict";

    angular
        .module("mifel")
        .service("csvSrvc", csvSrvc);

    csvSrvc.$inject = ['$rootScope','$firebaseObject', '$firebaseArray', '$mdDialog', '$q'];
    function csvSrvc($rootScope, $firebaseObject, $firebaseArray, $mdDialog, $q) {
        var vm = this;
        vm.exportar = exportar;
        vm.exportarExcel = exportarExcel;
        
        function exportar(oParametros){
            return $q(function(resolve, reject) {
                if(Object.keys(oParametros).length > 0) {
                    var aCsv = [],
                        columnas = "operacion|tipoProducto|descripcionZona|descripcionSucursal|empleado|nombreEjecutivo|numeroReferencia|apPat|apMat|nombre|edad|genero|formaPago|primaTotal|timestamp|userEmail|coberturas|emision|emision_cobranza",
                        aCompleto = [];
                        
                    aCompleto.push("operacion|tipoProducto|descripcionZona|descripcionSucursal|empleado|nombreEjecutivo|numeroReferencia|apPat|apMat|nombre|edad|genero|formaPago|primaTotal|timestamp|userEmail|coberturas|emision_solicitante_apPat|emision_solicitante_apMat|emision_solicitante_nombre|emision_solicitante_fechaNac|emision_solicitante_genero|emision_solicitante_edad|emision_solicitante_estadoCiv|emision_solicitante_nacionalidad|emision_solicitante_ciudadNacimiento|emision_solicitante_rfc|emision_solicitante_curp|emision_solicitante_mifel|emision_solicitante_profesion|emision_domicilio_calle|emision_domicilio_noExterior|emision_domicilio_noInterior|emision_domicilio_colonia|emision_domicilio_ciudad|emision_domicilio_municipio|emision_domicilio_estado|emision_domicilio_cp|emision_domicilio_telefono|emision_domicilio_telefonoOficina|emision_domicilio_email|emision_solicitante_calle|emision_solicitante_noExterior|emision_solicitante_noInterior|emision_solicitante_colonia|emision_solicitante_municipio|emision_solicitante_estado|emision_solicitante_cp|emision_solicitante_telefonoParticular|emision_solicitante_telefonoOficina|emision_solicitante_email|emision_solicitante_profesion|emision_solicitante_rfc|emision_solicitante_trabajoGobierno|emision_solicitante_Dependencia|emision_solicitante_cargo|emision_solicitante_fuma|emision_solicitante_padecimientos|emision_solicitante_nexosDelincuencia|emision_contratante_nexosDelincuencia|emision_contratante_apPat|emision_contratante_apMat|emision_contratante_nombre|emision_contratante_genero|emision_contratante_rfc|emision_contratante_curp|emision_contratante_fiel|emision_contratante_mifel|emision_contratante_calle|emision_contratante_noExterior|emision_contratante_noInterior|emision_contratante_colonia|emision_contratante_ciudad|emision_contratante_municipio|emision_contratante_estado|emision_contratante_cp|emision_contratante_telefono|emision_contratante_email|emision_contratante_trabajoGobierno|emision_contratante_Dependencia|emision_contratante_cargo|emision_plan_fechaInicio|emision_plan_fechaFin|emision_plan_plan|emision_plan_sumaAseg|emision_plan_deducible|emision_plan_coberturasbasicas_reGMMaccid|emision_plan_coberturasbasicas_invalidez|emision_plan_coberturasbasicas_muerteAcc|emision_plan_coberturasbasicas_reGMMFun|emision_plan_coberturasbasicas_perdidas|emision_plan_formaPago|emision_plan_diba|emision_plan_ima|emision_plan_ise|emision_plan_tarifa_primaAnual|emision_plan_tarifa_primaTotal|emision_plan_tarifa_primaTotalAnualizada|emision_plan_tarifa_primaNeta|emision_beneficiarios|emision_beneficiariosContingentes|emision_consentimiento_contratante|emision_consentimiento_solicitanteTitular|emision_cobranza_viaPago|emision_cobranza_titular|emision_cobranza_nombreTitular|emision_cobranza_parentescoTitular|emision_cobranza_tarjetaObligatoria_banco|emision_cobranza_tarjetaObligatoria_numero|emision_cobranza_tarjetaObligatoria_mesExpiracion|emision_cobranza_tarjetaObligatoria_agnoExpiracion|emision_cobranza_tarjetaOpcional_banco|emision_cobranza_tarjetaOpcional_numero|emision_cobranza_tarjetaOpcional_mesExpiracion|emision_cobranza_tarjetaOpcional_agnoExpiracion|emision_cobranza_clabe_banco|emision_cobranza_clabe_numeroClabe\n")
                    
                    angular.forEach(oParametros, function(oRegistro) {
                        var aColumnas = columnas.split("|");
                        
                        angular.forEach(aColumnas, function(sColumna) {
                            if (sColumna == "coberturas") {
                                aCsv.push(csvCoberturas(oRegistro[sColumna]));
                            } else if (sColumna == "emision") {
                                if (angular.isObject(oRegistro[sColumna])) {
                                    aCsv.push(csvEmision(oRegistro[sColumna]));
                                }
                                
                            } else if (sColumna == "emision_cobranza") {
                                if (angular.isObject(oRegistro[sColumna])) {
                                    aCsv.push(csvEmisionCobranza(oRegistro[sColumna]));
                                }
                                
                            } else if ( sColumna == "ahorro" || sColumna == "pagoFraccionado" || sColumna == "primaAnual" || sColumna == "primaDIBA" || sColumna == "primaIMA" || sColumna == "primaTotal" ) {
                                aCsv.push(formatNumber(oRegistro[sColumna]));
                            } else if ( sColumna == "formaPago" ) {
                                aCsv.push(oRegistro["formaPagoDesc"]);
                            } else {
                                aCsv.push(oRegistro[sColumna]);
                            }
                            
                            aCsv.push("|");
                        });
                        
                        aCsv.push("\n");
                    });
                    
                    aCompleto.push(aCsv.join(""));
                    
                    csvDescarga(aCompleto.join(""));
                    resolve("Descarga de csv completa");
                } else {
                    reject("Sin datos para procesar");
                }
            }); 
        }
        
        function formatNumber(oNumber) {
            if (angular.isDefined(oNumber)) {
                return Number(oNumber).toFixed(2);
                //return Number(oNumber.toString().match(/^\d+(?:\.\d{0,2})?/));
            } else {
                return "";
            }
        }
        
        function formatString(oString) {
            if (angular.isDefined(oString)) {
                return oString.replace(/,/g, "");
            } else {
                return "";
            }
        }
        
        function csvCoberturas(oCoberturas) {
            var aAdicionales = [];
            
            if (angular.isObject(oCoberturas) && angular.isObject(oCoberturas.adicionales)) {
                angular.forEach(oCoberturas.adicionales, function(oAdicional) {
                    aAdicionales.push(oAdicional.cobertura);
                    aAdicionales.push("-")
                });
            }
            
            return aAdicionales.join("");
        }
        
        function csvEmision(oEmision) {
            var aDatosEmision = [];
            
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.apPat); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.apMat); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.nombre); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.fechaNac); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.genero); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.edad); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.estadoCiv); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.nacionalidad)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.ciudadNacimineto)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.rfc); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.curp); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.mifel); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.profesion); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(formatString(oEmision.datosDomicilio.calle)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(oEmision.datosDomicilio.noExterior); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(oEmision.datosDomicilio.noInterior); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(formatString(oEmision.datosDomicilio.colonia)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(formatString(oEmision.datosDomicilio.ciudad)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(formatString(oEmision.datosDomicilio.municipio)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(formatString(oEmision.datosDomicilio.estado)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(oEmision.datosDomicilio.cp); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(oEmision.datosDomicilio.telefono); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(oEmision.datosDomicilio.telefonoOficina); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosDomicilio)) { aDatosEmision.push(oEmision.datosDomicilio.email); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.calle)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.noExterior); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.noInterior); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.colonia)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.municipio)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.estado)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.cp); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.telefonoParticular); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.telefonoOficina); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.email); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(formatString(oEmision.datosSolicitante.profesion)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.rfc); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push((oEmision.datosSolicitante.Dependencia) ? ("si") : ("no")); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.Dependencia); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante.cargo); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSaludSolicitante)) { aDatosEmision.push((oEmision.datosSaludSolicitante.fuma == "1") ? ("si") : ("no")); }
            aDatosEmision.push("|");
            aDatosEmision.push("no"); // Padecimientos
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosNexos)) { aDatosEmision.push(oEmision.datosNexos.solicitante); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosNexos)) { aDatosEmision.push(oEmision.datosNexos.contratante); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.apPat); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.apMat); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.nombre); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.genero); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.rfc); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.curp); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.fiel); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.mifel); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(formatString(oEmision.datosContratante.calle)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.noExterior); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.noInterior); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(formatString(oEmision.datosContratante.colonia)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(formatString(oEmision.datosContratante.ciudad)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(formatString(oEmision.datosContratante.municipio)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(formatString(oEmision.datosContratante.estado)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.cp); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.telefono); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.email); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push((oEmision.datosContratante.Dependencia) ? ("si") : ("no")); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.Dependencia); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosContratante)) { aDatosEmision.push(oEmision.datosContratante.cargo); }
            aDatosEmision.push("|");
            if (angular.isDefined(oEmision.fechaInicioVigencia)) { aDatosEmision.push(oEmision.fechaInicioVigencia); }
            aDatosEmision.push("|");
            if (angular.isDefined(oEmision.fechaFinVigencia)) { aDatosEmision.push(oEmision.fechaFinVigencia); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(oEmision.datosPlan.plan); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(oEmision.datosPlan.sumaAseg); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(oEmision.datosPlan.deducible); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan) && angular.isObject(oEmision.datosPlan.coberturasBasicas)) { aDatosEmision.push(oEmision.datosPlan.coberturasBasicas.accid); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan) && angular.isObject(oEmision.datosPlan.coberturasBasicas)) { aDatosEmision.push(oEmision.datosPlan.coberturasBasicas.invalidez); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan) && angular.isObject(oEmision.datosPlan.coberturasBasicas)) { aDatosEmision.push(oEmision.datosPlan.coberturasBasicas.muertAcc); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan) && angular.isObject(oEmision.datosPlan.coberturasBasicas)) { aDatosEmision.push(oEmision.datosPlan.coberturasBasicas.reGMMFun); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan) && angular.isObject(oEmision.datosPlan.coberturasBasicas)) { aDatosEmision.push(oEmision.datosPlan.coberturasBasicas.perdidas); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(oEmision.datosPlan.formaPago); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push((oEmision.datosPlan.diba) ? (formatNumber(oEmision.datosPlan.sumaAseg)) : ("0")); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push((oEmision.datosPlan.ima) ? (formatNumber(oEmision.datosPlan.sumaAseg)) : ("0")); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push((oEmision.datosPlan.ise) ? (formatNumber(oEmision.datosPlan.sumaAseg)) : ("0")); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(formatNumber(oEmision.datosPlan.tarifa.primaAnual)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(formatNumber(oEmision.datosPlan.tarifa.primaTotal)); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosPlan)) { aDatosEmision.push(formatNumber(oEmision.datosPlan.tarifa.primaTotalAnualizada)); }
            aDatosEmision.push("|");
            //PrimaNeta por producto
            if (angular.isObject(oEmision.datosPlan)) { 
                if(oEmision.tipoProducto == "AP") { aDatosEmision.push(formatNumber(oEmision.datosPlan.tarifa.primaNeta)); }
                if(oEmision.tipoProducto == "VIDA") { aDatosEmision.push(formatNumber(oEmision.datosPlan.tarifa.primaAnual)); }
            }
            aDatosEmision.push("|");
            
            // Beneficiarios
            if (angular.isObject(oEmision.datosBeneficiarios)) {
                angular.forEach(oEmision.datosBeneficiarios, function(oBeneficiario) {
                    aDatosEmision.push(oBeneficiario.apPat);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.apMat);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.nombre);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.parentesco);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.porcentaje);
                    aDatosEmision.push("-");
                });
            }
            
            aDatosEmision.push("|");
            // Beneficiarios contingentes
            if (angular.isObject(oEmision.datosBeneficiariosContingentes)) {
                angular.forEach(oEmision.datosBeneficiariosContingentes, function(oBeneficiario) {
                    aDatosEmision.push(oBeneficiario.apPat);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.apMat);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.nombre);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.fechaNacimiento);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.parentesco);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.perteneceContingente);
                    aDatosEmision.push(" ");
                    aDatosEmision.push(oBeneficiario.porcentaje);
                    aDatosEmision.push("-");
                });
            }
            
            
            
            
            /*
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosSolicitante)) { aDatosEmision.push(oEmision.datosSolicitante["pais"]); }
            
            */
            // Consentimiento
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosConsentimiento)) { aDatosEmision.push(oEmision.datosConsentimiento.contratante); }
            aDatosEmision.push("|");
            if (angular.isObject(oEmision.datosConsentimiento)) { aDatosEmision.push(oEmision.datosConsentimiento.solicitanteTitular); }
            /*
            // Salud

            */
            
            
            return aDatosEmision.join("");
        }

        function csvEmisionCobranza(oEmisionCobranza) {
            var aDatosEmisionCobranza = [];
            
            if (angular.isObject(oEmisionCobranza.datosCobranza)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.viaPago); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.titular); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.nombreTitular); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.parentescoTitular); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaObligatoria)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaObligatoria.banco); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaObligatoria)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaObligatoria.numero); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaObligatoria)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaObligatoria.mesExpiracion); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaObligatoria)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaObligatoria.agnoExpiracion); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaOpcional)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaOpcional.banco); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaOpcional)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaOpcional.numero); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaOpcional)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaOpcional.mesExpiracion); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.tarjetaOpcional)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.tarjetaOpcional.agnoExpiracion); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.datosClabe)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.datosClabe.banco); }
            aDatosEmisionCobranza.push("|");
            if (angular.isObject(oEmisionCobranza.datosCobranza) && angular.isObject(oEmisionCobranza.datosCobranza.datosClabe)) { aDatosEmisionCobranza.push(oEmisionCobranza.datosCobranza.datosClabe.numeroClabe); }
            
            return aDatosEmisionCobranza.join("");
        }
        
        function enviarExcel(sTabla) {
            var tmpElemento = document.createElement('a');
            var data_type = 'data:application/vnd.ms-excel';
            
            sTabla = sTabla.replace(/ /g, '%20');
            sTabla = sTabla.replace(/á/g, '&aacute;');
            sTabla = sTabla.replace(/é/g, '&eacute;');
            sTabla = sTabla.replace(/í/g, '&iacute;');
            sTabla = sTabla.replace(/ó/g, '&oacute;');
            sTabla = sTabla.replace(/ú/g, '&uacute;');
            
            sTabla = sTabla.replace(/Á/g, '&Aacute;');
            sTabla = sTabla.replace(/É/g, '&Eacute;');
            sTabla = sTabla.replace(/Í/g, '&Iacute;');
            sTabla = sTabla.replace(/Ó/g, '&Oacute;');
            sTabla = sTabla.replace(/Ú/g, '&Uacute;');
            
            sTabla = sTabla.replace(/Ñ/g, '&Ntilde;');
            sTabla = sTabla.replace(/ñ/g, '&ntilde;');
            
            
            tmpElemento.href = data_type + ', ' + '<style>table, th, td {border-collapse: collapse;border: 1px solid black;  mso-number-format:"\@";}</style>' + sTabla;
            tmpElemento.download = 'export.xls';
            tmpElemento.click();
        }

        function csvDescarga(content) {
            var renglones = content.split("\n");
            var tablaString = "";
            
            angular.forEach(renglones, function(renglon) {
                
                var fila = renglon.split("|");
                tablaString += "<tr><td>"+fila.join("</td><td>") + "</td></tr>";
 
            });
            
            enviarExcel("<table>"+tablaString+"</table>");
            
            /*var fileName = 'export.csv'
            var mimeType = 'text/csv';
            
            var a = document.createElement('a');
            
            if (navigator.msSaveBlob) { // IE10
                return navigator.msSaveBlob(new Blob([content], { type: mimeType }),     fileName);
            } else if ('download' in a) { //html5 A[download]
                a.href = 'data:' + mimeType + ',' + encodeURIComponent(content);
                a.setAttribute('download', fileName);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                return true;
            } else { //do iframe dataURL download (old ch+FF):
                var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                window.open('data:application/vnd.ms-excel' + encodeURIComponent(content), "export.csv"); 

            }*/
        }
        
        function exportarExcel(aDatos, aConfig) {
            var aFilas = [], aEncabezado = [];
            
            aEncabezado.push("<tr>");
            angular.forEach(aConfig, function(vConfig, kConfig) {
                aEncabezado.push("<td>")
                aEncabezado.push(vConfig.titulo);
                aEncabezado.push("</td>")
            });
            aEncabezado.push("</tr>");
            
            angular.forEach(aDatos, function(vDatos, kDatos) {
                aFilas.push("<tr>");
                
                angular.forEach(aConfig, function(vConfig, kConfig) {
                    aFilas.push("<td>")
                    aFilas.push(vDatos[kConfig]);
                    aFilas.push("</td>")
                });
                
                aFilas.push("</tr>");
            });
            
            enviarExcel("<table>"+ aEncabezado.join("") + aFilas.join("") +"</table>");
        }
    
        
        ///////////////////////////////////////////////////

        ///////////////////////////////////////////////////
        
    }
})();
