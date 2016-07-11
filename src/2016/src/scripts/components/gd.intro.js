/**
 * Component: Intro
 */

var gd = gd || {};

gd.intro = new function(){

    this.init = function() {

        $('#js-intro__media').logosDistort({
            effectWeight: 0.6,
            outerBuffer: 1.08,
            elementDepth: 200,
            perspectiveMulti: 1.0,
            enableSmoothing: true
        });

        $('#intro').addClass('js-fade-in');
    };
};
