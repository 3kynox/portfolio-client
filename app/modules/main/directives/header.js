'use strict';

/**
 * @ngdoc directive
 * @name adminApp.directive:header
 * @description
 * # Header
 */
angular.module('adminApp')
    .directive('header', function() {
        return {
            templateUrl: 'modules/main/views/partials/header.html',
            restrict: 'E'
        };
    });
