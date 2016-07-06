'use strict';

/**
 * @ngdoc overview
 * @name userApp
 * @description
 * # userRoute
 *
 * Route(s) module of user part.
 */

angular
    .module('userApp', [
    ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('main.user-profile', {
        url: '/user-profile',
        controller: 'ProfileCtrl',
        templateUrl: 'modules/user/views/profile.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/user/controllers/profile.js'
                        ]
                    })
                }
            }
    });
    }
]);
