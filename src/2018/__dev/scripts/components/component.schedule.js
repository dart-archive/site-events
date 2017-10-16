"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.schedule = dartconf.schedule || function ($) {

    function init() {
        scheduleTabs();
    }


    function scheduleTabs() {
        var tab = $('.schedule-tabs__item', '.schedule-tabs');

        tab.on('click', function() {
            var tab_id = $(this).attr('data-tab');

            // Remove current class
            tab.removeClass('schedule-tabs__item--current');
            $('.schedule-tabs-content').removeClass('schedule-tabs-content--current');

            // Add current class to clicked item and content
            $(this).addClass('schedule-tabs__item--current');
            $("#"+tab_id).addClass('schedule-tabs-content--current');
        });

    }

    return {
        init:init
    };
}(jQuery);