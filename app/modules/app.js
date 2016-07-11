'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
var MakeApp = angular
  .module('adminApp', [
      'oc.lazyLoad',
      'ui.router',
      'ui.bootstrap',
      'restangular',
      'dashboardApp',
      'layoutApp',
      'pagesApp',
      'userApp',
      'conceptApp'
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
    }])
    .config(['RestangularProvider', function (RestangularProvider) {
        // The URL of the API endpoint
        RestangularProvider.setBaseUrl('http://localhost/portfolio/server/web/');

        // JSON-LD @id support
        RestangularProvider.setRestangularFields({
            id: '@id'
        });
        RestangularProvider.setSelfLinkAbsoluteUrl(false);

        // Hydra collections support
        RestangularProvider.addResponseInterceptor(function (data, operation) {
            // Remove trailing slash to make Restangular working
            function populateHref(data) {
                if (data['@id']) {
                    data.href = data['@id'].substring(1);
                }
            }

            // Populate href property for the collection
            populateHref(data);

            if ('getList' === operation) {
                var collectionResponse = data['hydra:member'];
                collectionResponse.metadata = {};

                // Put metadata in a property of the collection
                angular.forEach(data, function (value, key) {
                    if ('hydra:member' !== key) {
                        collectionResponse.metadata[key] = value;
                    }
                });

                // Populate href property for all elements of the collection
                angular.forEach(collectionResponse, function (value) {
                    populateHref(value);
                });

                return collectionResponse;
            }

            return data;
        });
    }]);

// Route State Load Spinner(used on page or content load)
MakeApp.directive('ngSpinnerLoader', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by default hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default
                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });
                // hide the spinner bar on route change success(after the content loaded)
                $rootScope.$on('$routeChangeSuccess', function() {
                    setTimeout(function(){
                        element.addClass('hide'); // hide spinner bar
                    },500);
                    $("html, body").animate({
                        scrollTop: 0
                    }, 500);
                });
            }
        };
    }
]);
