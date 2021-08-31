$(document).ready(function () {
    let theme = localStorage.getItem('theme');
    theme === 'dark' ? enableDarkMode() : disableDarkMode();

    function enableDarkMode() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
        $('.darkTheme').addClass('active');
        $('.theme').addClass('darkmode');
    }

    function disableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
        $('.lightTheme').addClass('active');
        $('.theme').removeClass('darkmode');
    }

    $('.darkTheme').on('click', () => {
        enableDarkMode();
        console.log('Dark Btn  ', theme);
        // $('.themeBtn').removeClass('active');
        // $(this).addClass('active');
    });

    $('.lightTheme').on('click', () => {
        disableDarkMode();
        console.log('light Btn', theme);
        // $('.themeBtn').removeClass('active');
        // $(this).addClass('active');
    });

    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));
    /*start the loading page */
    jQuery("#preloader").fadeOut(3000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".scroll-top-button").addClass('active-scroll');
        } else {
            $(".scroll-top-button").removeClass('active-scroll');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".bottom-nav").addClass('active-bottom-nav');
        } else {
            $(".bottom-nav").removeClass('active-bottom-nav');
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.toggle-btn').click(function(){
        $('.sidebar').addClass('active-sidemenu');
    });
    $('.close-nav').click(function(){
        $('.sidebar').removeClass('active-sidemenu');
    });
    $('.sideMenu').click(function(){
        $('.category-side-menu').addClass('active-sidemenu');
    });
    $('.usersideMenu').click(function(){
        $('.user-side-menu').addClass('active-sidemenu');
    });
    $('.currencySideMenu').click(function(){
        $('.currency-side-menu').addClass('active-sidemenu');
    });
    $('.LangsideMenu').click(function(){
        $('.lang-side-menu').addClass('active-sidemenu');
    });
    $('.menu-back').click(function(){
        $('.sub-menu').removeClass('active-sidemenu');
    });
    
    
    $('.first-card-header').click(function(){
        $('.first-card-header').toggleClass('active-arrow');
    });
    $('.second-card-header').click(function(){
        $('.second-card-header').toggleClass('active-arrow');
    });
    $('.three-card-header').click(function(){
        $('.three-card-header').toggleClass('active-arrow');
    });
    $('.four-card-header').click(function(){
        $('.four-card-header').toggleClass('active-arrow');
    });
    
   //start active navbar
   $('.cart-circle').click(function(){
        $('.cart-shape').addClass('active-cart');
    });
    $('.cart-overlay').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    $('.close-cart').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    //change navbar color on scroll
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        // autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    //category slider 
    $('.owl-category').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:2,
                nav: false,
                dots: true,
            },
            600:{
                items:2,
                nav: false,
                dots: true,
            },
            1000:{
                items:7,
                nav: true,
                dots: false,
            }
        }
    });
    //products slider 
    $('.owl-products').owlCarousel({
        rtl: true,
        loop:false,
        margin: 15,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    //delete button 
    $('button').on('click',function(){
        $(this)
          .addClass("is-active")
          .delay(800)
          .queue(function(){
            $(this).removeClass("is-active").dequeue();
        });
    });
    //favorite shape
    const favorite = document.querySelectorAll('.fa-heart');
    favorite.forEach(button => {
        button.addEventListener('click' , activeClass);
    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('far')
        button.classList.toggle('fas');
        button.classList.toggle('active');
    } 
    //bottom nav
    $('.bottom-nav').click(function(){
        $('.toggler').toggleClass('active');
        $('ul').toggleClass('active');
    });
    //data fancybox 
    $('[data-fancybox]').fancybox({
        protect: true ,
        loop: false,
        keyboard: false,
        arrows: false,
        wheel: false,
        closeExisting: false,
        preventCaptionOverlap: true,
        modal: false,
        infobar: false,
        hideScrollbar: true,
        touch: false ,
        buttons: [
            "close"
        ],
        image: {
            preload: true
        },

    });
    //add to cart 
    $('.order').on('click', function () {
        var cart = $('.cart-image-circle');
        var imgtodrag = $(this).closest('.custom-product-box').find("img").first();
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    
                top: imgtodrag.offset().top ,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'border-radius': '50%',
                    'z-index': '9999'
            })
            .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeOutBounce');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 1
                }, 200);
               
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    }); 
    var swiper = new Swiper('.swiper-container', {
        
        cssMode: true,
        direction: 'vertical',
        spaceBetween: 50,
        slidesPerView: 3,
        freeMode: false,
        wheel: false,
        touch: false ,
        clickable: false,
        loop: true,
        centeredSlides: true,
        loopFillGroupWithBlank: true, 
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, 
        pagination: {
          el: '.swiper-pagination'
        } ,
        mousewheel: true,
      keyboard: true, 



    });

});