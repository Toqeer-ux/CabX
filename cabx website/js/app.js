(function () {
  "use strict";

  //Easy selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  // Easy event listener function

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  // Easy on scroll event listener 
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };
  //  Sidebar toggle
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-sidebar');
    });
  }
  // Close sidebar
  if (select('.close-sidebar-btn')) {
    on('click', '.close-sidebar-btn', function (e) {
      select('body').classList.remove('toggle-sidebar');
    });
  }

})();
// Menu 
// document.addEventListener("DOMContentLoaded", function() {
//   const navLinks = document.querySelectorAll("#nav a");
//   navLinks.forEach(function(navLink) {
//     navLink.addEventListener("click", function(event) {
//       event.preventDefault();
//       navLinks.forEach(function(link) {
//         link.classList.remove("active");
//       });
//       this.classList.add("active");
//     });
//   });
// });
// Tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 
// document.addEventListener('DOMContentLoaded', function () {
//   var myCarousel = document.querySelector('#carouselExample');
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 3000, // Interval in milliseconds (2 seconds)
//     ride: 'carousel'
//   });
// });
// document.addEventListener('DOMContentLoaded', function () {
//   var myCarousel = document.querySelector('#carousel-left');
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 3000, // Interval in milliseconds (2 seconds)
//     ride: 'carousel'
//   });
// });
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  animateOut: 'fadeOut',
  autoplayTimeout:2000,
  autoplayHoverPause:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})