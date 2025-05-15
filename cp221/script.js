// Greeting based on time of day
function greetUser() {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  alert(greeting);
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Validate contact form
function validateForm(event) {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const phoneRegex = /^\\d{10}$/;

  if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  } else if (!phoneRegex.test(phone.value)) {
    alert('Please enter a 10-digit phone number.');
    event.preventDefault();
  }
}

// Toggle project details
document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-details');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;
      if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    });
  });

  // Attach form validation for contact form if it exists
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
  }
});
