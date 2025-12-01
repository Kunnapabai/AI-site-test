// Main JavaScript file for Personal Website

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  // Save the user's preference in localStorage
  const isDarkMode = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDarkMode);
}

// Function to initialize dark mode based on user preference or system preference
function initDarkMode() {
  // Check if user has previously set a preference
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode !== null) {
    if (savedDarkMode === 'true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    return;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }
}

// Function to handle mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  }
}

// Function to close mobile menu
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
  }
}

// Function to handle smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Function to handle form submission
function handleFormSubmission(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('border-red-500');
        } else {
          input.classList.remove('border-red-500');
        }
      });
      
      if (isValid) {
        // In a real implementation, you would send the form data to a server
        console.log('Form submitted successfully!');
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }
}

// Function to initialize all scripts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dark mode
  initDarkMode();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Initialize form handling if contact form exists
  handleFormSubmission('contact-form');
  
  // Add event listener for dark mode toggle if there's a toggle button
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  // Add event listener for mobile menu toggle if there's a toggle button
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Add event listener for mobile menu close button
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  }
});

// Export functions for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleDarkMode,
    initDarkMode,
    toggleMobileMenu,
    initSmoothScrolling,
    handleFormSubmission
  };
}