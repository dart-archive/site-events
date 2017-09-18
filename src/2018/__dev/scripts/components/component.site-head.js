"use strict";

var novicell = novicell || {};
var dartconf = dartconf || {};


dartconf.siteHead = dartconf.siteHead || function ($) {

    function init() {
        headScrolling();
        smoothScroll();
        waypoints();
        toggleMobileNav();
    }


    function headScrolling(){

        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#site-head-js').addClass('scrolled');
            }
            else {
                $('#site-head-js').removeClass('scrolled');
            }
        });

    }

    function toggleMobileNav(){
        var siteNav = $('#navigation-main-js'),
            siteNavTrigger = $('#navigation-main__trigger-js');

        siteNavTrigger.on('click', function(){
            siteNav.addClass('mobileactive');
        });

    }

    function smoothScroll(){
        var siteNav = $('#navigation-main-js');

        $('#navigation-main-js a').click(function(e) {
            e.preventDefault();
            console.log('clicked');
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 800);
            $('#navigation-main-js a').removeClass('active');
            $(this).addClass('active');
            siteNav.removeClass('mobileactive');
        });
    }

    function waypoints(){
        /**
        http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation
        * This part handles the highlighting functionality.
        * We use the scroll functionality again, some array creation and
        * manipulation, class adding and class removing, and conditional testing
        */

            var aChildren = $("#navigation-main-js li").children(); // find the a children of the list items
            var aArray = []; // create the empty aArray

            for (var i=0; i < aChildren.length; i++) {
                var aChild = aChildren[i];
                var ahref = $(aChild).attr('href');
                aArray.push(ahref);
            } // this for loop fills the aArray with attribute href values


            $(window).on('scroll', function(e){
                var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
                var windowHeight = $(window).height(); // get the height of the window
                var docHeight = $(document).height();
                var siteNavTrigger = $('#navigation-main__trigger-js');

                for (var i=0; i < aArray.length; i++) {

                    var theID = aArray[i];
                    var divPos = $(theID).offset().top -$('#site-head-js').outerHeight() -2;; // get the offset of the div from the top of page
                    var divHeight = $(theID).outerHeight(); // get the height of the div in question
                    var theIDName = $(theID).attr('name');

                    if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                        $("#navigation-main-js a[href='" + theID + "']").addClass("active");
                        $(theID).addClass("active");
                        siteNavTrigger.text(theIDName);

                    } else {
                        $("#navigation-main-js a[href='" + theID + "']").removeClass("active");
                        $(theID).removeClass("active");
                    }
                }

                if(windowPos + windowHeight == docHeight) {
                    if (!$("#navigation-main-js li:last-child a").hasClass("active")) {
                        var navActiveCurrent = $(".js-active").attr("href");
                        $("a[href='" + navActiveCurrent + "']").removeClass("active");
                        $("#navigation-main-js li:last-child a").addClass("active");
                    }
                }
            });
    }

    return {
        init:init
        //smoothScroll : smoothScroll
        //waypoints : waypoints
    };
}(jQuery);