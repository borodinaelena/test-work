(function(){

    'use strict';
    
    angular
        .module('app', [
            'ui.router', 
            'ngResource', 
            'ngStorage'
        ]);

    angular
        .module('app')
        .constant('config', {
            url: `http://${window.location.hostname}:${window.location.port}`,
        });

    angular
        .module('app')
        .config(configure);

    angular
        .module('app')
        .run(runing);

    ////////////

    configure.$inject = ['$httpProvider', '$locationProvider', '$urlRouterProvider'];

    function configure($httpProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }

    runing.$inject = ['$rootScope', '$state', '$stateParams'];

    function runing($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();
