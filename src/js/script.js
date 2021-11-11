function tabs() {
  var tab = document.querySelectorAll(".catalog__tab");
  var tabPane = document.querySelectorAll(".catalog__tab-pane");

  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function (e) {
      /* e.preventDefault(); для ссылок */
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tab.length; j++) {
        var tabPaneAttr = tabPane[j].getAttribute("data-tab-pane");

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

const slider = new Swiper(".slider__wrapper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function showModals() {
  let overlay = document.querySelector(".overlay");
  let modal = document.querySelector(".modal_consultation");
  let openModalBtns = document.querySelectorAll(".btn_consultation");
  let closeModalBtn = document.querySelector(".modal__close");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.add("active");
      modal.classList.add("active");
    });
  });
}
showModals();
