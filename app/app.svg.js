(function() {
  "use strict";
  
  var assetMap = {
  'img/icons/menu.svg' : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"> <path d="M0 0h18v18h-18z" fill="none"/> <path d="M2 13.5h14v-1.5h-14v1.5zm0-4h14v-1.5h-14v1.5zm0-5.5v1.5h14v-1.5h-14z"/></svg>'
};

  // Note: 'material.svgAssetsCache' is used with Angular Material docs
  // when launching code pen demos; @see codepen.js

  angular.module('material.svgAssetsCache',[])
    .run(function($templateCache) {
      angular.forEach(assetMap, function(value, key) {
        $templateCache.put(key, value);
      });
    });
})();
