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

                // Close attach to mousemovement
                closeHover();
            }, true);

            function closeHover() {
                if ($(window).width() > 992) {
                    var mouseX;
                    var mouseY;

                    $(document).mousemove( function(e) {
                        mouseX = e.clientX;
                        mouseY = e.clientY;
                    });

                    $('.novi-backdrop').hover(function () {
                        $(document).bind('mousemove', function(e){
                            $('.novi-backdrop').children('.novi-overlay-close').css({'top':mouseY,'left':mouseX});
                        });
                    });
                }

            }
        }
    }

    return {
        init:init
    };
}(jQuery);