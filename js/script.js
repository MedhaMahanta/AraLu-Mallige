function openNav() {
  document.getElementById("mySidepanel").style.width = "150px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// window.addEventListener('mouseup', function(event) {
// 	var sidePanel = document.getElementById("mySidepanel");
// 	if ((event.target != sidePanel) && (event.target.parentNode != sidePanel)) {
// 		sidePanel.style.width = "0";
// 	}
// });

/* For home page*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

function openColumn(open) {
  for (i = 1; i < 6; i++) {
    nameOfClosedTab = "tab" + i.toString();
    nameOfClosedPage = "page" + i.toString();
    document.getElementById(nameOfClosedPage).style.display = "none";
    if (document.getElementById(nameOfClosedTab).classList.contains("release-categories-clicked")) {
      document.getElementById(nameOfClosedTab).classList.remove("release-categories-clicked");
    }
  }
  nameOfOpenedPage = "page" + open.toString();
  nameOfOpenedTab = "tab" + open.toString();
  document.getElementById(nameOfOpenedPage).style.display = "block";
  document.getElementById(nameOfOpenedTab).classList.add("release-categories-clicked");

}
