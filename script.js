// Mantén tu función original
document.getElementById("icon-menuToggle").onclick = function() {
  menuToggle(this);
};

function menuToggle(x) {
  x.classList.toggle("change");
  document.getElementById("myTopnav").classList.toggle("show-menu");
}

// === Scroll con compensación y cierre automático del menú ===
document.querySelectorAll('#myTopnav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href");
    const target = document.querySelector(targetID);
    if (!target) return;

    // Calcula la altura del header
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    // Calcula la posición real del destino
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    // Scroll suave
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });

    // Cierra el menú hamburguesa en mobile
    const iconMenu = document.getElementById("icon-menuToggle");
    const menu = document.getElementById("myTopnav");

    if (menu.classList.contains("show-menu")) {
      iconMenu.classList.remove("change");
      menu.classList.remove("show-menu");
    }
  });
});
// === Animaciones al hacer scroll con Intersection Observer ===
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
    }
  });
}, {
  threshold: 0.15 // porcentaje visible antes de activar (0.15 = 15%)
});

// observa todos los elementos con la clase .reveal
reveals.forEach(el => observer.observe(el));

const observerImg = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pieces = entry.target.querySelectorAll('.piece');
      pieces.forEach((piece, i) => {
        setTimeout(() => piece.classList.add('show'), i * 200);
      });
      observerImg.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

observerImg.observe(document.querySelector('.card-pink'));

const observerImgAbaot = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pieces = entry.target.querySelectorAll('.piece');
      pieces.forEach((piece, i) => {
        setTimeout(() => piece.classList.add('show'), i * 200);
      });
      observerImgAbaot.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

observerImgAbaot.observe(document.querySelector('.section-1'));


