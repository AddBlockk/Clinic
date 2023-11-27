console.log("abaoba");

document.querySelector(".burger-menu").addEventListener("click", function () {
  console.log("вывод");

  let modal = document.querySelector(".modal");
  let body = document.querySelector("body");

  console.log(modal.style.transform);

  modal.style.transform =
    modal.style.transform === "translate(0px, -100%)"
      ? "translate(0, 0%)"
      : "translate(0px, -100%)";

  body.style.overflowY = body.style.overflowY === "hidden" ? "auto" : "hidden";

  //   div.style.display =
  //     div.style.display === "none" || div.style.display.length === 0
  //       ? "flex"
  //       : "none";

  //   div.style.display = div.style.width === "100%" ? "flex" : "none";

  //   div.style.width = div.style.display === "none" ? "100%" : "0%";
  //   div.style.width = div.style.display === "flex" ? "0%" : "100%";
});

window.addEventListener(
  "resize",
  function (event) {
    if (event.target.innerWidth > 1024) {
      let modal = document.querySelector(".modal");
      let body = document.querySelector("body");

      body.style.overflowY = "auto";

      modal.style.transform = "translate(0px, -100%)";
    }
  },
  true
);
