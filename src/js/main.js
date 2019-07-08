$(function() {
  //events bar
  let flag = false;
  $(".eventsbar__arrow button").click(function() {
    if (!flag) {
      $(".eventsbar")
        .addClass("is_open")
        .removeClass("is_close");
      $(this).css({ transform: "rotate(0deg)" });
      $("body").css({ "overflow-y": "scroll" });
    } else {
      $(".eventsbar")
        .addClass("is_close")
        .removeClass("is_open");
      $(this).css({ transform: "rotate(180deg)" });
      $("body").css({ "overflow-y": "hidden" });
    }
    flag = !flag;
  });

  //map nav
  $(".map__menu .btn-map").click(function() {
    $(".map__menu .btn-map").removeClass("active");
    $(this).addClass("active");
  });
});
$(function() {
  let filter = false;
  $("button.btn-filter").click(function() {
    if (!filter) {
      $(".filter_mobile")
        .addClass("opened")
        .removeClass("closed");
      $(".events__content").hide();
    } else {
      $(".filter_mobile")
        .addClass("closed")
        .removeClass("opened");
      $(".events__content").show();
    }
    filter = !filter;
  });

  $(function() {
    $(".bar button").click(function() {
      $(".mobile-main__navigation")
        .addClass("opened")
        .removeClass("closed");
      $("body").css({ "overflow-y": "scroll" });
    });
    $(".close_menu").click(function() {
      $(".mobile-main__navigation")
        .addClass("closed")
        .removeClass("opened");
      $("body").css({ "overflow-y": "hidden" });
    });
  });
});
