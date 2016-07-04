'use strict';

/**
 * @ngdoc directive
 * @name adminApp.directive:sidebar
 * @description
 * # Sidebar
 */
angular.module('adminApp')
    .directive('sidebar', ['$location', function() {
        return {
            templateUrl: 'modules/main/views/partials/sidebar.html',
            restrict: 'E',
            replace: true
            }
    }]);
