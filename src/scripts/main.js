//smooth scroll
$(document).on('click', '.nav-link', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(document).on('click', '.album-image', function(event) {
    event.preventDefault();
    $(".track-list").css("display", "block");
});

$(document).on('click', '.album-text', function(event) {
    event.preventDefault();
    $(".track-list").css("display", "none");
});

//swiper
// $(document).ready(function () {
//   //initialize swiper when document ready
//   var mySwiper = new Swiper ('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     autoplay: 3000,
//     slidesPerView: 3,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev'
//   })
// });

// $('.input-banner').on('focus', function(event) {
//   this.value = '';
// })

$('.input-banner').focus(function(event) {
  this.value = '';
})
