'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:BlankCtrl
 * @description
 * # BlankCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
    .controller('ProjectsCtrl', function ($scope, $sce) {
        $scope.portfolio = $sce.trustAsHtml('<iframe frameBorder="0" scrolling="no" width="100%" height="2000px" src="modules/pages/assets/iframe/index-portfolio.html"></iframe>');
    });
