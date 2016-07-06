'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
    .controller('TimelineCtrl', function ($scope) {
        $scope.$on('$viewContentLoaded', function () {

            var $timeline_block = $('.timeline-block');

            //hide timeline blocks which are outside the viewport
            $timeline_block.each(function () {
                if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
                    $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
                }
            });

            //on scrolling, show/animate timeline blocks when enter the viewport
            $(window).on('scroll', function () {
                $timeline_block.each(function () {
                    if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.timeline-icon').hasClass('is-hidden')) {
                        $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
                    }
                    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
                        $(this).find('.timeline-icon, .timeline-content').removeClass('bounce-in').addClass('is-hidden');
                    }
                });
            });

            window.scrollTo(0, 2);
        });
    });
