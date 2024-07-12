let slideIndex = 0; //this code link with gallery.html
showSlides();  //call the function

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //select all elements under class name "mySlides"
  let dots = document.getElementsByClassName("dot"); //select class "dot"
  for (i = 0; i < slides.length; i++) { //loop that hide slide that currently not display
    slides[i].style.display = "none";  
  }
  slideIndex++; //make sure the slide move
  if (slideIndex > slides.length) {//loop yg buat slide patah balik ke first slide
    slideIndex = 1}    
  for (i = 0; i < dots.length; i++) { //loop that remove "bullet" class from all the dot indicators, make sure none of them highlighted
    dots[i].className = dots[i].className.replace(" bullet", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " bullet";
  setTimeout(showSlides, 3000); // tukar image every 3 seconds
}