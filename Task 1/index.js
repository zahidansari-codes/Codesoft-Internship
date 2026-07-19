// mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// close menu when a link is clicked (useful on mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// simple contact form validation
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill all the fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email address.";
    return;
  }

  // no backend connected yet, so we just show a success message
  formMsg.style.color = "#14b8a6";
  formMsg.textContent = "Thanks! Your message has been noted.";
  form.reset();
});