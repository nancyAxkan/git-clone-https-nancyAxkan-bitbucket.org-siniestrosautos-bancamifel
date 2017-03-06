(function() {
    "use strict";
    
    angular
        .module("mifel")
        .service("usuariosSrvc", usuariosSrvc);
        
    usuariosSrvc.$inject = ["$firebaseArray", "$firebaseObject", "$http", "Auth", "$q", "$rootScope", "logSrvc"];
    
    function usuariosSrvc($firebaseArray, $firebaseObject, $http, Auth, $q, $rootScope, logSrvc) {
        var vm = this;
        //var usuarioActual = (Auth.$getAuth()) ? ($firebaseObject(firebase.database().ref("usuario/" + Auth.$getAuth().uid))) : (undefined); 

        vm.niveles = [];
        vm.usuarios = [];
        vm.addUsuario = addUsuario;
        vm.updateUsuario = updateUsuario;
        vm.deleteUsuario = deleteUsuario;
        vm.getNiveles = getNiveles;
        vm.getUsuario = getUsuario;
        vm.filtrar = filtrar;
        vm.getUsuarios = getUsuarios;
        vm.setUsuario = setUsuario;
        
        vm.usuarioActual = null;
        
        $rootScope.$on("logout", function(event, args) {
            /*if (usuarioActual) { 
                vm.usuarioActual.$destroy(); 
                vm.usuarioActual = {};
            }*/
        });
        
        function setUsuario() {
            vm.usuarioActual = (Auth.$getAuth()) ? ($firebaseObject(firebase.database().ref("usuario/" + Auth.$getAuth().uid))) : (undefined); 
        }
        
        function getUsuarios() {
            vm.usuarios = $firebaseArray(firebase.database().ref("usuario").orderByChild("activo").equalTo(true));
            
            vm.usuarios.$loaded().then(function() {
                getZonas();
                getSucursales();
                getDescNiveles();
            });
            
            return vm.usuarios;
        }
        
        function filtrar(sEmail, sNombre, sEmpleado, sZona, sSucursal) {
            return new jinqJs()
                .from(vm.usuarios)
                .where(function(usuario) {
                    var condicion = true;
                    
                    if (sEmail != "") {
                        condicion = (usuario.email.indexOf(sEmail) > -1);
                    }
                    
                    if (sNombre != "") {
                        condicion = (usuario.nombre.indexOf(sNombre) > -1);
                    }
                    
                    if (sEmpleado != "") {
                        condicion = (usuario.empleado.indexOf(sEmpleado) > -1);
                    }
                    
                    if (sZona != "") {
                        condicion = (usuario.zId.indexOf(sZona) > -1);
                    }
                    
                    if (sSucursal != "") {
                        condicion = (usuario.sId.indexOf(sSucursal) > -1);
                    }
                    
                    return condicion;
                })
                .select();
        }
        
        function getUsuario() {
            return vm.usuarioActual;
        }
        
        function getNiveles() {
            return vm.usuarioActual.$loaded().then(function () {
                return $q(function(resolve, reject) {
                    if (vm.usuarioActual.nivel == 0) {
                        vm.niveles = [
                            { nId: 0, descripcion: "Administrador GNP" },
                            { nId: 1, descripcion: "Administrador MIFEL" },
                            { nId: 2, descripcion: "Administrador Regional" },
                            { nId: 3, descripcion: "Ejecutivo" }
                        ];
                    }
                    
                    if (vm.usuarioActual.nivel == 1) {
                        vm.niveles = [
                            { nId: 2, descripcion: "Administrador Regional" },
                            { nId: 3, descripcion: "Ejecutivo" }
                        ];
                    }
                    
                    if (vm.usuarioActual.nivel == 2) {
                        vm.niveles = [
                            { nId: 3, descripcion: "Ejecutivo" }
                        ];
                    }
                    
                    resolve(vm.niveles);
                });
            });
        }
        
        function updateUsuario(sUid, sEmail, sNombre, sEmpleado, sZid, sSid, iNivel) {
            validarDatos(sEmail, "123456", sNombre, sZid, sSid, iNivel);
            var objUsuario = vm.usuarios.$getRecord(sUid);
            delete objUsuario.descripcionZona;
            delete objUsuario.descripcionSucursal;
            delete objUsuario.descripcionNivel;
            
            var promise;
            
            objUsuario.email = sEmail;
            objUsuario.nombre = sNombre;
            objUsuario.empleado = sEmpleado;
            objUsuario.zId = sZid;
            objUsuario.sId = sSid;
            objUsuario.nivel = iNivel;
            objUsuario.activo = true;
            
            logSrvc.addMovimiento("Catálogo de Usuarios", "ACTUALIZADO", "uID: " + sUid);
            
            promise = vm.usuarios.$save(objUsuario);
            
            var oUsrPermitido = $firebaseObject(firebase.database().ref("usuariopermitido/" + sUid));
            oUsrPermitido.$loaded(function() {
                oUsrPermitido.activo = true;
                
                oUsrPermitido.$save(function() {
                    oUsrPermitido.$destroy();
                });
            });
            
            promise.then(function() {
                assignZona(getZonaObject(objUsuario.zId), objUsuario);
                assignSucursal(getSucursalObject(objUsuario.sId), objUsuario);
                assignNivel(objUsuario);
            });
            
            return promise;
        }
        
        function deleteUsuario(uId) {
            var objUsuario = $firebaseObject(firebase.database().ref("usuario/" + uId));
            return objUsuario.$loaded().then(function() {
                objUsuario.activo = false;
                
                logSrvc.addMovimiento("Catálogo de Usuarios", "BORRADO", "uID: " + uId);
                
                var oUsrPermitido = $firebaseObject(firebase.database().ref("usuariopermitido/" + uId));
                oUsrPermitido.$loaded(function() {
                    oUsrPermitido.activo = false;
                    
                    oUsrPermitido.$save(function() {
                        oUsrPermitido.$destroy();
                    });
                });
                
                return objUsuario.$save();
            });
        }
        
        function addUsuario(sEmail, sPassword, sNombre, sEmpleado, sZid, sSid, iNivel) {
            validarDatos(sEmail, sPassword, sNombre, sZid, sSid, iNivel);
            
            return $http({
                method: "POST",
                url: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBmDcnyQfF10vTuU7Gu9I1tGoAZDyiQ27U",
                headers: {
                    "content-type": "application/json"
                },
                data: {
                    "email": sEmail,
                    "password": sPassword,
                    "returnSecureToken": true
                }
            }).then(function (oResponse) {
                var uId = oResponse.data.localId;
                var objUsuario = $firebaseObject(firebase.database().ref("usuario/" + uId));
                
                objUsuario.email = sEmail;
                objUsuario.nombre =  sNombre;
                objUsuario.empleado =  sEmpleado;
                objUsuario.zId = (iNivel == 0) ? ( "default") : ( sZid);
                objUsuario.sId = (iNivel == 0) ? ( "default") : ( sSid);
                objUsuario.nivel =  iNivel;
                objUsuario.activo = true;
                
                logSrvc.addMovimiento("Catálogo de Usuarios", "NUEVO", "Email: " + sEmail);
                 
                var oUsrPermitido = $firebaseObject(firebase.database().ref("usuariopermitido/" + uId));
                oUsrPermitido.$loaded(function() {
                    oUsrPermitido.activo = true;
                    
                    oUsrPermitido.$save(function() {
                        oUsrPermitido.$destroy();
                    });
                });
                
                return objUsuario.$save().then(function() {
                    objUsuario.$destroy();
                    objUsuario = vm.usuarios.$getRecord(objUsuario.$id);
                    
                    assignNivel(objUsuario);
                    
                    $q.all([
                        assignZona(getZonaObject( objUsuario.zId), objUsuario), 
                        assignSucursal(getSucursalObject(objUsuario.sId), objUsuario)
                    ]).then(function () {
                        if (angular.isFunction(objUsuario.$destroy)) { objUsuario.$destroy(); }
                    });
                    
                    
                });
            });
        }
        
        function getZonaObject(sZid) {
            var dbRefCat = firebase.database().ref('zona/' + sZid);
            
            return $firebaseObject(dbRefCat);
        }
        
        function getSucursalObject(sSid) {
            var dbRefCat = firebase.database().ref('sucursal/' + sSid);
            
            return $firebaseObject(dbRefCat);
        }
        
        function assignNivel(oUsuario) {
            var oNivel = new jinqJs()
                .from(vm.niveles)
                .where("nId == " + oUsuario.nivel)
                .select("descripcion")[0];
                
            oUsuario.descripcionNivel = oNivel.descripcion;
        }
        
        function assignZona(oZona, oUsuario) {
            return oZona.$loaded(function(zona) {
                oUsuario.descripcionZona = zona.descripcion;
                
                oZona.$destroy();
            });
        }
        
        function assignSucursal(oSucursal, oUsuario) {
            return oSucursal.$loaded(function(sucursal) {
                oUsuario.descripcionSucursal = sucursal.descripcion;
                
                oSucursal.$destroy();
            });
        }
        
        function getDescNiveles() {
            vm.usuarios.forEach(function(usuario) {
                assignNivel(usuario);
            });
        }
        
        function getZonas() {
            vm.usuarios.forEach(function(usuario) {
                assignZona(getZonaObject(usuario.zId), usuario);
            });
        }
        
        function getSucursales() {
            vm.usuarios.forEach(function(usuario) {
                assignSucursal(getSucursalObject(usuario.sId), usuario);
            });
        }
        
        function validarDatos(sEmail, sPassword, sNombre, sZid, sSid, iNivel) {
            if (vm.usuarioActual.nivel != 0) {
                if (vm.usuarioActual.nivel == 1 && iNivel == 0) {
                    throw "El usuario actual no tiene privilegios para asignar el nivel seleccionado."
                }
                if (vm.usuarioActual.nivel == 1 && iNivel <= 1) {
                    throw "El usuario actual no tiene privilegios para asignar el nivel seleccionado."
                }
                
                if (vm.usuarioActual.nivel == 2 && iNivel <= 2) {
                    throw "El usuario actual no tiene privilegios para asignar el nivel seleccionado."
                }
                
                if (vm.usuarioActual.nivel == 3) {
                    throw "El usuario actual no tiene privilegios para crear usuarios."
                }
            }
            
            if (sEmail.trim() == "") {
                throw "El correo no puede estar vacio."
            }
            
            if (sPassword.trim() == "") {
                throw "El password no puede estar vacio."
            }
            
            if (sPassword.trim().length < 6) {
                throw "El password debe contener minimo 6 caracteres."
            }
            
            if (sNombre.trim() == "") {
                throw "El nombre no puede estar vacio."
            }
            
            if (sZid.trim() == "" && iNivel != 0) {
                throw "La zona no puede estar vacia."
            }
            
            if (sSid.trim() == "" && iNivel != 0) {
                throw "La sucursal no puede estar vacia."
            }
            
            if (iNivel == undefined) {
                throw "El nivel no puede estar vacio."
            }
        }
        
    }
})();