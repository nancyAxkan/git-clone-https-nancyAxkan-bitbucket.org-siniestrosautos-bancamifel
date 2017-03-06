angular.module('mifel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/ap/ap.tpl.html',
    "<div class=\"mifel_ap\">\n" +
    "    <div layout=\"column\"  layout-align=\"center center\">\n" +
    "        <div flex>\n" +
    "            <h1>Protección Accidentes</h1>\n" +
    "        </div>\n" +
    "        <span class=\"divisor\"></span>\n" +
    "        <div flex>\n" +
    "            <h3>Protección por accidentes con las mejores coberturas.</h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <md-content class=\"md-padding\">\n" +
    "        <md-tabs md-selected=\"1\" md-dynamic-height md-border-bottom>\n" +
    "            <md-tab label=\"Más Detalles\">\n" +
    "                <md-content>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-align=\"start center\" layout-padding class=\"apoyos\">\n" +
    "                        <div flex=\"50\" hide-xs></div>\n" +
    "                        <div flex=\"50\" flex-xs=\"100\" flex-sm=\"100\">\n" +
    "                            <iframe class=\"iframe\" src=\"https://107.178.223.113/index.php/mifel-ap\"></iframe>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </md-content>\n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"Cotizador\">\n" +
    "                <md-content>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-align=\"center start\">\n" +
    "                        <div flex>\n" +
    "                            <p class=\"titulo_azul\">Tu paquete incluye los siguientes servicios:</p>\n" +
    "                            <div layout=\"column\" layout-padding>\n" +
    "                                <div>\n" +
    "                                    <md-icon md-svg-src=\"/assets/icono_check.svg\" aria-label=\"ASISTENCIA MÉDICA\"></md-icon>\n" +
    "                                    ASISTENCIA MÉDICA\n" +
    "                                </div>\n" +
    "                                <div>\n" +
    "                                    <md-icon md-svg-src=\"/assets/icono_check.svg\" aria-label=\"ASISTENCIA FITNESS\"></md-icon>\n" +
    "                                    ASISTENCIA NUTRICIONAL\n" +
    "                                </div>\n" +
    "                                <div>\n" +
    "                                    <md-icon md-svg-src=\"/assets/icono_check.svg\" aria-label=\"ASISTENCIA NUTRICIONAL\"></md-icon>\n" +
    "                                    ASISTENCIA PSICOLÓGICA\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div flex>\n" +
    "                            <div class=\"header_cotiza\">\n" +
    "                                <div class=\"titulo\">Protección Accidentes</div>\n" +
    "                                <div class=\"prima\" ng-show=\"ap.muestraPrima\">\n" +
    "                                    <span>Prima Total</span>\n" +
    "                                    <div>\n" +
    "                                        <span class=\"precio\">{{ap.primaTotal | currency}}</span>\n" +
    "                                        <span>MXN</span>\n" +
    "                                    </div>\n" +
    "                                    <span>{{ap.periodosPrima}} Pago(s) de {{ap.pagoFraccionado | currency}}</span><br>\n" +
    "                                </div>\n" +
    "                                <div class=\"plan\">\n" +
    "                                    <span ng-show=\"ap.muestraAhorro\">Pagando de forma Anual tu </span><span ng-class=\"ap.glow ? 'ahorro glow' : 'ahorro'\" ng-show=\"ap.muestraAhorro\">ahorro</span> <span ng-show=\"ap.muestraAhorro\">sería de: {{ap.montoAhorro | currency}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <form name=\"apForm\" id=\"apForm\">\n" +
    "                                <span>Datos del solicitante titular</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Apellido paterno</label>\n" +
    "                                        <input type=\"text\" required md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" name=\"apePaterno\" ng-model=\"ap.apePaterno\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.apePaterno.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Apellido materno</label>\n" +
    "                                        <input type=\"text\" required md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" name=\"apeMaterno\" ng-model=\"ap.apeMaterno\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.apeMaterno.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidoss</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Nombre</label>\n" +
    "                                        <input type=\"text\" required md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" name=\"nombre\" ng-model=\"ap.nombre\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.nombre.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container> \n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad (Años)</label>\n" +
    "                                        <input type=\"number\" min=\"18\" max=\"74\" ng-pattern=\"/[0-9]{2}$/\" required name=\"edad\" ng-model=\"ap.edad\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.edad.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"min\">Debe ser mayor de 18 años</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"max\">Debe ser menor de 74 años</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <md-radio-group required=\"true\" name=\"sexo\" ng-model=\"ap.sexo\">\n" +
    "                                            <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                                <label>Género *</label>\n" +
    "                                                <md-radio-button flex value=\"m\">Femenino</md-radio-button>\n" +
    "                                                <md-radio-button flex value=\"h\">Masculino</md-radio-button>\n" +
    "                                            </div>\n" +
    "                                        </md-radio-group>\n" +
    "                                        <div class=\"radioRequerido\" ng-show=\"apForm.sexo.$error.required\">Campo requerido.</div>\n" +
    "                                    </md-input-container>\n" +
    "                                </md-content>\n" +
    "                                <span>Datos del plan</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Forma de pago</label>\n" +
    "                                        <md-select required=\"true\" name=\"formaPago\" ng-model=\"ap.formaPago\">\n" +
    "                                            <md-option value=\"default\">Seleccione</md-option>\n" +
    "                                            <md-option ng-repeat=\"fp in ap.formasPagoCat\" ng-selected=\"{{ fp.default === 1 ? 'true' : 'false' }}\"  value=\"{{fp.$id}}\">{{fp.texto}}</md-option>\n" +
    "                                        </md-select>\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.formaPago.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Suma asegurada AP</label>\n" +
    "                                        <md-select required=\"true\" name=\"sumaAse\" ng-model=\"ap.sumaAse\" ng-change=\"ap.updateCoberturasYDeducible($event)\">\n" +
    "                                            <md-option value=\"default\">Seleccione</md-option>\n" +
    "                                            <md-option ng-repeat=\"sa in ap.productos  | filter: ap.filtroProductos | orderBy: ap.numeroSuma\" ng-selected=\"{{ sa.default === 1 ? 'true' : 'false' }}\" value=\"{{sa.$id}}\">{{sa.suma_asegurada | currency}}</md-option>\n" +
    "                                        </md-select>\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.proteccionCon.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                     <md-input-container class=\"md-block\">\n" +
    "                                        <label>Deducible (Aplica para cobertura Reembolso de Gastos Médicos por Accidente)</label>\n" +
    "                                        <input type=\"text\" value=\"{{ap.deducible | currency}}\" ng-disabled=\"true\">\n" +
    "                                        <md-input type=\"text\" name=\"deducible\" ng-model=\"ap.deducible\" ng-hide=\"true\">\n" +
    "                                    </md-input-container>\n" +
    "                                </md-content>\n" +
    "                                <!--md-content layout-padding>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Deducible (Aplica para cobertura Reembolso de Gastos Médicos por Accidente)</label>\n" +
    "                                        <input type=\"text\" value=\"{{ap.deducible | currency}}\" ng-disabled=\"true\">\n" +
    "                                        <md-input type=\"text\" name=\"deducible\" ng-model=\"ap.deducible\" ng-hide=\"true\">\n" +
    "                                    </md-input-container>\n" +
    "                                    <!--md-input-container>\n" +
    "                                        <label>Deducible</label>\n" +
    "                                        <md-select required=\"true\" name=\"deducible\" ng-model=\"ap.deducible\">\n" +
    "                                            <md-option ng-repeat=\"sa in ap.deducibles\" value=\"{{sa.$id}}\" >{{sa.deducible | currency}}</md-option>\n" +
    "                                        </md-select>\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"apForm.deducible.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                </md-content-->\n" +
    "                                <span>Coberturas básicas</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <div layout=\"column\">\n" +
    "                                        <div flex layout=\"row\">\n" +
    "                                            <div flex=\"60\">Muerte Accidental</div>\n" +
    "                                            <div flex=\"40\" style=\"color:#43C2BE\" layout-align=\"center right\" ng-show=\"ap.muestraCoberturas\"><b>{{ap.cobMuerteAcc | currency}}</b></div>\n" +
    "                                        </div>\n" +
    "                                        <div flex layout=\"row\">\n" +
    "                                            <div flex=\"60\">Invalidez Total y Permanente</div>\n" +
    "                                            <div flex=\"40\" style=\"color:#43C2BE\" layout-align=\"center right\" ng-show=\"ap.muestraCoberturas\"><b>{{ap.cobInvalidez | currency}}</b></div>\n" +
    "                                        </div>\n" +
    "                                        <div flex layout=\"row\">\n" +
    "                                            <div flex=\"60\">Reembolso de Gastos Médicos por Accidente</div>\n" +
    "                                            <div flex=\"40\" style=\"color:#43C2BE\" layout-align=\"center right\" ng-show=\"ap.muestraCoberturas\"><b>{{ap.cobReemGasAcc | currency}}</b></div>\n" +
    "                                        </div>\n" +
    "                                        <div flex layout=\"row\">\n" +
    "                                            <div flex=\"60\">Reembolso de Gastos Funerarios</div>\n" +
    "                                            <div flex=\"40\" style=\"color:#43C2BE\" layout-align=\"center right\" ng-show=\"ap.muestraCoberturas\"><b>{{ap.cobReemGasFun | currency}}</b></div>\n" +
    "                                        </div>\n" +
    "                                        <div flex layout=\"row\">\n" +
    "                                            <div flex=\"60\">Pérdidas Orgánicas</div>\n" +
    "                                            <div flex=\"40\" style=\"color:#43C2BE\" layout-align=\"center right\" ng-show=\"ap.muestraCoberturas\"><b>{{ap.cobPerdidaOr | currency}}</b></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </md-content>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <div layout=\"row\" layout-align=\"center center\" layout-xs=\"column\" layout-align-xs=\"space-between stretch\">\n" +
    "                                        <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"ap.cotizar($event)\"  ng-disabled=\"apForm.$invalid\">\n" +
    "                                            Cotizar\n" +
    "                                        </md-button>\n" +
    "                                        <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\"  ng-click=\"ap.guarda($event)\" ng-show=\"ap.muestraPrima\" ng-disabled=\"!ap.online || ap.banGuardar || apForm.$invalid\">\n" +
    "                                            Guardar\n" +
    "                                        </md-button>\n" +
    "                                        <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"ap.imprime($event)\" ng-show=\"ap.banGuardado\" ng-disabled=\"!ap.online || apForm.$invalid\">\n" +
    "                                            Imprimir\n" +
    "                                        </md-button>\n" +
    "                                        <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"ap.continua($event)\" ng-show=\"ap.banGuardado\" ng-disabled=\"!ap.online || apForm.$invalid\">\n" +
    "                                            Continuar\n" +
    "                                        </md-button>\n" +
    "                                    </div>\n" +
    "                                </md-content>\n" +
    "                                <md-progress-linear ng-show=\"ap.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </md-content>\n" +
    "            </md-tab>\n" +
    "        </md-tabs>\n" +
    "    </md-content>\n" +
    "</div>"
  );


  $templateCache.put('app/caducar/caducar.tpl.html',
    "<md-progress-linear ng-show=\"cd.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div class=\"mifel_caducar\">\n" +
    "    <div layout=\"column\" layout-align=\"center start\" layout-padding>\n" +
    "        <div flex>\n" +
    "            <h3>Este proceso caducará todas las cotizaciones realizadas 6 meses atrás.</h3>\n" +
    "            <h2><md-icon class=\"material-icons error\">error</md-icon> Cualquier cotización realizada antes del {{cd.getDate()}} se caducará.</h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <md-content>\n" +
    "        <md-subheader class=\"md-no-sticky\">\n" +
    "            <md-icon class=\"material-icons warning\">warning</md-icon>\n" +
    "            <b>{{cd.total}}</b> Cotizaciones encontradas a caducar\n" +
    "        </md-subheader>\n" +
    "        <ul ng-repeat=\"cot in cd.cotizaciones\" class=\"campos\">\n" +
    "            <li>\n" +
    "                <md-icon class=\"material-icons\">event_busy</md-icon> \n" +
    "                <span>Fecha: {{cd.formatDate(cot.timestamp)}}</span>\n" +
    "                <span>Ejecutivo: {{cot.nombreEjecutivo}}</span>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <md-input-container>\n" +
    "            <md-button ng-disabled=\"cd.total == 0 || !cd.online\" class=\"md-raised md-primary\" ng-click=\"cd.caducar()\">Caducar las cotizaciones</md-button>\n" +
    "        </md-input-container>\n" +
    "    </md-content>\n" +
    "</div>"
  );


  $templateCache.put('app/cotizacion/mis_cotizaciones.tpl.html',
    "<div id=\"toaster\"></div>\n" +
    "<md-progress-linear ng-show=\"mc.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<md-content layout=\"row\" layout-wrap layout-padding>\n" +
    "    <md-input-container>\n" +
    "        <label>Fecha inicio</label>\n" +
    "        <md-datepicker ng-model=\"mc.fechaInicio\" md-min-date=\"mc.minDate\" md-max-date=\"mc.maxDate\"></md-datepicker>\n" +
    "    </md-input-container>\n" +
    "    <md-input-container>\n" +
    "        <label>Fecha fin</label>\n" +
    "        <md-datepicker ng-model=\"mc.fechaFin\" md-min-date=\"mc.fechaInicio\" md-max-date=\"mc.maxDate\"></md-datepicker>\n" +
    "    </md-input-container>\n" +
    "    <md-input-container>\n" +
    "        <label>Tipo de operación</label>\n" +
    "        <md-select ng-model=\"mc.operacion\">\n" +
    "            <md-option value=\"\">---</md-option>\n" +
    "            <md-option ng-repeat=\"opcion in mc.opciones\" value=\"{{opcion.valor}}\">\n" +
    "                {{opcion.descripcion}}\n" +
    "            </md-option>\n" +
    "        </md-select>\n" +
    "    </md-input-container>\n" +
    "    <md-input-container>\n" +
    "        <label>Producto</label>\n" +
    "        <md-select ng-model=\"mc.producto\">\n" +
    "            <md-option value=\"\">---</md-option>\n" +
    "            <md-option value=\"AP\">Accidentes Personales</md-option>\n" +
    "            <md-option value=\"VIDA\">Vida</md-option>\n" +
    "        </md-select>\n" +
    "    </md-input-container>\n" +
    "    <md-input-container>\n" +
    "        <md-button ng-click=\"mc.filtrar()\" class=\"md-raised md-primary\">Filtrar</md-button>\n" +
    "        <md-button ng-show=\"mc.admin\" ng-disabled=\"mc.cotizaciones.length == 0\" ng-click=\"mc.exportar()\" class=\"md-raised md-warn\">Exportar CSV</md-button>\n" +
    "    </md-input-container>\n" +
    "</md-content>\n" +
    "<div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-align=\"start stretch\" layout-padding class=\"mis_cotizaciones\">\n" +
    "    <div flex>\n" +
    "        <md-content>\n" +
    "            <md-list flex style=\"max-height:600px\">\n" +
    "                <md-subheader class=\"md-sticky md-primary\">Selecciona un registro para ver su detalle</md-subheader>\n" +
    "                <md-list-item class=\"md-2-line\" ng-repeat=\"cotizacion in mc.cotizaciones\" ng-click=\"mc.getDetalle(cotizacion)\" ng-class=\"{'nav-active': cotizacion == mc.activeItem }\">\n" +
    "                    <md-icon class=\"material-icons\">{{mc.getIcono(cotizacion.status)}}</md-icon>\n" +
    "                    <div class=\"md-list-item-text\" layout=\"row\" layout-xs=\"column\">\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Empleado:  {{cotizacion.empleado}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Asegurado: {{cotizacion.nombre}} {{cotizacion.apPat}} {{cotizacion.apMat}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Operación: {{cotizacion.operacion}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Prima:     {{cotizacion.primaTotal  | currency}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Zona:      {{cotizacion.descripcionZona}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Sucursal:  {{cotizacion.descripcionSucursal}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Cotización:  {{mc.formatFecha(cotizacion.timestamp)}}</p>\n" +
    "                        <p flex=\"auto\" style=\"font-size:12px !important\">Emisión:  {{mc.formatFecha(cotizacion.statusDate)}}</p>\n" +
    "                    </div>\n" +
    "                    <md-divider ng-if=\"!$last\" inset></md-divider>\n" +
    "                </md-list-item>\n" +
    "            </md-list>\n" +
    "        </md-content>\n" +
    "    </div>\n" +
    "    <div flex>\n" +
    "        <md-content>\n" +
    "            <md-subheader class=\"md-no-sticky\">DETALLE DEL REGISTRO</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Nombre: <span>{{mc.detalle.nombre}} {{mc.detalle.apPat}} {{mc.detalle.apMat}}</span></p>\n" +
    "                <p>Edad: <span>{{mc.detalle.edad}}</span></p>\n" +
    "                <p>Género: <span>{{mc.getGenero(mc.detalle.genero)}}</span></p>\n" +
    "                <p>Forma de pago: <span>{{mc.detalle.formaPagoDesc}}</span></p>\n" +
    "                <p>Prima Total: <span>{{mc.detalle.primaTotal  | currency}}</span></p>\n" +
    "                <!--ap-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Suma asegurada: <span>{{ mc.detalle.detalleProducto.suma_asegurada | currency }}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Coberturas b&aacute;sicas: <span>Muerte Accidental (MXN): {{ mc.detalle.detalleProducto.suma_asegurada | currency }} Reembolso de Gastos Médicos por gastos funerarios (MXN): {{ mc.detalle.detalleProducto.reembolso_fun | currency }} Invalidez total y permanente (MXN): {{ mc.detalle.detalleProducto.invalidez | currency }} Pérdidas orgánicas (MXN): {{ mc.detalle.detalleProducto.perdidas_org | currency }} Reembolso de Gastos Médicos por accidente (MXN): {{ mc.detalle.detalleProducto.reembolso_acc | currency }} </span></p>\n" +
    "                <!--vida-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Fallecimiento: <span>{{ mc.detalle.detalleProducto.suma_asegurada | currency }}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Coberturas adicionales: <span ng-repeat=\"cobertura in mc.detalle.coberturasAdicionales\">{{cobertura.descripcion}} {{mc.detalle.detalleProducto.suma_asegurada | currency}} </span></p>\n" +
    "                <!--Cotizacion-->\n" +
    "                <p>Fecha de cotización: <span>{{mc.formatFecha(mc.detalle.timestamp)}}</span></p>\n" +
    "                <!--Emision-->\n" +
    "                <p ng-show=\"mc.detalle.status >= 1\">Fecha de emisión: <span>{{mc.formatFecha(mc.detalle.statusDate)}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" class=\"md-no-sticky\">DETALLE DE LA EMISIÓN</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p flex=\"100\">Número de póliza: <span>{{mc.detalle.numeroReferencia}}</span></p>\n" +
    "                <p>Tipo de producto: <span>{{mc.detalle.tipoProducto}}</span></p>\n" +
    "                <p>Inicio de vigencia: <span>{{mc.detalle.emision.fechaInicioVigencia}}</span></p>\n" +
    "                <p>Fin de vigencia: <span>{{mc.detalle.emision.fechaFinVigencia}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" class=\"md-no-sticky\">DATOS DEL PLAN</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p flex=\"100\">Producto: <span>{{mc.plan.plan}}</span></p>\n" +
    "                <p>Suma Asegurada (MXN): <span>{{mc.plan.sumaAseg  | currency}}</span></p>\n" +
    "                <p>Deducible (MXN): <span>{{mc.plan.deducible  | currency}}</span></p>\n" +
    "                <p>Forma de pago: <span>{{mc.plan.formaPago}}</span></p>\n" +
    "                <!--vida-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Indemnización por Muerte Accidental: <span>{{(mc.plan.ima)?\"si\":\"no\"}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Invalidez Sin Espera: <span>{{(mc.plan.ise)?\"si\":\"no\"}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Indemnización por Muerte Accidental con Pérdidas Orgánicas: <span>{{(mc.plan.diba)?\"si\":\"no\"}}</span></p>\n" +
    "                <!--ap-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Muerte Accidental (MXN): <span>{{mc.plan.coberturasBasicas.muertAcc  | currency}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Reembolso de Gastos Médicos por gastos funerarios (MXN): <span>{{mc.plan.coberturasBasicas.reGMMFun  | currency}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Invalidez total y permanente (MXN): <span>{{mc.plan.coberturasBasicas.invalidez  | currency}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Pérdidas orgánicas (MXN): <span>{{mc.plan.coberturasBasicas.perdidas  | currency}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Reembolso de Gastos Médicos por accidente (MXN): <span>{{mc.plan.coberturasBasicas.accid  | currency}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" class=\"md-no-sticky\">DATOS DEL SOLICITANTE TITULAR</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Primer apellido: <span>{{mc.solicitante.apPat}}</span></p>\n" +
    "                <p>Segundo apellido: <span>{{mc.solicitante.apMat}}</span></p>\n" +
    "                <p>Nombre(s): <span>{{mc.solicitante.nombre}}</span></p>\n" +
    "                <p>Género: <span>{{mc.getGenero(mc.solicitante.genero)}}</span></p>\n" +
    "                <p>Edad: <span>{{mc.solicitante.edad}}</span></p>\n" +
    "                <p>Nacionalidad: <span>{{mc.solicitante.nacionalidad}}</span></p>\n" +
    "                <p>Profesión: <span>{{mc.solicitante.profesion}}</span></p>\n" +
    "                <p>R.F.C: <span>{{mc.solicitante.rfc}}</span></p>\n" +
    "                <!--ap-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">CURP: <span>{{mc.solicitante.curp}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Fecha de nacimiento: <span>{{mc.solicitante.fechaNac}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Estado civil: <span>{{mc.solicitante.estadoCiv}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">País de Nacimiento: <span>{{mc.solicitante.ciudadNacimineto}}</span></p>\n" +
    "                <!--vida-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Correo electrónico: <span>{{mc.solicitante.email}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Calle: <span>{{mc.solicitante.calle}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">No. exterior: <span>{{mc.solicitante.noExterior}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">No. interior: <span>{{mc.solicitante.noInterior}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Colonia: <span>{{mc.solicitante.colonia}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Municipio o Delegación: <span>{{mc.solicitante.municipio}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Estado: <span>{{mc.solicitante.estado}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">País: <span>{{mc.solicitante.pais}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">C.P.: <span>{{mc.solicitante.cp}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Dependencia: <span>{{mc.solicitante.Dependencia}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Cargo: <span>{{mc.solicitante.cargo}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Teléfono particular: <span>{{mc.solicitante.telefonoParticular}}</span></p>        \n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Teléfono de oficina: <span>{{mc.solicitante.telefonoOficina}}</span></p>\n" +
    "                <!--general-->\n" +
    "                <p>Número Mifel: <span>{{mc.solicitante.mifel}}</span></p>\n" +
    "            </section>\n" +
    "            <!--md-subheader ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'AP'\" class=\"md-no-sticky\">DATOS LABORALES</md-subheader>\n" +
    "            <section ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'AP'\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Nombre de la empresa donde trabaja: <span>{{mc.laborales.empresa}}</span></p>\n" +
    "                <p>Profesión u ocupación: <span>{{mc.laborales.profesion}}</span></p>\n" +
    "                <p>¿Nombre del puesto y en qué consisten sus labores?: <span>{{mc.laborales.puesto}}</span></p>\n" +
    "                <p>CURP: <span>{{mc.laborales.curp}}</span></p>\n" +
    "                <p>R.F.C. (Con homoclave): <span>{{mc.laborales.rfc}}</span></p>\n" +
    "                <p>Giro de la empresa: <span>{{mc.laborales.giro}}</span></p>\n" +
    "                <p>Domicilio del lugar de trabajo: <span>{{mc.laborales.domicilio}}</span></p>\n" +
    "                <p>Alguna otra ocupación: <span>{{mc.laborales.otraOcupacion}}</span></p>\n" +
    "                <p>Describa en qué consisten sus labores: <span>{{mc.laborales.otraOcupDesc}}</span></p>\n" +
    "                <p>Empresa en que desempeña sus labores: <span>{{mc.laborales.otraOcupEmpr}}</span></p>\n" +
    "            </section-->\n" +
    "            <md-subheader ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'AP'\" class=\"md-no-sticky\">DOMICILIO PARTICULAR</md-subheader>\n" +
    "            <section ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'AP'\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Calle: <span>{{mc.domicilio.calle}}</span></p>\n" +
    "                <p>No. Exterior: <span>{{mc.domicilio.noExterior}}</span></p>\n" +
    "                <p>No. Interior: <span>{{mc.domicilio.noInterior}}</span></p>\n" +
    "                <p>Colonia: <span>{{mc.domicilio.colonia}}</span></p>\n" +
    "                <p>Ciudad o Población: <span>{{mc.domicilio.ciudad}}</span></p>\n" +
    "                <p>Municipio o Delegación: <span>{{mc.domicilio.municipio}}</span></p>\n" +
    "                <p>Estado: <span>{{mc.domicilio.estado}}</span></p>\n" +
    "                <p>C.P.: <span>{{mc.domicilio.cp}}</span></p>\n" +
    "                <p>Teléfono particular: <span>{{mc.domicilio.telefono}}</span></p>\n" +
    "                <p>Teléfono de oficina: <span>{{mc.domicilio.telefonoOficina}}</span></p>\n" +
    "                <p>Correo electrónico: <span>{{mc.domicilio.email}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" class=\"md-no-sticky\">DATOS DEL CONTRATANTE</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Primer apellido: <span>{{mc.contratante.apPat}}</span></p>\n" +
    "                <p>Segundo apellido: <span>{{mc.contratante.apMat}}</span></p>\n" +
    "                <p>Nombre(s): <span>{{mc.contratante.nombre}}</span></p>\n" +
    "                <p>Género: <span>{{mc.getGenero(mc.contratante.genero)}}</span></p>\n" +
    "                <p>Correo electrónico: <span>{{mc.contratante.email}}</span></p>\n" +
    "                <p>R.F.C. (Con homoclave): <span>{{mc.contratante.rfc}}</span></p>\n" +
    "                <p>CURP: <span>{{mc.contratante.curp}}</span></p>\n" +
    "                <p>Calle: <span>{{mc.contratante.calle}}</span></p>\n" +
    "                <p>C.P.: <span>{{mc.contratante.cp}}</span></p>\n" +
    "                <p>No. Exterior: <span>{{mc.contratante.noExterior}}</span></p>\n" +
    "                <p>No. Interior: <span>{{mc.contratante.noInterior}}</span></p>\n" +
    "                <p>Colonia: <span>{{mc.contratante.colonia}}</span></p>\n" +
    "                <p>Municipio o Delegación: <span>{{mc.contratante.municipio}}</span></p>\n" +
    "                <p>Estado: <span>{{mc.contratante.estado}}</span></p>\n" +
    "                <!--ap-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Ciudad o Población: : <span>{{mc.contratante.ciudad}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Parentesco: <span>{{mc.contratante.parentesco}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'AP'\">Teléfono: <span>{{mc.contratante.telefono}}</span></p>\n" +
    "                <!--vida-->\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">País: <span>{{mc.contratante.pais}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Nacionalidad: <span>{{mc.contratante.nacionalidad}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Profesión: <span>{{mc.contratante.profesion}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Dependencia: <span>{{mc.contratante.Dependencia}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Cargo: <span>{{mc.contratante.cargo}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Teléfono de oficina:<span>{{mc.contratante.telefonoOficina}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Teléfono particular:<span>{{mc.contratante.telefonoParticular}}</span></p>\n" +
    "                <p ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Número de serie de certificado digital de la FIEL:<span>{{mc.contratante.fiel}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" class=\"md-no-sticky\">DATOS DEL BENEFICIARIO</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p ng-repeat=\"beneficiario in mc.beneficiario\">\n" +
    "                    Primer apellido: <span>{{beneficiario.apPat}}</span>&nbsp;\n" +
    "                    Segundo apellido: <span>{{beneficiario.apMat}}</span>&nbsp;\n" +
    "                    Nombre(s): <span>{{beneficiario.nombre}}</span>&nbsp;\n" +
    "                    Parentesco: <span>{{beneficiario.parentesco}}</span>&nbsp;\n" +
    "                    Porcentaje: <span>{{beneficiario.porcentaje}}%</span>&nbsp;\n" +
    "                    <!--vida-->\n" +
    "                    <label ng-show=\"mc.detalle.tipoProducto == 'VIDA'\">Fecha de nacimiento: <span>{{beneficiario.fechaNacimiento}}</span></label>\n" +
    "                </p>\n" +
    "            </section>\n" +
    "            <!--vida-->\n" +
    "            <md-subheader ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'VIDA' && mc.contingente\" class=\"md-no-sticky\">DATOS DEL BENEFICIARIO CONTINGENTE</md-subheader>\n" +
    "            <section ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'VIDA' && mc.contingente\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p ng-repeat=\"contingente in mc.contingente\">\n" +
    "                    Primer apellido: <span>{{contingente.apPat}}</span>&nbsp;\n" +
    "                    Segundo apellido: <span>{{contingente.apMat}}</span>&nbsp;\n" +
    "                    Nombre(s): <span>{{contingente.nombre}}</span>&nbsp;\n" +
    "                    Parentesco: <span>{{contingente.parentesco}}</span>&nbsp;\n" +
    "                    Porcentaje: <span>{{contingente.porcentaje}}%</span>&nbsp;\n" +
    "                    Pertenece a: <span>{{contingente.perteneceContingente}}</span>\n" +
    "                </p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" class=\"md-no-sticky\">DATOS CONSENTIMIENTO</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 || mc.detalle.status == 2\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Solicitante Titular (y de su Representante Legal si es menor de edad): <span>{{mc.consentimiento.solicitanteTitular}}</span></p>\n" +
    "                <p>Contratante (Solo si es diferente al Solicitante): <span>{{mc.consentimiento.contratante}}</span></p>\n" +
    "            </section>\n" +
    "            <!--vida-->\n" +
    "            <md-subheader ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'VIDA'\" class=\"md-no-sticky\">DATOS SALUD</md-subheader>\n" +
    "            <section ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2) && mc.detalle.tipoProducto == 'VIDA'\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>¿Ha fumado en los últimos 12 meses?: <span>{{(mc.salud.fuma == 1)?\"si\":\"no\"}}</span></p>\n" +
    "            </section>\n" +
    "            <!--vida-->\n" +
    "            <md-subheader ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2)\" class=\"md-no-sticky\">DATOS IMPORTANTE</md-subheader>\n" +
    "            <section ng-show=\"(mc.detalle.status == 1 || mc.detalle.status == 2)\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>¿Tiene o ha tenido nexos o vínculos con la delincuencia organizada; o ha sido sujeto a procedimiento legal o \n" +
    "                investigación por los delitos establecidos en el Código Penal Federal relativos a la delincuencia organizada, en territorio nacional o extranjero, por alguna \n" +
    "                autoridad de México o por alguna autoridad extranjera cuyo gobierno tenga celebrado con México tratado internacional; o ha estado su nombre, alias o \n" +
    "                apoda, sus actividades, los bienes asegurar o su nacionalidad, publicados en una lista oficial, nacional o extranjera, relativa a los delitos vinculados \n" +
    "                con los artículos anteriormente citados?:</p>\n" +
    "                <p>Solicitante: <span>{{mc.nexos.solicitante}}</span></p>\n" +
    "                <p>Contratante: <span>{{mc.nexos.contratante}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 && mc.cobranza\" class=\"md-no-sticky\">DATOS DE COBRANZA</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 && mc.cobranza && (mc.cobranza.viaPago == 'credito' || mc.cobranza.viaPago == 'debito')\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Periodicidad de pago: <span>{{mc.plan.formaPago}}</span></p>\n" +
    "                <p>Via de pago: <span>{{mc.cobranza.viaPago}}</span></p>\n" +
    "                <p>Banco: <span>{{mc.cobranza.tarjetaObligatoria.banco}}</span></p>\n" +
    "                <p>Tarjeta número: <span>{{mc.cobranza.tarjetaObligatoria.numero}}</span></p>\n" +
    "                <p>Fecha de vencimiento: <span>{{mc.cobranza.tarjetaObligatoria.mesExpiracion}} / {{mc.cobranza.tarjetaObligatoria.agnoExpiracion}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 1 && mc.cobranza  && (mc.cobranza.viaPago == 'credito' || mc.cobranza.viaPago == 'debito')\" class=\"md-no-sticky\">DATOS DE COBRANZA OPCIONAL</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 && mc.cobranza && (mc.cobranza.viaPago == 'credito' || mc.cobranza.viaPago == 'debito')\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Periodicidad de pago: <span>{{mc.plan.formaPago}}</span></p>\n" +
    "                <p>Via de pago: <span>{{mc.cobranza.viaPago}}</span></p>\n" +
    "                <p>Banco: <span>{{mc.cobranza.tarjetaOpcional.banco}}</span></p>\n" +
    "                <p>Tarjeta número: <span>{{mc.cobranza.tarjetaOpcional.numero}}</span></p>\n" +
    "                <p>Fecha de vencimiento: <span>{{mc.cobranza.tarjetaOpcional.mesExpiracion}} / {{mc.cobranza.tarjetaOpcional.agnoExpiracion}}</span></p>\n" +
    "            </section>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 && mc.cobranza && mc.cobranza.viaPago == 'clabe'\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Periodicidad de pago: <span>{{mc.plan.formaPago}}</span></p>\n" +
    "                <p>Via de pago: <span>{{mc.cobranza.viaPago}}</span></p>\n" +
    "                <p>Banco: <span>{{mc.cobranza.datosClabe.banco}}</span></p>\n" +
    "                <p>Número clabe: <span>{{mc.cobranza.datosClabe.numeroClabe}}</span></p>\n" +
    "            </section>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 && mc.cobranza && mc.cobranza.viaPago != 'pagoRef'\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>¿El contratante es igual al titular de la cuenta/tarjeta?: <span>{{mc.cobranza.titular}}</span></p>\n" +
    "                <p ng-show=\"mc.cobranza.titular == 'no'\">Nombre del titular: <span>{{mc.cobranza.nombreTitular}}</span></p>\n" +
    "                <p ng-show=\"mc.cobranza.titular == 'no'\">¿Parentesco del contratante con el titular de la cuenta/tarjeta?: <span>{{mc.cobranza.parentescoTitular}}</span></p>\n" +
    "            </section>\n" +
    "            <section ng-show=\"mc.detalle.status == 1 && mc.cobranza && mc.cobranza.viaPago == 'pagoRef'\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>PAGO REFERENCIADO</p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 4\" class=\"md-no-sticky\">EMISION PENDIENTE</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 4\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Esta emision ha cambiado su estado a \"pendiente\" por las siguientes observaciones: <span>{{mc.detalle.observacion}}</span></p>\n" +
    "            </section>\n" +
    "            <md-subheader ng-show=\"mc.detalle.status == 5\" class=\"md-no-sticky\">COTIZACIÓN NO EMITIDA</md-subheader>\n" +
    "            <section ng-show=\"mc.detalle.status == 5\" layout=\"row\" layout-padding layout-align=\"start center\" layout-wrap class=\"campos\">\n" +
    "                <p>Esta cotización no ha sido emitida por las siguientes observaciones: <span>{{mc.detalle.observacion}}</span></p>\n" +
    "            </section>\n" +
    "            <md-input-container layout=\"row\" layout-align=\"space-around center\">\n" +
    "                <md-button ng-show=\"mc.detalle.status == 1 && mc.admin\" class=\"md-raised md-primary\" ng-disabled=\"!mc.online\" ng-click=\"mc.cancelar()\">No Emitida</md-button>\n" +
    "                <md-button ng-show=\"mc.detalle.status == 1 && mc.admin\" class=\"md-raised md-primary\" ng-disabled=\"!mc.online\" ng-click=\"mc.pendiente()\">Pendiente</md-button>\n" +
    "                <md-button ng-show=\"mc.detalle.status == 1 && mc.admin\" class=\"md-raised md-primary\" ng-disabled=\"!mc.online\" ng-click=\"mc.emitida()\">Emitida</md-button>\n" +
    "            </md-input-container>\n" +
    "            <md-input-container layout=\"row\" layout-align=\"center center\">\n" +
    "                <md-button ng-show=\"mc.detalle.status == 4 && mc.admin\" class=\"md-raised md-primary\" ng-disabled=\"!mc.online\" ng-click=\"mc.cancelar()\">No Emitida</md-button>\n" +
    "                <md-button ng-show=\"mc.detalle.status == 4 && mc.admin\" class=\"md-raised md-primary\" ng-disabled=\"!mc.online\" ng-click=\"mc.emitida()\">Emitida</md-button>\n" +
    "            </md-input-container>            \n" +
    "            <md-input-container layout=\"row\" layout-align=\"center center\">\n" +
    "                <md-button ng-show=\"mc.detalle.status == 0\" class=\"md-raised md-primary\" ng-click=\"mc.comprar()\">Comprar</md-button>\n" +
    "            </md-input-container>\n" +
    "        </md-content>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/emisionAP/emisionAp.tpl.html',
    "<md-progress-linear ng-show=\"ec.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div class=\"mifel_emisionAp\" ng-show=\"!ec.loading\">\n" +
    "    <form name=\"emisionForm\" id=\"emisionForm\" class=\"ng-invalid-required\">\n" +
    "        <!---Datos Solicitante--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-title\">Datos para la emisión de Protección Accidentes</span>\n" +
    "                    <span class=\"md-subhead\">Datos solicitante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"20\" flex-xs>\n" +
    "                            <label>Número de cliente Mifel</label>\n" +
    "                            <input type=\"text\" name=\"numClienteSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*$/\" md-maxlength=\"15\" ng-model=\"ec.emision.datosSolicitante.mifel\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.numClienteSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" ng-model=\"ec.emision.datosSolicitante.apPat\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" ng-model=\"ec.emision.datosSolicitante.apMat\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" ng-model=\"ec.emision.datosSolicitante.nombre\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"20\">\n" +
    "                            <md-datepicker name=\"fechaNac\" ng-model=\"ec.emision.datosSolicitante.fechaNac\" md-placeholder=\"Fecha de nacimiento*\" required></md-datepicker>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.fechaNac.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"genero\" ng-model=\"ec.emision.datosSolicitante.genero\" ng-disabled=\"true\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Género</label>\n" +
    "                                    <md-radio-button flex value=\"m\">Femenino</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"h\">Masculino</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.genero.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Edad (Años)</label>\n" +
    "                            <input type=\"number\" name=\"edad\" ng-model=\"ec.emision.datosSolicitante.edad\" ng-disabled=\"true\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.edad.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Estado civil</label>\n" +
    "                            <md-select name=\"civil\" ng-model=\"ec.emision.datosSolicitante.estadoCiv\" required>\n" +
    "                                <md-option value=\"casado\">Casado (a)</md-option>\n" +
    "                                <md-option value=\"divorciado\">Divorciado (a)</md-option>\n" +
    "                                <md-option value=\"soltero\">Soltero (a)</md-option>\n" +
    "                                <md-option value=\"union libre\">Unión libre</md-option>\n" +
    "                                <md-option value=\"viudo\">Viudo (a)</md-option>\n" +
    "                            </md-select>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.civil.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Profesión u ocupación</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"profesionSolicitante\" ng-model=\"ec.emision.datosSolicitante.profesion\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.profesionSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>R.F.C. (Con homoclave)</label>\n" +
    "                            <input type=\"text\" name=\"rfcSolicitante\" md-maxlength=\"13\" ng-pattern=\"/^([A-Z&]{4})(\\d{6})[A-Z0-9]{0,3}$/i\" ng-model=\"ec.emision.datosSolicitante.rfc\" ng-keyup=\"ec.validaEdadRFC($event)\" required>\n" +
    "                            <div class=\"hint\" ng-if=\"ec.showHints\">Verifica que la edad de COTIZACIÓN coincida con el RFC</div>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.rfcSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 13 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de R.F.C (Con homoclave) es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>CURP</label>\n" +
    "                            <input type=\"text\" name=\"curpSolicitante\" ng-pattern=\"/^([A-Z]{4})([0-9]{6})([A-Z]{6})([A-Z0-9]{2})$/i\" md-maxlength=\"18\" ng-model=\"ec.emision.datosSolicitante.curp\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.curpSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 18 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de CURP es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"40\" flex-xs=\"100\">\n" +
    "                            <label>Nacionalidad</label>\n" +
    "                            <input type=\"text\" name=\"nacionalidad\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"ec.emision.datosSolicitante.nacionalidad\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.nacionalidad.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex=\"40\" flex-xs=\"100\">\n" +
    "                            <label>País de nacimiento</label>\n" +
    "                            <input type=\"text\" name=\"ciudadNacimeinto\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"ec.emision.datosSolicitante.ciudadNacimineto\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.ciudadNacimeinto.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Domicilio--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead\">Datos domicilio particular</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Calle</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" name=\"calleDomicilio\" ng-model=\"ec.emision.datosDomicilio.calle\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.calleDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>No. exterior</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-Z0-9.-](\\s{1}[a-zA-Z0-9.-])*$/\" md-maxlength=\"15\" name=\"noExteriorDomicilio\" ng-model=\"ec.emision.datosDomicilio.noExterior\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.noExteriorDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>No. interior</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-Z0-9.-](\\s{1}[a-zA-Z0-9.-])*$/\" md-maxlength=\"15\" name=\"noInteriorDomicilio\" ng-model=\"ec.emision.datosDomicilio.noInterior\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.noInteriorDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Colonia</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"coloniaDomicilio\" ng-model=\"ec.emision.datosDomicilio.colonia\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.coloniaDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Ciudad o Población</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"ciudadDomicilio\" ng-model=\"ec.emision.datosDomicilio.ciudad\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.ciudadDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Municipio o Delegación</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"municipioDomicilio\" ng-model=\"ec.emision.datosDomicilio.municipio\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.municipioDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Estado</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"estadoDomicilio\" ng-model=\"ec.emision.datosDomicilio.estado\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.estadoDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>C.P</label>\n" +
    "                            <input ng-model=\"ec.emision.datosDomicilio.cp\" name=\"cpDomicilio\" ng-pattern=\"/^[0-9]{5}$/\" md-maxlength=\"5\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.cpDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 5 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Teléfono Particular</label>\n" +
    "                            <input ng-model=\"ec.emision.datosDomicilio.telefono\" name=\"telefonoDomicilio\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" required/>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.telefonoDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 8 o 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos, \"( ) -\" son válidos </div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Teléfono Oficina</label>\n" +
    "                            <input ng-model=\"ec.emision.datosDomicilio.telefonoOficina\" name=\"telefonoOficinaDomicilio\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" required/>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.telefonoOficinaDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 8 o 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos y \"( ) -\" son válidos </div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Correo electrónico</label>\n" +
    "                            <input type=\"email\" ng-model=\"ec.emision.datosDomicilio.email\" name=\"emailDomicilio\" md-maxlength=\"50\" ng-pattern=\"/^.+@.+\\..+$/\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.emailDomicilio.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Contratante--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead\">Datos del contratante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group ng-model=\"ec.igualSol\" name=\"opcionContratante\" ng-change=\"ec.eliminarContratante()\" ng-disabled=\"ec.emision.datosSolicitante.rfc === ''\" required>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">¿El Contratante es igual al Solicitante Titular?</label>\n" +
    "                                    <md-radio-button value=\"1\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"0\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.opcionContratante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\" ng-show=\"ec.igualSol == '0'\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"20\" flex-xs>\n" +
    "                            <label>Número de cliente Mifel</label>\n" +
    "                            <input type=\"text\" name=\"numClienteContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*$/\" md-maxlength=\"15\" ng-model=\"ec.emision.datosContratante.mifel\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.numClienteContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"apPatCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.apPat\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.apPatCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"apMatCont\" ng-model=\"ec.emision.datosContratante.apMat\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.apMatCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"nombreCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.nombre\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.nombreCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"generoCont\" ng-model=\"ec.emision.datosContratante.genero\" ng-required=\"ec.igualSol == '0'\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Género *</label>\n" +
    "                                    <md-radio-button flex value=\"m\">Femenino</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"h\">Masculino</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.generoCont.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Parentesco</label>\n" +
    "                            <md-select name=\"parentescoCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.parentesco\">\n" +
    "                                <md-option value=\"padre\">Padre</md-option>\n" +
    "                                <md-option value=\"madre\">Madre</md-option>\n" +
    "                                <md-option value=\"abuelo\">Abuelo(a)</md-option>\n" +
    "                                <md-option value=\"concubino\">Concubino(a)</md-option>\n" +
    "                                <md-option value=\"conyugue\">Cónyuge</md-option>\n" +
    "                                <md-option value=\"hermano\">Hermano(a)</md-option>\n" +
    "                                <md-option value=\"hijo\">Hijo(a)</md-option>\n" +
    "                                <md-option value=\"nieto\">Nieto(a)</md-option>\n" +
    "                                <md-option value=\"primo\">Primo(a)</md-option>\n" +
    "                                <md-option value=\"tio\">Tio(a)</md-option>\n" +
    "                                <md-option value=\"familiar\">Familiar</md-option>\n" +
    "                                <md-option value=\"otro\">Otro</md-option>\n" +
    "                            </md-select>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.parentescoCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>R.F.C (Con homoclave)</label>\n" +
    "                            <input type=\"text\" name=\"rfcCont\" md-maxlength=\"13\" ng-pattern=\"/^([A-Z&]{4})(\\d{6})[A-Z0-9]{0,3}$/i\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.rfc\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.rfcCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 13 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de R.F.C (Con homoclave) es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>CURP</label>\n" +
    "                            <input type=\"text\" name=\"curpCont\" ng-pattern=\"/^([A-Z]{4})([0-9]{6})([A-Z]{6})([A-Z0-9]{2})$/i\" md-maxlength=\"18\" ng-model=\"ec.emision.datosContratante.curp\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.curpCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 18 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de CURP es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Calle</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" name=\"calleCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.calle\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.calleCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>No. exterior</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-Z0-9.-](\\s{1}[a-zA-Z0-9.-])*$/\" md-maxlength=\"15\" name=\"noExteriorCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.noExterior\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.noExteriorCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 8 o 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>No. interior</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-Z0-9.-](\\s{1}[a-zA-Z0-9.-])*$/\" md-maxlength=\"15\" name=\"noInteriorCont\" ng-model=\"ec.emision.datosContratante.noInterior\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.noInteriorCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 8 o 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Colonia</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"coloniaCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.colonia\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.coloniaCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Ciudad o Población</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"ciudadCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.ciudad\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.ciudadCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Municipio o Delegación</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"municipioCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.municipio\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.municipioCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Estado</label>\n" +
    "                            <input type=\"text\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" name=\"estadoCont\" ng-required=\"ec.igualSol == '0'\" ng-model=\"ec.emision.datosContratante.estado\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.estadoCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>C.P</label>\n" +
    "                            <input ng-model=\"ec.emision.datosContratante.cp\" ng-pattern=\"/^[0-9]{5}$/\" name=\"cpCont\" ng-required=\"ec.igualSol == '0'\" md-maxlength=\"5\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.cpCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Teléfono Particular</label>\n" +
    "                            <input ng-model=\"ec.emision.datosContratante.telefono\" name=\"telefonoDomicilioCont\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" ng-required=\"ec.igualSol == '0'\"/>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.telefonoDomicilioCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 8 o 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos, \"( ) -\" son válidos </div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Correo electrónico</label>\n" +
    "                            <input type=\"email\" ng-model=\"ec.emision.datosContratante.email\" name=\"emailDomicilioCont\" md-maxlength=\"50\" ng-pattern=\"/^.+@.+\\..+$/\" ng-required=\"ec.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.emailDomicilioCont.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Plan--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead\">Datos del plan</span>\n" +
    "                </md-card-header-text>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead nota\">Nota: Solo aplica deducible de $1,000 en la cobertura de Reembolso de Gastos Médicos por Accidente</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Plan</label>\n" +
    "                            <input type=\"text\" ng-model=\"ec.emision.datosPlan.plan\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Suma Asegurada A.P (MXN) </label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.sumaAseg | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Deducible (MXN)</label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.deducible | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Forma de pago</label>\n" +
    "                            <input type=\"text\" ng-model=\"ec.emision.datosPlan.formaPago\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <md-card-header>\n" +
    "                    <md-card-header-text>\n" +
    "                        <span class=\"md-subhead\">Coberturas Básicas</span>\n" +
    "                    </md-card-header-text>\n" +
    "                </md-card-header>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Muerte Accidental (MXN) </label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.coberturasBasicas.muertAcc | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Reembolso de Gastos Funerarios (MXN) </label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.coberturasBasicas.reGMMFun | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Invalidez total y permanente (MXN) </label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.coberturasBasicas.invalidez | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Pérdidas orgánicas (MXN) </label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.coberturasBasicas.perdidas | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"50\" flex-xs=\"100\">\n" +
    "                            <label>Reembolso de Gastos Médicos por Accidente (MXN) </label>\n" +
    "                            <input type=\"text\" value=\"{{ec.emision.datosPlan.coberturasBasicas.accid | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <md-card-header>\n" +
    "                    <md-card-header-text>\n" +
    "                        <span class=\"md-subhead\">Servicios incluidos</span>\n" +
    "                    </md-card-header-text>\n" +
    "                </md-card-header>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-padding layout-xs=\"column\" flex=\"60\">\n" +
    "                        <span style=\"color: #a5a5a5;\">- Asistencia médica</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-padding layout-xs=\"column\" flex=\"60\">\n" +
    "                        <span style=\"color: #a5a5a5;\">- Asistencia Nutricional</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-padding layout-xs=\"column\" flex=\"60\">\n" +
    "                        <span style=\"color: #a5a5a5;\">- Asistencia Psicológica</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\" flex=\"100\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <div class=\"header_cotiza\" flex ng-show=\"ec.actualizo === false\">\n" +
    "                            <div class=\"prima\">\n" +
    "                                <span>Prima Total</span>\n" +
    "                                <div>\n" +
    "                                    <span class=\"precio\">{{ec.tarifaActualizada.primaTotal | currency}}</span>\n" +
    "                                    <span>MXN</span>\n" +
    "                                </div>\n" +
    "                                <span>{{ec.tarifaActualizada.periodos}} pago(s) de {{ec.tarifaActualizada.primaTotal/ec.tarifaActualizada.periodos | currency}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"plan\" ng-show=\"ec.tarifaActualizada.periodos > 1\">\n" +
    "                                <span>Pagando de forma Anual tu </span>\n" +
    "                                <span ng-class=\"ec.glow && ec.tarifaActualizada.periodos > 1 ? 'ahorro glow' : 'ahorro'\">ahorro</span>\n" +
    "                                <span>sería de: {{ec.tarifaActualizada.ahorro | currency}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"plan\" ng-show=\"ec.tarifaActualizada.periodos == 1\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"header_cotiza\" flex ng-show=\"ec.actualizo === true\">\n" +
    "                            <div>\n" +
    "                                <span class=\"precio\">Ocurrió un error al tarificar, consultar al administrador.</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Beneficiarios--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Beneficiarios</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-actions>\n" +
    "                            <md-button ng-click=\"ec.secAgrBen = true\" aria-label=\"Agregar beneficiario\">\n" +
    "                                <ng-md-icon icon=\"add_box\" style=\"fill: #43C2BE\" size=\"35\"></ng-md-icon>\n" +
    "                            </md-button>\n" +
    "                            <span class=\"md-subhead\">Agregar beneficiario</span>\n" +
    "                        </md-card-actions>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-padding ng-show=\"ec.emision.datosBeneficiarios.length === 0\">\n" +
    "                        <div style=\"color: rgb(6,204,153);font-size: 13px;vertical-align: top;\">Debe de existir al menos un beneficiario y tener el 100% de participación de la suma asegurada *</div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-padding ng-show=\"ec.porcentajeInicial !== 0\">\n" +
    "                        <div style=\"color: rgb(6,204,153);font-size: 13px;vertical-align: top;\">El porcentaje de participación de la suma aseguarada de los beneficarios debe sumar el 100% *</div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-padding ng-show=\"ec.emision.datosBeneficiarios.length === 10\">\n" +
    "                        <div style=\"color: rgb(6,204,153);font-size: 13px;vertical-align: top;\">Solo se puede tener un máximo de 10 beneficiarios *</div>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"ec.secAgrBen\" layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" md-maxlength=\"25\" name=\"apPatBenf\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.datosBeneficiarios.apPat\" ng-required=\"ec.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.apPatBenf.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" md-maxlength=\"25\" name=\"apMatBenf\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.datosBeneficiarios.apMat\" ng-required=\"ec.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.apMatBenf.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" md-maxlength=\"25\" name=\"nombreBenf\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.datosBeneficiarios.nombre\" ng-required=\"ec.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.nombreBenf.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Parentesco</label>\n" +
    "                            <md-select name=\"parentescoBenf\" ng-model=\"ec.datosBeneficiarios.parentesco\" ng-required=\"ec.secAgrBen\">\n" +
    "                                <md-option value=\"padre\">Padre</md-option>\n" +
    "                                <md-option value=\"madre\">Madre</md-option>\n" +
    "                                <md-option value=\"abuelo\">Abuelo(a)</md-option>\n" +
    "                                <md-option value=\"concubino\">Concubino(a)</md-option>\n" +
    "                                <md-option value=\"conyugue\">Cónyuge</md-option>\n" +
    "                                <md-option value=\"hermano\">Hermano(a)</md-option>\n" +
    "                                <md-option value=\"hijo\">Hijo(a)</md-option>\n" +
    "                                <md-option value=\"nieto\">Nieto(a)</md-option>\n" +
    "                                <md-option value=\"primo\">Primo(a)</md-option>\n" +
    "                                <md-option value=\"tio\">Tio(a)</md-option>\n" +
    "                                <md-option value=\"familiar\">Familiar</md-option>\n" +
    "                                <md-option value=\"otro\">Otro</md-option>\n" +
    "                            </md-select>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Participación(%) de la </br>suma asegurada</label>\n" +
    "                            <input type=\"number\" name=\"porcBenf\" min=\"{{ec.porcentajeMinimo}}\" max=\"{{ec.porcentajeInicial}}\" ng-pattern=\"/^[0-9]+$/\" ng-model=\"ec.datosBeneficiarios.porcentaje\" ng-required=\"ec.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionForm.porcBenf.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo números enteros son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"ec.secAgrBen\" layout=\"row\" layout-align=\"end center\" layout-xs=\"column\">\n" +
    "                        <md-button flex-xs ng-click=\"ec.cierraBeneficiario()\" class=\"md-raised md-primary\" aria-label=\"Cancelar agregar beneficiario\">\n" +
    "                            Cancelar\n" +
    "                        </md-button>\n" +
    "                        <md-button flex-xs ng-click=\"ec.agregaBeneficiario()\" class=\"md-raised md-primary\" ng-disabled=\"emisionForm.porcBenf.$invalid || emisionForm.parentescoBenf.$invalid || emisionForm.nombreBenf.$invalid || emisionForm.apMatBenf.$invalid || emisionForm.apPatBenf.$invalid\" aria-label=\"Agregar beneficiario\">\n" +
    "                            Agregar beneficiario\n" +
    "                        </md-button>\n" +
    "                    </div>\n" +
    "                    <md-divider></md-divider>\n" +
    "                    <div ng-repeat=\"beneficairo in ec.emision.datosBeneficiarios\" layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-actions>\n" +
    "                            <md-button ng-click=\"ec.borrarBeneficiario(beneficairo)\" aria-label=\"Borrar beneficiario\">\n" +
    "                                <ng-md-icon icon=\"delete\" style=\"fill:#ec0a0a\" size=\"35\"></ng-md-icon>\n" +
    "                            </md-button>\n" +
    "                        </md-card-actions>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input ng-disabled=\"true\" ng-model=\"beneficairo.apPat\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input ng-disabled=\"true\" ng-model=\"beneficairo.apMat\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input ng-disabled=\"true\" ng-model=\"beneficairo.nombre\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Parentesco</label>\n" +
    "                            <input ng-disabled=\"true\" ng-model=\"beneficairo.parentesco\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Participación(%) de la suma asegurada</label>\n" +
    "                            <input ng-disabled=\"true\" ng-model=\"beneficairo.porcentaje\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Cobranza--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Datos de cobranza</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"viaPago\" ng-model=\"ec.emision.datosCobranza.viaPago\" ng-change=\"ec.cambiaViaPago();\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Periodicidad del pago</label>\n" +
    "                                    <md-radio-button flex value=\"credito\">Cargo a tarjeta de crédito</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"debito\">Cargo a tarjeta de débito</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"clabe\">CLABE</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"pagoRef\">Pago referenciado</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.viaPago.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"ec.emision.datosCobranza.viaPago === 'credito' || ec.emision.datosCobranza.viaPago === 'debito'\">\n" +
    "                        <md-card-header>\n" +
    "                            <md-card-header-text>\n" +
    "                                <span class=\"md-subhead\">Cargo a tarjeta de crédito o débito</span>\n" +
    "                            </md-card-header-text>\n" +
    "                        </md-card-header>\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Banco</label>\n" +
    "                                <input name=\"bancoObligatoria\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.emision.datosCobranza.tarjetaObligatoria.banco\" ng-required=\"ec.emision.datosCobranza.viaPago === 'credito' || ec.emision.datosCobranza.viaPago === 'debito'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.bancoObligatoria.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Número de tarjeta</label>\n" +
    "                                <input type=\"password\" name=\"tarjetaNumObligatoria\" md-maxlength=\"16\" ng-pattern=\"/^(\\d{16})$/i\" ng-model=\"ec.emision.datosCobranza.tarjetaObligatoria.numero\" ng-required=\"ec.emision.datosCobranza.viaPago === 'credito' || ec.emision.datosCobranza.viaPago === 'debito'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.tarjetaNumObligatoria.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 16 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Mes de expiración</label>\n" +
    "                                <input type=\"number\" min=\"1\" max=\"12\" ng-pattern=\"/^[0-9]+$/\" name=\"mesObli\" ng-model=\"ec.emision.datosCobranza.tarjetaObligatoria.mesExpiracion\" ng-required=\"ec.emision.datosCobranza.viaPago === 'credito' || ec.emision.datosCobranza.viaPago === 'debito'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.mesObli.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Año de expiración</label>\n" +
    "                                <input type=\"number\" min=\"{{ec.agnoValidoTarjeta.getFullYear()}}\" max=\"{{ec.agnoValidoTarjeta.getFullYear() + 6}}\" ng-pattern=\"/^[0-9]+$/\" name=\"agnoExpiracionObli\" ng-model=\"ec.emision.datosCobranza.tarjetaObligatoria.agnoExpiracion\" ng-required=\"ec.emision.datosCobranza.viaPago === 'credito' || ec.emision.datosCobranza.viaPago === 'debito'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.agnoExpiracionObli.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos y en formato \"YYYY\" es válido</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                        <md-divider></md-divider>\n" +
    "                        <md-card-header>\n" +
    "                            <md-card-header-text>\n" +
    "                                <span class=\"md-subhead\">Cargo a tarjeta de crédito o débito (Opcional)</span>\n" +
    "                            </md-card-header-text>\n" +
    "                        </md-card-header>\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Banco</label>\n" +
    "                                <input name=\"bancoOpcional\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.emision.datosCobranza.tarjetaOpcional.banco\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.bancoOpcional.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Número de tarjeta</label>\n" +
    "                                <input type=\"password\" name=\"tarjetaNumOpcional\" md-maxlength=\"16\" ng-pattern=\"/^(\\d{16})$/i\" ng-model=\"ec.emision.datosCobranza.tarjetaOpcional.numero\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.tarjetaNumOpcional.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 16 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Mes de expiración</label>\n" +
    "                                <input type=\"number\" min=\"1\" max=\"12\" name=\"mesOpc\" ng-pattern=\"/^[0-9]+$/\" ng-model=\"ec.emision.datosCobranza.tarjetaOpcional.mesExpiracion\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.mesOpc.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Año de expiración</label>\n" +
    "                                <input type=\"number\" min=\"{{ec.agnoValidoTarjeta.getFullYear()}}\" max=\"{{ec.agnoValidoTarjeta.getFullYear() + 6}}\" ng-pattern=\"/^[0-9]+$/\" name=\"agnoExpiracionOpc\" ng-model=\"ec.emision.datosCobranza.tarjetaOpcional.agnoExpiracion\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.agnoExpiracionOpc.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos y en formato \"YYYY\" es válido</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"ec.emision.datosCobranza.viaPago === 'clabe'\">\n" +
    "                        <md-card-header>\n" +
    "                            <md-card-header-text>\n" +
    "                                <span class=\"md-subhead\">Datos de cuenta CLABE</span>\n" +
    "                            </md-card-header-text>\n" +
    "                        </md-card-header>\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Banco</label>\n" +
    "                                <input name=\"bancoClabe\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.emision.datosCobranza.datosClabe.banco\" ng-required=\"ec.emision.datosCobranza.viaPago === 'clabe'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.bancoClabe.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Número CLABE</label>\n" +
    "                                <input type=\"text\" name=\"numeroClabe\" md-maxlength=\"18\" ng-pattern=\"/^(\\d{18})$/i\" ng-model=\"ec.emision.datosCobranza.datosClabe.numeroClabe\" ng-required=\"ec.emision.datosCobranza.viaPago === 'clabe'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.numeroClabe.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 18 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">La cuenta CLABE debe ser de 18 dígitos númericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"ec.emision.datosCobranza.viaPago !== 'pagoRef'\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"opcionContratantePago\" ng-model=\"ec.emision.datosCobranza.titular\" ng-change=\"ec.opcionContratantePago()\" ng-required=\"ec.emision.datosCobranza.viaPago !== 'pagoRef'\">\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">¿El contratante es igual al titular de la cuenta/tarjeta?</label>\n" +
    "                                    <md-radio-button value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                           <div class=\"radioRequerido\" ng-show=\"emisionForm.opcionContratantePago.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"ec.emision.datosCobranza.titular === 'no'\">\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Nombre del titular</label>\n" +
    "                                <input name=\"nombreTitular\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"ec.emision.datosCobranza.nombreTitular\" ng-required=\"ec.emision.datosCobranza.titular === 'no'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.nombreTitular.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Parentesco</label>\n" +
    "                                <md-select name=\"parentescoTitular\" ng-required=\"ec.emision.datosCobranza.titular === 'no'\" ng-model=\"ec.emision.datosCobranza.parentescoTitular\">\n" +
    "                                    <md-option value=\"padre\">Padre</md-option>\n" +
    "                                    <md-option value=\"madre\">Madre</md-option>\n" +
    "                                    <md-option value=\"abuelo\">Abuelo(a)</md-option>\n" +
    "                                    <md-option value=\"concubino\">Concubino(a)</md-option>\n" +
    "                                    <md-option value=\"conyugue\">Cónyuge</md-option>\n" +
    "                                    <md-option value=\"hermano\">Hermano(a)</md-option>\n" +
    "                                    <md-option value=\"hijo\">Hijo(a)</md-option>\n" +
    "                                    <md-option value=\"nieto\">Nieto(a)</md-option>\n" +
    "                                    <md-option value=\"primo\">Primo(a)</md-option>\n" +
    "                                    <md-option value=\"tio\">Tio(a)</md-option>\n" +
    "                                    <md-option value=\"familiar\">Familiar</md-option>\n" +
    "                                    <md-option value=\"otro\">Otro</md-option>\n" +
    "                                </md-select>\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionForm.parentescoTitular.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-title-text>\n" +
    "                            <p class=\"md-subhead\">\n" +
    "                                Solicito y autorizo a la institución financiera o bancaria que corresponda para que realice, a mi nombre el pago por conceptos, periodicidad y montos que se detallan, con cargo a mi tarjeta de débito o crédito, o a mi cuenta bancaria identificada por\n" +
    "                                la CLABE que se cita, a favor de Grupo Nacional Provincial, S.A.B. (GNP), liberando al banco de cualquier responsabilidad.\n" +
    "                            </p>\n" +
    "                        </md-card-title-text>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Consentimiento--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Consentimiento</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-title-text>\n" +
    "                            <p class=\"md-subhead\">Tuve a la vista el Aviso de Privacidad Integral de Grupo Nacional Provincial S.A.B. (GNP), el cual contiene y detalla las finalidades del tratamiento de mis datos personales, patrimoniales y sensibles. Asimismo, se me informó\n" +
    "                                la disponibilidad de dicho aviso y sus actualizaciones en la página gnp.com.mx. Por lo anterior:</p>\n" +
    "                        </md-card-title-text>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"consenTitu\" ng-model=\"ec.emision.datosConsentimiento.solicitanteTitular\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Solicitante Titular (y de su Representante Legal si es menor de edad)</label>\n" +
    "                                    <md-radio-button flex value=\"si\">Si consiento dicho tratamiento</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No consiento dicho tratamiento</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.consenTitu.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"consenCont\" ng-model=\"ec.emision.datosConsentimiento.contratante\" ng-show=\"ec.igualSol == '0'\" ng-required=\"ec.igualSol == '0'\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Contratante(Sólo si es diferente al Solicitante)</label>\n" +
    "                                    <md-radio-button flex value=\"si\">Si consiento dicho tratamiento</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No consiento dicho tratamiento</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.consenCont.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <!---Datos Importante--->\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Importante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "                        <md-card-title-text>\n" +
    "                            <p class=\"md-subhead\">\n" +
    "                                Información requerida para efectos de los artículos 139 a 139 Quinquies, 193 a 199, 400 y 400 Bis del Código Penal Federal y artículos relativos.</br>-Precepto(s) legal(es) disponible(s) en gnp.com.mx-\n" +
    "                            </p>\n" +
    "                        </md-card-title-text>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-align=\"start center\">\n" +
    "                        <p style=\"text-align: justify;\">\n" +
    "                            ¿Tiene o ha tenido nexos o vínculos con la delincuencia organizada; o ha sido sujeto a procedimiento legal o investigación por los delitos establecidos en el Código Penal Federal relativos a la delincuencia organizada, en territorio nacional o extranjero,\n" +
    "                            por alguna autoridad de México o por alguna autoridad extranjera cuyo gobierno tenga celebrado con México tratado internacional; o ha estado su nombre, alias o apodo, sus actividades, los bienes asegurar o su nacionalidad,\n" +
    "                            publicados en una lista oficial, nacional o extranjera, relativa a los delitos vinculados con los artículos anteriormente citados?\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"35\" flex-xs=\"100\">\n" +
    "                            <md-radio-group ng-model=\"ec.emision.datosNexos.solicitante\" name=\"nexosTitular\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Solicitante titular</label>\n" +
    "                                    <md-radio-button flex value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.nexosTitular.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"35\" flex-xs=\"100\">\n" +
    "                            <md-radio-group ng-model=\"ec.emision.datosNexos.contratante\" name=\"nexosContratante\"  ng-show=\"ec.igualSol == '0'\" ng-required=\"ec.igualSol == '0'\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Contratante (Sólo si es diferente al Solicitante)</label>\n" +
    "                                    <md-radio-button flex value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionForm.nexosContratante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <div layout=\"column\">\n" +
    "            <md-progress-linear ng-show=\"ec.loadingEmision\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "            <div layout=\"row\" layout-align=\"end center\" layout-xs=\"column\">\n" +
    "                <md-button flex-xs=\"100\" class=\"md-raised md-primary\" ng-click=\"ec.cancelarCotizacion()\" aria-label=\"Emitir\">\n" +
    "                    Cancelar cotización\n" +
    "                </md-button>\n" +
    "                <md-button flex-xs=\"100\" ng-click=\"ec.popEnvioPoliza()\" class=\"md-raised md-primary\" ng-disabled=\"!ec.online || emisionForm.$invalid || ec.tarifaActualizada == {} || ec.emision.datosBeneficiarios.length === 0 || ec.porcentajeInicial !== 0 || ec.errorValidaRfc\" aria-label=\"Emitir\">\n" +
    "                    Emitir\n" +
    "                </md-button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/emisionVida/emisionVida.tpl.html',
    "<div class=\"mifel_emisionVida\">\n" +
    "    <form name=\"emisionVidaForm\" id=\"emisionVidaForm\">\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-title\">Datos para la emisión de Vive</span>\n" +
    "                    <span class=\"md-subhead\">Datos solicitante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"row\" layout-xs=\"column\">\n" +
    "                    <md-input-container flex=\"20\" flex-xs=\"100\">\n" +
    "                        <label>Número de cliente mifel</label>\n" +
    "                        <input type=\"text\" name=\"noMifelSolicitante\" md-maxlength=\"15\" ng-model=\"evc.emision.datosSolicitante.mifel\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*$/\">\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.noMifelSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" name=\"apPaternoSolicitante\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.apPat\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" name=\"apMaternoSolicitante\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.apMat\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" name=\"nombreSolicitante\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.nombre\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>R.F.C (Con homoclave)</label>\n" +
    "                            <input type=\"text\" name=\"rfcSolicitante\" md-maxlength=\"13\" ng-pattern=\"/^([A-Z&]{4})(\\d{6})[A-Z0-9]{0,3}$/i\" ng-keyup=\"evc.validaEdadRFC($event)\" ng-model=\"evc.emision.datosSolicitante.rfc\" required>\n" +
    "                            <div class=\"hint\" ng-if=\"evc.showHints\">Verifica que la edad de COTIZACIÓN coincida con el RFC</div>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.rfcSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 13 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de R.F.C (Con homoclave) es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"generoSolicitante\" ng-model=\"evc.emision.datosSolicitante.genero\" ng-disabled=\"true\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Género</label>\n" +
    "                                    <md-radio-button flex value=\"m\">Femenino</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"h\">Masculino</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.generoSolicitante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nacionalidad</label>\n" +
    "                            <input type=\"text\" name=\"nacionalidadSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.nacionalidad\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.nacionalidadSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"cargoPublicoSolicitante\" ng-model=\"evc.cargoPublicoSolicitante\" required>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <p style=\"color: rgba(0,0,0,0.38);\">¿El Contratante desempeña o ha desempeñado cargo alguno dentro del gobierno municipal, estatal o federal en los ultimos cuatro años?</p>\n" +
    "                                </div>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <md-radio-button value=\"1\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"0\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.cargoPublicoSolicitante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.cargoPublicoSolicitante == '1'\">\n" +
    "                    <md-input-container flex=\"50\" flex-xs=\"100\">\n" +
    "                        <label>Que cargo?</label>\n" +
    "                        <input type=\"text\" name=\"cargoSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.cargo\" ng-required=\"evc.cargoPublicoSolicitante == '1'\">\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.cargoSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex=\"50\" flex-xs=\"100\">\n" +
    "                        <label>Dependencia</label>\n" +
    "                        <input type=\"text\" name=\"dependenciaSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.Dependencia\" ng-required=\"evc.cargoPublicoSolicitante == '1'\">\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.dependenciaSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <md-divider></md-divider>\n" +
    "                <md-card-header>\n" +
    "                    <md-card-header-text>\n" +
    "                        <span class=\"md-subhead\">Domicilio particular</span>\n" +
    "                    </md-card-header-text>\n" +
    "                </md-card-header>\n" +
    "                <div layout=\"row\" layout-xs=\"column\">\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>Calle</label>\n" +
    "                        <input type=\"text\" name=\"calleSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.calle\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.calleSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>No. exterior</label>\n" +
    "                        <input type=\"text\" name=\"noExteriorSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"20\" ng-model=\"evc.emision.datosSolicitante.noExterior\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.noExteriorSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 20 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>No. interior</label>\n" +
    "                        <input type=\"text\" name=\"noInteriorSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"20\" ng-model=\"evc.emision.datosSolicitante.noInterior\">\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.noInteriorSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 20 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>Código postal</label>\n" +
    "                        <input type=\"text\" name=\"cpSolicitante\" ng-model=\"evc.emision.datosSolicitante.cp\" md-maxlength=\"5\" ng-pattern=\"/^[0-9]{5}$/\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.cpSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 5 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\" layout-xs=\"column\">\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>País</label>\n" +
    "                        <input type=\"text\" name=\"paisSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.pais\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.paisSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>Estado</label>\n" +
    "                        <input type=\"text\" name=\"edoSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.estado\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.edoSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>Municipio o Delegación</label>\n" +
    "                        <input type=\"text\" name=\"munSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.municipio\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.munSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container flex>\n" +
    "                        <label>Colonia</label>\n" +
    "                        <input type=\"text\" name=\"colSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.colonia\" required>\n" +
    "                        <div class=\"md-accent\" ng-messages=\"emisionVidaForm.colSolicitante.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Teléfono Particular</label>\n" +
    "                            <input ng-model=\"evc.emision.datosSolicitante.telefonoParticular\" name=\"telefonoParticularSolictante\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" required/>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.telefonoParticularSolictante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Teléfono Oficina</label>\n" +
    "                            <input ng-model=\"evc.emision.datosSolicitante.telefonoOficina\" name=\"telefonoOficinaSolictante\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" required/>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.telefonoOficinaSolictante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Correo electrónico</label>\n" +
    "                            <input type=\"email\" ng-model=\"evc.emision.datosSolicitante.email\" name=\"emailSolictante\" md-maxlength=\"50\" ng-pattern=\"/^.+@.+\\..+$/\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.emailSolictante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 50 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex=\"30\" flex-xs=\"100\">\n" +
    "                            <label>Profesión/Ocupación</label>\n" +
    "                            <input type=\"text\" name=\"profesionSolictante\" ng-pattern=\"/[a-zA-Z]$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSolicitante.profesion\" required>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.profesionSolictante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead\">Declaración de salud del solicitante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"declaracioSalud\" ng-model=\"evc.declaracionSaludSol\" required>\n" +
    "                                <div layout=\"row\" layout-align=\"start center\">\n" +
    "                                    <p style=\"color: rgba(0,0,0,0.38);\">¿El solicitante padece o ha padecido alguna enfermedad hepática, mental, pulmonar, renal, neurológica, cardiovascular, hipertensión arterial, diabetes, epilepsia, esclerosis múltiple, fiebre reumática, SIDA, cáncer,\n" +
    "                                        tumores, leucemia, lupus, alcoholismo o drogadicción?*</p>\n" +
    "                                </div>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <md-radio-button value=\"1\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"0\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.declaracioSalud.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.declaracionSaludSol == '1'\">\n" +
    "                        <md-input-container flex=\"30\" flex-xs=\"100\">\n" +
    "                            <label>Padecimiento</label>\n" +
    "                            <input type=\"text\" name=\"padecimientoSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSaludSolicitante.padecimiento\" ng-required=\"evc.declaracionSaludSol == '1'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.padecimientoSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex=\"40\" flex-xs=\"100\">\n" +
    "                            <label>Estado actual</label>\n" +
    "                            <input type=\"text\" name=\"edoPadecimientoSolicitante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosSaludSolicitante.estadoPadecimiento\" ng-required=\"evc.declaracionSaludSol == '1'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.edoPadecimientoSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex=\"30\" flex-xs=\"100\">\n" +
    "                            <label>Desde cuando</label>\n" +
    "                            <md-datepicker name=\"fechaPadecimientoSolicitante\" ng-model=\"evc.emision.datosSaludSolicitante.fechaPadecimiento\" md-placeholder=\"Fecha padecimiento*\" ng-required=\"evc.declaracionSaludSol == '1'\"></md-datepicker>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.fechaPadecimientoSolicitante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"respuestaFumaSolicitante\" ng-model=\"evc.emision.datosSaludSolicitante.fuma\" required>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">¿Ha fumado en los últimos 12 meses?*</label>\n" +
    "                                    <md-radio-button value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.respuestaFumaSolicitante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead\">Datos del contratante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"contrateIgual\" ng-model=\"evc.igualSol\" ng-change=\"evc.eliminarContratante()\" required>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">¿El Contratante es igual al Solicitante Titular?*</label>\n" +
    "                                    <md-radio-button value=\"1\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"0\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.contrateIgual.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\" ng-show=\"evc.igualSol == '0'\">\n" +
    "                    <div layout=\"column\">\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex=\"20\" flex-xs=\"100\">\n" +
    "                                <label>Número de cliente mifel</label>\n" +
    "                                <input type=\"text\" name=\"noMifelContratante\" md-maxlength=\"15\" ng-model=\"evc.emision.datosContratante.mifel\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*$/\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.noMifelContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" name=\"apPaternoContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.apPat\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.apPaternoContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" name=\"apMaternoContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.apMat\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.apMaternoContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" name=\"nombreContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.nombre\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.nombreContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>R.F.C (Con homoclave)</label>\n" +
    "                            <input type=\"text\" name=\"rfcContratante\" ng-model=\"evc.emision.datosContratante.rfc\" md-maxlength=\"13\" ng-pattern=\"/^([A-Z&]{4})(\\d{6})[A-Z0-9]{0,3}$/i\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.rfcContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 13 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de R.F.C (Con homoclave) es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>CURP</label>\n" +
    "                            <input type=\"text\" name=\"curpContratante\" ng-model=\"evc.emision.datosContratante.curp\" ng-pattern=\"/^([A-Z]{4})([0-9]{6})([A-Z]{6})([A-Z0-9]{2})$/i\" md-maxlength=\"18\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.curpContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 18 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">El formato de CURP es inválido</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"generoContratante\" ng-model=\"evc.emision.datosContratante.genero\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Género</label>\n" +
    "                                    <md-radio-button flex value=\"m\">Femenino</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"h\">Masculino</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.generoContratante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"column\">\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex=\"35\" flex-xs=\"100\">\n" +
    "                                <label>Nacionalidad</label>\n" +
    "                                <input type=\"text\" name=\"nacionalidadContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.nacionalidad\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.nacionalidadContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex=\"35\" flex-xs=\"100\">\n" +
    "                                <label>Número de Serie de Certificado Digital de la FIEL</label>\n" +
    "                                <input type=\"text\" name=\"fielContratante\" ng-pattern=\"/[a-zA-Z0-9]$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.fiel\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.fielContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex=\"30\" flex-xs=\"100\">\n" +
    "                                <label>Profesión/Ocupación</label>\n" +
    "                                <input type=\"text\" name=\"profesionContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.profesion\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.profesionContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"column\">\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <md-radio-group name=\"cargoPubCont\" ng-model=\"evc.cargoPublicoContratante\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                                    <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                        <label style=\"padding: 20px;\">¿El Contratante desempeña o ha desempeñado cargo alguno dentro del gobierno municipal, estatal o federal en los ultimos cuatro años?</label>\n" +
    "                                        <md-radio-button value=\"1\">Si</md-radio-button>\n" +
    "                                        <md-radio-button value=\"0\">No</md-radio-button>\n" +
    "                                    </div>\n" +
    "                                </md-radio-group>\n" +
    "                                <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.cargoPubCont.$error.required\">Campo requerido.</div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.cargoPublicoContratante == '1'\">\n" +
    "                        <md-input-container flex=\"50\" flex-xs=\"100\">\n" +
    "                            <label>Que cargo?</label>\n" +
    "                            <input type=\"text\" name=\"cargoContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.cargo\" ng-required=\"evc.cargoPublicoContratante == '1'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.cargoContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex=\"50\" flex-xs=\"100\">\n" +
    "                            <label>Dependencia</label>\n" +
    "                            <input type=\"text\" name=\"dependenciaContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.Dependencia\" ng-required=\"evc.cargoPublicoContratante == '1'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.dependenciaContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <md-divider></md-divider>\n" +
    "                    <md-card-header>\n" +
    "                        <md-card-header-text>\n" +
    "                            <span class=\"md-subhead\">Domicilio particular</span>\n" +
    "                        </md-card-header-text>\n" +
    "                    </md-card-header>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Calle</label>\n" +
    "                            <input type=\"text\" name=\"calleContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.calle\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.calleContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>No. exterior</label>\n" +
    "                            <input type=\"text\" name=\"noExteriorContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"15\" ng-model=\"evc.emision.datosContratante.noExterior\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.noExteriorContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>No. interior</label>\n" +
    "                            <input type=\"text\" name=\"noInteriorContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"15\" ng-model=\"evc.emision.datosContratante.noInterior\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.noInteriorContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Código postal</label>\n" +
    "                            <input type=\"text\" name=\"cpContratante\" ng-model=\"evc.emision.datosContratante.cp\" md-maxlength=\"5\" ng-pattern=\"/^[0-9]{5}$/\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.cpContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 5 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>País</label>\n" +
    "                            <input type=\"text\" name=\"paisContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"20\" ng-model=\"evc.emision.datosContratante.pais\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.paisContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 20 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Estado</label>\n" +
    "                            <input type=\"text\" name=\"edoContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.estado\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.edoContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Municipio o Delegación</label>\n" +
    "                            <input type=\"text\" name=\"munContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.municipio\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.munContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Colonia</label>\n" +
    "                            <input type=\"text\" name=\"colContratante\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosContratante.colonia\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.colContratante.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"column\">\n" +
    "                        <div layout=\"row\" layout-xs=\"column\">\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Teléfono Particular</label>\n" +
    "                                <input ng-model=\"evc.emision.datosContratante.telefonoParticular\" name=\"telefonoParticularContratante\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" ng-required=\"evc.igualSol == '0'\" />\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.telefonoParticularContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Teléfono Oficina</label>\n" +
    "                                <input ng-model=\"evc.emision.datosContratante.telefonoOficina\" name=\"telefonoOficinaContratante\" md-maxlength=\"15\" ng-pattern=\"/^[\\-()\\0-9]{8,15}$/\" ng-required=\"evc.igualSol == '0'\" />\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.telefonoOficinaContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 15 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container flex>\n" +
    "                                <label>Correo electrónico</label>\n" +
    "                                <input type=\"email\" ng-model=\"evc.emision.datosContratante.email\" name=\"emailContratante\" md-maxlength=\"50\" ng-pattern=\"/^.+@.+\\..+$/\" ng-required=\"evc.igualSol == '0'\">\n" +
    "                                <div class=\"md-accent\" ng-messages=\"emisionVidaForm.emailContratante.$error\" role=\"alert\">\n" +
    "                                    <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 50 carácteres</div>\n" +
    "                                    <div class=\"md-accent\" ng-message=\"pattern\">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text>\n" +
    "                    <span class=\"md-subhead\">Datos del plan</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Plan</label>\n" +
    "                            <input type=\"text\" ng-model=\"evc.emision.datosPlan.plan\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Suma asegurada</label>\n" +
    "                            <input type=\"text\" value=\"{{evc.emision.datosPlan.sumaAseg | currency}}\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Forma de pago</label>\n" +
    "                            <input type=\"text\" ng-model=\"evc.emision.datosPlan.formaPago\" ng-disabled=\"true\">\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <md-card-header>\n" +
    "                    <md-card-header-text>\n" +
    "                        <span class=\"md-subhead\">Coberturas adicionales</span>\n" +
    "                    </md-card-header-text>\n" +
    "                </md-card-header>\n" +
    "                <div layout=\"column\">\n" +
    "                    <md-input-container class=\"md-block\">\n" +
    "                        <md-checkbox ng-model=\"evc.emision.datosPlan.ima\" aria-label=\"IMA\" ng-disabled=\"true\">\n" +
    "                            Muerte Accidental\n" +
    "                        </md-checkbox>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container class=\"md-block\" ng-show=\"evc.emision.datosPlan.ima\">\n" +
    "                        <label>Protección contratada (MXN)</label>\n" +
    "                        <input type=\"text\" value=\"{{evc.emision.datosPlan.sumaAseg | currency}}\" ng-disabled=\"true\" />\n" +
    "                        <md-input type=\"text\" name=\"proteccionConIma\" ng-model=\"vida.proteccionConIma\" ng-hide=\"true\" />\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container class=\"md-block\">\n" +
    "                        <md-checkbox ng-model=\"evc.emision.datosPlan.ise\" aria-label=\"ISE\" ng-disabled=\"true\">\n" +
    "                            Invalidez Sin Espera\n" +
    "                        </md-checkbox>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container class=\"md-block\" ng-show=\"evc.emision.datosPlan.ise\">\n" +
    "                        <label>Protección contratada (MXN)</label>\n" +
    "                        <input type=\"text\" value=\"{{evc.emision.datosPlan.sumaAseg | currency}}\" ng-disabled=\"true\" />\n" +
    "                        <md-input type=\"text\" name=\"proteccionConIse\" ng-model=\"vida.proteccionConIse\" ng-hide=\"true\" />\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container class=\"md-block\">\n" +
    "                        <md-checkbox ng-model=\"evc.emision.datosPlan.diba\" aria-label=\"DIBA\" ng-disabled=\"true\">\n" +
    "                            Doble Indemnización por Muerte Accidental con Pérdidas Orgánicas\n" +
    "                        </md-checkbox>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container class=\"md-block\" ng-show=\"evc.emision.datosPlan.diba\">\n" +
    "                        <label>Protección contratada (MXN)</label>\n" +
    "                        <input type=\"text\" value=\"{{evc.emision.datosPlan.sumaAseg | currency}}\" ng-disabled=\"true\" />\n" +
    "                        <md-input type=\"text\" name=\"proteccionConDiba\" ng-model=\"vida.proteccionConDiba\" ng-hide=\"true\" />\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <md-card-header>\n" +
    "                    <md-card-header-text>\n" +
    "                        <span class=\"md-subhead\">Servicios incluidos</span>\n" +
    "                    </md-card-header-text>\n" +
    "                </md-card-header>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-padding layout-xs=\"column\" flex=\"60\">\n" +
    "                        <span style=\"color: #a5a5a5;\">- Apoyo para últimos gastos</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-padding layout-xs=\"column\" flex=\"60\">\n" +
    "                        <span style=\"color: #a5a5a5;\">- Asistencia funeraria familiar</span>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-padding layout-xs=\"column\" flex=\"60\">\n" +
    "                        <span style=\"color: #a5a5a5;\">- Seguridad en Vida</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div layout=\"column\" flex=\"100\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <div class=\"header_cotiza\" flex ng-show=\"evc.actualizo === false\">\n" +
    "                            <div class=\"prima\">\n" +
    "                                <span>Prima Total</span>\n" +
    "                                <div>\n" +
    "                                    <span class=\"precio\">{{evc.tarifaActualizada.primaTotal | currency}}</span>\n" +
    "                                    <span>MXN</span>\n" +
    "                                </div>\n" +
    "                                <span>{{evc.tarifaActualizada.periodos}} pago(s) de {{evc.tarifaActualizada.primaTotal/evc.tarifaActualizada.periodos | currency}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"plan\" ng-show=\"evc.tarifaActualizada.periodos > 1\">\n" +
    "                                <span>Pagando de forma Anual tu </span>\n" +
    "                                <span ng-class=\"evc.glow && evc.tarifaActualizada.periodos > 1 ? 'ahorro glow' : 'ahorro'\">ahorro</span>\n" +
    "                                <span>sería de: {{evc.tarifaActualizada.ahorro | currency}}</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"plan\" ng-show=\"evc.tarifaActualizada.periodos == 1\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"header_cotiza\" flex ng-show=\"evc.actualizo === true\">\n" +
    "                            <div>\n" +
    "                                <span class=\"precio\">Ocurrió un error al tarificar, consultar al administrador.</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Beneficiarios</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-actions>\n" +
    "                            <md-button ng-click=\"evc.validaAgregaBeneficiario($event)\" aria-label=\"Agregar beneficiario\">\n" +
    "                                <ng-md-icon icon=\"add_box\" style=\"fill: #43C2BE\" size=\"35\"></ng-md-icon>\n" +
    "                            </md-button>\n" +
    "                            <span class=\"md-subhead\">Agregar beneficiario</span>\n" +
    "                        </md-card-actions>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-padding ng-show=\"evc.emision.datosBeneficiarios.length === 0\">\n" +
    "                        <div style=\"color: rgb(6,204,153);font-size: 13px;vertical-align: top;\">Debe de existir al menos un beneficiario y tener el 100% de participación de la suma asegurada *</div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-padding ng-show=\"evc.inicialBeneficarios !== 0\">\n" +
    "                        <div style=\"color: rgb(6,204,153);font-size: 13px;vertical-align: top;\">El porcentaje de participación de la suma asegurada de los beneficarios debe sumar el 100% *</div>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-padding ng-show=\"evc.emision.datosBeneficiarios.length === 10\">\n" +
    "                        <div style=\"color: rgb(6,204,153);font-size: 13px;vertical-align: top;\">Solo se puede tener un máximo de 10 beneficiarios *</div>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"evc.secAgrBen\" layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" name=\"apPaternoBeneficiario\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.datosBeneficiarios.apPat\" ng-required=\"evc.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.apPaternoBeneficiario.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" name=\"apMaternoBeneficiario\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.datosBeneficiarios.apMat\" ng-required=\"evc.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.apMaternoBeneficiario.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" name=\"nombreBeneficiario\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.datosBeneficiarios.nombre\" ng-required=\"evc.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.nombreBeneficiario.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Parentesco</label>\n" +
    "                            <md-select name=\"parentescoBeneficiario\" ng-model=\"evc.datosBeneficiarios.parentesco\" ng-required=\"evc.secAgrBen\">\n" +
    "                                <md-option value=\"Abuelo\">Abuelo(a)</md-option>\n" +
    "                                <md-option value=\"Padre\">Padre</md-option>\n" +
    "                                <md-option value=\"Madre\">Madre</md-option>\n" +
    "                                <md-option value=\"Concubino(a)\">Concubino(a)</md-option>\n" +
    "                                <md-option value=\"Cónyuge\">Cónyuge</md-option>\n" +
    "                                <md-option value=\"Hermano(a)\">Hermano(a)</md-option>\n" +
    "                                <md-option value=\"Hijo(a)\">Hijo(a)</md-option>\n" +
    "                                <md-option value=\"Nieto(a)\">Nieto(a)</md-option>\n" +
    "                                <md-option value=\"Primo(a)\">Primo(a)</md-option>\n" +
    "                                <md-option value=\"Tio(a)\">Tio(a)</md-option>\n" +
    "                                <md-option value=\"Familiar\">Familiar</md-option>\n" +
    "                                <md-option value=\"Otro\">Otro</md-option>\n" +
    "                            </md-select>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.parentescoBeneficiario.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Participación(%) de la<br> suma asegurada</label>\n" +
    "                            <input type=\"number\" name=\"porcentajeBeneficiario\" min=\"{{evc.minimoBeneficiarios}}\" max=\"{{evc.inicialBeneficarios}}\" ng-pattern=\"/^[0-9]+$/\" ng-model=\"evc.datosBeneficiarios.porcentaje\" ng-required=\"evc.secAgrBen\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.porcentajeBeneficiario.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"min\">Valor incorrecto</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"max\">Valor incorrecto</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo números enteros son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex=\"30\" flex-xs=\"100\">\n" +
    "                            <md-datepicker name=\"fechaNacBeneficiario\" ng-model=\"evc.datosBeneficiarios.fechaNacimiento\" md-placeholder=\"Fecha Nacimiento\" ng-required=\"evc.secAgrBen\"></md-datepicker>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"evc.secAgrBen\" layout=\"row\" layout-align=\"end center\" layout-xs=\"column\">\n" +
    "                        <md-button flex-xs ng-click=\"evc.cierraBeneficiario()\" class=\"md-raised md-primary\" aria-label=\"Cancelar agregar beneficiario\">\n" +
    "                            Cancelar\n" +
    "                        </md-button>\n" +
    "                        <md-button flex-xs ng-click=\"evc.agregaBeneficiario()\" class=\"md-raised md-primary\" aria-label=\"Agregar beneficiario\" ng-disabled=\" emisionVidaForm.apPaternoBeneficiario.$invalid || emisionVidaForm.apMaternoBeneficiario.$invalid || emisionVidaForm.nombreBeneficiario.$invalid || emisionVidaForm.parentescoBeneficiario.$invalid || emisionVidaForm.porcentajeBeneficiario.$invalid || emisionVidaForm.fechaNacBeneficiario.$invalid\">\n" +
    "                            Agregar beneficiario\n" +
    "                        </md-button>\n" +
    "                    </div>\n" +
    "                    <div flex>\n" +
    "                        <md-card ng-repeat=\"beneficiario in evc.emision.datosBeneficiarios\">\n" +
    "                            <md-card-header>\n" +
    "                                <md-card-header-text>\n" +
    "                                    <span class=\"md-subhead\">Beneficiario {{$index + 1}}</span>\n" +
    "                                </md-card-header-text>\n" +
    "                            </md-card-header>\n" +
    "                                <md-card-title-text layout=\"column\">\n" +
    "                                        <div>\n" +
    "                                            <md-button ng-click=\"evc.borrarBeneficiario(beneficiario)\" aria-label=\"Borrar beneficiario\">\n" +
    "                                                <ng-md-icon icon=\"delete\" style=\"fill:#ec0a0a\" size=\"15\"></ng-md-icon>\n" +
    "                                            </md-button>\n" +
    "                                            <md-input-container flex=\"15\" flex-xs=\"100\">\n" +
    "                                                <label>Primer apellido</label>\n" +
    "                                                <input ng-disabled=\"true\" ng-model=\"beneficiario.apPat\">\n" +
    "                                            </md-input-container>\n" +
    "                                            <md-input-container flex=\"15\" flex-xs=\"100\">\n" +
    "                                                <label>Segundo apellido</label>\n" +
    "                                                <input ng-disabled=\"true\" ng-model=\"beneficiario.apMat\">\n" +
    "                                            </md-input-container>\n" +
    "                                            <md-input-container flex=\"15\" flex-xs=\"100\">\n" +
    "                                                <label>Nombre(s)</label>\n" +
    "                                                <input ng-disabled=\"true\" ng-model=\"beneficiario.nombre\">\n" +
    "                                            </md-input-container>\n" +
    "                                            <md-input-container flex=\"10\" flex-xs=\"100\">\n" +
    "                                                <label>Parentesco</label>\n" +
    "                                                <input ng-disabled=\"true\" ng-model=\"beneficiario.parentesco\">\n" +
    "                                            </md-input-container>\n" +
    "                                            <md-input-container flex=\"10\" flex-xs=\"100\">\n" +
    "                                                <label>Fecha nacimiento</label>\n" +
    "                                                <input ng-disabled=\"true\" ng-model=\"beneficiario.fechaNacimiento\">\n" +
    "                                            </md-input-container>\n" +
    "                                            <md-input-container flex=\"15\" flex-xs=\"100\">\n" +
    "                                                <label>Participación(%) de la<br> suma asegurada</label>\n" +
    "                                                <input ng-disabled=\"true\" ng-model=\"beneficiario.porcentaje\">\n" +
    "                                            </md-input-container>\n" +
    "                                            <md-button flex=\"10\" ng-click=\"evc.validaAgregaBeneficiarioContingente(beneficiario, $event)\" aria-label=\"Agregar contingente\">\n" +
    "                                                <ng-md-icon icon=\"add_box\" style=\"fill: #43C2BE\" size=\"15\"></ng-md-icon>\n" +
    "                                                <span style=\"color: #004681; text-transform: capitalize;\">Contingente</span>\n" +
    "                                            </md-button>\n" +
    "                                        </div>\n" +
    "                                        <div ng-show=\"beneficiario.contingentes.length !== 0\" layout=\"row\" layout-xs=\"column\">\n" +
    "                                            <md-card-header>\n" +
    "                                                <md-card-header-text>\n" +
    "                                                    <span class=\"md-subhead\">Contingentes</span>\n" +
    "                                                </md-card-header-text>\n" +
    "                                            </md-card-header>\n" +
    "                                        </div>\n" +
    "                                    <div ng-repeat=\"contingente in beneficiario.contingentes\" layout=\"row\" layout-xs=\"column\">\n" +
    "                                         <md-card-actions>\n" +
    "                                            <md-button ng-click=\"evc.borraBeneficiarioContigente(beneficiario, contingente)\" aria-label=\"Borrar beneficiario\">\n" +
    "                                                <ng-md-icon icon=\"delete\" style=\"fill:#ec0a0a\" size=\"15\"></ng-md-icon>\n" +
    "                                            </md-button>\n" +
    "                                        </md-card-actions>\n" +
    "                                         <md-input-container flex>\n" +
    "                                            <label>Primer apellido</label>\n" +
    "                                            <input ng-disabled=\"true\" ng-model=\"contingente.apPat\">\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container flex>\n" +
    "                                            <label>Segundo apellido</label>\n" +
    "                                            <input ng-disabled=\"true\" ng-model=\"contingente.apMat\">\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container flex>\n" +
    "                                            <label>Nombre(s)</label>\n" +
    "                                            <input ng-disabled=\"true\" ng-model=\"contingente.nombre\">\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container flex>\n" +
    "                                            <label>Parentesco</label>\n" +
    "                                            <input ng-disabled=\"true\" ng-model=\"contingente.parentesco\">\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container flex>\n" +
    "                                            <label>Participación(%) de la<br> suma asegurada</label>\n" +
    "                                            <input ng-disabled=\"true\" ng-model=\"contingente.porcentaje\">\n" +
    "                                        </md-input-container>\n" +
    "                                    </div>\n" +
    "                                </md-card-title-text>\n" +
    "                        </md-card>\n" +
    "                    </div> \n" +
    "                    <div ng-show=\"evc.secAgrBenContingente\" layout=\"row\" layout-xs=\"column\">\n" +
    "                        <span class=\"md-subhead\">Captura contingente</span>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"evc.secAgrBenContingente\" layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Primer apellido</label>\n" +
    "                            <input type=\"text\" id=\"apPaternoBeneficiarioContin\" name=\"apPaternoBeneficiarioContin\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.datosBeneficiarios.apPat\" ng-required=\"evc.secAgrBenContingente\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.apPaternoBeneficiarioContin.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Segundo apellido</label>\n" +
    "                            <input type=\"text\" name=\"apMaternoBeneficiarioContin\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.datosBeneficiarios.apMat\" ng-required=\"evc.secAgrBenContingente\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.apMaternoBeneficiarioContin.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Nombre(s)</label>\n" +
    "                            <input type=\"text\" name=\"nombreBeneficiarioContin\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" md-maxlength=\"25\" ng-model=\"evc.datosBeneficiarios.nombre\" ng-required=\"evc.secAgrBenContingente\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.nombreBeneficiarioContin.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Parentesco</label>\n" +
    "                            <md-select name=\"parentescoBeneficiarioContin\" ng-model=\"evc.datosBeneficiarios.parentesco\" ng-required=\"evc.secAgrBenContingente\">\n" +
    "                                <md-option value=\"Abuelo\">Abuelo(a)</md-option>\n" +
    "                                <md-option value=\"Padre\">Padre</md-option>\n" +
    "                                <md-option value=\"Madre\">Madre</md-option>\n" +
    "                                <md-option value=\"Concubino(a)\">Concubino(a)</md-option>\n" +
    "                                <md-option value=\"Cónyuge\">Cónyuge</md-option>\n" +
    "                                <md-option value=\"Hermano(a)\">Hermano(a)</md-option>\n" +
    "                                <md-option value=\"Hijo(a)\">Hijo(a)</md-option>\n" +
    "                                <md-option value=\"Nieto(a)\">Nieto(a)</md-option>\n" +
    "                                <md-option value=\"Primo(a)\">Primo(a)</md-option>\n" +
    "                                <md-option value=\"Tio(a)\">Tio(a)</md-option>\n" +
    "                                <md-option value=\"Familiar\">Familiar</md-option>\n" +
    "                                <md-option value=\"Otro\">Otro</md-option>\n" +
    "                            </md-select>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.parentescoBeneficiarioContin.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Participación(%) de la<br> suma asegurada</label>\n" +
    "                            <input type=\"number\" name=\"porcentajeBeneficiarioContin\" ng-pattern=\"/^[0-9]+$/\" ng-model=\"evc.datosBeneficiarios.porcentaje\" min=\"{{evc.minimoContingente}}\" max=\"{{evc.maximoContingente}}\" ng-required=\"evc.secAgrBenContingente\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.porcentajeBeneficiarioContin.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"min\">Valor incorrecto</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"max\">Valor incorrecto</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Solo números enteros son válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"evc.secAgrBenContingente\" layout=\"row\" layout-align=\"end center\" layout-xs=\"column\">\n" +
    "                        <md-button flex-xs ng-click=\"evc.cierraBeneficiario()\" class=\"md-raised md-primary\" aria-label=\"Cancelar agregar beneficiario\">\n" +
    "                            Cancelar\n" +
    "                        </md-button>\n" +
    "                        <md-button flex-xs ng-click=\"evc.agregaBeneficiarioContingente()\" class=\"md-raised md-primary\" aria-label=\"Agregar beneficiario\" ng-disabled=\"emisionVidaForm.apPaternoBeneficiarioContin.$invalid || emisionVidaForm.apMaternoBeneficiarioContin.$invalid || emisionVidaForm.nombreBeneficiarioContin.$invalid || emisionVidaForm.parentescoBeneficiarioContin.$invalid || emisionVidaForm.porcentajeBeneficiarioContin.$invalid\">\n" +
    "                            Agregar beneficiario\n" +
    "                        </md-button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Datos de cobranza</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"viaPago\" ng-model=\"evc.emision.datosCobranza.viaPago\" ng-change=\"evc.cambiaViaPago()\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Periodicidad del pago</label>\n" +
    "                                    <md-radio-button flex value=\"credito\">Cargo a tarjeta de crédito</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"debito\">Cargo a tarjeta de débito</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"clabe\">CLABE</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"pagoRef\">Pago referenciado</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.viaPago.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <md-card-header ng-show=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                        <md-card-header-text>\n" +
    "                            <span class=\"md-subhead\">Cargo a tarjeta de crédito o débito</span>\n" +
    "                        </md-card-header-text>\n" +
    "                    </md-card-header>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Banco</label>\n" +
    "                            <input name=\"bancoObligatoria\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"evc.emision.datosCobranza.tarjetaObligatoria.banco\" ng-required=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.bancoObligatoria.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Número de tarjeta</label>\n" +
    "                            <input type=\"password\" name=\"tarjetaNumObligatoria\" md-maxlength=\"16\" ng-pattern=\"/^(\\d{16})$/i\" ng-model=\"evc.emision.datosCobranza.tarjetaObligatoria.numero\" ng-required=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.tarjetaNumObligatoria.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 16 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Mes de expiración</label>\n" +
    "                            <input type=\"number\" min=\"1\" max=\"12\" name=\"mesObli\" ng-model=\"evc.emision.datosCobranza.tarjetaObligatoria.mesExpiracion\" ng-required=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.mesObli.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Año de expiración</label>\n" +
    "                            <input type=\"number\" min=\"{{evc.agnoValidoTarjeta.getFullYear()}}\" max=\"{{evc.agnoValidoTarjeta.getFullYear() + 6}}\" name=\"agnoExpiracionObli\" ng-model=\"evc.emision.datosCobranza.tarjetaObligatoria.agnoExpiracion\" ng-required=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.agnoExpiracionObli.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <md-divider ng-show=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\"></md-divider>\n" +
    "                    <md-card-header ng-show=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                        <md-card-header-text>\n" +
    "                            <span class=\"md-subhead\">Cargo a tarjeta de crédito o débito (Opcional)</span>\n" +
    "                        </md-card-header-text>\n" +
    "                    </md-card-header>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito'\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Banco</label>\n" +
    "                            <input name=\"bancoOpcional\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"evc.emision.datosCobranza.tarjetaOpcional.banco\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.bancoOpcional.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Número de tarjeta</label>\n" +
    "                            <input type=\"password\" name=\"tarjetaNumOpcional\" md-maxlength=\"16\" ng-pattern=\"/^(\\d{16})$/i\" ng-model=\"evc.emision.datosCobranza.tarjetaOpcional.numero\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.tarjetaNumOpcional.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 16 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Mes de expiración</label>\n" +
    "                            <input type=\"number\" min=\"1\" max=\"12\" name=\"mesOpc\" ng-model=\"evc.emision.datosCobranza.tarjetaOpcional.mesExpiracion\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.mesOpc.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Año de expiración</label>\n" +
    "                            <input type=\"number\" min=\"{{evc.agnoValidoTarjeta.getFullYear()}}\" max=\"{{evc.agnoValidoTarjeta.getFullYear() + 6}}\" name=\"agnoExpiracionOpc\" ng-model=\"evc.emision.datosCobranza.tarjetaOpcional.agnoExpiracion\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.agnoExpiracionOpc.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <md-card-header ng-show=\"evc.emision.datosCobranza.viaPago == 'clabe'\">\n" +
    "                        <md-card-header-text>\n" +
    "                            <span class=\"md-subhead\">Datos de cuenta CLABE</span>\n" +
    "                        </md-card-header-text>\n" +
    "                    </md-card-header>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.emision.datosCobranza.viaPago == 'clabe'\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Banco</label>\n" +
    "                            <input name=\"bancoClabe\" md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" ng-model=\"evc.emision.datosCobranza.datosClabe.banco\" ng-required=\"evc.emision.datosCobranza.viaPago == 'clabe'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.bancoClabe.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Número CLABE</label>\n" +
    "                            <input type=\"text\" name=\"numeroClabe\" md-maxlength=\"18\" ng-pattern=\"/^(\\d{18})$/i\" ng-model=\"evc.emision.datosCobranza.datosClabe.numeroClabe\" ng-required=\"evc.emision.datosCobranza.viaPago == 'clabe'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.numeroClabe.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 18 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito' || evc.emision.datosCobranza.viaPago == 'clabe'\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group name=\"titular\" ng-model=\"evc.emision.datosCobranza.titular\" ng-change=\"evc.opcionContratantePago()\" ng-required=\"evc.emision.datosCobranza.viaPago == 'credito' || evc.emision.datosCobranza.viaPago == 'debito' || evc.emision.datosCobranza.viaPago == 'clabe'\">\n" +
    "                                <div layout=\"row\" layout-align=\"start center\">\n" +
    "                                    <p style=\"color: rgba(0,0,0,0.38);\">¿El contratante es igual al titular de la cuenta o tarjeta?</p>\n" +
    "                                </div>\n" +
    "                                <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                    <md-radio-button value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.titular.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" ng-show=\"evc.emision.datosCobranza.titular == 'no'\">\n" +
    "                        <md-input-container flex=\"30\" flex-xs=\"100\">\n" +
    "                            <label>Nombre titular</label>\n" +
    "                            <input type=\"text\" name=\"nombreTitular\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$/\" md-maxlength=\"25\" ng-model=\"evc.emision.datosCobranza.nombreTitular\" ng-required=\"evc.emision.datosCobranza.titular == 'no'\">\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.nombreTitular.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 carácteres</div>\n" +
    "                                <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <label>Parentesco</label>\n" +
    "                            <md-select name=\"parentescoTitular\" ng-model=\"evc.emision.datosCobranza.parentescoTitular\" ng-required=\"evc.emision.datosCobranza.titular == 'no'\">\n" +
    "                                <md-option value=\"Abuelo\">Abuelo(a)</md-option>\n" +
    "                                <md-option value=\"Padre\">Padre</md-option>\n" +
    "                                <md-option value=\"Madre\">Madre</md-option>\n" +
    "                                <md-option value=\"Concubino(a)\">Concubino(a)</md-option>\n" +
    "                                <md-option value=\"Cónyuge\">Cónyuge</md-option>\n" +
    "                                <md-option value=\"Hermano(a)\">Hermano(a)</md-option>\n" +
    "                                <md-option value=\"Hijo(a)\">Hijo(a)</md-option>\n" +
    "                                <md-option value=\"Nieto(a)\">Nieto(a)</md-option>\n" +
    "                                <md-option value=\"Primo(a)\">Primo(a)</md-option>\n" +
    "                                <md-option value=\"Tio(a)\">Tio(a)</md-option>\n" +
    "                                <md-option value=\"Familiar\">Familiar</md-option>\n" +
    "                                <md-option value=\"Otro\">Otro</md-option>\n" +
    "                            </md-select>\n" +
    "                            <div class=\"md-accent\" ng-messages=\"emisionVidaForm.parentescoTitular.$error\" role=\"alert\">\n" +
    "                                <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-title-text>\n" +
    "                            <p class=\"md-subhead\">Solicito y autorizo a la institución financiera o bancaria que corresponda para que realice, a mi nombre el pago por los conceptos, periodicidad y montos que se detallan, con cargo a mi tarjeta de débito y crédito, o a mi cuenta\n" +
    "                                bancaria identificada por la CLABE que se cita, a favor de Grupo Nacional Provincial, S.A.B. (GNP), liberando al banco de cualquier responsabilidad.</p>\n" +
    "                        </md-card-title-text>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Consentimiento</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-card-title-text>\n" +
    "                            <p class=\"md-subhead\">Tuve a la vista el Aviso de Privacidad Integral de Grupo Nacional Provincial S.A.B. (GNP), el cual contiene y detalla las finalidades del tratamiento de mis datos personales, patrimoniales y sensibles. Asimismo, se me informó\n" +
    "                                la disponibilidad de dicho aviso y sus actualizaciones en la página gnp.com.mx. Por lo anterior:</p>\n" +
    "                        </md-card-title-text>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group ng-model=\"evc.emision.datosConsentimiento.solicitanteTitular\" name=\"consentimientoSolicitanteTitular\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Solicitante Titular (Y de su Representante Legal si es menor de edad)</label>\n" +
    "                                    <md-radio-button flex value=\"si\">Si consiento dicho tratamiento</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No consiento dicho tratamiento</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.consentimientoSolicitanteTitular.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group ng-model=\"evc.emision.datosConsentimiento.contratante\" name=\"consentimientoContratante\" ng-required=\"evc.igualSol == 0\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <label style=\"padding: 20px;\">Contratante(Sólo si es diferente al solicitante)</label>\n" +
    "                                    <md-radio-button flex value=\"si\">Si consiento dicho tratamiento</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No consiento dicho tratamiento</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.consentimientoContratante.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <md-card>\n" +
    "            <md-card-header>\n" +
    "                <md-card-header-text layout=\"row\" flex=\"10\">\n" +
    "                    <span class=\"md-subhead\">Importante</span>\n" +
    "                </md-card-header-text>\n" +
    "            </md-card-header>\n" +
    "            <md-card-content>\n" +
    "                <div layout=\"column\">\n" +
    "                    <md-card-title-text>\n" +
    "                        <p class=\"md-subhead\">¿Tiene o ha tenido nexos o vínculos con la delincuencia organizada; o ha sido sujeto a procedimiento legal o investigación por los delitos establecidos en el Código Penal Federal relativos a la delincuencia organizada, en territorio\n" +
    "                            nacional o extranjero, por alguna autoridad de México o por alguna autoridad extranjera cuyo gobierno tenga celebrado con México tratado internacional; o ha estado su nombre, alias o apodo, sus actividades, los bienes asegurar\n" +
    "                            o su nacionalidad, publicados en una lista oficial, nacional o extranjera, relativa a los delitos vinculados con los artículos anteriormente citados?</p>\n" +
    "                    </md-card-title-text>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\">\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group ng-model=\"evc.emision.datosNexos.solicitante\" name=\"solicitanteNexos\" required>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <p style=\"color: rgba(0,0,0,0.38);\">Solicitante titular</p>\n" +
    "                                </div>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <md-radio-button flex value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.solicitanteNexos.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container flex>\n" +
    "                            <md-radio-group ng-model=\"evc.emision.datosNexos.contratante\" name=\"contratanteNexos\" ng-required=\"evc.igualSol == 0\">\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <p style=\"color: rgba(0,0,0,0.38);\">Contratante</p>\n" +
    "                                </div>\n" +
    "                                <div layout=\"row\" layout-xs=\"column\" layout-sm=\"column\" layout-padding layout-align=\"start center\">\n" +
    "                                    <md-radio-button flex value=\"si\">Si</md-radio-button>\n" +
    "                                    <md-radio-button flex value=\"no\">No</md-radio-button>\n" +
    "                                </div>\n" +
    "                            </md-radio-group>\n" +
    "                            <div class=\"radioRequerido\" ng-show=\"emisionVidaForm.contratanteNexos.$error.required\">Campo requerido.</div>\n" +
    "                        </md-input-container>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </md-card-content>\n" +
    "        </md-card>\n" +
    "        <div layout=\"column\">\n" +
    "            <md-progress-linear ng-show=\"evc.loadingEmision\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "            <div layout=\"row\" layout-align=\"end center\" layout-xs=\"column\">\n" +
    "                <md-button flex-xs=\"100\" class=\"md-raised md-primary\" ng-click=\"evc.cancelarCotizacion()\" aria-label=\"Cancelar\">\n" +
    "                    Cancelar cotización\n" +
    "                </md-button>\n" +
    "                <md-button type=\"submit\" flex-xs=\"100\" ng-click=\"evc.popEnvioPoliza()\" class=\"md-raised md-primary\" aria-label=\"Emitir\" ng-disabled=\"!evc.online || emisionVidaForm.$invalid || evc.emision.datosBeneficiarios.length === 0 || evc.inicialBeneficarios !== 0 || evc.errorValidaRfc\">\n" +
    "                    Emitir\n" +
    "                </md-button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/inicio/inicio.tpl.html',
    "<md-progress-linear ng-show=\"ic.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div class=\"mifel_inicio\">\n" +
    "    <div layout=\"column\" layout-align=\"center center\">\n" +
    "        <div flex>\n" +
    "            <h1>La protección que necesitas</h1>\n" +
    "        </div>\n" +
    "        <span class=\"divisor\"></span>\n" +
    "        <div flex>\n" +
    "            <!--h3>Elige el seguro que más se ajuste a tus necesidades.</h3-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div layout=\"row\" layout-xs=\"column\" layout-align=\"none stretch\">\n" +
    "        <div flex=\"10\"></div>\n" +
    "        <div flex layout=\"column\" layout-padding>\n" +
    "            <div>\n" +
    "                <a href=\"javascript:void(0)\" ng-click=\"ic.vida()\" class=\"btn_vida\" title=\"vida\"></a>\n" +
    "            </div>\n" +
    "            <div hide-xs>\n" +
    "                <p>Es un seguro de Vida que brinda protección por fallecimiento a corto plazo.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div flex=\"10\"></div>\n" +
    "        <div flex layout=\"column\" layout-padding>\n" +
    "            <div>\n" +
    "                <a href=\"javascript:void(0)\" ng-click=\"ic.ap()\" class=\"btn_ap\" title=\"accidentes personales\"></a>\n" +
    "            </div>\n" +
    "            <div hide-xs>\n" +
    "                <p>Es un seguro accesible que brinda protección por accidentes a corto plazo.</p>\n" +
    "            </div>            \n" +
    "        </div>\n" +
    "        <div flex=\"10\"></div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/log/log.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<md-content>\n" +
    "    <md-list>\n" +
    "        <md-list-item ng-repeat=\"movimiento in vm.movimientos | orderBy: 'fecha' : true \" class=\"md-3-line\">\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "                <h3>{{movimiento.pantalla}}</h3>\n" +
    "                <h4>{{movimiento.fecha | date: 'yyyy-MM-dd HH:mm'}}, {{movimiento.usuario.nombre}}, {{movimiento.usuario.email}}</h4>\n" +
    "                <p>{{movimiento.movimiento}}, {{movimiento.observaciones}}</p>\n" +
    "            </div>\n" +
    "            <md-divider ></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</md-content>"
  );


  $templateCache.put('app/login/login.tpl.html',
    "<div layout=\"row\" layout-xs=\"column\" layout-align=\"space-between stretch\" layout-align-xs=\"start stretch\" class=\"mifel_login\">\n" +
    "    <div flex>\n" +
    "        <form name=\"loginForm\" class=\"form_container\">\n" +
    "            <input type=\"text\" style=\"display:none\">\n" +
    "            <input type=\"password\" style=\"display:none\">\n" +
    "            <md-toolbar>\n" +
    "                <div class=\"md-toolbar-tools form_header\">\n" +
    "                    <h3>Login</h3>\n" +
    "                </div>\n" +
    "            </md-toolbar>\n" +
    "            <md-content layout=\"column\" layout-padding>\n" +
    "                <md-input-container>\n" +
    "                    <label>Correo</label>\n" +
    "                    <input type=\"email\" required name=\"loginUser\" ng-model=\"lg.usuario.usuario\">\n" +
    "                    <div class=\"md-accent\" ng-messages=\"loginForm.loginUser.$error\" role=\"alert\">\n" +
    "                        <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                        <div class=\"md-accent\" ng-message=\"email\">El correo electrónico proporcionado es incorrecto, por favor ingréselo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx ¡Gracias!</div>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "                <md-input-container>\n" +
    "                    <label>Contrase&ntilde;a</label>\n" +
    "                    <input type=\"password\" required name=\"loginPwd\"  ng-model=\"lg.usuario.pwd\">\n" +
    "                    <div class=\"md-accent\" ng-messages=\"loginForm.loginPwd.$error\" role=\"alert\">\n" +
    "                        <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                    </div>\n" +
    "                </md-input-container>\n" +
    "            </md-content>\n" +
    "            <div class=\"form_footer\" layout=\"column\">\n" +
    "                <md-progress-linear ng-show=\"lg.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "                <md-button type=\"submit\" ng-click=\"lg.login()\" ng-disabled=\"loginForm.$invalid\">Iniciar Sesión</md-button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div flex layout=\"column\" layout-align=\"end stretch\">\n" +
    "        <div class=\"titulo\">\n" +
    "            <p>La protecci&oacute;n que necesitas, <br /> para seguir disfrutando de momentos increíbles</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/loginDialog/loginDialog.tpl.html',
    "<md-dialog ng-controller=\"navegacionCtrl as nm\">\n" +
    "    \n" +
    "    <md-dialog-content id=\"logindialog\">\n" +
    "        <form layout-align=\"start center\" name=\"loginForm\">\n" +
    "            <!---<md-toolbar class=\"md-primary\">\n" +
    "                <h1 class=\"md-toolbar-tools\">Inicio de sesión</h1>\n" +
    "            </md-toolbar>--->\n" +
    "            <md-toolbar class=\"md-accent md-hue-3\">\n" +
    "              <div class=\"md-toolbar-tools\">\n" +
    "                <h2>\n" +
    "                  <span>Iniciar sesión</span>\n" +
    "                </h2>\n" +
    "                <span flex></span>\n" +
    "                <md-button class=\"md-icon-button md-primary\" ng-click=\"nm.close()\" aria-label=\"Cerrar login\">\n" +
    "                    <ng-md-icon icon=\"close\"></ng-md-icon>\n" +
    "                </md-button>\n" +
    "              </div>\n" +
    "            </md-toolbar>\n" +
    "            <div layout=\"column\" layout-align=\"center center\">\n" +
    "                <div layout=\"row\" flex=\"40\" flex-xs=\"90\" layout-align=\"center center\">\n" +
    "                    <md-input-container class=\"md-accent\">\n" +
    "                        <label>Usuario</label>\n" +
    "                        <input type=\"email\" required name=\"loginUser\" ng-model=\"nm.usuario.usuario\">\n" +
    "                        <div class=\"md-accent\" ng-messages=\"loginForm.loginUser.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                            <div class=\"md-accent\" ng-message=\"email\">Capture una direccion de correo valida.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\" flex=\"40\" flex-xs=\"90\" layout-align=\"center center\">\n" +
    "                    <md-input-container class=\"md-accent\">\n" +
    "                        <label>Contrase&ntilde;a</label>\n" +
    "                        <input type=\"password\" required name=\"loginPwd\"  ng-model=\"nm.usuario.pwd\">\n" +
    "                        <div class=\"md-accent\" ng-messages=\"loginForm.loginPwd.$error\" role=\"alert\">\n" +
    "                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                </div>\n" +
    "                <div layout=\"row\" flex=\"40\" flex-xs=\"90\" layout-align=\"center center\">\n" +
    "                    <md-button type=\"submit\" class=\"md-primary md-raised\" ng-click=\"nm.login()\">Entrar</md-button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        \n" +
    "    </md-dialog-content>\n" +
    "</md-dialog>"
  );


  $templateCache.put('app/menuLateral/menuLateral.tpl.html',
    "<div layout=\"column\" layout-align=\"space-between center\">\n" +
    "    <md-toolbar class=\"md-warn\">\n" +
    "        <h1 class=\"md-toolbar-tools\">Soy cliente</h1>\n" +
    "    </md-toolbar>\n" +
    "    <md-content layout-fill>\n" +
    "        <md-button layout-fill ng-repeat-start=\"itemA in ml.itemsAdmin\" ng-click=\"ml.menu(itemA.stateProvider)\" class=\"login-button md-warn md-hue-2\"> {{itemA.textoMenu}} </md-button>\n" +
    "        <md-divider ng-repeat-end></md-divider>\n" +
    "        <md-button layout-fill ng-repeat-start=\"item in ml.items\" ng-click=\"ml.menu(item.stateProvider)\" class=\"login-button md-warn md-hue-2\"> {{item.textoMenu}}</md-button>\n" +
    "        <md-divider ng-repeat-end ng-if=\"!$last\"></md-divider>\n" +
    "    </md-content>\n" +
    "</div>"
  );


  $templateCache.put('app/productos/productos.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div>\n" +
    "    <p style=\"padding:10px\">Busqueda y Edición de Productos</p>\n" +
    "    <div layout layout-xs=\"column\" layout-align=\"start start\" layout-padding>\n" +
    "        <md-input-container>\n" +
    "            <md-icon aria-label=\"buscar\" class=\"material-icons\">search</md-icon>\n" +
    "            <label>Descripci&oacute;n</label>\n" +
    "            <input ng-model=\"vm.filtroDescripcion\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <md-button ng-click=\"vm.filtrar()\">Aplicar filtro</md-button>\n" +
    "            <md-button ng-click=\"vm.limpiarFiltro()\">Limpiar filtro</md-button>\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"vm.showAddAP()\" ng-disabled=\"!vm.online\">Agregar producto AP</md-button>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"vm.showAddVida()\" ng-disabled=\"!vm.online\">Agregar producto Vida</md-button>\n" +
    "        </md-input-container>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<md-content id=\"catalogoProductos\">\n" +
    "    <ng-form name=\"nuevoProductoAP\" novalidate>\n" +
    "        <md-card ng-show=\"vm.addAP\">\n" +
    "            <md-card-title>\n" +
    "                <md-card-title-text>\n" +
    "                    <md-input-container>\n" +
    "                        <label>Producto</label>\n" +
    "                        <input required name=\"descripcion\" capitalize ng-model=\"vm.descripcion\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.descripcion.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container>\n" +
    "                        <label>Suma asegurada</label>\n" +
    "                        <input required ng-pattern=\"/^[0-9]{1,9}$/\" name=\"suma\" ng-model=\"vm.suma\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.suma.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                        <label>Deducible</label>\n" +
    "                        <input ng-required=\"vm.tipo == 'AP'\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"deducible\" ng-model=\"vm.deducible\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.deducible.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                        <label>Invalidez</label>\n" +
    "                        <input ng-required=\"vm.tipo == 'AP'\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"invalidez\" ng-model=\"vm.invalidez\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.invalidez.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                        <label>Muerte accidental</label>\n" +
    "                        <input ng-required=\"vm.tipo == 'AP'\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"muerte\" ng-model=\"vm.muerte\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.muerte.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                        <label>Perdidas de organos</label>\n" +
    "                        <input ng-required=\"vm.tipo == 'AP'\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"perdidas\" ng-model=\"vm.perdidas\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.perdidas.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                        <label>Reembolso de accidentes</label>\n" +
    "                        <input ng-required=\"vm.tipo == 'AP'\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"accidentes\" ng-model=\"vm.accidentes\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.accidentes.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                        <label>Reembolso de gastos funerarios</label>\n" +
    "                        <input ng-required=\"vm.tipo == 'AP'\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"funerarios\" ng-model=\"vm.funerarios\">\n" +
    "                        <div ng-messages=\"nuevoProductoAP.funerarios.$error\">\n" +
    "                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                        </div>\n" +
    "                    </md-input-container>\n" +
    "                    <div ng-repeat=\"prima in vm.primas | orderBy: 'edadIni'\" layout>\n" +
    "                        <div flex layout ng-hide=\"prima.edit\">\n" +
    "                            <div>\n" +
    "                                <md-button ng-click=\"vm.deleteNewPrima(prima)\" class=\"md-fab md-mini\">\n" +
    "                                    <ng-md-icon icon=\"remove\" size=\"30\" style=\"fill: #ffffff\"></ng-md-icon>\n" +
    "                                </md-button>\n" +
    "                            </div>\n" +
    "                            <div flex=\"70\" hide show-gt-sm>\n" +
    "                                <rzslider rz-slider-model=\"prima.edadIni\" ng-attr-rz-slider-high=\"prima.edadFin\" rz-slider-options=\"vm.sliderOptions\"></rzslider>\n" +
    "                            </div>\n" +
    "                            <div flex hide-gt-sm layout layout-wrap>\n" +
    "                                <div flex=\"50\" style=\"text-align: center\"><strong>Edad Inicial</strong><br />{{prima.edadIni}}</div>\n" +
    "                                <div flex=\"50\" style=\"text-align: center\"><strong>Edad Final</strong><br />{{prima.edadFin}}</div>\n" +
    "                                <div ng-show=\"vm.tipo == 'AP'\" flex=\"50\" style=\"text-align: center; margin-top:10px;\">Hombre<br />{{prima.h | currency: \"$ \": 2}}</div>\n" +
    "                                <div ng-show=\"vm.tipo == 'AP'\" flex=\"50\" style=\"text-align: center; margin-top:10px;\">Mujer<br />{{prima.m | currency: \"$ \": 2}}</div>\n" +
    "                                <div ng-show=\"vm.tipo == 'VIDA'\" flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>DIBA</strong><br />{{prima.diba}}</div>\n" +
    "                                <div ng-show=\"vm.tipo == 'VIDA'\" flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>Fallecimiento</strong><br />{{prima.fallecimiento}}</div>\n" +
    "                                <div ng-show=\"vm.tipo == 'VIDA'\" flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>IMA</strong><br />{{prima.ima}}</div>\n" +
    "                                <div ng-show=\"vm.tipo == 'VIDA'\" flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>ISE</strong><br />{{prima.ise}}</div>\n" +
    "                                <hr flex />\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"vm.tipo == 'AP'\" style=\"padding: 3px 0px 0px 15px;\" ng-show=\"!usuario.edit\" layout hide show-gt-sm>\n" +
    "                                <div><label class=\"rz-bubble\">Hombre: </label><br/><label class=\"rz-bubble\">Mujer: </label></div>\n" +
    "                                <div><label class=\"rz-bubble\">{{prima.h | currency: \"$ \": 2}}</label><br/><label class=\"rz-bubble\">{{prima.m | currency: \"$ \": 2}}</label></div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"vm.tipo == 'VIDA'\" style=\"padding: 3px 0px 0px 15px;\" ng-show=\"!prima.edit\" layout hide show-gt-sm>\n" +
    "                                <div><label class=\"rz-bubble\">DIBA: </label><br/><label class=\"rz-bubble\">{{prima.diba}}</label></div>\n" +
    "                                <div><label class=\"rz-bubble\">Fallecimiento: </label><br/><label class=\"rz-bubble\">{{prima.fallecimiento}}</label></div>\n" +
    "                                <div><label class=\"rz-bubble\">IMA: </label><br/><label class=\"rz-bubble\">{{prima.ima}}</label></div>\n" +
    "                                <div><label class=\"rz-bubble\">ISE: </label><br/><label class=\"rz-bubble\">{{prima.ise}}</label></div>\n" +
    "                                <div>\n" +
    "                                    <md-button ng-click=\"vm.editPrima(prima)\" ng-disabled=\"!vm.online\" class=\"md-fab md-mini md-primary\">\n" +
    "                                        <ng-md-icon icon=\"edit\" size=\"30\" style=\"fill: #ffffff\"></ng-md-icon>\n" +
    "                                    </md-button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div flex layout ng-show=\"prima.edit\">\n" +
    "                                <ng-form name=\"editNuevaPrima\">\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad inicial</label>\n" +
    "                                        <input ng-required=\"prima.edit\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"edadIni\" ng-model=\"prima.edadIni\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.edadIni.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad final</label>\n" +
    "                                        <input ng-pattern=\"/^[0-9]{1,9}$/\" name=\"edadFin\" ng-model=\"prima.edadFin\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.primaMasculina.$error\">\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                                        <label>Prima masculina</label>\n" +
    "                                        <input ng-required=\"vm.tipo == 'AP' && prima.edit\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"primaMasculina\" ng-model=\"prima.primaM\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.primaMasculina.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                                        <label>Prima femenina</label>\n" +
    "                                        <input ng-required=\"vm.tipo == 'AP' && prima.edit\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"primaFemenina\" ng-model=\"prima.primaF\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.primaFemenina.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                        <label>DIBA</label>\n" +
    "                                        <input ng-required=\"vm.tipo == 'VIDA' && prima.edit\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"diba\" ng-model=\"prima.diba\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.diba.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                        <label>Fallecimiento</label>\n" +
    "                                        <input ng-required=\"vm.tipo == 'VIDA' && prima.edit\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"fallecimiento\" ng-model=\"prima.fallecimiento\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.fallecimiento.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                        <label>IMA</label>\n" +
    "                                        <input ng-required=\"vm.tipo == 'VIDA' && prima.edit\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"ima\" ng-model=\"prima.ima\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.ima.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                        <label>ISE</label>\n" +
    "                                        <input ng-required=\"vm.tipo == 'VIDA' && prima.edit\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"ise\" ng-model=\"prima.ise\">\n" +
    "                                        <div ng-messages=\"editNuevaPrima.ise.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-button class=\"md-raised md-primary\" ng-disabled=\"(editNuevaPrima.$invalid && !vm.online) || (!vm.online)\" ng-click=\"vm.updatePrima(prima)\">Actualizar prima</md-button>\n" +
    "                                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.hideUpdatePrima(prima)\">Cancelar</md-button>\n" +
    "                                </ng-form>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"vm.prima\">\n" +
    "                            <ng-form name=\"nuevaPrima\" novalidate>\n" +
    "                                <md-input-container>\n" +
    "                                    <label>Edad inicial</label>\n" +
    "                                    <input ng-required=\"vm.prima\" ng-pattern=\"/^[0-9]{1,9}$/\" name=\"edadIni\" ng-model=\"vm.edadIni\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.edadIni.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container>\n" +
    "                                    <label>Edad final</label>\n" +
    "                                    <input name=\"edadFin\" ng-pattern=\"/^[0-9]{1,9}$/\" ng-model=\"vm.edadFin\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.edadFin.$error\">\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                                    <label>Prima masculina</label>\n" +
    "                                    <input ng-required=\"vm.prima && vm.tipo == 'AP'\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"primaMasculina\" ng-model=\"vm.primaMasculina\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.primaMasculina.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container ng-show=\"vm.tipo == 'AP'\">\n" +
    "                                    <label>Prima femenina</label>\n" +
    "                                    <input ng-required=\"vm.prima && vm.tipo == 'AP'\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"primaFemenina\" ng-model=\"vm.primaFemenina\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.primaFemenina.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                    <label>DIBA</label>\n" +
    "                                    <input ng-required=\"vm.prima && vm.tipo == 'VIDA'\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"diba\" ng-model=\"vm.diba\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.diba.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                    <label>Fallecimiento</label>\n" +
    "                                    <input ng-required=\"vm.prima && vm.tipo == 'VIDA'\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"fallecimiento\" ng-model=\"vm.fallecimiento\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.fallecimiento.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                    <label>IMA</label>\n" +
    "                                    <input ng-required=\"vm.prima && vm.tipo == 'VIDA'\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"ima\" ng-model=\"vm.ima\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.ima.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-input-container ng-show=\"vm.tipo == 'VIDA'\">\n" +
    "                                    <label>ISE</label>\n" +
    "                                    <input ng-required=\"vm.prima && vm.tipo == 'VIDA'\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" name=\"ise\" ng-model=\"vm.ise\">\n" +
    "                                    <div ng-messages=\"nuevaPrima.ise.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-disabled=\"(nuevaPrima.$invalid && !vm.online) || (!vm.online)\" ng-click=\"vm.addPrima()\">Guardar prima</md-button>\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-click=\"vm.hidePrima()\">Cancelar</md-button>\n" +
    "                            </ng-form>\n" +
    "                        </div>\n" +
    "                        <div>\n" +
    "                            <md-button class=\"md-raised md-primary\" ng-show=\"!vm.prima\" ng-click=\"vm.showPrima()\" ng-disabled=\"!vm.online\">Agregar prima</md-button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </md-card-title-text>\n" +
    "            </md-card-title>\n" +
    "            <md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "                <md-button class=\"md-raised md-primary\" ng-disabled=\"(nuevoProductoAP.$invalid && !vm.online) || (!vm.online)\" ng-click=\"vm.addProducto()\">Guardar</md-button>\n" +
    "                <md-button class=\"md-raised md-primary\" ng-click=\"vm.cancelarAddAP()\">Cancelar</md-button>\n" +
    "            </md-card-actions>\n" +
    "        </md-card>\n" +
    "    </ng-form>\n" +
    "    <div flex>\n" +
    "        <div flex>\n" +
    "            <md-card ng-repeat=\"producto in vm.productos | filter: { tipo: 'AP' } | orderBy: vm.numeroSuma\">\n" +
    "                <ng-form name=\"editarProductoAP\" novalidate>\n" +
    "                    <md-card-title>\n" +
    "                        <md-card-title-text layout=\"column\">\n" +
    "                            <div>\n" +
    "                                <span ng-show=\"!producto.edit\" class=\"md-headline\">{{producto.descripcion}}</span>\n" +
    "                                <md-input-container ng-show=\"producto.edit\">\n" +
    "                                    <label>Descripci&oacute;n</label>\n" +
    "                                    <input name=\"descripcion\" ng-model=\"vm.descripcion\" capitalize required md-maxlengt=\"75\">\n" +
    "                                    <div ng-messages=\"editarProductoAP.descripcion.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                            </div>\n" +
    "                            <div layout>\n" +
    "                                <span ng-show=\"!producto.edit\" class=\"md-subhead\">{{producto.suma_asegurada | currency: \"$ \": 2}}</span>\n" +
    "                                <md-input-container ng-show=\"producto.edit\">\n" +
    "                                    <label>Suma asegurada</label>\n" +
    "                                    <input name=\"suma\" required ng-model=\"vm.suma\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                    <div ng-messages=\"editarProductoAP.suma.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                            </div>\n" +
    "                            <md-input-container ng-show=\"producto.edit\">\n" +
    "                                <label>Deducible</label>\n" +
    "                                <input required name=\"deducible\" ng-model=\"producto.deducible\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                <div ng-messages=\"editarProductoAP.deducible.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"producto.edit\">\n" +
    "                                <label>Invalidez</label>\n" +
    "                                <input required name=\"invalidez\" ng-model=\"producto.invalidez\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                <div ng-messages=\"editarProductoAP.invalidez.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"producto.edit\">\n" +
    "                                <label>Muerte accidental</label>\n" +
    "                                <input required name=\"muerte\" ng-model=\"producto.muerte_acc\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                <div ng-messages=\"editarProductoAP.muerte.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"producto.edit\">\n" +
    "                                <label>Perdidas de organos</label>\n" +
    "                                <input required name=\"perdidas\" ng-model=\"producto.perdidas_org\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                <div ng-messages=\"editarProductoAP.perdidas.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"producto.edit\">\n" +
    "                                <label>Reembolso de accidentes</label>\n" +
    "                                <input required name=\"accidentes\" ng-model=\"producto.reembolso_acc\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                <div ng-messages=\"editarProductoAP.accidentes.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"producto.edit\">\n" +
    "                                <label>Reembolso de gastos funerarios</label>\n" +
    "                                <input required name=\"funerarios\" ng-model=\"producto.reembolso_fun\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                <div ng-messages=\"editarProductoAP.funerarios.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <div ng-show=\"producto.edit\" ng-repeat=\"prima in producto.primas | orderBy: 'edadIni'\" layout>\n" +
    "                                <div flex layout ng-hide=\"prima.edit\">\n" +
    "                                    <div>\n" +
    "                                        <md-button ng-click=\"vm.deletePrima(prima)\" class=\"md-fab md-mini\" aria-label=\"Borrar prima\">\n" +
    "                                            <ng-md-icon icon=\"remove\" size=\"30\" style=\"fill: #ffffff\"></ng-md-icon>\n" +
    "                                        </md-button>\n" +
    "                                    </div>\n" +
    "                                    <div flex=\"70\" hide show-gt-sm>\n" +
    "                                        <rzslider rz-slider-model=\"prima.edadIni\" ng-attr-rz-slider-high=\"prima.edadFin\" rz-slider-options=\"vm.sliderOptions\"></rzslider>\n" +
    "                                    </div>\n" +
    "                                    <div flex hide-gt-sm layout layout-wrap>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center\"><strong>Edad Inicial</strong><br />{{prima.edadIni}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center\"><strong>Edad Final</strong><br />{{prima.edadFin}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>Hombre</strong><br />{{prima.h | currency: \"$ \": 2}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>Mujer</strong><br />{{prima.m | currency: \"$ \": 2}}</div>\n" +
    "                                        <hr flex />\n" +
    "                                    </div>\n" +
    "                                    <div style=\"padding: 3px 0px 0px 15px;\" ng-show=\"!prima.edit\" layout hide show-gt-sm>\n" +
    "                                        <div><label class=\"rz-bubble\">Hombre: </label><br/><label class=\"rz-bubble\">Mujer: </label></div>\n" +
    "                                        <div><label class=\"rz-bubble\">{{prima.h | currency: \"$ \": 2}}</label><br/><label class=\"rz-bubble\">{{prima.m | currency: \"$ \": 2}}</label></div>\n" +
    "                                    </div>\n" +
    "                                    <div>\n" +
    "                                        <md-button ng-click=\"vm.editPrima(prima)\" ng-disabled=\"!vm.online\" class=\"md-fab md-mini md-primary\" aria-label=\"Editar prima\">\n" +
    "                                            <ng-md-icon icon=\"edit\" size=\"30\" style=\"fill: #ffffff\"></ng-md-icon>\n" +
    "                                        </md-button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div flex layout ng-show=\"prima.edit\">\n" +
    "                                    <ng-form name=\"editarPrimaProductoAP\" novalidate>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Edad inicial</label>\n" +
    "                                            <input required name=\"edadIni\" ng-model=\"prima.edadIni\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.edadIni.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Edad final</label>\n" +
    "                                            <input name=\"edadFin\" ng-model=\"prima.edadFin\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.edadFin.$error\">\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Prima masculina</label>\n" +
    "                                            <input required name=\"primaMasculina\" ng-model=\"prima.h\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.primaMasculina.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Prima femenina</label>\n" +
    "                                            <input required name=\"primaFemenina\" ng-model=\"prima.m\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.primaFemenina.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-button class=\"md-raised md-primary\" ng-click=\"vm.updatePrima(prima)\" ng-disabled=\"!vm.online || editarPrimaProductoAP.$invalid\" aria-label=\"Actualizar prima\">Actualizar prima</md-button>\n" +
    "                                        <md-button class=\"md-raised md-primary\" ng-click=\"vm.hideUpdatePrima(prima)\" aria-label=\"Cancelar\">Cancelar</md-button>\n" +
    "                                    </ng-form>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"producto.prima\">\n" +
    "                                <ng-form name=\"editarNuevaPrimaProductoAP\" novalidate>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad inicial</label>\n" +
    "                                        <input name=\"edadIni\" ng-model=\"vm.edadIni\" ng-pattern=\"/^[0-9]{1,9}$/\" ng-required=\"producto.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoAP.edadIni.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad final</label>\n" +
    "                                        <input name=\"edadFin\" ng-model=\"vm.edadFin\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoAP.edadFin.$error\">\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Prima masculina</label>\n" +
    "                                        <input name=\"primaMasculina\" ng-model=\"vm.h\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" ng-required=\"producto.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoAP.primaMasculina.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Prima femenina</label>\n" +
    "                                        <input name=\"primaFemenina\" ng-model=\"vm.m\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" ng-required=\"producto.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoAP.primaFemenina.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.addPrimaProducto(producto)\" ng-disabled=\"!vm.online || editarNuevaPrimaProductoAP.$invalid\" aria-label=\"Guardar prima\">Guardar prima</md-button>\n" +
    "                                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.hidePrimaProducto(producto)\" aria-label=\"Cancelar\">Cancelar</md-button>\n" +
    "                                </ng-form>\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-show=\"producto.edit\" ng-click=\"vm.showPrimaProducto(producto)\" ng-disabled=\"!vm.online\" aria-label=\"Agregar prima\">Agregar prima</md-button>\n" +
    "                            </div>\n" +
    "                        </md-card-title-text>\n" +
    "                    </md-card-title>\n" +
    "                    <md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"!producto.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.edit(producto)\" aria-label=\"Editar\">Editar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"!producto.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.delete(producto)\" aria-label=\"Borrar\">Borrar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"producto.edit\" ng-disabled=\"!vm.online || editarProductoAP.$invalid\" ng-click=\"vm.update(producto)\" aria-label=\"Guardar\">Guardar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"producto.edit\" ng-click=\"vm.cancelUpdate(producto)\" aria-label=\"Cancelar\">Cancelar</md-button>\n" +
    "                    </md-card-actions>\n" +
    "                </ng-form>\n" +
    "            </md-card>\n" +
    "        </div>\n" +
    "        <div flex>\n" +
    "            <md-card ng-repeat=\"productoV in vm.productos | filter: { tipo: 'Vida' } | orderBy: vm.numeroSuma\">\n" +
    "                <ng-form name=\"editarProductoVD\" novalidate>\n" +
    "                    <md-card-title>\n" +
    "                        <md-card-title-text layout=\"column\">\n" +
    "                            <div>\n" +
    "                                <span ng-show=\"!productoV.edit\" class=\"md-headline\">{{productoV.descripcion}}</span>\n" +
    "                                <md-input-container ng-show=\"productoV.edit\">\n" +
    "                                    <label>Descripci&oacute;n</label>\n" +
    "                                    <input ng-model=\"vm.descripcion\" name=\"descripcion\" capitalize required md-maxlength=\"75\">\n" +
    "                                    <div ng-messages=\"editarProductoVD.descripcion.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                            </div>\n" +
    "                            <div layout>\n" +
    "                                <span ng-show=\"!productoV.edit\" class=\"md-subhead\">{{productoV.suma_asegurada | currency: \"$ \": 2}}</span>\n" +
    "                                <md-input-container ng-show=\"productoV.edit\">\n" +
    "                                    <label>Suma asegurada</label>\n" +
    "                                    <input ng-model=\"vm.suma\" name=\"suma\" required ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                    <div ng-messages=\"editarProductoVD.suma.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"productoV.edit\" ng-repeat=\"prima in productoV.primas | orderBy: 'edadIni'\" layout>\n" +
    "                                <div flex layout ng-hide=\"prima.edit\">\n" +
    "                                    <div>\n" +
    "                                        <md-button ng-click=\"vm.deletePrima(prima)\" class=\"md-fab md-mini\">\n" +
    "                                            <ng-md-icon icon=\"remove\" size=\"30\" style=\"fill: #ffffff\" aria-label=\"Borrar prima\"></ng-md-icon>\n" +
    "                                        </md-button>\n" +
    "                                    </div>\n" +
    "                                    <div flex=\"70\" hide show-gt-sm>\n" +
    "                                        <rzslider rz-slider-model=\"prima.edadIni\" ng-attr-rz-slider-high=\"prima.edadFin\" rz-slider-options=\"vm.sliderOptions\"></rzslider>\n" +
    "                                    </div>\n" +
    "                                    <div flex hide-gt-sm layout layout-wrap>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center\"><strong>Edad Inicial</strong><br />{{prima.edadIni}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center\"><strong>Edad Final</strong><br />{{prima.edadFin}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>DIBA</strong><br />{{prima.diba}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>Fallecimiento</strong><br />{{prima.fallecimiento}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>IMA</strong><br />{{prima.ima}}</div>\n" +
    "                                        <div flex=\"50\" style=\"text-align: center; margin-top:10px;\"><strong>ISE</strong><br />{{prima.ise}}</div>\n" +
    "                                        <hr flex />\n" +
    "                                    </div>\n" +
    "                                    <div style=\"padding: 3px 0px 0px 15px;\" ng-show=\"!prima.edit\" layout hide show-gt-sm>\n" +
    "                                        <div><label class=\"rz-bubble\">DIBA: </label><br/><label class=\"rz-bubble\">{{prima.diba}}</label></div>\n" +
    "                                        <div><label class=\"rz-bubble\">Fallecimiento: </label><br/><label class=\"rz-bubble\">{{prima.fallecimiento}}</label></div>\n" +
    "                                        <div><label class=\"rz-bubble\">IMA: </label><br/><label class=\"rz-bubble\">{{prima.ima}}</label></div>\n" +
    "                                        <div><label class=\"rz-bubble\">ISE: </label><br/><label class=\"rz-bubble\">{{prima.ise}}</label></div>\n" +
    "                                    </div>\n" +
    "                                    <div>\n" +
    "                                        <md-button ng-click=\"vm.editPrima(prima)\" class=\"md-fab md-mini md-primary\" aria-label=\"Editar prima\">\n" +
    "                                            <ng-md-icon icon=\"edit\" size=\"30\" style=\"fill: #ffffff\"></ng-md-icon>\n" +
    "                                        </md-button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div flex layout ng-show=\"prima.edit\">\n" +
    "                                    <ng-form name=\"editarPrimaProductoAP\" novalidate>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Edad inicial</label>\n" +
    "                                            <input required name=\"edadIni\" ng-model=\"prima.edadIni\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.edadIni.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Edad final</label>\n" +
    "                                            <input name=\"edadFin\" ng-model=\"prima.edadFin\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.edadFin.$error\">\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>DIBA</label>\n" +
    "                                            <input required name=\"diba\" ng-model=\"prima.diba\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.diba.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>Fallecimiento</label>\n" +
    "                                            <input required name=\"fallecimiento\" ng-model=\"prima.fallecimiento\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.fallecimiento.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>IMA</label>\n" +
    "                                            <input required name=\"ima\" ng-model=\"prima.ima\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.ima.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-input-container>\n" +
    "                                            <label>ISE</label>\n" +
    "                                            <input required name=\"ise\" ng-model=\"prima.ise\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\">\n" +
    "                                            <div ng-messages=\"editarPrimaProductoAP.ise.$error\">\n" +
    "                                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                                <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                            </div>\n" +
    "                                        </md-input-container>\n" +
    "                                        <md-button class=\"md-raised md-primary\" ng-click=\"vm.updatePrima(prima)\" ng-disabled=\"!vm.online || editarPrimaProductoAP.$invalid\" aria-label=\"Actualizar prima\">Actualizar factores</md-button>\n" +
    "                                        <md-button class=\"md-raised md-primary\" ng-click=\"vm.hideUpdatePrima(prima)\" aria-label=\"Cancelar prima\">Cancelar</md-button>\n" +
    "                                    </ng-form>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"productoV.prima\">\n" +
    "                                <ng-form name=\"editarNuevaPrimaProductoVD\" novalidate>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad inicial</label>\n" +
    "                                        <input required name=\"edadIni\" ng-model=\"vm.edadIni\" ng-pattern=\"/^[0-9]{1,9}$/\" ng-required=\"productoV.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoVD.edadIni.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad final</label>\n" +
    "                                        <input name=\"edadFin\" ng-model=\"vm.edadFin\" ng-pattern=\"/^[0-9]{1,9}$/\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoVD.edadFin.$error\">\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>DIBA</label>\n" +
    "                                        <input required name=\"diba\" ng-model=\"vm.diba\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" ng-required=\"productoV.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoVD.diba.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Fallecimiento</label>\n" +
    "                                        <input required name=\"fallecimiento\" ng-model=\"vm.fallecimiento\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" ng-required=\"productoV.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoVD.fallecimiento.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>IMA</label>\n" +
    "                                        <input required name=\"ima\" ng-model=\"vm.ima\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" ng-required=\"productoV.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoVD.ima.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>ISE</label>\n" +
    "                                        <input required name=\"ise\" ng-model=\"vm.ise\" ng-pattern=\"/^\\d+(?:\\.\\d+)?$/\" ng-required=\"productoV.prima\">\n" +
    "                                        <div ng-messages=\"editarNuevaPrimaProductoVD.ise.$error\">\n" +
    "                                            <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                            <div ng-message=\"pattern\">Solo permite caracteres numericos.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.addPrimaProducto(productoV)\" ng-disabled=\"!vm.online || editarNuevaPrimaProductoVD.$invalid\" aria-label=\"Guardar prima\">Guardar prima</md-button>\n" +
    "                                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.hidePrimaProducto(productoV)\" aria-label=\"Cancelar prima\">Cancelar</md-button>\n" +
    "                                </ng-form>\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <md-button class=\"md-raised md-primary\" ng-show=\"productoV.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.showPrimaProducto(productoV)\" aria-label=\"Agregar prima\">Agregar prima</md-button>\n" +
    "                            </div>\n" +
    "                        </md-card-title-text>\n" +
    "                    </md-card-title>\n" +
    "                    <md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"!productoV.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.edit(productoV)\" aria-label=\"Editar\">Editar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"!productoV.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.delete(productoV)\" aria-label=\"Borrar\">Borrar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"productoV.edit\" ng-disabled=\"!vm.online || editarProductoVD.$invalid\" ng-click=\"vm.update(productoV)\" aria-label=\"Guardar\">Guardar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-show=\"productoV.edit\" ng-click=\"vm.cancelUpdate(productoV)\" aria-label=\"Cancelar\">Cancelar</md-button>\n" +
    "                    </md-card-actions>\n" +
    "                </ng-form>\n" +
    "            </md-card>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('app/repBateo/repBateo.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<p style=\"padding:10px\">Reporte de Bateo</p>\n" +
    "<md-button ng-click=\"vm.exportar()\" class=\"md-raised md-primary\">Exportar</md-button>\n" +
    "<md-content>\n" +
    "    <md-list>\n" +
    "        <md-list-item ng-repeat=\"emision in vm.emisiones | orderBy: 'numeroReferencia' : false \" class=\"md-3-line\">\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "                <h3>{{emision.numeroReferencia}}</h3>\n" +
    "                <h4>{{emision.descripcionZona}}, {{emision.descripcionSucursal}}, {{emision.nombreEjecutivo}}, {{emision.empleado}}, {{emision.tipoMovimiento}}</h4>\n" +
    "                <p>{{emision.fechaInicioVigencia}} - {{emision.fechaFinVigencia}}, {{emision.descripcionProducto}}, {{emision.clienteMifel}}: {{emision.contratante}}, {{emision.tipoPersona}}, {{emision.rfc}}</p>\n" +
    "                <p>Prima neta: {{emision.primaNeta}}, Derechos: {{emision.derechos}}, Prima total: {{emision.primaTotal}}, Paquete: {{emision.paquete}}, Plan de pago: {{emision.planPago}}</p>\n" +
    "            </div>\n" +
    "            <md-divider ></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</md-content>\n" +
    " "
  );


  $templateCache.put('app/repCobranza/repCobranza.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<p style=\"padding:10px\">Reporte de Cobranza</p>\n" +
    "<md-button ng-click=\"vm.exportar()\" class=\"md-raised md-primary\">Exportar</md-button>\n" +
    "<md-content>\n" +
    "    <md-list>\n" +
    "        <md-list-item ng-repeat=\"emision in vm.emisiones | orderBy: 'numeroReferencia' : false \" class=\"md-3-line\">\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "                <h3>{{emision.numeroReferencia}}</h3>\n" +
    "                <h4>{{emision.descripcionZona}}, {{emision.descripcionSucursal}}, {{emision.nombreEjecutivo}}, {{emision.empleado}}, {{emision.tipoMovimiento}}</h4>\n" +
    "                <p>{{emision.fechaInicioVigencia}} - {{emision.fechaFinVigencia}}, {{emision.descripcionProducto}}, {{emision.clienteMifel}}: {{emision.nombreContratante}} {{emision.paternoContratante}} {{emision.maternoContratante}}, {{emision.tipoPersona}}, {{emision.rfc}}</p>\n" +
    "                <p>Prima neta: {{emision.primaNeta}}, Derechos: {{emision.derechos}}, Prima total: {{emision.primaTotal}}, Paquete: {{emision.paquete}}, Plan de pago: {{emision.planPago}}</p>\n" +
    "            </div>\n" +
    "            <md-divider ></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</md-content> "
  );


  $templateCache.put('app/repProduccion/repProduccion.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<p style=\"padding:10px\">Reporte de Producción</p>\n" +
    "<md-button ng-click=\"vm.exportar()\" class=\"md-raised md-primary\">Exportar</md-button>\n" +
    "<md-content>\n" +
    "    <md-list>\n" +
    "        <md-list-item ng-repeat=\"emision in vm.emisiones | orderBy: 'numeroReferencia' : false \" class=\"md-3-line\">\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "                <h3>{{emision.numeroReferencia}}</h3>\n" +
    "                <h4>{{emision.descripcionZona}}, {{emision.descripcionSucursal}}, {{emision.nombreEjecutivo}}, {{emision.empleado}}, {{emision.tipoMovimiento}}</h4>\n" +
    "                <p>{{emision.fechaInicioVigencia}} - {{emision.fechaFinVigencia}}, {{emision.descripcionProducto}}, {{emision.clienteMifel}}: {{emision.nombreContratante}} {{emision.paternoContratante}} {{emision.maternoContratante}}, {{emision.tipoPersona}}, {{emision.rfc}}</p>\n" +
    "                <p>Prima neta: {{emision.primaNeta}}, Derechos: {{emision.derechos}}, Prima total: {{emision.primaTotal}}, Paquete: {{emision.paquete}}, Plan de pago: {{emision.planPago}}</p>\n" +
    "            </div>\n" +
    "            <md-divider ></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</md-content> \n"
  );


  $templateCache.put('app/repUdi/repUdi.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<p style=\"padding:10px\">Reporte de UDI</p>\n" +
    "<md-button ng-click=\"vm.exportar()\" class=\"md-raised md-primary\">Exportar</md-button>\n" +
    "<md-content>\n" +
    "    <md-list>\n" +
    "        <md-list-item ng-repeat=\"emision in vm.emisiones | orderBy: 'numeroReferencia' : false \" class=\"md-3-line\">\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "                <h3>{{emision.numeroReferencia}}</h3>\n" +
    "                <h4>{{emision.descripcionZona}}, {{emision.descripcionSucursal}}, {{emision.nombreEjecutivo}}, {{emision.empleado}}, {{emision.tipoMovimiento}}</h4>\n" +
    "                <p>{{emision.fechaInicioVigencia}} - {{emision.fechaFinVigencia}}, {{emision.descripcionProducto}}, {{emision.clienteMifel}}: {{emision.nombreContratante}} {{emision.paternoContratante}} {{emision.maternoContratante}}, {{emision.tipoPersona}}, {{emision.rfc}}</p>\n" +
    "                <p>Prima neta: {{emision.primaNeta}}, Derechos: {{emision.derechos}}, Prima total: {{emision.primaTotal}}, Paquete: {{emision.paquete}}, Plan de pago: {{emision.planPago}}</p>\n" +
    "            </div>\n" +
    "            <md-divider ></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</md-content> "
  );


  $templateCache.put('app/sesion/sesion.tpl.html',
    "<md-sidenav class=\"md-sidenav-left md-whiteframe-4dp\" md-component-id=\"menuBar\" hide-md hide-gt hide-gt-md>\n" +
    "    <md-toolbar>\n" +
    "        <h1 class=\"md-toolbar-tools\">{{sm.usuario.tipo}}</h1>\n" +
    "    </md-toolbar>\n" +
    "    <md-content>\n" +
    "        <md-subheader class=\"md-no-sticky\"><b>Bienvenido</b> {{sm.usuario.nombre}}</md-subheader>\n" +
    "        <md-divider></md-divider>\n" +
    "        <md-list>\n" +
    "            <md-list-item ng-show=\"sm.menuN3\" ng-click=\"sm.go('mis-operaciones')\">\n" +
    "                <p>Mis operaciones</p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-show=\"sm.menuN3\" ng-click=\"sm.go('vida')\">\n" +
    "                <p>Vida</p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-show=\"sm.menuN3\" ng-click=\"sm.go('accidentes-personales')\">\n" +
    "                <p>Accidentes Personales</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-list-item ng-show=\"sm.menuN1\" ng-click=\"sm.go('sucursales')\">\n" +
    "                <p>Sucursales</p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-show=\"sm.menuN1\" ng-click=\"sm.go('zonas')\">\n" +
    "                <p>Zonas</p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-show=\"sm.menuN2\" ng-click=\"sm.go('usuarios')\">\n" +
    "                <p>Usuarios</p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item  ng-show=\"sm.menuN0\" ng-click=\"sm.go('productos')\">\n" +
    "                <p>Productos</p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item  ng-show=\"sm.menuN0\" ng-click=\"sm.go('log')\">\n" +
    "                <p>Logs</p>\n" +
    "            </md-list-item>                        \n" +
    "        </md-list>\n" +
    "        <md-divider></md-divider>\n" +
    "        <md-button class=\"md-raised md-warn\" layout-fill ng-click=\"sm.logout()\">Cerrar sesión</md-button>\n" +
    "    </md-content>\n" +
    "</md-sidenav>\n" +
    "<md-content  hide-md hide-lg hide-xl>\n" +
    "    <md-toolbar md-scroll-shrink=\"\">\n" +
    "      <div class=\"md-toolbar-tools\">\n" +
    "        <md-button class=\"md-icon-button\" aria-label=\"Settings\">\n" +
    "            <ng-md-icon icon=\"menu\" ng-click=\"sm.openBar()\" style=\"fill:#FFF\" ></ng-md-icon>\n" +
    "        </md-button>\n" +
    "        <span>{{sm.pagina}}</span>\n" +
    "      </div>\n" +
    "    </md-toolbar>\n" +
    "</md-content>\n" +
    "<div flex hide-xs hide-sm layout=\"row\" layout-align=\"center end\" class=\"datosSesion\">\n" +
    "    <div flex layout=\"row\" layout-align=\"start stretch\" class=\"divPading\">\n" +
    "        <md-menu-bar>\n" +
    "            <md-menu>\n" +
    "                <button ng-show=\"sm.menuN2\" md-theme=\"md-accent\" ng-click=\"$mdOpenMenu()\">Administración</button>\n" +
    "                    <md-menu-content>\n" +
    "                        <md-menu-item ng-show=\"sm.menuN1\">\n" +
    "                            <md-button class=\"md-primary\" ng-click=\"sm.go('sucursales')\">Sucursales</md-button>\n" +
    "                        </md-menu-item>\n" +
    "                        <md-menu-item  ng-show=\"sm.menuN1\">\n" +
    "                            <md-button class=\"md-primary\" ng-click=\"sm.go('zonas')\">Zonas</md-button>\n" +
    "                        </md-menu-item>\n" +
    "                        <md-menu-item  ng-show=\"sm.menuN2\">\n" +
    "                            <md-button class=\"md-primary\" ng-click=\"sm.go('usuarios')\">Usuarios</md-button>\n" +
    "                        </md-menu-item>\n" +
    "                        <md-menu-item  ng-show=\"sm.menuN0\">\n" +
    "                            <md-button class=\"md-primary\" ng-click=\"sm.go('productos')\">Productos</md-button>\n" +
    "                        </md-menu-item>\n" +
    "                        <md-menu-item  ng-show=\"sm.menuN0\">\n" +
    "                            <md-button class=\"md-primary\" ng-click=\"sm.go('log')\">Logs</md-button>\n" +
    "                        </md-menu-item>\n" +
    "                    </md-menu-content>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "            <md-menu>\n" +
    "                <button ng-show=\"sm.menuN3\" class=\"md-primary\" ng-click=\"sm.go('mis-operaciones')\">Mis operaciones</button>\n" +
    "                <md-menu-content></md-menu-content>\n" +
    "            </md-menu>\n" +
    "            <md-menu>\n" +
    "                <button ng-show=\"sm.menuN3\" class=\"md-primary\" ng-click=\"sm.go('vida')\">Vida</button>\n" +
    "                <md-menu-content></md-menu-content>\n" +
    "            </md-menu>\n" +
    "            <md-menu>\n" +
    "                <button ng-show=\"sm.menuN3\" class=\"md-primary\" ng-click=\"sm.go('accidentes-personales')\">Accidentes Personales</button>\n" +
    "                <md-menu-content></md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </md-menu-bar>\n" +
    "    </div>\n" +
    "    <div layout=\"column\" style=\"width:300px\" layout-align=\"center end\" layout-fill style=\"min-width: 300px\" class=\"divPading\">\n" +
    "        <div>\n" +
    "            <label><span><b>Bienvenido</b></span> <b>{{sm.usuario.nombre}}</b></label>\n" +
    "        </div>\n" +
    "        <div flex layout=\"row\">\n" +
    "            <label>{{sm.usuario.ultimaSesion}}</label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div layout=\"column\" style=\"width:130px\" layout-align=\"center center\" layout-fill style=\"min-width: 130px\" class=\"divPading\">\n" +
    "        <div>\n" +
    "            <label><b>{{sm.usuario.tipoMin}}</b></label>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <a href=\"javascript:void(0)\" ng-click=\"sm.logout()\" class=\"logout\">Cerrar sesión</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/sesiones/sesiones.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<p style=\"padding:10px\">Reporte de Sesiones</p>\n" +
    "<md-button ng-click=\"vm.exportar()\" class=\"md-raised md-primary\">Exportar</md-button>\n" +
    "<md-content>\n" +
    "    <md-list>\n" +
    "        <md-list-item ng-repeat=\"sesion in vm.sesiones | orderBy: 'nombre' : false \" class=\"md-3-line\">\n" +
    "            <div class=\"md-list-item-text\">\n" +
    "                <h3>{{sesion.nombre}}, {{sesion.empleado}}</h3>\n" +
    "                <h4>{{sesion.email}}, {{ sesion.actualSesion }}</h4>\n" +
    "                <p>Zona: {{sesion.descripcionZona}}, Sucursal: {{sesion.descripcionSucursal}}</p>\n" +
    "            </div>\n" +
    "            <md-divider ></md-divider>\n" +
    "        </md-list-item>\n" +
    "    </md-list>\n" +
    "</md-content>\n"
  );


  $templateCache.put('app/sucursales/sucursales.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div style=\"max-width:880px\">\n" +
    "    <p style=\"padding:10px\">Busqueda y Edición de Sucursales</p>\n" +
    "    <div layout layout-xs=\"column\" layout-align=\"start start\" layout-padding>\n" +
    "        <md-input-container>\n" +
    "            <md-icon aria-label=\"buscar\" class=\"material-icons\">search</md-icon>\n" +
    "            <label>Descripci&oacute;n</label>\n" +
    "            <input ng-model=\"vm.filtroDescripcion\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <label>Zona</label>\n" +
    "            <md-select ng-model=\"vm.filtroZona\">\n" +
    "                <md-option ng-repeat=\"zona in vm.zonas\" ng-value=\"zona.$id\">\n" +
    "                    {{zona.descripcion}}\n" +
    "                </md-option>\n" +
    "            </md-select>\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <md-button ng-click=\"vm.filtrar()\">Aplicar filtro</md-button>\n" +
    "            <md-button ng-click=\"vm.limpiarFiltro()\">Limpiar filtro</md-button>\n" +
    "            <md-button ng-click=\"vm.showAdd()\" class=\"md-raised md-primary\" ng-disabled=\"!vm.online\">Agregar sucursal</md-button>\n" +
    "        </md-input-container>\n" +
    "    </div>\n" +
    "    <md-content id=\"catalogoSucursal\">\n" +
    "        <form name=\"nuevaSucursal\" novalidate ng-submit=\"nuevaSucursal.$valid && vm.addSucursal()\">\n" +
    "            <md-card ng-show=\"vm.add\">\n" +
    "                <md-card-title>\n" +
    "                    <md-card-title-text>\n" +
    "                        <md-input-container>\n" +
    "                            <label>Zona</label>\n" +
    "                            <md-select required name=\"zId\" ng-model=\"vm.zId\">\n" +
    "                                <md-option ng-repeat=\"zona in vm.zonas | filter: { $id: '!default' }\" ng-value=\"zona.$id\">\n" +
    "                                    {{zona.descripcion}}\n" +
    "                                </md-option>\n" +
    "                            </md-select>\n" +
    "                            <div ng-messages=\"nuevaSucursal.zId.$error\">\n" +
    "                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                        <md-input-container>\n" +
    "                            <label>Descripci&oacute;n</label>\n" +
    "                            <input required name=\"descripcion\" ng-model=\"vm.descripcion\" capitalize catalogovalido catalogo=\"sucursal\" zona=\"{{vm.zId}}\">\n" +
    "                            <div ng-messages=\"nuevaSucursal.descripcion.$error\">\n" +
    "                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                <div ng-message=\"catalogovalido\">Ya existe una sucursal con esta descripci&oacute;n.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </md-card-title-text>\n" +
    "                </md-card-title>\n" +
    "                <md-card-actions layout=\"row\" layout-align=\"start center\">\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.addSucursal()\" ng-disabled=\"!vm.online\">Guardar</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.cancelarAdd()\">Cancelar</md-button>\n" +
    "                </md-card-actions>\n" +
    "            </md-card>\n" +
    "        </form>\n" +
    "        <md-card ng-repeat=\"sucursal in vm.sucursales | filter: { $id: '!default' } | orderBy: 'descripcion'\">\n" +
    "            <ng-form name=\"editarSucursal\" novalidate>\n" +
    "                <md-card-title>\n" +
    "                    <md-card-title-text>\n" +
    "                        <span ng-show=\"!sucursal.edit\" class=\"md-subhead\">Zona: {{sucursal.descripcionZona}}</span>\n" +
    "                        <md-input-container ng-show=\"sucursal.edit\">\n" +
    "                            <label>Zona</label>\n" +
    "                            <md-select ng-model=\"sucursal.zId\">\n" +
    "                                <md-option ng-repeat=\"zona in vm.zonas | filter: { $id: '!default' }\" ng-value=\"zona.$id\">\n" +
    "                                    {{zona.descripcion}}\n" +
    "                                </md-option>\n" +
    "                            </md-select>\n" +
    "                        </md-input-container>\n" +
    "                        <span ng-show=\"!sucursal.edit\" class=\"md-headline\">{{sucursal.descripcion}}</span>\n" +
    "                        <md-input-container ng-show=\"sucursal.edit\">\n" +
    "                            <label>Descripci&oacute;n</label>\n" +
    "                            <input name=\"descripcion\" ng-model=\"vm.descripcion\" capitalize required catalogovalido catalogo=\"sucursal\" id=\"{{sucursal.$id}}\" zona=\"{{sucursal.zId}}\">\n" +
    "                            <div ng-messages=\"editarSucursal.descripcion.$error\">\n" +
    "                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                <div ng-message=\"catalogovalido\">Ya existe una sucursal con esta descripci&oacute;n.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </md-card-title-text>\n" +
    "                </md-card-title>\n" +
    "                <md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "                    <md-button ng-show=\"!sucursal.edit\" ng-click=\"vm.deleteSucursal(sucursal)\" ng-disabled=\"!vm.online\" class=\"md-raised md-primary\">Borrar</md-button>\n" +
    "                    <md-button ng-show=\"!sucursal.edit\" ng-click=\"vm.edit(sucursal)\" ng-disabled=\"!vm.online\" class=\"md-raised md-primary\">Editar</md-button>\n" +
    "                    <md-button ng-show=\"sucursal.edit\" ng-click=\"vm.updateSucursal(sucursal)\" ng-disabled=\"(editarSucursal.$invalid && !vm.online) || (!vm.online)\" class=\"md-raised md-primary\">Guardar</md-button>\n" +
    "                    <md-button ng-show=\"sucursal.edit\" ng-click=\"vm.cancelUpdateSucursal(sucursal)\" class=\"md-raised md-primary\">Cancelar</md-button>\n" +
    "                </md-card-actions>\n" +
    "            </ng-form>\n" +
    "        </md-card>\n" +
    "    </md-content>\n" +
    "</div>"
  );


  $templateCache.put('app/usuarios/usuarios.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div ng-show=\"!vm.loading\">\n" +
    "    <p style=\"padding:10px\">Busqueda y Edición de Usuarios</p>\n" +
    "    <md-content layout layout-xs=\"column\" layout-align=\"start start\" layout-padding>\n" +
    "        <md-input-container>\n" +
    "            <md-icon aria-label=\"buscar\" class=\"material-icons\">search</md-icon>\n" +
    "            <label>Nombre</label>\n" +
    "            <input ng-model=\"vm.filtroNombre\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <label>Email</label>\n" +
    "            <input ng-model=\"vm.filtroEmail\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <label># Empleado</label>\n" +
    "            <input ng-model=\"vm.filtroEmpleado\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <label>Zona</label>\n" +
    "            <md-select ng-model=\"vm.filtroZona\">\n" +
    "                <md-option ng-repeat=\"zona in vm.zonas\" ng-value=\"zona.$id\">\n" +
    "                    {{zona.descripcion}}\n" +
    "                </md-option>\n" +
    "            </md-select>\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <label>Sucursal</label>\n" +
    "            <md-select ng-model=\"vm.filtroSucursal\">\n" +
    "                <md-option ng-repeat=\"sucursal in vm.sucursales | filter: { zId: vm.filtroZona }\" ng-value=\"sucursal.$id\">\n" +
    "                    {{sucursal.descripcion}}\n" +
    "                </md-option>\n" +
    "            </md-select>\n" +
    "        </md-input-container>\n" +
    "         <md-input-container>\n" +
    "            <md-button ng-click=\"vm.filtrar()\">Aplicar filtro</md-button>\n" +
    "            <md-button ng-click=\"vm.limpiarFiltro()\">Limpiar filtro</md-button>\n" +
    "            <md-button ng-click=\"vm.showAdd()\" class=\"md-raised md-primary\" ng-disabled=\"!vm.online\">Agregar usuario</md-button>\n" +
    "        </md-input-container>\n" +
    "    </md-content>\n" +
    "        \n" +
    "    <md-content id=\"catalogoUsuarios\" layout=\"row\" layout-xs=\"column\" layout-sm=\"column\">\n" +
    "        <div flex>\n" +
    "            <md-card ng-repeat=\"usuario in vm.usuarios | orderBy: 'nombre'\">\n" +
    "                <md-card-title>\n" +
    "                    <md-card-title-text layout=\"column\">\n" +
    "                        <ng-form name=\"editarUsuario\">\n" +
    "                            <div>\n" +
    "                                <span ng-show=\"!usuario.edit\" class=\"md-headline\">{{usuario.nombre}}</span>\n" +
    "                                <md-input-container ng-show=\"usuario.edit\">\n" +
    "                                    <label>Nombre</label>\n" +
    "                                    <input name=\"nombre\" ng-model=\"usuario.nombre\" md-maxlength=\"75\" required ng-pattern=\"/^[a-zA-Z ñáéíóú´ÑÁÉÍÓÚ]+$/\">\n" +
    "                                    <div ng-messages=\"editarUsuario.nombre.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">El campo solo acepta letras.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                            </div>\n" +
    "                            <div>\n" +
    "                                <span class=\"md-subhead\">Mail: {{usuario.email}}</span><br />\n" +
    "                                <md-input-container ng-show=\"usuario.edit\">\n" +
    "                                    <label># Empleado</label>\n" +
    "                                    <input ng-model=\"usuario.empleado\" ng-pattern=\"/^[1-9]+[0-9]*$/\" required>\n" +
    "                                    <div ng-messages=\"editarUsuario.empleado.$error\">\n" +
    "                                        <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                        <div ng-message=\"pattern\">El campo debe ser de tipo num&eacute;rico.</div>\n" +
    "                                    </div>\n" +
    "                                </md-input-container>\n" +
    "                                <span ng-show=\"!usuario.edit\" class=\"md-subhead\">Nivel: {{usuario.descripcionNivel}}</span><br />\n" +
    "                                <md-input-container ng-show=\"usuario.edit\">\n" +
    "                                    <label>Nivel</label>\n" +
    "                                    <md-select ng-model=\"usuario.nivel\">\n" +
    "                                        <md-option ng-repeat=\"nivel in vm.niveles\" ng-value=\"nivel.nId\">\n" +
    "                                            {{nivel.descripcion}}\n" +
    "                                        </md-option>\n" +
    "                                    </md-select>\n" +
    "                                </md-input-container>\n" +
    "                                <span ng-show=\"!usuario.edit && usuario.nivel != 0\" class=\"md-subhead\">Zona: {{usuario.descripcionZona}}</span><br />\n" +
    "                                <md-input-container ng-show=\"usuario.edit && usuario.nivel != 0\">\n" +
    "                                    <label>Zona</label>\n" +
    "                                    <md-select ng-model=\"usuario.zId\">\n" +
    "                                        <md-option ng-repeat=\"zona in vm.zonas\" ng-value=\"zona.$id\">\n" +
    "                                            {{zona.descripcion}}\n" +
    "                                        </md-option>\n" +
    "                                    </md-select>\n" +
    "                                </md-input-container>\n" +
    "                                <span ng-show=\"!usuario.edit && usuario.nivel != 0\" class=\"md-subhead\">Sucursal: {{usuario.descripcionSucursal}}</span><br />\n" +
    "                                <md-input-container ng-show=\"usuario.edit && usuario.nivel != 0\">\n" +
    "                                    <label>Sucursal</label>\n" +
    "                                    <md-select ng-model=\"usuario.sId\">\n" +
    "                                        <md-option ng-repeat=\"sucursal in vm.sucursales | filter: { zId: usuario.zId }\" ng-value=\"sucursal.$id\">\n" +
    "                                            {{sucursal.descripcion}}\n" +
    "                                        </md-option>\n" +
    "                                    </md-select>\n" +
    "                                </md-input-container>\n" +
    "                            </div>\n" +
    "                        </ng-form>\n" +
    "                    </md-card-title-text>\n" +
    "                </md-card-title>\n" +
    "                <md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-show=\"!usuario.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.edit(usuario)\">Editar</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-show=\"!usuario.edit\" ng-disabled=\"!vm.online\" ng-click=\"vm.delete(usuario)\">Borrar</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-show=\"usuario.edit\" ng-disabled=\"!vm.online || editarUsuario.$invalid\" ng-click=\"vm.update(usuario)\">Guardar</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-show=\"usuario.edit\" ng-click=\"vm.cancelUpdate(usuario)\">Cancelar</md-button>\n" +
    "                </md-card-actions>\n" +
    "            </md-card>\n" +
    "        </div>    \n" +
    "        <div flex>\n" +
    "            <form name=\"nuevoUsuario\" novalidate ng-submit=\"nuevoUsuario.$valid && vm.addUsuario()\">\n" +
    "                <md-card ng-show=\"vm.add\">\n" +
    "                    <md-card-title>\n" +
    "                        <md-card-title-text>\n" +
    "                            <span class=\"md-headline\">Nuevo Usuario</span>\n" +
    "                            <md-input-container>\n" +
    "                                <label>Nombre</label>\n" +
    "                                <input required name=\"nombre\" ng-model=\"vm.nombre\" md-maxlength=\"75\" ng-pattern=\"/^[a-zA-Z áéíóú´ÁÉÍÓÚ]+$/\">\n" +
    "                                <div ng-messages=\"nuevoUsuario.nombre.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">El campo solo acepta letras.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container>\n" +
    "                                <label># Empleado</label>\n" +
    "                                <input required name=\"empleado\" ng-model=\"vm.empleado\" ng-pattern=\"/^[1-9]+[0-9]*$/\">\n" +
    "                                <div ng-messages=\"nuevoUsuario.empleado.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">El campo debe ser de tipo num&eacute;rico.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container>\n" +
    "                                <label>Correo electr&oacute;nico</label>\n" +
    "                                <input required name=\"email\" type=\"email\" ng-model=\"vm.email\" ng-pattern='/^(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$/i' correoexistente md-maxlength=\"50\">\n" +
    "                                <div ng-messages=\"nuevoUsuario.email.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">El correo electr&oacute;nico proporcionado es incorrecto, por favor ingr&eacute;selo en el siguiente formato: usuario/a@dominio Ej: ejemplo@bancamifel.com.mx</div>\n" +
    "                                    <div ng-message=\"correoexistente\">El correo ya se encuentra registrado.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container>\n" +
    "                                <label>Contrase&ntilde;a</label>\n" +
    "                                <input required name=\"password\" type=\"password\" ng-model=\"vm.password\" ng-pattern=\"/^.*(?=.{6,})(?=.*[A-Z])(?=.*\\d).*$/\">\n" +
    "                                <div ng-messages=\"nuevoUsuario.password.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"pattern\">La contrase&ntilde;a debe tener al menos 6 caracteres, de los cuales al menos uno debe ser una letra mayuscula y debe contener al menos un n&uacute;mero.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container>\n" +
    "                                <label>Confirmar contrase&ntilde;a</label>\n" +
    "                                <input required name=\"confPassword\" type=\"password\" compare-to=\"vm.password\" ng-model=\"vm.confPassword\">\n" +
    "                                <div ng-messages=\"nuevoUsuario.confPassword.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                    <div ng-message=\"compareTo\">No concuerda.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container>\n" +
    "                                <label>Nivel</label>\n" +
    "                                <md-select required name=\"nivel\" ng-model=\"vm.nivel\">\n" +
    "                                    <md-option ng-repeat=\"nivel in vm.niveles\" ng-value=\"nivel.nId\">\n" +
    "                                        {{nivel.descripcion}}\n" +
    "                                    </md-option>\n" +
    "                                </md-select>\n" +
    "                                <div ng-messages=\"nuevoUsuario.sId.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"vm.nivel != 0\">\n" +
    "                                <label>Zona</label>\n" +
    "                                <md-select ng-required=\"vm.nivel != 0\" name=\"zId\" ng-model=\"vm.zId\">\n" +
    "                                    <md-option ng-repeat=\"zona in vm.zonas\" ng-value=\"zona.$id\">\n" +
    "                                        {{zona.descripcion}}\n" +
    "                                    </md-option>\n" +
    "                                </md-select>\n" +
    "                                <div ng-messages=\"nuevoUsuario.zId.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                            <md-input-container ng-show=\"vm.nivel != 0\">\n" +
    "                                <label>Sucursal</label>\n" +
    "                                <md-select ng-required=\"vm.nivel != 0\" name=\"sId\" ng-model=\"vm.sId\">\n" +
    "                                    <md-option ng-repeat=\"sucursal in vm.sucursales | filter: { zId: vm.zId }\" ng-value=\"sucursal.$id\">\n" +
    "                                        {{sucursal.descripcion}}\n" +
    "                                    </md-option>\n" +
    "                                </md-select>\n" +
    "                                <div ng-messages=\"nuevoUsuario.sId.$error\">\n" +
    "                                    <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                </div>\n" +
    "                            </md-input-container>\n" +
    "                        </md-card-title-text>\n" +
    "                    </md-card-title>\n" +
    "                    <md-card-actions layout=\"row\" layout-align=\"center center\" layout-padding>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-disabled=\"!vm.online || nuevoUsuario.$invalid\" type=\"submit\">Guardar</md-button>\n" +
    "                        <md-button class=\"md-raised md-primary\" ng-click=\"vm.cancelarAdd()\">Cancelar</md-button>\n" +
    "                    </md-card-actions>\n" +
    "                </md-card>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </md-content>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/vida/vida.tpl.html',
    "<div class=\"mifel_vida\">\n" +
    "    <div layout=\"column\" layout-align=\"center center\">\n" +
    "        <div flex>\n" +
    "            <h1>Vive</h1>\n" +
    "        </div>\n" +
    "        <span class=\"divisor\"></span>\n" +
    "        <div flex>\n" +
    "            <h3>Protección a corto plazo que te permitirá respaldar a tu familia en caso de faltar.</h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <md-content class=\"md-padding\">\n" +
    "        <md-tabs md-selected=\"1\" md-dynamic-height md-border-bottom md-stretch-tabs>\n" +
    "            <md-tab label=\"Más Detalles\">\n" +
    "                <md-content>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-align=\"start center\" layout-padding class=\"apoyos\">\n" +
    "                        <div flex=\"50\" hide-xs></div>\n" +
    "                        <div flex=\"50\" flex-xs=\"100\" flex-sm=\"100\">\n" +
    "                            <iframe class=\"iframe\" src=\"https://107.178.223.113/index.php/mifel-vida\"></iframe>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </md-content>\n" +
    "            </md-tab>\n" +
    "            <md-tab label=\"Cotizador\">\n" +
    "                <md-content>\n" +
    "                    <div layout=\"row\" layout-xs=\"column\" layout-align=\"center start\">\n" +
    "                        <div flex>\n" +
    "                            <p class=\"titulo_azul\">Tu paquete incluye los siguientes servicios:</p>\n" +
    "                            <div layout=\"column\" layout-padding>\n" +
    "                                <div>\n" +
    "                                    <md-icon md-svg-src=\"/assets/icono_check.svg\" aria-label=\"ANTICIPO INMEDIATO\"></md-icon>\n" +
    "                                    ANTICIPO INMEDIATO AL FALLECIMIENTO\n" +
    "                                </div>\n" +
    "                                <div>\n" +
    "                                    <md-icon md-svg-src=\"/assets/icono_check.svg\" aria-label=\"ASISTENCIA FUNERARIA\"></md-icon>\n" +
    "                                    ASISTENCIA FUNERARIA FAMILIAR\n" +
    "                                </div>\n" +
    "                                <div>\n" +
    "                                    <md-icon md-svg-src=\"/assets/icono_check.svg\" aria-label=\"SEGURIDAD EN VIDA\"></md-icon>\n" +
    "                                    ANTICIPO POR ENFERMEDAD EN FASE TERMINAL\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div flex>\n" +
    "                            <div class=\"header_cotiza\">\n" +
    "                                <div class=\"titulo\">Vive</div>\n" +
    "                                <div class=\"prima\" ng-show=\"vida.muestraPrima\">\n" +
    "                                    <span>Prima Total</span>\n" +
    "                                    <div>\n" +
    "                                        <span class=\"precio\">{{vida.primaTotal | currency}}</span>\n" +
    "                                        <span>MXN</span>\n" +
    "                                    </div>\n" +
    "                                    <span>{{vida.periodosPrima}} Pago(s) de {{vida.pagoFraccionado | currency}}</span><br>\n" +
    "                                </div>\n" +
    "                                <div class=\"plan\">\n" +
    "                                     <span ng-show=\"!vida.muestraAhorro\">A 1 AÑO</span>\n" +
    "                                     <span ng-show=\"vida.muestraAhorro\">Pagando de forma Anual tu </span><span ng-class=\"vida.glow ? 'ahorro glow' : 'ahorro'\" ng-show=\"vida.muestraAhorro\">ahorro</span> <span ng-show=\"vida.muestraAhorro\">sería de: {{vida.porcFraccionado | currency}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <form name=\"vidaForm\" id=\"vidaForm\">\n" +
    "                                <span>Datos del solicitante titular</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Apellido paterno</label>\n" +
    "                                        <input type=\"text\" required md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" name=\"apePaterno\" ng-model=\"vida.apePaterno\">\n" +
    "                                        <div ng-messages=\"vidaForm.apePaterno.$error\" ng-if=\"vidaForm.$submitted || vidaForm.apePaterno.$touched\">\n" +
    "                                            <div ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div ng-message=\"md-maxlength\">Campo de 25 caracteres</div>\n" +
    "                                            <div ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Apellido materno</label>\n" +
    "                                        <input type=\"text\" required md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" name=\"apeMaterno\" ng-model=\"vida.apeMaterno\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"vidaForm.apeMaterno.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 caracteres</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres validos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Nombre</label>\n" +
    "                                        <input type=\"text\" required md-maxlength=\"25\" ng-pattern=\"/[a-zA-ZñÑáéíóúÁÉÍÓÚ](\\s{1}[a-zA-ZñÑáéíóúÁÉÍÓÚ])*$/\" name=\"nombre\" ng-model=\"vida.nombre\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"vidaForm.nombre.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"md-maxlength\">Campo de 25 caracteres</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Captura carácteres válidos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <label>Edad (Años)</label>\n" +
    "                                        <input type=\"number\" min=\"18\" max=\"75\"  ng-pattern=\"/[0-9]{2}$/\" required name=\"edad\" ng-model=\"vida.edad\">\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"vidaForm.edad.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"min\">Debe ser mayor de 18 años</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"max\">Debe ser menor de 75 años</div>\n" +
    "                                            <div class=\"md-accent\" ng-message=\"pattern\">Solo carácteres númericos son válidos</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container>\n" +
    "                                        <md-radio-group required name=\"sexo\" ng-model=\"vida.sexo\">\n" +
    "                                            <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                                <label>Género *</label>\n" +
    "                                                <md-radio-button flex value=\"m\">Femenino</md-radio-button>\n" +
    "                                                <md-radio-button flex value=\"h\">Masculino</md-radio-button>\n" +
    "                                            </div>\n" +
    "                                        </md-radio-group>\n" +
    "                                        <div class=\"radioRequerido\" ng-show=\"vidaForm.sexo.$error.required\">Campo requerido.</div>\n" +
    "                                    </md-input-container>\n" +
    "                                </md-content>\n" +
    "                                <span>Datos del plan</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Forma de pago</label>\n" +
    "                                        <md-select required=\"true\" name=\"formaPago\" ng-model=\"vida.formaPago\">\n" +
    "                                            <md-option value=\"default\">Seleccione</md-option>\n" +
    "                                            <md-option ng-repeat=\"fp in vida.formasPagoCat\" ng-selected=\"{{ fp.default === 1 ? 'true' : 'false' }}\" value=\"{{fp.$id}}\">{{fp.texto}}</md-option>\n" +
    "                                        </md-select>\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"vidaForm.formaPago.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Fallecimiento Protección contratada (MXN)</label>\n" +
    "                                        <md-select required=\"true\" name=\"proteccionCon\" ng-model=\"vida.proteccionCon\" ng-change=\"vida.activaAdicionales($event)\">\n" +
    "                                            <md-option value=\"default\">Seleccione</md-option>\n" +
    "                                            <md-option ng-repeat=\"sa in vida.productos  | filter: vida.filtroProductos | orderBy: vida.numeroSuma\" ng-selected=\"{{ sa.default === 1 ? 'true' : 'false' }}\" value=\"{{sa.$id}}\">{{sa.suma_asegurada | currency}}</md-option>\n" +
    "                                        </md-select>\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"vidaForm.proteccionCon.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container>\n" +
    "                                </md-content>\n" +
    "                                <span>Coberturas adicionales</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <md-checkbox ng-model=\"vida.ima\" aria-label=\"IMA\" ng-disabled=\"!vida.banIma || !vida.edad || vida.edad == ''\" ng-change=\"vida.obtieneSuma($event)\">\n" +
    "                                            Muerte Accidental\n" +
    "                                        </md-checkbox>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Protección contratada (MXN)</label>\n" +
    "                                        <input type=\"text\" value=\"{{vida.proteccionConIma | currency}}\" ng-disabled=\"true\">\n" +
    "                                        <md-input type=\"text\" name=\"proteccionConIma\" ng-model=\"vida.proteccionConIma\" ng-hide=\"true\">\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <md-checkbox ng-model=\"vida.ise\" aria-label=\"ISE\" ng-disabled=\"!vida.banIse || !vida.edad || vida.edad == ''\" ng-change=\"vida.obtieneSuma($event)\">\n" +
    "                                            Invalidez Sin Espera\n" +
    "                                        </md-checkbox>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Protección contratada (MXN)</label>\n" +
    "                                        <input type=\"text\" value=\"{{vida.proteccionConIse | currency}}\" ng-disabled=\"true\">\n" +
    "                                        <md-input type=\"text\" name=\"proteccionConIse\" ng-model=\"vida.proteccionConIse\" ng-hide=\"true\">\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <md-checkbox ng-model=\"vida.diba\" aria-label=\"DIBA\" ng-disabled=\"!vida.banDiba || !vida.edad || vida.edad == ''\" ng-change=\"vida.obtieneSuma($event)\">\n" +
    "                                            Doble Indemnización por Muerte Accidental y Pérdida de Miembros\n" +
    "                                        </md-checkbox>\n" +
    "                                    </md-input-container>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <label>Protección contratada (MXN)</label>\n" +
    "                                        <input type=\"text\" value=\"{{vida.proteccionConDiba | currency}}\" ng-disabled=\"true\">\n" +
    "                                        <md-input type=\"text\" name=\"proteccionConDiba\" ng-model=\"vida.proteccionConDiba\" ng-hide=\"true\">\n" +
    "                                    </md-input-container>\n" +
    "                                </md-content>\n" +
    "                                <!--span>Declaracion de Salud del Solicitante</span>\n" +
    "                                <md-content layout-padding>\n" +
    "                                        <sub>¿El solicitante padece o ha padecido alguna enfermdad hepática, mental, pulmonar, renal, neurológica, \n" +
    "                                        cardiovascular, hipertensión arterial, diabetes, epilepsia, escelrosis multiple, fiebre reumatica, SIDA, cancer, \n" +
    "                                        tumores, leucemia, lupus, alcoholismo o drogadicción?</sub>\n" +
    "                                    <md-input-container class=\"md-block\">\n" +
    "                                        <md-radio-group required=\"true\" name=\"preguntaSalud\" class=\"md-accent\" ng-model=\"vida.preguntaSalud\">\n" +
    "                                            <div layout=\"row\" layout-padding layout-align=\"start center\">\n" +
    "                                                <md-radio-button flex value=\"Si\">Si</md-radio-button>    \n" +
    "                                                <md-radio-button flex value=\"No\">No</md-radio-button>\n" +
    "                                            </div>\n" +
    "                                        </md-radio-group>\n" +
    "                                        <div class=\"md-accent\" ng-messages=\"vidaForm.preguntaSalud.$error\" role=\"alert\">\n" +
    "                                            <div class=\"md-accent\" ng-message=\"required\">Campo requerido.</div>\n" +
    "                                        </div>\n" +
    "                                    </md-input-container-->\n" +
    "                                <div layout=\"row\" layout-align=\"center center\" layout-xs=\"column\" layout-align-xs=\"space-between stretch\">\n" +
    "                                    <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"vida.cotiza($event)\" ng-disabled=\"vidaForm.$invalid\">\n" +
    "                                        Cotizar\n" +
    "                                    </md-button>\n" +
    "                                    <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"vida.guarda($event)\" ng-show=\"vida.muestraPrima\" ng-disabled=\"!vida.online || vida.banGuardar || vidaForm.$invalid\">\n" +
    "                                        Guardar\n" +
    "                                    </md-button>\n" +
    "                                    <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"vida.imprime($event)\" ng-show=\"vida.banGuardado\" ng-disabled=\"!vida.online || vidaForm.$invalid\">\n" +
    "                                        Imprimir\n" +
    "                                    </md-button>\n" +
    "                                    <md-button flex-xs type=\"submit\" class=\"md-raised md-primary\" ng-click=\"vida.continua($event)\" ng-show=\"vida.banGuardado\" ng-disabled=\"!vida.online || vidaForm.$invalid\">\n" +
    "                                        Continuar\n" +
    "                                    </md-button>\n" +
    "                                </div>\n" +
    "                                <md-progress-linear ng-show=\"vida.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "                </md-content>\n" +
    "                </form>\n" +
    "                </div>\n" +
    "                </div>\n" +
    "    </md-content>\n" +
    "    </md-tab>\n" +
    "    </md-tabs>\n" +
    "    </md-content>\n" +
    "</div>"
  );


  $templateCache.put('app/zonas/zonas.tpl.html',
    "<md-progress-linear ng-show=\"vm.loading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "<div style=\"max-width:880px\">\n" +
    "    <p style=\"padding:10px\">Busqueda y Edición de Zonas</p>\n" +
    "    <div layout layout-xs=\"column\" layout-align=\"start start\" layout-padding>\n" +
    "        <md-input-container>\n" +
    "            <md-icon aria-label=\"buscar\" class=\"material-icons\">search</md-icon>\n" +
    "            <label>Descripci&oacute;n</label>\n" +
    "            <input ng-model=\"vm.filtroDescripcion\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container>\n" +
    "            <md-button ng-click=\"vm.filtrar()\">Aplicar filtro</md-button>\n" +
    "            <md-button ng-click=\"vm.limpiarFiltro()\">Limpiar filtro</md-button>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"vm.addZona()\" ng-disabled=\"!vm.online\">Agregar zona</md-button>\n" +
    "        </md-input-container>\n" +
    "    </div>\n" +
    "    <md-content id=\"catalogoZona\">\n" +
    "        <form name=\"nuevaZona\" novalidate ng-submit=\"nuevaZona.$valid && vm.addZona()\">\n" +
    "            <md-card ng-show=\"vm.add\">\n" +
    "                <md-card-title>\n" +
    "                    <md-card-title-text>\n" +
    "                        <md-input-container>\n" +
    "                            <label>Descripci&oacute;n</label>\n" +
    "                            <input required name=\"descripcion\" ng-model=\"vm.descripcion\" capitalize catalogovalido catalogo=\"zona\">\n" +
    "                            <div ng-messages=\"nuevaZona.descripcion.$error\">\n" +
    "                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                <div ng-message=\"catalogovalido\">Ya existe una zona con esta descripci&oacute;n.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </md-card-title-text>\n" +
    "                </md-card-title>\n" +
    "                <md-card-actions layout=\"row\" layout-align=\"start center\">\n" +
    "                    <md-button class=\"md-raised md-primary\" type=\"submit\" ng-disabled=\"!vm.online\">Guardar</md-button>\n" +
    "                    <md-button class=\"md-raised md-primary\" ng-click=\"vm.cancelAdd()\">Cancelar</md-button>\n" +
    "                </md-card-actions>\n" +
    "            </md-card>\n" +
    "        </form>\n" +
    "        \n" +
    "        <md-card ng-repeat=\"zona in vm.zonas | filter: { $id: '!default' } | orderBy: 'descripcion'\">\n" +
    "            <ng-form name=\"editarZona\" novalidate>\n" +
    "                <md-card-title>\n" +
    "                    <md-card-title-text>\n" +
    "                        <span ng-show=\"!zona.edit\" class=\"md-headline\">{{zona.descripcion}}</span>\n" +
    "                        <md-input-container ng-show=\"zona.edit\">\n" +
    "                            <label>Descripci&oacute;n</label>\n" +
    "                            <input name=\"descripcion\" ng-model=\"vm.descripcion\" capitalize required catalogovalido catalogo=\"zona\" id=\"{{zona.$id}}\" >\n" +
    "                            <div ng-messages=\"editarZona.descripcion.$error\">\n" +
    "                                <div ng-message=\"required\">Campo obligatorio.</div>\n" +
    "                                <div ng-message=\"catalogovalido\">Ya existe una zona con esta descripci&oacute;n.</div>\n" +
    "                            </div>\n" +
    "                        </md-input-container>\n" +
    "                    </md-card-title-text>\n" +
    "                </md-card-title>\n" +
    "                <md-card-actions layout=\"row\" layout-align=\"end center\">\n" +
    "                    <md-button ng-show=\"!zona.edit\" ng-click=\"vm.deleteZona(zona)\" ng-disabled=\"!vm.online\" class=\"md-raised md-primary\">Borrar</md-button>\n" +
    "                    <md-button ng-show=\"!zona.edit\" ng-click=\"vm.edit(zona)\" ng-disabled=\"!vm.online\" class=\"md-raised md-primary\">Editar</md-button>\n" +
    "                    <md-button ng-show=\"zona.edit\" ng-click=\"vm.updateZona(zona)\" ng-disabled=\"(editarZona.$invalid && !vm.online) || (!vm.online)\" class=\"md-raised md-primary\">Guardar</md-button>\n" +
    "                    <md-button ng-show=\"zona.edit\" ng-click=\"vm.cancelUpdate(zona)\" class=\"md-raised md-primary\">Cancelar</md-button>\n" +
    "                </md-card-actions>\n" +
    "            </ng-form>\n" +
    "        </md-card>\n" +
    "    </md-content>\n" +
    "</div>"
  );

}]);
