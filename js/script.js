const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

// Tambahkan class "sticky" saat menggulir
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 120);
});

// Toggle menu ketika tombol menu di klik
menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
});

// Sembunyikan menu saat menggulir
window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
});

// Animation

const animate = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

animate.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
