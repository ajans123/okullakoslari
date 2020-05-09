$(document).ready(function () {
	
	




$('#setCurrency .current').click(function(){
												  
											
				  $('#first-currencies').toggle();				 
												  
												  
			  });
							
							
				$('#languages-block-top .current').click(function(){
												  
											
				  $('#first-languages').toggle();				 
												  
												  
			  });
			  

							
	 ////////////////////////////////////////////  
    // FACEBOOK
    ///////////////////////////////////////////  	
	
	
	$(".popover-shorty:nth-child(2)").addClass("color1");
	$(".popover-shorty:nth-child(3)").addClass("color2");
	$(".popover-shorty:nth-child(4)").addClass("color3");

	
	
							
	  ////////////////////////////////////////////  
    // FACEBOOK
    ///////////////////////////////////////////  
	
	$('.facebook-fixed .fbbutton').click(function(){
												  
				  $('.facebook-fixed').toggleClass("fbopen");				 
												  
												  
			  });

		
	$(".bxgallery ul").bxSlider({
    slideWidth: 360,
    minSlides: 4,
    maxSlides: 4,
    slideMargin: 0
  });
	
	
	
		
	$(".wrap-brand ul").bxSlider({
    slideWidth: 260,
    minSlides: 5,
    maxSlides: 5,
    slideMargin: 0,
		nextText:'',
		prevText:''
  });
	
	
	   $('.brand-slider   .bx-next').html(' <i class="fa icon-angle-right"></i>')
    $('.brand-slider  .bx-prev').html(' <i class="fa icon-angle-left"></i>')
	
	   
   $('.news-home-list ul ').bxSlider({
    slideWidth: 330,
    minSlides: 2,
    maxSlides: 2,
	auto:true,
  mode: 'vertical',
  moveSlides:1,
		nextText:'',
		prevText:''
  });
	

	   $('.news-home-list   .bx-next').html(' <i class="fa icon-angle-right"></i>')
    $('.news-home-list .bx-prev').html(' <i class="fa icon-angle-left"></i>')
	


    ////////////////////////////////////////////  
    // Grid
    ///////////////////////////////////////////  
	


		
    ////////////////////////////////////////////  
    // Filter layered
    ///////////////////////////////////////////  
	
	
	
$(".layered_subtitle_heading").live("click", function(){
													  
    		$(this).parent().toggleClass('filter-open');
    });


	
	
	  ////////////////////////////////////////////  
    // MOBILE MENU
    ///////////////////////////////////////////  
	
	

	
	
 $('.switcher-mobile').click(function () {

        $('html').toggleClass('navigation-show')

    })
	

	
	
	
	  ////////////////////////////////////////////  
    // LOADER
    ///////////////////////////////////////////  




    jQuery('.loader-infinite-wrapper').addClass('infinite-hide');


   
	  ////////////////////////////////////////////  
    // MEGA MENU
    ///////////////////////////////////////////  


    // add class submenu to submenu's that are not megamenu
    $('.main-menu ul').each(function () {
        if ($(this).closest('.mega-menu').length == 0) {
            $(this).addClass('sub-menu');
        }
    });
    // add class has-child to each menu item that has child
    $('.main-menu li').each(function () {
        if ($(this).find('ul').length)
            $(this).addClass('has-child');
    });

    $('.main-menu li').hoverIntent({
        // on menu mouse hover function handler
        over: function () {
            var $this = $(this),
                $mm = $this.children('.mega-menu'),
                $parent = $this.closest('.inner');

            // we need to setup megamenu position and width
            $mm.css({
                'left': ($parent.offset().left - $this.offset().left - 1) + 'px',
                'width': $parent.outerWidth() - 0,
                'visibility': 'visible'
            });

            // now we are good and we can show the megamenu
            $this.addClass('active').children('ul, .mega-menu').animate({
                'height': 'toggle'
            }, 300, function () {
                $(this).css('overflow', 'visible');
            });
        },
        // mouse out handler
        out: function () {
            $(this).removeClass('active').children('ul, .mega-menu').animate({
                'height': 'toggle'
            }, 200, function () {
                $(this).css('overflow', 'visible');
            });
        },
        // A simple delay, in milliseconds, before the "out" function is called
        timeout: 200
    });


	  ////////////////////////////////////////////  
    // FOOTER
    /////////////////////////////////////////// 
	
	
	$('.footer-container #footer h4').click(function(){
	
	
	$(this).parent().toggleClass('open-foot');
	
	
	
	});
	




});