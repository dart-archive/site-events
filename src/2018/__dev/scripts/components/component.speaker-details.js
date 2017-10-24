"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.speakerDetails = dartconf.speakerDetails || function ($) {

    function init() {
        speakerOverlay();
    }

    function speakerOverlay() {
        // Select your overlay trigger
        var speakerTriggers = document.querySelectorAll('.speaker--phase-two');

        for (var i = 0; i < speakerTriggers.length; i++) {
            speakerTriggers[i].addEventListener('click', function (e) {
                e.preventDefault();

                novicell.overlay.create({
                    'selector': this.getAttribute('data-element'),
                    'class': 'speaker-overlay'
                });
            }, true);
        }
    }

    return {
        init:init
    };
}(jQuery);