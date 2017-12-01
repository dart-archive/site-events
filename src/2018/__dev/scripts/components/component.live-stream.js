"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.watchLiveStream = dartconf.watchLiveStream || function ($) {

    function init() {
        liveStream();
    }

    function liveStream() {
        // Select your overlay trigger
        var streamTriggers = document.querySelectorAll('.watchLiveTalks');

        for (var i = 0; i < streamTriggers.length; i++) {
            streamTriggers[i].addEventListener('click', function (e) {
                e.preventDefault();

                novicell.overlay.create({
                    'videoId': this.getAttribute('data-video-id'),
                    'type': this.getAttribute('data-type'),
                    'class': 'video-overlay-livestream'
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