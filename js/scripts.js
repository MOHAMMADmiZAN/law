$('.banner-main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    arrows: true,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,

            }
        }

    ]

});
///////////////////////////////wel-part/////////////////////////////////////////////////////
$('.wel-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,

            }
        }

    ]

});
//////////////////////////////////////////////////////////////////practice-part/////////////////////////////////////////////////////////////////////////////////////
$('.pra-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,

            }
        }

    ]

});
//////////////////////////////////////////////////////////testimonial////////////////////////////////////////////////////////////////////////////////////////////////////
$('.test-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,

            }
        }

    ]

});


/////////////////////////////////////////////lawyer-part/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.lawyer-tab').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-double-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-double-right next"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,

            }
        }

    ]

});



/// variables////
const win = $(window);
const html_body = $('html, body');
const stk = $('.st-menu');
const b2b = $('.btn-top');
const c_stk = 'stricky';

/// stricy header //


win.scroll(function () {
    if (win.scrollTop() > 300) {
        stk.addClass(c_stk)
    } else {
        stk.removeClass(c_stk)
    }
});

//back to top fadetoogle//
win.scroll(
    function () {
        if (win.scrollTop() > 100) {
            b2b.show()
        } else {
            b2b.hide()
        }
    }
)
//back to top effect//
b2b.click(
    function () {
        html_body.animate({scrollTop:0},3000)
    }
)
