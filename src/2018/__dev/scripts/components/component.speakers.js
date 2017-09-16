"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.speakers = dartconf.speakers || function ($) {

    function init() {
        speakerSlider();
    }


    function speakerSlider(){

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });
    }

    return {
        init:init
    };
}(jQuery);