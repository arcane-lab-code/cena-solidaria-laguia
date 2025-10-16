// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown Timer
function updateCountdown() {
    // Set the date we're counting down to (November 21, 2025, 20:30)
    const countDownDate = new Date("November 21, 2025 20:30:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            if (daysEl) daysEl.textContent = "0";
            if (hoursEl) hoursEl.textContent = "0";
            if (minutesEl) minutesEl.textContent = "0";
            if (secondsEl) secondsEl.textContent = "0";

            // Optionally show a message
            const countdownSection = document.querySelector('.countdown-section h3');
            if (countdownSection) {
                countdownSection.textContent = "¡El evento ha comenzado!";
            }
        }
    }, 1000);
}

// Initialize countdown
updateCountdown();

// Form Submission
const inscripcionForm = document.getElementById('inscripcionForm');
const formSuccess = document.getElementById('formSuccess');

if (inscripcionForm) {
    inscripcionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(inscripcionForm);
        const data = Object.fromEntries(formData.entries());

        // Here you would normally send data to a server
        // For demo purposes, we'll just show success message
        console.log('Form data:', data);

        // Show success message
        inscripcionForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // You could send data to a server like this:
        /*
        fetch('/api/inscripcion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            inscripcionForm.style.display = 'none';
            formSuccess.style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al procesar tu inscripción. Por favor, inténtalo de nuevo.');
        });
        */
    });
}

// Reset form function
function resetForm() {
    if (inscripcionForm) {
        inscripcionForm.reset();
        inscripcionForm.style.display = 'block';
    }
    if (formSuccess) {
        formSuccess.style.display = 'none';
    }
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Update price display based on number of plazas
const plazasSelect = document.getElementById('plazas');
if (plazasSelect) {
    plazasSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        console.log('Seleccionadas:', selectedOption.text);
    });
}

// Smooth header on scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Log page load
console.log('Cena Solidaria 2025 - Casa de Acogida La Guía - Website loaded successfully!');
console.log('For any issues, please contact: casadeacogidaguia@hotmail.es');
