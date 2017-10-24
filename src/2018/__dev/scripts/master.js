'use strict';


var novicell = novicell || {};
var dartconf = dartconf || {};

// Document ready
(function ($) {


    FastClick.attach(document.body);
    svg4everybody();
    dartconf.speakers.init();
    dartconf.siteHead.init();
    dartconf.animations.init();
    dartconf.speakersAdditional.init();
    dartconf.schedule.init();
    dartconf.speakerDetails.init();


})(jQuery); // Document ready end