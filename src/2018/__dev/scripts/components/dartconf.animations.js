"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.animations = dartconf.animations || function ($) {

    function init() {
        animateSections();
    }


    function animateSections(){
        var sections = $(".site-main").children();
        var sectionsArray = [];

        for (var i=0; i < sections.length; i++) {
            var section = sections[i];
            var sectionID = $(section);
            sectionsArray.push(sectionID);
        }

        console.log(sectionsArray);

        $(window).on('scroll', function(){

            // for (var i=0; i < sectionsArray.length; i++) {
            //     if( sectionID.visible(true) ){
            //         sectionID.addClass('onscreen');
            //     }
            // }

        });
    }


    return {
        init:init
    };
}(jQuery);