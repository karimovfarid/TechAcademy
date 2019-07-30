$(document).ready(function () {
    $("#slider1").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        mouseDrag: true,
        pagination: false,
        dots: true,
        autoplay: true,
        autoPlayTimeOut: 2000,
        smartSpeed: 1500
    });
    $(window).scroll(function () {

        var divOffsetTop = $('header').offset().top;
        var divOffsetTopMenu = $('header').offset().top;
        if ($(window).scrollTop() > divOffsetTop) {
            $(".arrowScroll").css("display", "block");
        }
        if ($(window).scrollTop() < divOffsetTopMenu) {
            $(".arrowScroll").css("display", "none");
        }
    });

    $('.arrowScroll').click(function () {
        var divOffsetTop = $('body').offset().top;
        $('html').animate({
            scrollTop: divOffsetTop + 'px'
        }, 1000);
    });

    var click_index;
    var click_image = $(".teacher-photo .photo a.item");
    var click_image_galary = $(".photo-galary .item");
    var modal_img_src = $(".click-modal .modal-teacher .photo img");

    click_image.click(function (evt) {
        evt.preventDefault();
        var img_src = $(this).attr("href");
        click_index = $(this).index();
        modal_img_src.attr("src", img_src);
        $(".click-modal").fadeIn();
    });

    click_image_galary.click(function (event) {
        event.preventDefault();
        var img_src = $(this).attr("href");
        click_index = $(this).index();
        modal_img_src.attr("src", img_src);
        $(".click-modal").fadeIn();
    });

    $(".click-modal .right").click(function (e) {
        e.preventDefault();
        next();
    });

    $(".click-modal .left").click(function (e) {
        e.preventDefault();
        prev();
    });

    $(".click-modal .close").click(function (e) {
        e.preventDefault();
        close();
    })

    function close() {
        $(".click-modal").fadeOut();
    }

    function next(e) {
        if (click_image_galary.length - 1 > click_index) {
            var href = click_image.eq(click_index + 1).attr("href");
            modal_img_src.attr("src", href);
            click_index++;
        } else {
            var href = click_image.eq(0).attr("href");
            modal_img_src.attr("src", href);
            click_index = 0;
        }
        if (click_image_galary.length - 1 > click_index) {
            var href = click_image_galary.eq(click_index + 1).attr("href");
            modal_img_src.attr("src", href);
            click_index++;
        } else {
            var href = click_image_galary.eq(0).attr("href");
            modal_img_src.attr("src", href);
            click_index = 0;
        }

    }

    function prev() {
        if (click_index > 0) {
            var href = click_image.eq(click_index - 1).attr("href");
            modal_img_src.attr("src", href);
            click_index--;
        } else {
            var length = click_image.length;
            var href = click_image.eq(length - 1).attr("href");
            modal_img_src.attr("src", href);
            click_index = length - 1;
        }
        if (click_image_galary > 0) {
            var href = click_image_galary.eq(click_index - 1).attr("href");
            modal_img_src.attr("src", href);
            click_index--;
        } else {
            var length = click_image_galary.length;
            var href = click_image_galary.eq(length - 1).attr("href");
            modal_img_src.attr("src", href);
            click_index = length - 1;
        }
    }

    $("body").keydown(function (event) {
        if ($(".click-modal").css("display") == "block") {
            switch (event.which) {
                case 27:
                    close();
                    break;
                case 39:
                    next();
                    break;
                case 37:
                    prev();
                    break;
                default:
                    break;
            }
        }
    });

    $("body").click(function (event) {
        if ($(".click-modal").css("display") == "block") {
            if ($(event.target).hasClass("popup")) {
                close();
            }
        }
    });

    function initMap() {
        var location = {lat: -25.344, lng: 131.036};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: location});
        var marker = new google.maps.Marker({position: location, map: map});
    }

    var url = window.location.href;
    var pathName = $(location).attr('href');
    if (url === "http://localhost:63342/TechAcademy/blog.html") {
        $("header").removeClass("header_main");
        $("header change_class").addClass("header_dark");
    }

    var barcheck = 0;
    $(".bar-menu").click(function () {
        if (barcheck === 0) {
            $(".bar1").css({
                "top": "18px",
                "transform": "rotate(135deg) translate(35%,-2.5px)"
            });
            $(".bar2").css({
                "opacity": "0",
                "transform": "translate(100px)"
            });
            $(".bar3").css({
                "transform": "rotate(-135deg) translate(31%,1px)"
            });
            $(".res-menu").slideDown(500);
            // $(".stu-btn-id").css("display","inline-block");
            barcheck = 1;
        } else {
            barcheck = 1;
            $(".bar1").removeAttr("style");
            $(".bar2").removeAttr("style");
            $(".bar3").removeAttr("style");
            $(".res-menu").slideUp(500);
            barcheck = 0;
        }
        // $(".stu-btn-id").css("display","none");

    });

    $(".res-menu-li a").click(function () {
        // event.preventDefault();

        $(".res-menu-li a").removeClass("active");
        $(".res-menu-li .res-sub-menu").each(function () {
            $(this).slideUp(500);
        });
        if ($(this).next().css('display') == "block") {
            $(this).next().slideUp(500);
            $(".res-menu-li a").removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).next().slideDown(500);
        }
    });

    /*Responsive menu toggle content.*/

    $(".menu").click(element => {
        let $this = $(element.currentTarget);
        let checkVisibilityMenu = $(".menu-content").is(':visible');
        let menuContent = $(".menu-content");
        menuContent.slideToggle(300);
        !checkVisibilityMenu ? $this.addClass('active-menu') : $this.removeClass('active-menu')
    });

    /*Responsive sub menu toggle content.*/

    $(".open-sub-menu").click(element => {
        let $this = $(element.currentTarget);
        $this.closest('.p-3').toggleClass('active-menu-sub');
        let hasActiveClass = $this.closest('.p-3').hasClass('active-menu-sub');
        hasActiveClass ? $this.addClass('active-sub') : $this.removeClass('active-sub')
    });

    /*on click input*/
    $(".form-input").click((element => {
        let $this = $(element.currentTarget);
        let widthInput = $this.width();
        $('.label-input').removeClass('transition-animate')

        $this.find('.label-input').addClass('transition-animate');
    }))

});

$(document).mouseup(element => {
    let container = $(".form-input");
    if (!container.is(element.target) && container.has(element.target).length === 0) {
        $('.label-input').removeClass('transition-animate')
    }
});
