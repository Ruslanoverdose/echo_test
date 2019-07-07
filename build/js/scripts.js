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
