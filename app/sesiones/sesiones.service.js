(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("sesionesSrvc", sesionesSrvc);
        
    sesionesSrvc.$inject = ["$q"]
        
    function sesionesSrvc($q) {
        var vm = this;
        
        vm.sesiones = [];
        vm.getSesiones = getSesiones;
        
        function getSesiones() {
            return $q(function (resolve, reject) {
                $q.all([
                    firebase.database().ref("usuario").once("value"),
                    firebase.database().ref("sucursal").once("value"),
                    firebase.database().ref("zona").once("value")
                ]).then(function(aResultados) {
                    var usuarios = [], zonas = [], sucursales = [];
                    
                    //usuarios
                    angular.forEach(aResultados[0].val(), function(value, key) {
                        usuarios.push(value);
                    });
                    
                    //sucursales
                    angular.forEach(aResultados[1].val(), function(value, key) {
                        sucursales.push({ "sId": key, "descripcionSucursal": value.descripcion });
                    });
                    
                    //zonas
                    angular.forEach(aResultados[2].val(), function(value, key) {
                        zonas.push({ "zId": key, "descripcionZona": value.descripcion });
                    });
                    
                    var resultados = new jinqJs()
                        .from(usuarios)
                        .join(sucursales)
                            .on("sId")
                        .join(zonas)
                            .on("zId")
                        .where(function(row) {
                            return row.descripcionSucursal != "GNP Central";
                        })
                        .select(function(row, index) {
                            return {
                                "descripcionZona": row.descripcionZona,
                                "descripcionSucursal": row.descripcionSucursal,
                                "empleado": row.empleado,
                                "nombre": row.nombre,
                                "email": row.email,
                                "actualSesion": (row.actualSesion) ? (row.actualSesion) : ("CUENTA SIN ACTIVIDAD")
                            };
                        });
                    
                    resolve(resultados);
                });
            });
        }
    }
})();