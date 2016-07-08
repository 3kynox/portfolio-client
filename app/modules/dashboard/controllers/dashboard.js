'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
    .controller('DashboardCtrl', function ($scope, Restangular) {
        var peopleApi = Restangular.all('people');

        peopleApi.getList().then(function (people) {
            $scope.people = people[0];
        });
    });
