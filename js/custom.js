$(function () {
    //service slider 1
    $('.service-first-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        fade: false,
        dots: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }

        },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                }

        },


        ]
    });    
    
    //service slider 2
    $('.service-main-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        fade: false,
        dots: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }

        },
            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                }

        },


        ]
    });    
    
    //brand-slid-main slider 
    $('.brand-slid-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        speed: 2000,
        fade: false,
        dots: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }

        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }

        },


        ]
    });    
    
    
    //magazine slider 
    $('.magazine-slid-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.left-two',
        nextArrow: '.right-two',
        speed: 2000,
        fade: false,
        dots: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }

        },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }

        },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }

        },


        ]
    });
    
        
    //magazine slider 
    $('.magazine-slid-main-two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        speed: 2000,
        fade: false,
        dots: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }

        },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }

        },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                }

        },


        ]
    });
    
    
    
    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        speed: 800,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
    });




});


//Mobile Menu JS

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
