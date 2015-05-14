$(document).ready(function () {

    "use strict";

    // Smooth Scroll to internal links
    
	$('#preloader').addClass('wow fadeOutUp display-0');
	
    $('.scroll').smoothScroll({
        offset: -80,
        speed: 800
    });
	
	// WOW animations
	
    new WOW().init();

    // Mobile Menu Toggle

    $('#mobile-toggle').click(function () {

        if ($('#navigation').hasClass('mobile-nav-open')) {
            $('#navigation').removeClass('mobile-nav-open');
        } else {
            $('#navigation').addClass('mobile-nav-open');
        }

    });
	$('#menu li a').click(function () {

        if ($('#navigation').hasClass('mobile-nav-open')) {
            $('#navigation').removeClass('mobile-nav-open');
        } else {
            $('#navigation').addClass('mobile-nav-open');
        }

    });

    // Typed.js
	$(function(){

		$(".typed").typed({
        strings: ["Creative", "Clean & Minimal", "Responsive"],
			typeSpeed: 100,
			startDelay: 200,
			backDelay: 5000,
			loop: true,
			showCursor: false,
		});

	});

    // Slider backgrounds
    
	$('.slider').flexslider({ directionalNav: false });
    $('#home-slider').flexslider();
    $('#testimonials-slider').flexslider({
        controlNav: false
    });

    $('#home-slider .slides li').css('height', $(window).height());

    $('#home-slider .slides li').each(function () {

        var imgSrc = $('.slider-bg').attr('src');

        $(this).children('.slider-bg').remove();

        $(this).css('background', 'url("' + imgSrc + '")');



    });

    // Align Slider Content

    var centerContent = ($(window).height() / 2) - ($('.home-shrink').height() / 2);

    $('#home-slider .slides li').css('padding-top', centerContent);

    // Turn parallax scrolling off for iOS devices
    var iOS = false,
        p = navigator.platform;

    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
        iOS = true;
    }

    // Parallax Content



    $(window).scroll(function () {

	    if ($(window).scrollTop() > 200) {
            $('#navigation').addClass('show-nav');
        } else {
            $('#navigation').removeClass('show-nav');
        }
	
        var scaleBg = -$(window).scrollTop() / 4;

        if (iOS === false) {
            $('#home-slider .slides li').css('background-position-y', scaleBg);
            $('#testimonials').css('background-position-y', scaleBg + $('#testimonials').offset().top - 120);
            $('#client-divider').css('background-position-y', scaleBg + $('#client-divider').offset().top - 120);
        }

    });

    // Project Images

    $('.project-slideshow .slides li').each(function () {

        var imgSrc = $('.project-img').attr('src');

        $(this).children('.project-img').remove();

        $(this).css('background', 'url("' + imgSrc + '")');



    });


    // Open Project

    $('.work-item').click(function () {

        var projectID = '#' + $(this).data('project-id');
        var projectSlideshow = projectID + '-slideshow';

        $(projectID).addClass('open-project');
        $(projectSlideshow).flexslider();

        setTimeout(function () {
            $(projectID).children('.project-wrapper').addClass('fade-project');
        }, 800);

        $('html,body').animate({
            scrollTop: $(projectID).offset().top - 80
        }, 800);

    });

    $('.close-project').click(function () {

        $(this).closest('.project-wrapper').removeClass('fade-project');

        var that = this;

        setTimeout(function () {
            $(that).closest('.project').removeClass('open-project');
        }, 200);



        $('html,body').animate({
            scrollTop: $('#work').offset().top - 80
        }, 800);



    });


    //On Click Open Contact form
    $('#trigger-overlay').on( 'click', function() {
      $('#contact-panel').addClass('open');
    });
    $('#contact-panel .overlay-close').on( 'click', function() {
      $('#contact-panel').removeClass('open');
    });
	
	//On Click Open Map
    $('#trigger-overlay2').on( 'click', function() {
      $('#map-panel').addClass('open');
    });
    $('#map-panel .overlay-close').on( 'click', function() {
      $('#map-panel').removeClass('open');
    });
	
	$(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
	
	  //Google Maps
  function initMap() {
    var myLatlng = new google.maps.LatLng(51.498609000000000000,-0.133906000000024500); // <- Your latitude and longitude
    var styles = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
    
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      disableDefaultUI: true,
      zoomControl: false,
      scrollwheel: false,
      styles: styles
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: "We are here!"
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/pin.png',
        title: 'We are here!'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initMap);
    $('#map').css('position', 'absolute');
  } 

});