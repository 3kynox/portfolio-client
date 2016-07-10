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
        .state('main.user-contact', {
        url: '/user-contact',
        controller: 'ContactCtrl',
        templateUrl: 'modules/user/views/contact.html',
            resolve: {
                loadMyFiles:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:'adminApp',
                        files:[
                            'modules/user/controllers/contact.js'
                        ]
                    })
                }
            }
    });
    }
]);
