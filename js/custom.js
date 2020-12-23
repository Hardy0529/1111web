$(document).ready(function() {
    $("#js-search").hide();
    $("#icon-btn_search").click(function(){
        $(".header").toggleClass("js_header--seach");
        $("#js-search").slideToggle(500);
        if($("#js_headerSearch").hasClass("js_header--seach")){ 
            $(".header").addClass("js_header--seach");
            $(".header_form_seach ").css("height", "90px")
            $(".header_form_seach ").css("overflow", "hidden")
        }
        else{
            $(".header").removeClass("js_header--seach");
            $(".header_form_seach ").css("height", "")
            $(".header_form_seach ").css("overflow", "hidden")
        }
       
    });





	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 40){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	//top
    $("#top_page").click(function () {
        jQuery("html,body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#top_page").fadeIn("fast");
        } else {
            $("#top_page").stop().fadeOut("fast");
        }
        return false;
    });

  




});