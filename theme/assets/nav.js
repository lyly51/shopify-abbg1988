document.addEventListener("DOMContentLoaded", () => {
  $("#navbar > li").on("mouseover", (e) => {
    $("> div", e.currentTarget).addClass("block").removeClass("hidden");
  });

  $("#navbar > li").on("mouseout", (e) => {
    $("body").mousemove(function (event) {
      let inMenuItems = $(event.target).hasClass("menu-items");
      let inMenu = $(event.target).hasClass("menu");
      if (!inMenuItems && !inMenu) {
        $("> div", e.currentTarget).addClass("hidden").removeClass("block");
      }
    });
  });
});
