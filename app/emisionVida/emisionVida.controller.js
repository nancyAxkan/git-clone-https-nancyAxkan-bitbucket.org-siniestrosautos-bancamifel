(function() {
    "use strict";

    angular
        .module("mifel")
        .controller("emisionVidaCtrl", emisionVidaCtrl);

    emisionVidaCtrl.$inject = ["Auth", "comunFcty", "emisionVidaSrvc", "$q", "$scope", "$mdDialog", "$firebaseArray", "observacionesSrvc", "$location", "$anchorScroll", "$window", "$interval", "$timeout"];

    function emisionVidaCtrl(Auth, comunFcty, emisionVidaSrvc, $q, $scope, $mdDialog, $firebaseArray, observacionesSrvc, $location, $anchorScroll, $window, $interval, $timeout) {
        var evc = this;
        evc.online = $scope.online;
        evc.loading = true;
        evc.loadingEmision = false;
        evc.myDate = new Date();
        evc.maxDate = new Date(
            evc.myDate.getFullYear() - 18,
            evc.myDate.getMonth(),
            evc.myDate.getDate());
        evc.cotizacion = comunFcty.getObjetoCotizacion();
        evc.emision = {};
        evc.emision.datosSolicitante = {
            apPat: evc.cotizacion.apPat,
            apMat: evc.cotizacion.apMat,
            nombre: evc.cotizacion.nombre,
            edad: evc.cotizacion.edad,
            genero: evc.cotizacion.genero

        };
        evc.emision.fechaInicioVigencia = comunFcty.obtieneFechaInicio();
        evc.emision.fechaFinVigencia = comunFcty.obtieneFechaFin();
        evc.emision.uid = evc.cotizacion.uid;
        evc.emision.userEmail = Auth.$getAuth().email;
        evc.emision.idCot = evc.cotizacion.$id;
        evc.emision.timeStamp = comunFcty.obtieneFecha();
        evc.emision.tipoProducto = evc.cotizacion.tipoProducto;
        evc.tarifaActualizada = {};
        evc.emision.datosBeneficiarios = [];
        evc.emision.datosBeneficiariosContingentes = [];
        evc.datosBeneficiarios = {
            apPat: "",
            apMat: "",
            nombre: "",
            parentesco: "",
            porcentaje: "",
            fechaNacimiento: "",
            esContingente: false,
            perteneceContingente: ""

        };
        evc.banderaContingentes = false;
        evc.arrPorentajes = [];
        evc.glow = false;
        evc.minimoContingente = 1;
        evc.maximoContingente = 100;
        evc.inicialBeneficarios = 100;
        evc.minimoBeneficiarios = 1;
        evc.maximoBeneficiarios = 100;
        evc.agnoValidoTarjeta = new Date();
        evc.avisoCambioTarifa = avisoCambioTarifa;
        evc.cambiaViaPago = cambiaViaPago;
        evc.opcionContratantePago = opcionContratantePago;
        evc.eliminarContratante = eliminarContratante;
        evc.asignarContratante = asignarContratante;
        evc.completaDatosPlan = completaDatosPlan;
        evc.validaAgregaBeneficiario = validaAgregaBeneficiario;
        evc.validaAgregaBeneficiarioContingente = validaAgregaBeneficiarioContingente;
        evc.agregaBeneficiario = agregaBeneficiario;
        evc.agregaBeneficiarioContingente = agregaBeneficiarioContingente;
        evc.cierraBeneficiario = cierraBeneficiario;
        evc.borrarBeneficiario = borrarBeneficiario;
        evc.borrarBeneficiariosContigente = borrarBeneficiariosContigente;
        evc.borraBeneficiarioContigente = borraBeneficiarioContigente;
        evc.setPorcentajes = setPorcentajes;
        evc.emitir = emitir;
        evc.cancelarCotizacion = cancelarCotizacion;
        evc.operacionRealizada = operacionRealizada;
        evc.popEnvioPoliza = popEnvioPoliza;
        evc.validaEdadRFC = validaEdadRFC;
        //evc.anioCurso = new Date().getFullYear();
        evc.showHints = false;
        evc.errorValidaRfc = true;

        inicializar();

        $scope.$watch('online', function(onlineStatus) {
            evc.online = onlineStatus;
        });

        function validaEdadRFC(ev) {
            evc.errorValidaRfc = true;
            var RFC = ev.currentTarget.value;

            if(RFC.length >= 10) {
                var nac_anio = parseInt(RFC.substr(4,2));
                var nac_mes = parseInt(RFC.substr(6,2));
                var nac_dia = parseInt(RFC.substr(8,2));

                //Validamos año
                var anio = parseInt((new Date().getFullYear() - evc.emision.datosSolicitante.edad).toString().substr(2,2));
                if(nac_anio == anio) {

                    //Validamos mes
                    var mes = new Date().getMonth() + 1;
                    if(nac_mes <= mes) {

                        //Validamos dia
                        var dia = new Date().getUTCDate();
                        if(nac_dia <= dia) {
                            evc.errorValidaRfc = false;
                        }
                    }
                
                } else {
                    //Validamos mes
                    var mes = new Date().getMonth() + 1;
                    if(nac_mes > mes) {

                        anio--;
                        if(nac_anio == anio) {
                            evc.errorValidaRfc = false;
                        }

                    } else if(nac_mes == mes) {
                        var dia = new Date().getUTCDate();
                        if(nac_dia > dia) {
                            
                            anio--;
                            if(nac_anio == anio) {
                                evc.errorValidaRfc = false;
                            }

                        }
                    }
                }
                
                evc.showHints = evc.errorValidaRfc;
            }
            
            
            //var edad = evc.emision.datosSolicitante.edad != undefined ? ((evc.anioCurso - evc.emision.datosSolicitante.edad) + "").substr(2, 2) : false;
            //evc.showHints = (RFC.length >= 6) ? (RFC.substr(4, 2) != edad) ? true : false : false;
        }

        function cambiaViaPago() {
            if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.tarjetaObligatoria !== 'undefined') {
                delete(evc.emision.datosCobranza.tarjetaObligatoria);
            }
            if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.tarjetaOpcional !== 'undefined') {
                delete(evc.emision.datosCobranza.tarjetaOpcional);
            }
            if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.datosClabe !== 'undefined') {
                delete(evc.emision.datosCobranza.datosClabe);
            }
            if (evc.emision.datosCobranza.viaPago === "pagoRef") {
                if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.titular !== 'undefined') {
                    delete(evc.emision.datosCobranza.titular);
                }
                if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.nombreTitular !== 'undefined') {
                    delete(evc.emision.datosCobranza.nombreTitular);
                }
                if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.parentescoTitular !== 'undefined') {
                    delete(evc.emision.datosCobranza.parentescoTitular);
                }
            }
        }

        function opcionContratantePago() {
            if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.nombreTitular !== 'undefined') {
                delete(evc.emision.datosCobranza.nombreTitular);
            }
            if (typeof evc.emision.datosCobranza !== 'undefined' && typeof evc.emision.datosCobranza.parentescoTitular !== 'undefined') {
                delete(evc.emision.datosCobranza.parentescoTitular);
            }
        }

        function asignarContratante() {
            if (evc.igualSol == '1') {
                if (typeof evc.emision !== 'undefined') {
                    evc.emision.datosContratante = {};
                    evc.cargoPublicoContratante = '';
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.mifel !== 'undefined') {
                        evc.emision.datosContratante.mifel = evc.emision.datosSolicitante.mifel;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.apPat !== 'undefined') {
                        evc.emision.datosContratante.apPat = evc.emision.datosSolicitante.apPat;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.apMat !== 'undefined') {
                        evc.emision.datosContratante.apMat = evc.emision.datosSolicitante.apMat;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.nombre !== 'undefined') {
                        evc.emision.datosContratante.nombre = evc.emision.datosSolicitante.nombre;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.rfc !== 'undefined') {
                        evc.emision.datosContratante.rfc = evc.emision.datosSolicitante.rfc;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.genero !== 'undefined') {
                        evc.emision.datosContratante.genero = evc.emision.datosSolicitante.genero;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.nacionalidad !== 'undefined') {
                        evc.emision.datosContratante.nacionalidad = evc.emision.datosSolicitante.nacionalidad;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.calle !== 'undefined') {
                        evc.emision.datosContratante.calle = evc.emision.datosSolicitante.calle;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.noExterior !== 'undefined') {
                        evc.emision.datosContratante.noExterior = evc.emision.datosSolicitante.noExterior;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.cp !== 'undefined') {
                        evc.emision.datosContratante.cp = evc.emision.datosSolicitante.cp;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.pais !== 'undefined') {
                        evc.emision.datosContratante.pais = evc.emision.datosSolicitante.pais;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.estado !== 'undefined') {
                        evc.emision.datosContratante.estado = evc.emision.datosSolicitante.estado;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.municipio !== 'undefined') {
                        evc.emision.datosContratante.municipio = evc.emision.datosSolicitante.municipio;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.colonia !== 'undefined') {
                        evc.emision.datosContratante.colonia = evc.emision.datosSolicitante.colonia;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.telefonoParticular !== 'undefined') {
                        evc.emision.datosContratante.telefonoParticular = evc.emision.datosSolicitante.telefonoParticular;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.telefonoOficina !== 'undefined') {
                        evc.emision.datosContratante.telefonoOficina = evc.emision.datosSolicitante.telefonoOficina;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.email !== 'undefined') {
                        evc.emision.datosContratante.email = evc.emision.datosSolicitante.email;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.profesion !== 'undefined') {
                        evc.emision.datosContratante.profesion = evc.emision.datosSolicitante.profesion;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.noInterior !== 'undefined') {
                        evc.emision.datosContratante.noInterior = evc.emision.datosSolicitante.noInterior;
                    }
                    if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.noInterior !== 'undefined') {
                        evc.emision.datosContratante.noInterior = evc.emision.datosSolicitante.noInterior;
                    }

                    if (evc.cargoPublicoSolicitante == '1') {
                        evc.cargoPublicoContratante = '1';
                        if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.cargo !== 'undefined') {
                            evc.emision.datosContratante.cargo = evc.emision.datosSolicitante.cargo;
                        }
                        if (typeof evc.emision.datosSolicitante !== 'undefined' && typeof evc.emision.datosSolicitante.Dependencia !== 'undefined') {
                            evc.emision.datosContratante.Dependencia = evc.emision.datosSolicitante.Dependencia;
                        }
                    }
                }
            }
        }

        function eliminarContratante() {
            if (evc.igualSol == '0') {
                if (typeof evc.emision !== 'undefined') {
                    evc.emision.datosContratante = {};
                }
            }
        }

        function completaDatosPlan() {
            evc.emision.formaPagoVida = evc.emision.formaPagoVida.$getRecord(parseInt(evc.cotizacion.formaPago));
            evc.emision.productoVida = evc.emision.productoVida.$getRecord(evc.cotizacion.producto);
            if (typeof evc.cotizacion.coberturas === 'undefined') {
                evc.cotizacion.coberturas = {};
                evc.cotizacion.coberturas.adicionales = [];
            }
            evc.tarifaActualizada = emisionVidaSrvc.actualizaTarifa(
                evc.emision.productoVida,
                evc.cotizacion.edad,
                evc.emision.formaPagoVida,
                evc.emision.datosEconomicos,
                evc.cotizacion.coberturas.adicionales,
                evc.cotizacion.genero
            );

            evc.actualizo = evc.tarifaActualizada.error;

            if (!evc.tarifaActualizada.error) {
                evc.emision.datosPlan = {
                    plan: evc.emision.productoVida.descripcion,
                    sumaAseg: evc.emision.productoVida.suma_asegurada,
                    formaPago: evc.emision.formaPagoVida.texto,
                    ima: false,
                    ise: false,
                    diba: false,
                    tarifa: {
                        primaTotal: evc.tarifaActualizada.primaTotal,
                        primaAnual: evc.tarifaActualizada.primaTotalAnualizada,
                        periodos: evc.tarifaActualizada.periodos,
                        ahorro: evc.tarifaActualizada.ahorro
                    }
                };
                for (var i = 0; i < evc.cotizacion.coberturas.adicionales.length; i++) {
                    if (evc.cotizacion.coberturas.adicionales[i].cobertura === "ima") {
                        evc.emision.datosPlan.ima = true;
                    }
                    if (evc.cotizacion.coberturas.adicionales[i].cobertura === "ise") {
                        evc.emision.datosPlan.ise = true;
                    }
                    if (evc.cotizacion.coberturas.adicionales[i].cobertura === "diba") {
                        evc.emision.datosPlan.diba = true;
                    }
                }

                $interval(function() {
                    evc.glow = evc.glow ? false : true;
                }, 1000);

                var promiseActualizaTarifa = [
                    emisionVidaSrvc.actualizaCotizacion(evc.cotizacion, evc.tarifaActualizada)
                ];
                $q.all(promiseActualizaTarifa).then(function(respuesta) {
                    if (typeof respuesta !== 'undefined' && typeof respuesta[0] !== 'undefined') {
                        evc.avisoCambioTarifa();
                    }
                });

            }
        }

        function avisoCambioTarifa() {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(true)
                .title('Aviso')
                .textContent('La tarifa cotizada anteriormente fue actualizada.')
                .ariaLabel('Cambio en la tarifa de la cotización.')
                .ok('Entendido')
            );
        }

        function obtieneBeneficiarios() {
            var bBen = true;
            var sumaBen = 0;
            if (evc.emision.datosBeneficiarios.length !== 0) {
                if (evc.emision.datosBeneficiarios.length == 10) {
                    bBen = false;
                }
                else {
                    sumaBen = evc.emision.datosBeneficiarios.length;
                    for (var i = 0; i < evc.emision.datosBeneficiarios.length; i++) {
                        sumaBen = sumaBen + evc.emision.datosBeneficiarios[i].contingentes.length;
                    }
                    if (sumaBen == 10) {
                        bBen = false;
                    }
                }
            }
            return bBen;
        }

        function validaAgregaBeneficiario(ev) {
            if (obtieneBeneficiarios()) {
                evc.datosBeneficiarios = {
                    apPat: "",
                    apMat: "",
                    nombre: "",
                    parentesco: "",
                    porcentaje: "",
                    esContingente: false,
                    perteneceContingente: ""
                };
                evc.secAgrBen = true;
                if (evc.emision.datosBeneficiarios.length !== 0) {
                    evc.banderaContingentes = true;
                }
            }
            else {
                muestraMensaje("Mensaje", "Solo se pueden agregar 10 beneficiarios o beneficiarios contingentes", ev);
            }

        }

        function validaAgregaBeneficiarioContingente(indice, ev) {
            if (obtieneBeneficiarios()) {
                evc.benAdd = indice;
                evc.maximoContingente = obtieneMaximoContingente();
                evc.secAgrBenContingente = true;
                evc.datosBeneficiarios = {
                    apPat: "",
                    apMat: "",
                    nombre: "",
                    parentesco: "",
                    porcentaje: ""
                };
                $location.hash('apPaternoBeneficiarioContin');
                $anchorScroll();
            }
            else {
                muestraMensaje("Mensaje", "Solo se pueden agregar 10 beneficiarios o beneficiarios contigentes", ev);
            }
        }

        function obtieneMaximoContingente() {
            var suma = 0;
            var maximo = 100;
            for (var i = 0; i < evc.benAdd.contingentes.length; i++) {
                suma = suma + evc.benAdd.contingentes[i].porcentaje;
            }
            maximo = maximo - suma;
            return maximo;
        }

        function setPorcentajes(pertenece) {
            for (var i = 0; i < evc.arrPorentajes.length; i++) {
                if (evc.arrPorentajes[i].benefiiarioPricipal === pertenece) {
                    evc.maximoContingente = evc.arrPorentajes[i].maximo;
                    evc.minimoContingente = evc.arrPorentajes[i].minimo;
                }
            }
        }

        function agregaBeneficiarioContingente() {
            var objeto = {};
            objeto.apPat = evc.datosBeneficiarios.apPat;
            objeto.apMat = evc.datosBeneficiarios.apMat;
            objeto.nombre = evc.datosBeneficiarios.nombre;
            objeto.parentesco = evc.datosBeneficiarios.parentesco;
            objeto.porcentaje = evc.datosBeneficiarios.porcentaje;
            evc.inicialContingente = evc.inicialContingente - evc.datosBeneficiarios.porcentaje;
            evc.benAdd.contingentes.push(objeto);
            evc.cierraBeneficiario();
        }

        function agregaBeneficiario() {
            var objeto = {};

            evc.minimoBeneficiarios = 1;
            if (evc.inicialBeneficarios > 0) {
                evc.arrPorentajes.push({
                    porcentajeInicial: 100,
                    benefiiarioPricipal: evc.datosBeneficiarios.nombre + ' ' + evc.datosBeneficiarios.apPat + ' ' + evc.datosBeneficiarios.apMat,
                    minimo: 1,
                    maximo: 100
                });
                objeto.apPat = evc.datosBeneficiarios.apPat;
                objeto.apMat = evc.datosBeneficiarios.apMat;
                objeto.nombre = evc.datosBeneficiarios.nombre;
                objeto.parentesco = evc.datosBeneficiarios.parentesco;
                objeto.porcentaje = evc.datosBeneficiarios.porcentaje;
                objeto.fechaNacimiento = evc.datosBeneficiarios.fechaNacimiento.getDate() + "/" + (evc.datosBeneficiarios.fechaNacimiento.getMonth() + 1) + "/" + evc.datosBeneficiarios.fechaNacimiento.getFullYear();
                objeto.contingentes = [];
                evc.inicialBeneficarios = evc.inicialBeneficarios - evc.datosBeneficiarios.porcentaje;

                if (evc.inicialBeneficarios === 0) {
                    evc.minimoBeneficiarios = 0;
                }

                evc.emision.datosBeneficiarios.push(objeto);
            }

            evc.cierraBeneficiario();
        }

        function cierraBeneficiario() {
            evc.datosBeneficiarios.apPat = "";
            evc.datosBeneficiarios.apMat = "";
            evc.datosBeneficiarios.nombre = "";
            evc.datosBeneficiarios.parentesco = "";
            evc.datosBeneficiarios.porcentaje = "";

            evc.secAgrBen = false;
            evc.secAgrBenContingente = false;
        }

        function borrarBeneficiario(indice) {
            var j = evc.emision.datosBeneficiarios.indexOf(indice);
            evc.minimoBeneficiarios = 1;
            evc.inicialBeneficarios = evc.inicialBeneficarios + indice.porcentaje;
            evc.arrPorentajes.splice(j, 1);
            evc.emision.datosBeneficiarios.splice(j, 1);
        }

        function borrarBeneficiariosContigente(indice) {
            var k = evc.emision.datosBeneficiariosContingentes.indexOf(indice);
            for (var i = 0; i < evc.arrPorentajes.length; i++) {
                if (evc.arrPorentajes[i].benefiiarioPricipal === indice.perteneceContingente) {
                    evc.arrPorentajes[i].porcentajeInicial = evc.arrPorentajes[i].porcentajeInicial + indice.porcentaje;
                    evc.arrPorentajes[i].maximo = evc.arrPorentajes[i].porcentajeInicial;
                    evc.arrPorentajes[i].minimo = 1;
                }
            }
            evc.emision.datosBeneficiariosContingentes.splice(k, 1);
        }

        function borraBeneficiarioContigente(indiceBeneficiario, indiceContingente) {
            var i = indiceBeneficiario.contingentes.indexOf(indiceContingente);
            indiceBeneficiario.contingentes.splice(i, 1);
        }

        function estructuraBeneficiarios() {
            var sumaContingentes = 0;
            for (var i = 0; i < evc.emision.datosBeneficiarios.length; i++) {
                for (var j = 0; j < evc.emision.datosBeneficiarios[i].contingentes.length; j++) {
                    var objeto = evc.emision.datosBeneficiarios[i].contingentes[j];
                    sumaContingentes = sumaContingentes + evc.emision.datosBeneficiarios[i].contingentes[j].porcentaje;
                    objeto.perteneceContingente = evc.emision.datosBeneficiarios[i].nombre + ' ' + evc.emision.datosBeneficiarios[i].apPat + ' ' + evc.emision.datosBeneficiarios[i].apMat;
                    evc.emision.datosBeneficiariosContingentes.push(objeto);
                }
                delete(evc.emision.datosBeneficiarios[i].contingentes);
                if (sumaContingentes < 100) {
                    return false;
                }
            }
            return true;
        }

        function validaSumaContingentes() {
            for (var i = 0; i < evc.emision.datosBeneficiarios.length; i++) {
                var sumaContingentes = 0;
                if (evc.emision.datosBeneficiarios[i].contingentes.length != 0) {
                    for (var j = 0; j < evc.emision.datosBeneficiarios[i].contingentes.length; j++) {
                        sumaContingentes = sumaContingentes + evc.emision.datosBeneficiarios[i].contingentes[j].porcentaje;
                    }
                    if (sumaContingentes < 100) {
                        return false;
                    }
                }
            }
            return true;
        }

        function emitir() {
            evc.loadingEmision = true;
            delete(evc.emision.datosEconomicos);
            delete(evc.emision.formaPagoVida);
            delete(evc.emision.productoVida);
            evc.emision.mailEnvio = evc.mailEnvioPop;
            asignarContratante();
            estructuraBeneficiarios();
            var promisesEmision = [
                    emisionVidaSrvc.setEmision(evc.emision),
                    emisionVidaSrvc.setCobranza(evc.emision)
                ],
                promiseBackEnd = [
                    emisionVidaSrvc.setReferencia(evc.emision, evc.cotizacion)
                ];

            $q.all(promiseBackEnd).then(function(respuesta) {
                var dataPoliza = respuesta[0];
                $q.all(promisesEmision).then(function() {
                    evc.operacionRealizada(dataPoliza);
                });
            }, function(error) {
                evc.loadingEmision = false;
                var parentEl = angular.element(document.body);
                $mdDialog.show({
                    parent: parentEl,
                    template: '  <div layout="column" flex flex-xs layout-padding>' +
                        '   <md-toolbar class="md-warn"><div class="md-toolbar-tools"><span>Error en el servicio</span></div></md-toolbar>' +
                        '  </div>' +
                        '  <div layout="column" flex flex-xs layout-padding>' +
                        '   <p>Por favor intentelo más tarde.</p>' +
                        '  </div>' +
                        '  <div layout="column" layout-padding>' +
                        '  <md-divider> </md-divider>' +
                        '    <md-button ng-click="cerrar()" class="md-primary">' +
                        '      Cerrar' +
                        '    </md-button>' +
                        ' </div>',
                    controller: controllerDialogo
                });

                controllerDialogo.$inject = ["scope"];

                function controllerDialogo(scope) {
                    scope.cerrar = function() {
                        $mdDialog.cancel();
                    }
                }
            });

        }

        function operacionRealizada(objPoliza) {
            evc.loadingEmision = false;
            var parentEl = angular.element(document.body);

            comunFcty.getDescSucursalZona(evc.cotizacion.sucursal, evc.cotizacion.zona).then(function(oDesc) {
                ga('send', 'event', 'VIDA', 'emision', '', parseInt(evc.emision.datosPlan.tarifa.primaTotal), {
                    'dimension1': oDesc.zona,
                    'dimension2': oDesc.sucursal,
                    'dimension3': evc.cotizacion.nombreEjecutivo,
                    'dimension4': evc.cotizacion.genero,
                    'dimension5': "VIDA",
                    'dimension6': "Emisión",
                    'metric1': evc.emision.datosPlan.tarifa.primaTotal,
                    'metric2': evc.emision.datosPlan.tarifa.primaAnual
                });
            });
                
            $mdDialog.show({
                parent: parentEl,
                template: '<md-dialog aria-label="Emisión exitosa">' +
                    '     <md-toolbar>' +
                    '          <div class="md-toolbar-tools">' +
                    '               <h2>¡Emisión exitosa!</h2>' +
                    '          </div>' +
                    '     </md-toolbar>' +
                    '     <md-dialog-content>' +
                    '          <div class="md-dialog-content">' +
                    '               <p>Descarga o imprime tu póliza número {{poliza}}, en la ventana abierta.</p>' +
                    '          </div>' +
                    '     </md-dialog-content>' +
                    '     <md-dialog-actions layout="row">' +
                    '          <md-button ng-click="continuar()" class="md-primary">Terminar</md-button>' +
                    '     </md-dialog-actions>' +
                    '</md-dialog>',
                locals: {
                    poliza: objPoliza.consecutivo.noPoliza
                },
                controller: dController,
                escapeToClose: false
            });

            dController.$inject = ["scope", "poliza"];

            function dController(scopee, polizaa) {
                scopee.poliza = polizaa;
                scopee.continuar = function() {
                    $location.path("/inicio");
                    $mdDialog.cancel();
                }
            }

            $timeout(function() {
                evc.loadingEmision = false;
                $window.open(objPoliza.fileURL);
            }, 2000);
        }

        function popEnvioPoliza() {
            var parentEl = angular.element(document.body);
            if (evc.declaracionSaludSol !== '1') {
                if (validaSumaContingentes()) {
                    $mdDialog.show({
                        parent: parentEl,
                        template: '<md-dialog aria-label="Enviar documentación contractual">' +
                            '<form name="popUpEmision">' +
                            '  <div layout="column" flex flex-xs layout-padding>' +
                            '   <p style="color: #ff0000">¡Importante! La suma asegurada acumulada no debe exceder los $2,500,000 pesos en Vive </p>' +
                            '   <p>Por favor ingresar correo electrónico para envío de la documentación contractual de la póliza</p>' +
                            '   <md-divider> </md-divider>' +
                            '  </div>' +
                            '  <div layout="column" flex flex-xs layout-padding>' +
                            '    <md-input-container>' +
                            '       <label>Correo electrónico</label>' +
                            '       <input type="email" ng-model="mail" name="email" md-maxlength="50" ng-pattern="/^.+@.+\..+$/" required>' +
                            '       <div class="md-accent" ng-messages="popUpEmision.email.$error" role="alert">' +
                            '           <div class="md-accent" ng-message="required">Campo requerido.</div>' +
                            '           <div class="md-accent" ng-message="md-maxlength">Campo de 25 carácteres</div>' +
                            '           <div class="md-accent" ng-message="pattern">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>' +
                            '       </div>' +
                            '    </md-input-container>' +
                            '  </div>' +
                            '  <div layout="column" flex flex-xs layout-padding>' +
                            '  <md-dialog-actions>' +
                            '    <md-button ng-click="cancelar()" class="md-primary">' +
                            '      Cancelar' +
                            '    </md-button>' +
                            '    <md-button ng-click="continuar(mail)" ng-disabled="popUpEmision.$invalid" class="md-primary">' +
                            '      Aceptar' +
                            '    </md-button>' +
                            '   </md-dialog-actions>' +
                            ' </div>' +
                            ' </form>' +
                            '</md-dialog>',
                        controller: controllerDialogoContinuar
                    });

                    controllerDialogoContinuar.$inject = ["scope"];

                    function controllerDialogoContinuar(scopee) {
                        scopee.continuar = function(mail) {
                            evc.mailEnvioPop = mail;
                            evc.emitir();
                            $mdDialog.cancel();
                        };
                        scopee.cancelar = function() {
                            $mdDialog.cancel();
                        };
                    }
                }
                else {
                    muestraMensaje("Aviso", "Los contingentes deben completar el 100% del porcentaje");
                }
            }
            else {
                $mdDialog.show({
                    parent: parentEl,
                    template: ' <div layout="column" flex flex-xs layout-padding>' +
                        '   <md-toolbar class="md-warn"><div class="md-toolbar-tools"><span>Mensaje</span></div></md-toolbar>' +
                        '  </div>' +
                        '  <div layout="column" flex flex-xs layout-padding>' +
                        '   <p>El solicitante no cumple con los requisitos para emitir la póliza.</p>' +
                        '  </div>' +
                        '  <div layout="column" layout-padding>' +
                        '  <md-divider> </md-divider>' +
                        '    <md-button ng-click="cerrar()" class="md-primary">' +
                        '      Entendido' +
                        '    </md-button>' +
                        ' </div>',
                    controller: controllerDialogo
                });

                controllerDialogo.$inject = ["scope"];

                function controllerDialogo(scope) {
                    scope.cerrar = function() {
                        $mdDialog.cancel();
                        emisionVidaSrvc.servicioCancela(evc.cotizacion, "Cotización cancelada por cuestionario de suscripcion simplificada");
                        $location.path('/inicio');
                    };
                }
            }

        }

        function muestraMensaje(titulo, mensaje, ev) {
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

        function cancelarCotizacion() {
            observacionesSrvc.mostrarDialogo().then(function(sObservacion) {
                emisionVidaSrvc.servicioCancela(evc.cotizacion, sObservacion);
                $location.path('/vida');
            });
        }

        function inicializar() {
            document.body.scrollTop = 0;

            var promises = {
                datosEconomicos: comunFcty.getDatosEconomicos().$loaded(),
                formasPagoVida: comunFcty.getFormasPagoVida().$loaded(),
                productosVida: comunFcty.getProductosVida().$loaded()
            };

            $q.all(promises).then(function(respuesta) {
                evc.emision.datosEconomicos = respuesta.datosEconomicos;
                evc.emision.formaPagoVida = respuesta.formasPagoVida;
                evc.emision.productoVida = respuesta.productosVida;
                evc.loading = false;
                evc.completaDatosPlan();
            });
        }
    }
})();
