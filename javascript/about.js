let index = 1;
showSlides(index);

//making a function
function plusSlides(n) {
  showSlides(index += n);
}
function currentSlide(n) {
  showSlides(index = n);
}

//writing the button conditions
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("box");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}