"use strict";

angular
    .module('app')
    .config(function ($stateProvider, $locationProvider, $httpProvider) {
        $stateProvider
            .state({
                name: 'index',
                url: '/',
                templateUrl: 'app/phone/phone.template.html',
                controller: 'PhoneController',
                controllerAs: 'Phone'
            });

             $locationProvider.html5Mode(true);
    });