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
        .state('main.pages-skills', {
            url: '/pages-skills',
            controller: 'SkillsCtrl',
            templateUrl: 'modules/pages/views/skills.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/pages/controllers/skills.js'
                        ]
                    })
                }
            }
        })
        .state('main.pages-projects', {
            url: '/pages-projects',
            controller: 'ProjectsCtrl',
            templateUrl: 'modules/pages/views/projects.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/pages/controllers/projects.js'
                        ]
                    })
                }
            }
        });
    }
]);
