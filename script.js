// Get the toggle button and the navbar
const toggleButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Toggle the 'hidden' class on the navbar when the toggle button is clicked
toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
