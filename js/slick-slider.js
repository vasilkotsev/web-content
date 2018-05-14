/* slick-slider-carousel settings - for 'kontakti' page */


$(document).ready(function(){

		$('.hall-carousel').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  autoplay: true,
  		autoplaySpeed: 3000,
		  responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
						slidesToScroll: 1,
		      }
				}
		  ]
		});
    });