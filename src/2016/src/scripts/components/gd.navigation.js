/**
 * Component: Navigation
 */

var gd = gd || {};

gd.navigation = new function(){
    this.init = function() {
        smoothScroll($('a[href*="#"]'));
    };

    function smoothScroll(selector, speed) {
        if (speed !== undefined) {
            speed = 1000;
        }

        selector.on('click', function(event) {
            event.preventDefault();

            var target = $(this).attr("href");

            $('html,body').animate({
                scrollTop: $(target).offset().top
            }, speed, 'easeOutQuint');
        });
    }
};
