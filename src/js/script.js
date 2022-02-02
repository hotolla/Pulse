function tabs() {
  let tab = document.querySelectorAll(".catalog__tab");
  let tabPane = document.querySelectorAll(".catalog__tab-pane");

  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function (e) {
      /* e.preventDefault(); для ссылок */
      let activeTabAttr = e.target.getAttribute("data-tab");

      for (let j = 0; j < tab.length; j++) {
        let tabPaneAttr = tabPane[j].getAttribute("data-tab-pane");

        if (activeTabAttr === tabPaneAttr) {
          tab[j].classList.add("active");
          tabPane[j].classList.add("active");
        } else {
          tab[j].classList.remove("active");
          tabPane[j].classList.remove("active");
        }
      }
    });
  }
}

tabs();

function swipeCard() {
  let btnMore = document.querySelectorAll(".catalog__link-more");
  let btnBack = document.querySelectorAll(".catalog__link-back");

  function toggleCard(btn) {
    let cardFront = document.querySelectorAll(".catalog__item-front");
    let cardBack = document.querySelectorAll(".catalog__item-back");
    btn.forEach((el, i) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        cardFront[i].classList.toggle("active");
        cardBack[i].classList.toggle("active");
      });
    });
  }

  toggleCard(btnMore);
  toggleCard(btnBack);
}
swipeCard();

const slider = new Swiper(".slider__wrapper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function showModals(modalClass, btnClass) {
  let overlay = document.querySelector(".overlay");
  let modal = document.querySelector(modalClass);
  let openModalBtns = document.querySelectorAll(btnClass);
  let closeModalBtn = document.querySelectorAll(".modal__close");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.add("active");
      modal.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });

  closeModalBtn.forEach((btnClose) => {
    btnClose.addEventListener("click", function () {
      overlay.classList.remove("active");
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      modal.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}
showModals(".modal_consultation", ".btn_consultation");
showModals(".modal_order", ".btn_order");

new WOW().init(); // все большие
