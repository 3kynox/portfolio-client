'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
      'oc.lazyLoad',
      'ui.router',
      'ui.bootstrap',
      'dashboardApp'
  ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.otherwise('/main/dashboard');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'modules/main/views/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                        {
                            name: 'adminApp',
                            files: [
                                'modules/main/directives/header.js',
                                'modules/main/directives/sidebar.js'
                            ]
                        }),
                        $ocLazyLoad.load(
                        {
                            name:'ngAnimate',
                            files:['bower_components/angular-animate/angular-animate.js']
                        }),
                        $ocLazyLoad.load(
                        {
                            name:'ngCookies',
                            files:['bower_components/angular-cookies/angular-cookies.js']
                        }),
                        $ocLazyLoad.load(
                        {
                            name:'ngResource',
                            files:['bower_components/angular-resource/angular-resource.js']
                        }),
                        $ocLazyLoad.load(
                        {
                            name:'ngSanitize',
                            files:['bower_components/angular-sanitize/angular-sanitize.js']
                        }),
                        $ocLazyLoad.load(
                        {
                            name:'ngTouch',
                            files:['bower_components/angular-touch/angular-touch.js']
                        });
                    }
                }
            }
        );
    }
]);
