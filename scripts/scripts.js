// carousel-in-trusted-partners-sections
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// carousel-in-comment-section
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

//  hamburger-icon ---- menu-in-responsive-breackpoints
const menuToggleBtn = document.querySelector(".hamburger-icon");
const menuResponsiveEl = document.querySelector(".menuInResponsive");
menuToggleBtn.addEventListener("click", function () {
  menuToggleBtn.classList.toggle("rotate-bars");
  menuResponsiveEl.classList.toggle("menuInResponsiveAvtive");
});
// counter
const couterWrapperEl = document.querySelector(".counter-wrapper");
let counterWrapperElTop =
  couterWrapperEl.getBoundingClientRect().top + window.scrollY;
function setCounter(elementId, endNumber) {
  let htmlEl = document.getElementById(elementId);
  let counterNumber = 0;
  htmlEl.innerHTML = counterNumber;
  let myInterval = setInterval(function () {
    counterNumber++;
    htmlEl.innerHTML = counterNumber;
    if (counterNumber === endNumber) {
      clearInterval(myInterval);
    }
  }, 6000 / endNumber);
}
window.addEventListener("scroll", function () {
  if (
    window.scrollY >= counterWrapperElTop &&
    window.scrollY <= counterWrapperElTop + 30
  ) {
    setCounter("counter1", 3534);
    setCounter("counter2", 896);
    setCounter("counter3", 172);
    setCounter("counter4", 19);
  }
});
// modal-carousel-when-you-click-the-search-icons
let modalWrapperEl = document.querySelector(".modal-wrapper");
let closemodalIcon = document.querySelector(".modal-wrapper >i");
let modalCarouselImgBoxes = document.querySelectorAll(
  ".modal-carousel-img-box"
);

let modalOpenerbtns = document.querySelectorAll(".modal-opener-btn");

modalOpenerbtns.forEach((item) => {
  item.addEventListener("click", function () {
    modalWrapperEl.style.transform = "scale(1)";
  });
});
closemodalIcon.addEventListener("click", function () {
  modalWrapperEl.style.transform = "scale(0)";
});
modalWrapperEl.addEventListener("click", function () {
  modalWrapperEl.style.transform = "scale(0)";
});
modalCarouselImgBoxes.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
let modalBtns = document.querySelectorAll(".mySwiper3 >.modal-btns");

modalBtns.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
