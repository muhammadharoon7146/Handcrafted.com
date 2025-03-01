$(window).scroll(function() {
    if (screen.width > 991){
        if ($(this).scrollTop() > 100){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    }else{
        $('header').removeClass("sticky");
    }
  jQuery('.scrollPage').click(function() {
      var elementClicked = jQuery(this).attr("href");
      var destination = jQuery(elementClicked).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-50}, 1500 );
      return false;
  });
  
  if (screen.width > 300){
    if (jQuery(this).scrollTop() > 0){
      jQuery('.topbar').addClass("sticky");
    }else{
      jQuery('.topbar').removeClass("sticky");
    }
  }else{
    jQuery('.topbar').removeClass("sticky");
  }
  });
  
  jQuery(".search_toggle").click(function(){
  jQuery(".full_screen_wrapper").show();
  });
  jQuery(".cross_button").click(function(){
  jQuery(".full_screen_wrapper").hide();
  });
  
  jQuery(".menu_open").click(function () {
  jQuery(".mobile_menu_wrap").addClass("menu_show");
  jQuery(".menu_overlay").show();
  jQuery("html").addClass("overflow_hidden");
  });
  jQuery(".menu_close, .menu_overlay").click(function () {
  jQuery(".mobile_menu_wrap").removeClass("menu_show");
  jQuery(".menu_overlay").hide();
  jQuery(".mobile_menu_wrap ul li ul").removeClass("show_submenu");
  jQuery("html").removeClass("overflow_hidden");
  });
  jQuery('.mobile_menu_wrap ul li:has(ul)').addClass('hassub');
  jQuery('.mobile_menu_wrap ul li:has(ul)').append('<a href="javascript:;" class="sub_menu_open"><i class="fa-solid fa-angle-right"></i></a>');
  jQuery('.mobile_menu_wrap ul li ul').append('<li class="back_to_mainmenu"><a href="javascript:;"><i class="fa-solid fa-angle-left"></i> Back</a></li>');
  jQuery(document).ready(function(){
  jQuery("li.hassub a[href$='#'], li.hassub a[href$='javascript:;'], li.hassub a[href$='javascript::;'], li.hassub a[href$='javascript:void(0);']").addClass("no_link");
  jQuery(".mobile_menu_wrap ul li a.no_link").click(function () {
  jQuery(this).next().addClass("show_submenu");
  });
  });
  jQuery(".back_to_mainmenu").click(function(){
  jQuery(this).parent().removeClass("show_submenu");
  });
  jQuery(".mobile_menu_wrap ul li .sub_menu_open").click(function(){
  jQuery(this).prev("ul").addClass("show_submenu");
  });
  if (screen.width > 767){
    new WOW().init();    
  }
  $('#slider-featured').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    autoplay:true, 
    autoplayTimeout: 5000,
    autoplayHoverPause: true, 
    navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2, margin:20
        },
        900:{
            items:3
        },
        1000:{
            items:3
        },
        1199:{
            item:4
        },
        1399:{
            items:4
        },
        1400:{
            items:4
        }
    
    }
})
$('#slider-products').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    autoplay:true, 
    autoplayTimeout: 5000,
    autoplayHoverPause: true, 
    navText:['',''],
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            item:2
        },
        900:{
            items:2
        },
        1000:{
            items:3
        },
        1399:{
            item:4
        }
    }
})
$('#testimonials-slider').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    dots:true,
    autoplay:true, 
    autoplayTimeout: 5000,
    autoplayHoverPause: true,    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            item:1
        },
        900:{
            items:1.75
        },
        1000:{
            items:3
        },
        1399:{
            item:4
        }
    }
})  
company_carouselInit();
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;
    
    sync1.owlCarousel({ 
      items : 1,
      slideSpeed : 2000,
      nav: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsiveRefreshRate : 200,
      navText: ['<i class="fa-solid fa-circle-chevron-left"></i>','<i class="fa-solid fa-circle-chevron-right"></i>'],
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items: slidesPerPage,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: 1,
      responsiveRefreshRate: 100,
      autoHeight: true,
      mouseDrag: false, // Disable horizontal dragging
      touchDrag: false,
      navVertical: true // Enable vertical navigation
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
    
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
  
  });