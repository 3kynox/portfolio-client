'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
    .controller('SkillsCtrl', function ($scope, $sce) {
        $scope.skills = $sce.trustAsHtml('<iframe frameBorder="0" scrolling="no" width="100%" height="1400px" src="modules/pages/assets/iframe/index-skills.html"></iframe>');
    });
