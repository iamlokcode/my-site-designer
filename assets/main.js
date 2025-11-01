const container = document.querySelector(".container");
const numStars = 250; // quantidade de estrelas

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // tamanho aleatório
  const size = Math.random() * 2 + 1; // entre 1px e 3px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // posição aleatória
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;

  // velocidade de animação aleatória
  const duration = 8 + Math.random() * 12;
  star.style.animationDuration = `${duration}s`;

  container.appendChild(star);
}

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active de todos os botões
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita recarregar a página

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const message = form.querySelector('textarea').value;

  // Monta a mensagem
  const whatsappMessage = `Olá! Meu nome é ${name}.%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;

  // Substitua pelo seu número no formato internacional
  const whatsappNumber = "5562992520456";

  // Abre o WhatsApp Web / App com a mensagem
  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
});

// ===== CARROSSEL PEQUENO COM AUTOPLAY =====
const trackSmall = document.querySelector(".carousel-track");
const slidesSmall = Array.from(trackSmall.children);
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let index = 0;
let autoPlayInterval;

function updateSmallCarousel() {
  const itemWidth = slidesSmall[0].getBoundingClientRect().width + 15; // inclui gap
  trackSmall.style.transform = `translateX(-${index * itemWidth}px)`;
}

function nextSlide() {
  index++;
  if (index > slidesSmall.length - 4) index = 0;
  updateSmallCarousel();
}

function prevSlide() {
  index--;
  if (index < 0) index = slidesSmall.length - 4;
  updateSmallCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

trackSmall.addEventListener("mouseenter", stopAutoPlay);
trackSmall.addEventListener("mouseleave", startAutoPlay);

window.addEventListener("resize", updateSmallCarousel);

startAutoPlay();

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Animação do hamburger
  hamburger.classList.toggle('open');
});

