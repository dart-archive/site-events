"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.showDartConfGallery = dartconf.showDartConfGallery || function ($) {

    function init() {
        dartConfGallery();
    }

    function dartConfGallery() {
        // Select your overlay trigger
        var galleryTrigger = $('.showDartConfGallery');

        galleryTrigger.on('click', function() {
            var overlayBackdrop = '<div class="gallery-backdrop"><div class="gallery-overlay"><button class="gallery-close"></button></div></div>';

            $('body').prepend(overlayBackdrop);

            // Insert gallery
            $.ajax({
                url: "ajax-gallery.html",
                cache: false,
                success: function(html){
                    $('.gallery-overlay').append(html);
                    closeHover();
                    $('html').addClass('no-scroll');
                }
            });
        });

        function closeHover() {
            if ($(window).width() > 992) {
                var mouseX;
                var mouseY;

                $(document).mousemove( function(e) {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                });

                $('.gallery-overlay').add('.gallery-overlay__container').hover(function () {
                    $(document).bind('mousemove', function(e){
                        $('.gallery-overlay').children('.gallery-close').css({'top':mouseY,'left':mouseX});
                    });
                });
            }
        }
    }

    return {
        init:init
    };
}(jQuery);