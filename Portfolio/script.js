// Smooth scrolling for the "View My Work" button
document.addEventListener('DOMContentLoaded', () => {
    const viewMyWorkButton = document.querySelector('.cta-button');
    if (viewMyWorkButton) {
        viewMyWorkButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default jump behavior
            const projectsSection = document.getElementById('projects'); // Make sure your projects section has an ID of "projects"
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

//Basic form validation for the contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value.trim()) {
                isValid = false;
                nameInput.classList.add('is-invalid'); // Add a class for invalid input
                alert('Please enter your name.');
            } else {
                nameInput.classList.remove('is-invalid');
            }

            if (!emailInput.value.trim()) {
                isValid = false;
                emailInput.classList.add('is-invalid');
                alert('Please enter your email address.');
             } else if (!isValidEmail(emailInput.value.trim())) {
                isValid = false;
                emailInput.classList.add('is-invalid');
                alert('Please enter a valid email address.');
            }else {
                emailInput.classList.remove('is-invalid');
            }

            if (!messageInput.value.trim()) {
                isValid = false;
                messageInput.classList.add('is-invalid');
                alert('Please enter your message.');
            } else{
                messageInput.classList.remove('is-invalid');
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
