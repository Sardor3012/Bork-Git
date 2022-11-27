let img_right_arrow = document.querySelector(".img_right_arrow")
let dark_bc = document.querySelector(".dark_bc")
let arrow_icon = document.querySelector(".arrow_icon")
let menu = document.querySelector("aside")
let menu_icon = document.querySelector(".menu_icon")
let account = document.querySelector(".account")
let wrapp = document.querySelector(".wrapp")
let exit = document.querySelector(".exit")
let footer = document.querySelector("footer")
let main = document.querySelector("main")
let grids_wrapper = document.querySelector(".grids_wrapper")
let header_wrapper = document.querySelector(".header_wrapper")

account.onclick = () => {
  wrapp.style.display = "block"
  footer.style.display = "none"
  main.style.display = "none"
  grids_wrapper.style.display = "none"
  header_wrapperr.style.display = "none"
}
exit.onclick = () => {
  wrapp.style.display = "none"
  footer.style.display = "block"
  main.style.display = "block"
  grids_wrapper.style.display = "block"
  header_wrapper.style.display = "block"
}


menu_icon.onclick = () => {
  dark_bc.classList.add("active")
  menu.classList.add("active")
}

arrow_icon.onclick = () => {
  dark_bc.classList.remove("active")
  menu.classList.remove("active")
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}