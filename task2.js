function ParallaxScroll() {
    var scrolled = $(window).scrollTop();
    $(".layer-1").css("top", 100 - scrolled * 0.25 + "px");
    $(".layer-2").css("top", 0 - scrolled * 0.5 + "px");
    $(".apple").css("top", 400 - scrolled * 0.8 + "px");
    $(".pear").css("top", 200 - scrolled * 0.6 + "px");
    $(".banana").css("top", 500 - scrolled * 0.4 + "px");
    $(".kiwi").css("top", 600 - scrolled * 0.5 + "px");
    $(".lemon").css("top", 600 - scrolled * 0.7 + "px");
    $(".mango").css("top", 400 - scrolled * 0.7 + "px");
    $(".peach").css("top", 600 - scrolled * 0.5 + "px");
    $(".apricote").css("top", 200 - scrolled * 0.2 + "px");
    $(".pomegranate").css("top", 200 - scrolled * 0.4 + "px");
  }
  
  $(window).bind("scroll", function (e) {
    ParallaxScroll();
  });
  