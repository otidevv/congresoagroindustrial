$(function () {
   $(".menu-open").click(function (event) {
       event.stopPropagation();
       $("body").toggleClass("no-scroll");
       $(".menu-button").toggleClass("active");
       $(".hamburger-menu").toggleClass("active");
   });

   $(document).ready(function() {
    $(".products-button").click(function(event) {
      event.stopPropagation();
      $(".products-list").toggleClass("active");
      $(this).toggleClass("active");
    });
  
    $(document).click(function(event) {
      // Eğer tıklanan eleman products-list ya da products-button değilse, products-list'i kapat.
      if (!$(event.target).closest('.products-list, .products-button').length) {
        if ($(".products-list").hasClass("active")) {
          $(".products-list").removeClass("active");
          $(".products-button").removeClass("active");
        }
      }
    });
  });
  
 });
 
 //Esc
 $(document).keydown(function (e) {
   if (e.keyCode == 27) {
    $(".menu-button").removeClass("active");
    $(".hamburger-menu").removeClass("active");
   }
 });

const menuopen = document.querySelector(".menu-open");
const menu = document.querySelector('.main-menu');
const menuWrapperItems = menu.querySelectorAll('.menu-wrapper .item');
const menuItems = menu.querySelectorAll('.tab-menu li span');
const menuSocial = menu.querySelectorAll('.menu-social li ');

var mainMenu = gsap.timeline({ paused: true });

mainMenu.to(menu, {
  duration: 0.55,
  opacity: 1,
  right: '0',
  ease: 'expo.inOut',
});

mainMenu.from(menuWrapperItems, {
  opacity: 0,
  duration: .6,
  ease: "power4.out",
  x: 500,
  stagger: 0.1,
}, "-=0.1");

mainMenu.fromTo(
   menuItems,
   {
     opacity: 0,
     y: 60,
   },
   {
     opacity: 1,
     duration: 1,
     ease: 'power4.out',
     y: 0,
     stagger: 0.1,
   },
   "-=1.2" 
 );

 mainMenu.fromTo(
  menuSocial,
  {
    opacity: 0,
    y: 150,
  },
  {
    opacity: 1,
    duration: 1,
    ease: 'power4.out',
    y: 0,
    stagger: 0.1,
  },
  "-=1.2" 
);
 
mainMenu.reverse();

menuopen.addEventListener('click', () => {
  mainMenu.reversed(!mainMenu.reversed());
});

$(document).ready(function () {
  $('.hamburger').click(function (event) {
    event.stopPropagation(); // Event propagation'ı durdur
    $(this).toggleClass('active');
  });
});


$(document).click(function (event) {
  var isMainMenuClicked = $(event.target).closest(".main-menu").length > 0;

  if (!isMainMenuClicked && !$(event.target).closest("header").length) {
    $("body").removeClass("no-scroll");
    $('.hamburger-lines').removeClass('active');
    mainMenu.reverse();
  }
});

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    $("body").removeClass("no-scroll");
    $('.hamburger').removeClass('active');

    mainMenu.reverse();
  }
});