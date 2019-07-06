$(function() {
  let flag = true;
  $(".eventsbar__arrow button").click(function() {
    if (flag) {
      $(".eventsbar__content")
        .addClass("is_open")
        .removeClass("is_close");
      $(this).css({ transform: "rotate(0deg)" });
      $("body").css({ "overflow-y": "scroll" });
    } else {
      $(".eventsbar__content")
        .addClass("is_close")
        .removeClass("is_open");
      console.log("close");
      $(this).css({ transform: "rotate(180deg)" });
      $("body").css({ "overflow-y": "hidden" });
    }
    flag = !flag;
  });
});
