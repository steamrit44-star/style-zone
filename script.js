//Meniu telefonams
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Aprangos kortelių filtravimas
const filterButtons = document.querySelectorAll(".filter-btn");
const outfitCards = document.querySelectorAll(".outfit-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    outfitCards.forEach(card => {
      const showCard = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !showCard);
    });
  });
});

// Demonstracinė naujienlaiškio forma
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

newsletterForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();

  if (email) {
    formMessage.textContent = "Ačiū! Forma veikia demonstraciniu režimu.";
    newsletterForm.reset();
  }
});

// Mygtukas grįžti į puslapio viršų
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

