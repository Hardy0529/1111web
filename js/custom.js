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

    // 標籤關閉
    function tag() {
        $("#select-all").removeClass("select-all_tall")
        $(".select-container").removeClass("select-containerFocus")
        $("ul#select-all").css("overflow-x","hidden")
        $("ul#select-all").css("overflow-y","hidden")
        $("#select-close").css("display","none")
        $("#tag_first").text($(".tag_active").text());
    }



    // Loading
    var percent = 0
    // Loading Page Light
    var timer_light = setInterval(function(){
    $(".bar").css("width",percent+"%")
        percent+=1
        if (percent>=5){
            clearInterval(timer_light)
            $(".pageLoading").addClass("loading-Page_light")
        }
    },30)
    
    // Loading Page  loading 期間無法滾動 loading 結束後轉場
    var timer = setInterval(function(){
        $(".bar").css("width",percent+"%")
            percent+=1
            if (percent>=100){
                
                $(".pageLoading").removeClass("loading-no_scroll")
                $(".pageLoading").addClass("complete")
                clearInterval(timer)
            }
            if ($(".pageLoading").hasClass("loading-no_scroll")) {
                unScroll()
            }
            else {
                removeUnScroll()
 
            }   
    },30)






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





    // 標籤選單
    // Tag Mobile
    $("#tag_first").text($(".tag_active").text());

    $("#select-all").click(function(){
        $(".select-container").toggleClass("select-containerFocus");
        if ($(".select-container").hasClass("select-containerFocus")) {
            $("#select-all").addClass("select-all_tall")
            
            $(".tag_active").css("pointer-events","none")
            $("ul#select-all").css("overflow-x","hidden")
            $("ul#select-all").css("overflow-y","auto")
            $("#select-close").css("display","block")
            $("#tag_first").text("全部文章");

            // 滾動停止
            unScroll()

           
           
        }
        else{

            // 標籤關閉
            tag()

            // 恢復滾動
            removeUnScroll()

            
            
        }
        
    })

    $("#select-close").click(function(){
        // 標籤關閉
        tag()

        jQuery("#select-all").animate({
            scrollTop: 0,
        },
        0
        );

        // 恢復恢復
        removeUnScroll()

    
        
    })


    // tag
    

    var tag_nav = $("nav#js_more_category").height() 

    if(tag_nav > 50  ){
        $(".btn#js_more_btn").css("display","block")
        $("nav#js_more_category").css("height","48px")
        $("nav#js_more_category").css("overflow","hidden")
        $("#btn_category").css("padding-top", "20px")
    }


  
    var headerTag = $(".header-tag").height()
    $(".header-tag-container").css( "height" , headerTag  + "px");
    
 
    
    $("#js_more_btn").click(function() {
        $("#js_more_category").css("height", "inherit")
        $(this).css("display", "none")
        $("#btn_category").css("padding-top", "0px")

        var headerTag = $(".header-tag").height()
        $(".header-tag-container").css( "height" , headerTag + "px");


       
    })
    
   


    //top
    $("#top_page").click(function() {
        jQuery("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#top_page").fadeIn("fast");
        } else {
            $("#top_page").stop().fadeOut("fast");
        }
        return false;
    });




});