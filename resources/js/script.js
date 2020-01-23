$(document).ready(function () {

    /* sticky navigation */
    
    $('.js--section-features').waypoint(function (direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
   });
    
    /* sroll on buttons */
    
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    $('.js--scroll-to-nails').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-nails').offset().top}, 1000);
    });
    
    /* navigation scroll */
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    },1000);
                    return false;
                }
            }
        });
         
    });

    /*animations on scroll*/
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
       offset: '50%' 
    });

    
    /* mobile nav */
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-md-menu')) {
            icon.addClass ('ion-md-close');
            icon.removeClass ('ion-md-menu');
        } else {
            icon.addClass ('ion-md-menu');
            icon.removeClass ('ion-md-close');
        }
    });
    
    
});