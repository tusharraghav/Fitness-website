document.addEventListener('DOMContentLoaded', function() {
    // Color Mode Toggle Functionality
    const colorModeToggle = document.getElementById('colorModeToggle');
    const colorModeToggleMobile = document.getElementById('colorModeToggleMobile');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference or use system preference
    const savedMode = localStorage.getItem('colorMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'dark' || (!savedMode && systemPrefersDark)) {
        htmlElement.classList.add('dark-mode');
        updateToggleIcons(true);
    }
    
    // Toggle function
    function toggleColorMode() {
        htmlElement.classList.toggle('dark-mode');
        const isDark = htmlElement.classList.contains('dark-mode');
        localStorage.setItem('colorMode', isDark ? 'dark' : 'light');
        updateToggleIcons(isDark);
    }
    
    // Update toggle icons
    function updateToggleIcons(isDark) {
        const iconClass = isDark ? 'fa-sun' : 'fa-moon';
        const elements = [colorModeToggle, colorModeToggleMobile];
        
        elements.forEach(el => {
            if (el) {
                const icon = el.querySelector('i');
                icon.classList.remove('fa-moon', 'fa-sun');
                icon.classList.add(iconClass);
            }
        });
    }
    
    // Event listeners
    if (colorModeToggle) colorModeToggle.addEventListener('click', toggleColorMode);
    if (colorModeToggleMobile) colorModeToggleMobile.addEventListener('click', toggleColorMode);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });

    // Hero Section initialization
        var typed = new Typed('.typed-text', {
            strings: ["Bodybuilding", "Fitness", "Strength", "Health", "Performance"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        // Animate stats counting
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsSection = document.querySelector('.hero-stats');
            
        const animateStats = () => {
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-target') || +stat.innerText;
                const increment = target / 50;
                let current = 0;
                    
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.innerText = target + (stat.innerText.includes('+') ? '+' : stat.innerText.includes('%') ? '%' : '');
                        clearInterval(timer);
                    } else {
                        stat.innerText = Math.floor(current) + (stat.innerText.includes('+') ? '+' : stat.innerText.includes('%') ? '%' : '');
                    }
                }, 20);
            });
        };

        // Intersection Observer for stats animation
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            statsObserver.observe(statsSection);

            // About Section
            const aboutBoxes = document.querySelectorAll('.about-box');
            
            const aboutObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });

            aboutBoxes.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(20px)';
                box.style.transition = 'all 0.5s ease';
                aboutObserver.observe(box);
            });
});

// Animation for service cards when they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const serviceCards = document.querySelectorAll('.service-card');
            
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
            
        serviceCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    });

// Animation for plan cards when they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const planCards = document.querySelectorAll('.plan-card');
            
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
            
        planCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    });

// Initialize carousel with interval
    document.addEventListener('DOMContentLoaded', function() {
        const reviewCarousel = new bootstrap.Carousel('#reviewCarousel', {
            interval: 5000,
            wrap: true,
            pause: 'hover'
        });
            
        // Animation for review cards when they come into view
        const reviewCards = document.querySelectorAll('.review-card');
            
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
            
        reviewCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    });

// Simple animation for contact cards when they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const contactCards = document.querySelectorAll('.contact-card');
            
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
            
        contactCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    });

// Simple animation for footer elements when they come into view
    document.addEventListener('DOMContentLoaded', function() {
        const footerElements = document.querySelectorAll('.footer-about, .footer-links, .footer-contact, .footer-newsletter');
            
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
            
        footerElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
            observer.observe(element);
        });
    });
