'use strict';

/**
 * @ngdoc overview
 * @name pagesApp
 * @description
 * # pagesRoute
 *
 * Route(s) module of pages part.
 */

angular
    .module('pagesApp', [
    ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main.pages-timeline', {
        url: '/pages-timeline',
        controller: 'TimelineCtrl',
        templateUrl: 'modules/pages/views/timeline.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/pages/controllers/timeline.js'
                        ]
                    })
                }
            }
        })
        .state('main.pages-blank', {
            url: '/pages-blank',
            controller: 'BlankCtrl',
            templateUrl: 'modules/pages/views/blank.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/pages/controllers/blank.js'
                        ]
                    })
                }
            }
        });
    }
]);
