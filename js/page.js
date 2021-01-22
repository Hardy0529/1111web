$(document).ready(function() {
 
    
    // 取消滾動
    function unScroll() {
        var top = $(document).scrollTop();
        $(document).on('scroll.unable', function(e) {
            $(document).scrollTop(top);
        })
        $('html,body').css({
            'overflow': 'hidden'
        });
    }
    // 恢復滾動
    function removeUnScroll() {
        $(document).unbind("scroll.unable");
        $('html,body').css({
            'overflow': 'auto'
        });
    }

    

    // header 
    // logo change when scroll
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrollDistance > 40) {
            $header.addClass("header--scrolling");
        } else {
            $header.removeClass("header--scrolling")
        }
    })
    // header seach
    $("#js-search").hide();
    $("#icon-btn_search").click(function() {
        $(".header").toggleClass("js_header--seach");
        $("#js-search").slideToggle(500);
        if ($("#js_headerSearch").hasClass("js_header--seach")) {
            $(".header").addClass("js_header--seach");
        }
    });
    $("#icon-btn_search").click(function() {
        $("#search_click_Mask").toggleClass("click_Search_Mask");
        if ($("#search_click_Mask").hasClass("click_Search_Mask")) {
            $("#search_click_Mask").addClass("click_Search_MaskStyle")
            
            // 滾動停止
            unScroll()
            
            // 標籤關閉
            tag()

            jQuery("#select-all").animate({
                scrollTop: 0,
            },
            0
            );
          
        } else {

            // 恢復滾動
            removeUnScroll()

            
            
        }
    });
    $("#search_click_Mask").click(function() {
        $("#search_click_Mask").removeClass("click_Search_Mask")
        $(".header").removeClass("js_header--seach")
        $("#js-search").hide();

        // 恢復滾動
        removeUnScroll()
     
        
    })
    // header toggle
    $("#js-menu-toggle").click(function() {
         
        // 標籤關閉
        tag()

        jQuery("#select-all").animate({
            scrollTop: 0,
        },
        0
        );

        $(".js-navbar__nav").toggleClass("js__nav-navbar");
        if ($(".js-navbar__nav").hasClass("js__nav-navbar")) {
           
            // 滾動停止
            unScroll()

           
            
        } 
        else {
            // 恢復滾動
            removeUnScroll()
            
           
        }
    });
    $("#js-popup-close").click(function() {
        $(".js-navbar__nav").removeClass("js__nav-navbar");
        if ($(".js-navbar__nav").hasClass("js__nav-navbar")) {
            
            // 滾動停止
            unScroll()
           
            
        } else {

             // 恢復滾動
            removeUnScroll()
            
            
        }
        $("#search_click_Mask").removeClass("click_Search_Mask")
        $(".header").removeClass("js_header--seach")
        $("#js-search").hide();

        // 恢復滾動
        removeUnScroll()
    });



  



});