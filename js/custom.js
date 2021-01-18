$(document).ready(function() {
 
    $(".tag_first").text($(".tag_active").text());

    $(".select-all").click(function(){
        $(".select-container").toggleClass("select-containerFocus");
        if ($(".select-container").hasClass("select-containerFocus")) {
            $(".select-all").addClass("select-all_tall")
            $(".tag_active").css("pointer-events","none")
            $("ul.select-all").css("overflow-x","hidden")
            $("ul.select-all").css("overflow-y","auto")
            $(".select-close").css("display","block")
            $(".tag_first").text("全部文章");
        }
        else{
            $(".select-all").removeClass("select-all_tall")
            $("ul.select-all").css("overflow-x","hidden")
            $("ul.select-all").css("overflow-y","hidden")
            $(".select-close").css("display","none")
            $(".tag_first").text($(".tag_active").text());
        }
        
    })


    $(".select-close").click(function(){
        $(".select-all").removeClass("select-all_tall")
        $(".select-container").removeClass("select-containerFocus")
        $("ul.select-all").css("overflow-x","hidden")
        $("ul.select-all").css("overflow-y","hidden")
        $(".select-close").css("display","none")
        $(".tag_first").text($(".tag_active").text());
        jQuery(".select-all").animate({
            scrollTop: 0,
        },
        1000
    );
    })


   
    var headerTag = $(".header-tag").height()
    $(".header-tag-container").height( headerTag + 70 + "px");


    $(window).scroll(function(){
        var jumbotronHeight = $(".jumbotron_height").height() + 35
        if ($(window).scrollTop() >= jumbotronHeight) {
            $('.header-tag').addClass('fixed-header');
        }
        else {
            $('.header-tag').removeClass('fixed-header');
        }
    });


    
    // Loading
    var percent = 0

    var timer_light = setInterval(function(){
        $(".bar").css("width",percent+"%")
            percent+=1
            if (percent>=5){
                clearInterval(timer_light)
                $(".pageLoading").addClass("loading_light")
            }
        },30)

    var timer = setInterval(function(){
    $(".bar").css("width",percent+"%")
        percent+=1
        if (percent>=100){
            $(".pageLoading").removeClass("pageLoading_noscroll")
            $(".pageLoading").addClass("complete")
            clearInterval(timer)
        }
        // 調整大小
        if ($(".pageLoading").hasClass("pageLoading_noscroll")) {
        
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });
        } else {
            function removeUnScroll() {
                $(document).unbind("scroll.unable");

            }
            $('html,body').css({
                'overflow': 'auto'
            });
        }
    },30)

    






  

    $("#js-search").hide();
    $("#icon-btn_search").click(function() {
        $(".header").toggleClass("js_header--seach");
        $("#js-search").slideToggle(500);
        if ($("#js_headerSearch").hasClass("js_header--seach")) {
            $(".header").addClass("js_header--seach");

        }


    });
    $("#icon-btn_search").click(function() {
        $(".search_click_Mask").toggleClass("click_Search_Mask");
        if ($(".search_click_Mask").hasClass("click_Search_Mask")) {
            $(".search_click_Mask").addClass("click_Search_MaskStyle")

            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });
        } else {
            function removeUnScroll() {
                $(document).unbind("scroll.unable");

            }
            $('html,body').css({
                'overflow': 'auto'
            });
        }

    });
    $(".search_click_Mask").click(function() {
        $(".search_click_Mask").removeClass("click_Search_Mask")
        $(".header").removeClass("js_header--seach")
        $("#js-search").hide();

        function removeUnScroll() {
            $(document).unbind("scroll.unable");

        }
        $('html,body').css({
            'overflow': 'auto'
        });
    })

    $("#js_more_btn").click(function() {
        $("#js_more_category").css("height", "inherit")
        $(this).css("display", "none")
        $("#btn_category").css("padding-top", "0px")


        var headerTag = $(".header-tag").height()
        $(".header-tag-container").height( headerTag + 70 + "px");

    })
    $("#js-menu-toggle").click(function() {
        $(".js-navbar__nav").toggleClass("js__nav-navbar");
        if ($(".js-navbar__nav").hasClass("js__nav-navbar")) {
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });
        } else {
            function removeUnScroll() {
                $(document).unbind("scroll.unable");
            }
            $('html,body').css({
                'overflow': 'auto'
            });
        }
    });
    $("#js-popup-close").click(function() {
        $(".js-navbar__nav").removeClass("js__nav-navbar");
        if ($(".js-navbar__nav").hasClass("js__nav-navbar")) {
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });



        } else {

            function removeUnScroll() {
                $(document).unbind("scroll.unable");
            }
            $('html,body').css({
                'overflow': 'auto'
            });


        }
        $(".search_click_Mask").removeClass("click_Search_Mask")
        $(".header").removeClass("js_header--seach")
        $("#js-search").hide();

        function removeUnScroll() {
            $(document).unbind("scroll.unable");

        }
        $('html,body').css({
            'overflow': 'auto'
        });

    });
    
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