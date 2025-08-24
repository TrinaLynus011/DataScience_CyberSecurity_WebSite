document.addEventListener('DOMContentLoaded', () => {
    // Admission Popup functionality
    const popupOverlay = document.getElementById('popupOverlay');
    const admissionPopup = document.getElementById('admissionPopup');
    const closePopup = document.getElementById('closePopup');

    function showPopup() {
        popupOverlay.classList.add('active');
        admissionPopup.classList.add('active');
    }

    function hidePopup() {
        popupOverlay.classList.remove('active');
        admissionPopup.classList.remove('active');
    }

    // Show popup after a delay (e.g., 2 seconds)
    setTimeout(showPopup, 2000);

    closePopup.addEventListener('click', hidePopup);
    popupOverlay.addEventListener('click', hidePopup); // Close when clicking outside popup

    // Image Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            goToSlide(index);
            startSlider();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    prevButton.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        startSlider();
    });

    nextButton.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        startSlider();
    });

    // Initialize slider
    showSlide(currentSlide);
    startSlider();


    // Scroll Animations (fade-in-on-scroll)
    const fadeInElements = document.querySelectorAll('.fade-in-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

});