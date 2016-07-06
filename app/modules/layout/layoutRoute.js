'use strict';

/**
 * @ngdoc overview
 * @name layoutApp
 * @description
 * # layoutRoute
 *
 * Route(s) module of layout part.
 */

angular
    .module('layoutApp', [
    ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main.layout', {
        url: '/layout',
        controller: 'ApiCtrl',
        templateUrl: 'modules/layout/views/api.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/layout/assets/plugins/pages/layouts_api.js',
                            'modules/layout/controllers/api.js'
                        ]
                    })
                }
            }
    });
    }
]);
