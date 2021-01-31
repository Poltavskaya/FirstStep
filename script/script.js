let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});

// modal callbtn

$('.call-btn').on('click', function(evt) {
  evt.preventDefault();
  $('.popup-callback').addClass('popup-callback--show');
});

$('.popup-callback').on('click', function(evt) {
  if (
    evt.target.classList.contains('popup-layer') ||
    evt.target.classList.contains('cross-inner') ||
    evt.target.classList.contains('cross') ||
    evt.target.parentElement.classList.contains('cross')
  ) {
    $('.popup-callback').removeClass('popup-callback--show');
  }
});

//modal freelesson
$('.lesson-btn').on('click', function(evt) {
  evt.preventDefault();
  $('.popup-lesson').addClass('popup-lesson--show');
});

$('.popup-lesson').on('click', function(evt) {
  if (
    evt.target.classList.contains('popup-layer') ||
    evt.target.classList.contains('cross-inner') ||
    evt.target.classList.contains('cross') ||
    evt.target.parentElement.classList.contains('cross')
  ) {
    $('.popup-lesson').removeClass('popup-lesson--show');
  }
});

// slide galery

$(function () {
	  $('.multiple__items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      arrows: true,
       responsive: [
     {
      breakpoint: 1200,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
    })
});

// slide reviews

$(function () {
	$('.reviews__slide').slick({
		arrows: true
	});
});

$('.teachers__box__slide').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// maps
function myMap() {
  let mapCanvas = document.getElementById("ggmap")
  let mapOptions = {
    center: new google.maps.LatLng(49.99740740781685, 36.23350128288547), zoom: 15
  };
  let map = new google.maps.Map(mapCanvas, mapOptions)
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(49.99740740781685, 36.233501282885476),
    map: map
  })
}

myMap()





