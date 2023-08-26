document.addEventListener("DOMContentLoaded", () => {
  $("#navbar > li").click((e) => {
    $("> div", e.currentTarget).addClass("block").removeClass("hidden");
  });
});
