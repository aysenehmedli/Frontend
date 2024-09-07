//  Set caption from card text
$('.card-deck a').fancybox({
  caption: function (instance, item) {
    return $(this).parent().find('.card-text').html();
  }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('contact-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});


// document.addEventListener('DOMContentLoaded',() => {

// const muffinBoxes = document.querySelectorAll('.muffin-box');

//     // Add click event listener to each muffin-box
//     muffinBoxes.forEach(box => {
//         box.addEventListener('click', () => {
//             // Remove the active class from all muffin-boxes
//             muffinBoxes.forEach(b => b.classList.remove('active'));

//             // Add the active class to the clicked muffin-box
//             box.classList.add('active');
//         });
//     });
  
// } )
  