let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}
//  Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    clickable: true,
    autoplay: {
      delay: 1000,
       // Time between each slide in milliseconds (adjust as needed)
    },
    // If you need pagination (dots), uncomment the following lines:
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    // If you need navigation arrows, uncomment the following lines:
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // If you need scrollbar, uncomment the following lines:
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  var swiper = new Swiper('.swiper-container anime', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween:20,
    centeredSlides:true,
    loop: true,
    clickable: true,
    autoplay: {
      delay: 1000,
       // Time between each slide in milliseconds (adjust as needed)
    },
    pagination: {
      el: '.swiper-pagination',
         },
    // If you need pagination (dots), uncomment the following lines:
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    // If you need navigation arrows, uncomment the following lines:
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // If you need scrollbar, uncomment the following lines:
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });