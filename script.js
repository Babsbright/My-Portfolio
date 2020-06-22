//1. Get the hamburger icon
const icon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
//You could as well querySelector it
icon.addEventListener("click", () => {
  if (document.querySelector(".mobile-navbar").style.display !== "block") {
    document.querySelector(".hamburger-icon").src = "./assets/icon-close.svg";
    document.querySelector(".mobile-navbar").style.display = "block";
    document.querySelector("body").classList.add("stop-scrolling");
    return;
  }
});
closeIcon.addEventListener("click", () => {
  document.querySelector(".close-icon").src = "./assets/icon-hamburger.svg";
  document.querySelector(".mobile-navbar").style.display = "none";
  document.querySelector("body").classList.remove("stop-scrolling");
});
