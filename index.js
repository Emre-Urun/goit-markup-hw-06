const hamburgerMenuIcon = document.getElementById("hamburger-menu-icon");
const hamburgerMenu = document.getElementById("title-hamburger-menu");
const closeMenuButton = document.getElementById("title-hamburger-menu-close");

// Menü açıldığında
hamburgerMenuIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("is-open");
  document.body.classList.add("menu-open");
});

// Menü kapandığınd
closeMenuButton.addEventListener("click", () => {
  hamburgerMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

// const modalOpenButton = document.getElementById("modal-open-button");
// const modal = document.getElementById("modal");
// const modalCloseButton = document.getElementById("modal-close-button");
// modalOpenButton.addEventListener("click", function () {
//   modal.classList.add("modal-open");
// });
// modalCloseButton.addEventListener("click", function () {
//   modal.classList.remove("modal-open");
// });
// console.log("Modal açıldı");

document.addEventListener("DOMContentLoaded", function () {
  const modalOpenButton = document.getElementById("modal-open-button");
  const modal = document.getElementById("modal");
  const modalCloseButton = document.getElementById("modal-close-button");

  if (modalOpenButton && modal && modalCloseButton) {
    // Modal açma fonksiyonu
    modalOpenButton.addEventListener("click", function (e) {
      e.preventDefault(); // Eğer buton bir form içindeyse sayfanın yenilenmesini engeller
      modal.classList.add("is-open");
    });

    // Modal kapatma fonksiyonu
    modalCloseButton.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.remove("is-open");
    });

    // Modal dışına tıklandığında kapatma
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("is-open");
      }
    });
  } else {
    console.error("Modal elements not found!");
  }
});
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    // Menü açık sınıfını kaldır
    document.body.classList.remove("menu-open");

    // Hamburger menü öğesini gizle
    const menu = document.getElementById("title-hamburger-menu");
    if (menu) {
      menu.style.display = "none";
    }

    // Hamburger ikonunu tekrar göster (eğer gizlenmişse)
    const header = document.querySelector(".title-wrapper");
    if (header) {
      header.style.display = "";
    }
  });
});
const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const menu = document.getElementById("title-hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
  document.body.classList.add("menu-open");
  menu.style.display = "block"; // ✨ EKSİKSE EKLE
});
