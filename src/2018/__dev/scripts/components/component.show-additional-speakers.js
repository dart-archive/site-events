"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.speakersAdditional = dartconf.speakersAdditional || function ($) {

    function init() {
        speakersAdditional();
    }

    function speakersAdditional(){
        var trigger = $('.show-additional-speakers-button'),
            target = $('.speakers-additional'),
            btnOrgText = trigger.text(),
            btnUpdatedText = 'Show less speakers';

        trigger.on('click', function() {
            if(target.is(':visible')) {
                target.slideUp('fast');
                trigger.text(btnOrgText);
            } else {
                target.slideDown('fast');
                trigger.text(btnUpdatedText);
            }
        });
    }

    return {
        init:init
    };
}(jQuery);