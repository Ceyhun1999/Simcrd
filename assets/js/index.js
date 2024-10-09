const swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const partnorsSwiper = new Swiper("#partnors-slide", {
  slidesPerView: 1,
  autoplay: { delay: 2500, disableOnInteraction: false },
  breakpoints: {
    0: { slidesPerView: 1.5, navigation: false },
    450: { slidesPerView: 2.5, navigation: true },
    768: { slidesPerView: 3.5 },
    1024: { slidesPerView: 4.5 },
  },
});

partnorsSwiper.init();

//! QUESTION BLOCK
function accordion() {
  var accordionGroups = document.querySelectorAll(".accrodion-grp");

  if (accordionGroups.length) {
    accordionGroups.forEach(function (group) {
      var accordionName = group.getAttribute("data-grp-name");
      group.classList.add(accordionName);

      var accordions = group.querySelectorAll(".accrodion");
      accordions.forEach(function (accordion) {
        var content = accordion.querySelector(".accrodion-content");

        if (!accordion.classList.contains("active")) {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }

        var title = accordion.querySelector(".accrodion-title");
        title.addEventListener("click", function () {
          if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
            content.style.display = "none";
          } else {
            accordion.classList.add("active");
            content.style.display = "block";
          }
        });
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  accordion();
});

// fixedIconWrapper
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Düyməyə klik edildikdə yuxarıya sürüşdür
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Yumşaq keçid effekti
  });
});


const openFixed = document.querySelector(".fixed__open-close-icon-wrapper");

const iconWrapper = document.querySelector(".fixed-icon-wrapper");

openFixed.addEventListener("click", () => {
  iconWrapper.classList.toggle("active");
});

//Comment swiper
const comments = new Swiper(".swiper2", {
  cssMode: true,
  navigation: {
    nextEl: ".comment_prev",
    prevEl: ".comment_next",
  },
  pagination: {
    el: ".pagination2",
  },
  mousewheel: true,
  keyboard: true,
});

// Modal start
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal .modal__inner");
const openModal = document.querySelectorAll(".open_modal");
const closeModalBtn = document.querySelector(".close_modal");

openModal.forEach((open_item) => {
  open_item.addEventListener("click", () => {
    modal.classList.remove("modal-deActive");
    modal.classList.add("modal-active");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

modalInner.addEventListener("click", (e) => {
  e.stopPropagation();
});

const handleModalClose = () => {
  modal.classList.add("modal-deActive");
  modal.classList.remove("modal-active");

  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }, 150);
};

modal.addEventListener("click", handleModalClose);
closeModalBtn.addEventListener("click", handleModalClose);
// Modal end