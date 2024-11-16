// Toggle navigation menu visibility
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburgerButton.addEventListener("click", () => {
  const isVisible = navMenu.style.display === "block";
  navMenu.style.display = isVisible ? "none" : "block";

  // Change the hamburger symbol to 'X' when menu is visible
  hamburgerButton.textContent = isVisible ? "☰" : "✖";
});

// Set the current year in the footer
const currentYearSpan = document.getElementById("current-year");
currentYearSpan.textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = document.lastModified;
