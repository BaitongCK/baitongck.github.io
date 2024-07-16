let slideIndex = 1;
// showSlides(slideIndex);

$('#alroModal').on('shown.bs.modal', function (e) {
    slideIndex = 1;
    showSlides(slideIndex, "alroModal");
})

$('#pangchangModal').on('shown.bs.modal', function (e) {
    slideIndex = 1;
    showSlides(slideIndex, "pangchangModal");
})

$('#doahrModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "doahrModal");
})

$('#nsfModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "nsfModal");
})

$('#ebudgetModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "ebudgetModal");
})

$('#pwaqualityModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "pwaqualityModal");
})

$('#pwagisModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "pwagisModal");
})

$('#socModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "socModal");
})

$('#covid19Modal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "covid19Modal");
})

$('#linkageModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "linkageModal");
})

$('#auditModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "auditModal");
})

$('#accountModal').on('shown.bs.modal', function (e) {
  slideIndex = 1;
  showSlides(slideIndex, "accountModal");
})

function plusSlides(n, modalId) {
  showSlides(slideIndex += n, modalId);
}

function currentSlide(n, modalId) {
  showSlides(slideIndex = n, modalId);
}

function showSlides(n, modalId) {
  let i;
  let modal = document.getElementById(modalId);
  let slides = modal.getElementsByClassName("slideshow");
  let dots = modal.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}