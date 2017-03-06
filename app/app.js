(function(){
   "use strict";
   
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBmDcnyQfF10vTuU7Gu9I1tGoAZDyiQ27U",
        authDomain: "gnp-mifel-firebase.firebaseapp.com",
        databaseURL: "https://gnp-mifel-firebase.firebaseio.com",
        storageBucket: "gnp-mifel-firebase.appspot.com",
        messagingSenderId: "1066275296921"
    };
    firebase.initializeApp(config);
   
    angular
        .module("mifel", ["firebase","ngMaterial", "ngMdIcons", "ui.router", "ngMessages", "rzModule", "ngIdle"])
        .config(fnConfig)
        .run(rIdle);
    
    rIdle.$inject = ["Idle"];
    
    function rIdle(Idle) {
        Idle.watch();
    }
        
    fnConfig.$inject = ["$mdThemingProvider", "KeepaliveProvider", "IdleProvider"];
    function fnConfig($mdThemingProvider, KeepaliveProvider, IdleProvider) {
        try{
            document.getElementById("load").remove();      
        }catch(error){
            try{
                document.getElementById("load").parentNode.removeChild(document.getElementById("load"));
            } catch(error) {
                console.error("loading no existe");
            }
        }
      
        var customPrimary = {
            '50': '#0090fb',
            '100': '#0081e2',
            '200': '#0073c8',
            '300': '#0064af',
            '400': '#005695',
            '500': '00477C',
            '600': '#003862',
            '700': '#002a49',
            '800': '#001b2f',
            '900': '#000d16',
            'A100': '#169bff',
            'A200': '#2fa6ff',
            'A400': '#49b1ff',
            'A700': '#000000',
            'contrastDefaultColor': 'light'
        };
        $mdThemingProvider.definePalette('customPrimary', customPrimary);
    
        var customAccent = {
            '50': '#07362c',
            '100': '#0b4c3f',
            '200': '#0e6252',
            '300': '#117964',
            '400': '#148f77',
            '500': '#17a689',
            '600': '#1dd2af',
            '700': '#28e1bd',
            '800': '#3ee4c4',
            '900': '#55e7ca',
            'A100': '#1dd2af',
            'A200': '#1ABC9C',
            'A400': '#17a689',
            'A700': '#6bebd1'
        };
        $mdThemingProvider.definePalette('customAccent', customAccent);
    
        var customWarn = {
            '50': '#d4fef3',
            '100': '#bbfdec',
            '200': '#a2fce5',
            '300': '#89fbde',
            '400': '#71fbd7',
            '500': '#58FAD0',
            '600': '#3ff9c9',
            '700': '#26f9c2',
            '800': '#0ef8bb',
            '900': '#07e5ab',
            'A100': '#edfefa',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#06cc99'
        };
        $mdThemingProvider.definePalette('customWarn', customWarn);
    
        var customBackground = {
            '50': '#ffffff',
            '100': '#ffffff',
            '200': '#ffffff',
            '300': '#ffffff',
            '400': '#ffffff',
            '500': '#fff',
            '600': '#f2f2f2',
            '700': '#e6e6e6',
            '800': '#d9d9d9',
            '900': '#cccccc',
            'A100': '#ffffff',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#bfbfbf'
        };
        $mdThemingProvider.definePalette('customBackground', customBackground);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent')
            .warnPalette('customWarn');
            //.backgroundPalette('customBackground')
        
        // configure Idle settings
        IdleProvider.idle(3600); // in seconds
        IdleProvider.timeout(5); // in seconds
        KeepaliveProvider.interval(1200); // in seconds
    }

})();