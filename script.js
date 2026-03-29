// Countdown Timer
function updateCountdown() {
  const eventDate = new Date('April 15, 2026 11:00:00').getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<p style="font-family:var(--display);font-size:3rem;color:var(--red);">EVENT IN PROGRESS!</p>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

// FAQ Toggle
function toggleFaq(element) {
  const item = element.parentElement;
  const isActive = item.classList.contains('active');
  
  // Close all others
  document.querySelectorAll('.faq-item').forEach(faq => {
    faq.classList.remove('active');
  });
  
  // Toggle current
  if (!isActive) {
    item.classList.add('active');
  }
}

// Form Submission
function handleSubmit(e) {
  e.preventDefault();
  alert('Thank you for registering! We will contact you with further details soon.');
}

// Scroll to Register
function scrollToRegister() {
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Top Button
window.addEventListener('scroll', () => {
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 500) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});
