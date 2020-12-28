$(document).ready(function() {
    // search 點擊後展開
    $("#js-search").hide();
    $("#icon-btn_search").click(function(){
        $(".header").toggleClass("js_header--seach");
        $("#js-search").slideToggle(500);
        if($("#js_headerSearch").hasClass("js_header--seach")){ 
            $(".header").addClass("js_header--seach");
        }
    });
    // Search Icon 點擊後禁止滾動
    $("#icon-btn_search").click(function(){ 
        $(".search_click_Mask").toggleClass("click_Search_Mask");
        if($(".search_click_Mask").hasClass("click_Search_Mask")){ 
            $(".search_click_Mask").addClass("click_Search_MaskStyle")
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable',function (e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({'overflow': 'hidden'});
        }
        else{
            function removeUnScroll() {
                $(document).unbind("scroll.unable");
               
            }
            $('html,body').css({'overflow': 'auto'});
        }
       
    });
        // Menu Toggle 展開後禁止滾動 
        $("#js-menu-toggle").click(function(){ 
            $(".js-navbar__nav").toggleClass("js__nav-navbar");
            if($(".js-navbar__nav").hasClass("js__nav-navbar")){ 
                function unScroll() {
                    var top = $(document).scrollTop();
                    $(document).on('scroll.unable',function (e) {
                        $(document).scrollTop(top);
                    })
                }
                $('html,body').css({'overflow': 'hidden'});
            }
            else{
                function removeUnScroll() {
                    $(document).unbind("scroll.unable");
                }
                $('html,body').css({'overflow': 'auto'});
            }
        });
        // popup 展開後禁止滾動
        $(".search_click_Mask").click(function(){
            $(".search_click_Mask").removeClass("click_Search_Mask")
            $(".header").removeClass("js_header--seach")
            $("#js-search").hide();
            function removeUnScroll() {
                $(document).unbind("scroll.unable");
               
            }
            $('html,body').css({'overflow': 'auto'});
        })
    
        
    
        // Menu popup close 恢復滾動
        $("#js-popup-close").click(function(){ 
            $(".js-navbar__nav").removeClass("js__nav-navbar");
            if($(".js-navbar__nav").hasClass("js__nav-navbar")){ 
                function unScroll() {
                    var top = $(document).scrollTop();
                    $(document).on('scroll.unable',function (e) {
                        $(document).scrollTop(top);
                    })
                }
                $('html,body').css({'overflow': 'hidden'});
                
    
    
            }
            else{
               
                function removeUnScroll() {
                    $(document).unbind("scroll.unable");
                }
                $('html,body').css({'overflow': 'auto'});
    
            
            }
            $(".search_click_Mask").removeClass("click_Search_Mask")
            $(".header").removeClass("js_header--seach")
            $("#js-search").hide();
            function removeUnScroll() {
                $(document).unbind("scroll.unable");
               
            }
            $('html,body').css({'overflow': 'auto'});
        
        });

        // Seach input 點擊禁止滾動
        // 當 input 是 focus 的狀態下
        $("#js-input").focus(function(){
            $('html,body').css({'height': '100%'});
            $('html,body').css({'overflow': 'hidden'});
           
            $(this).css("background","yellow")
        })



    // 文章專區更多分類展開
    $("#js_more_btn").click(function(){
        $("#js_more_category").css("height","inherit")
        $(this).css("display","none")
    })




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