
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu after clicking a navigation link
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Update footer year automatically
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent =
    `© ${new Date().getFullYear()} Charlie Creative Studio. All rights reserved.`;
}
