document.addEventListener("DOMContentLoaded", () => {
  $("#navbar > li").on("mouseover", (e) => {
    $("> div", e.currentTarget).addClass("block").removeClass("hidden");
  });

  $("#navbar > li").on("mouseout", (e) => {
    $("> div", e.currentTarget).addClass("hidden").removeClass("block");
  });
});
