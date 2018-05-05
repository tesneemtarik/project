(function() {
    'use strict';

    angular
        .module('app')
        .factory('contactService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getcontacts: function() {
                url = globalConfig.apiAddress + "/contact";
                return $http.get(url);
            },
            getcontact: function(id) {
                url = globalConfig.apiAddress + "/contact/" + id;
                return $http.get(url);
            },
            createcontact: function(contact) {
                url = globalConfig.apiAddress + "/contact";
                return $http.post(url, contact);
            },
            updatecontact: function(contact) {
                url = globalConfig.apiAddress + "/contact/" + contact._id;
                return $http.put(url, contact);
            },
            deletecontact: function(id) {
                url = globalConfig.apiAddress + "/contact/" + id;
                return $http.delete(url);
            }
        };
    }
})();