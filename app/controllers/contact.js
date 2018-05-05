(function() {
    'use strict';

    angular
        .module('app')
        .controller('contactController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'contactService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, contactService, $state, $stateParams) {
        $scope.contacts = [];

        if ($state.current.name == "contacts") {
            $rootScope.Title = "contact ";
            contactService.getcontacts().then(function(res) {
                $scope.contacts = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deletecontact = function(id) {
                if (confirm('Are you sure to delete?')) {
                    contactService.deletecontact(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("contacts", {}, {
                                reload: true
                            });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit contact";
            var id = $stateParams.id;
            contactService.getcontact(id).then(function(res) {
                $scope.contact = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(contact) {
                if ($scope.contactForm.$valid) {
                    contactService.updatecontact(contact).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("contacts");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "create") {
            $rootScope.Title = "Create contact";
            $scope.saveData = function(contact) {
                $scope.IsSubmit = true;
                if ($scope.contactForm.$valid) {
                    contactService.createcontact(contact).then(function(res) {
                        if (res.data == "created") {
                            $state.go("contacts");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();