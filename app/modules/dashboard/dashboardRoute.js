'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardRoute
 *
 * Route(s) module of dashboard part.
 */

angular
    .module('dashboardApp', [
    ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main.dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
        templateUrl: 'modules/dashboard/views/dashboard.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/dashboard/assets/styles/dashboard.css',
                            'modules/dashboard/controllers/dashboard.js'
                        ]
                    })
                }
            }
    });
    }
]);
