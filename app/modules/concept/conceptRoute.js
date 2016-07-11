'use strict';

/**
 * @ngdoc overview
 * @name conceptApp
 * @description
 * # conceptRoute
 *
 * Route(s) module of concept part.
 */

angular
    .module('conceptApp', [
    ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main.concept', {
        url: '/concept',
        controller: 'ConceptCtrl',
        templateUrl: 'modules/concept/views/concept.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/concept/controllers/concept.js'
                        ]
                    })
                }
            }
    });
    }
]);
