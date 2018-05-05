(function() {
    'use strict';

    angular.module('app', [
            "ui.router"
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("contacts", {
                url: "/",
                templateUrl: "/views/contact/index.html",
                controller: "contactController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/contact/create.html",
                controller: "contactController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/contact/create.html",
                controller: "contactController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/contact/details.html",
                controller: "contactController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3000/api'
        });
})();