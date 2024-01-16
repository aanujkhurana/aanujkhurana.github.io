// script.js

// For Cursor Animation
const circle = document.getElementById('circle');
document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    if (e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.parentNode.tagName === 'BUTTON') {
        circle.classList.add('big');
    } else {
        circle.classList.remove('big');
    }

    setTimeout(() => { 
        circle.style.left = `${e.pageX - width/2}px`;
        circle.style.top = `${e.pageY - height/2}px`;
    }, 10);
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
}

// Show/hide the scroll-to-top button based on scroll position
document.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
    } else {
    scrollButton.style.display = 'none';
    }
});

// For Nav Links active color
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");

    function updateActiveLink() {
    const fromTop = window.scrollY;

    sections.forEach((section, index) => {
        if (
        section.offsetTop <= fromTop + 50 &&
        section.offsetTop + section.offsetHeight > fromTop + 50
        ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
        }
    });
    }
    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("resize", updateActiveLink);
});

// FOR PROJECTS SECTION TOGGLE DESIGN and DEVELOPMENT

function toggleSection(sectionId) {
    // Get the currently active section
    const currentSection = document.querySelector('.active-section');

    // Remove the 'active-section' class from the current section
    if (currentSection) {
        currentSection.classList.remove('active-section');
    }

    // Add the 'active-section' class to the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active-section');

    // Update the transform property for animation
    if (sectionId === 'development-section') {
        selectedSection.style.transform = 'translateX(0)';
        // Hide the other section
        document.getElementById('design-section').style.transform = 'translateX(100%)';
    } else {
        selectedSection.style.transform = 'translateX(0)';
        // Hide the other section
        document.getElementById('development-section').style.transform = 'translateX(-100%)';
    }

    // Set active class to the corresponding button
    const developmentButton = document.querySelector('.bttn');
    const designButton = document.querySelector('.bttn2');
    
    if (sectionId === 'development-section') {
        developmentButton.classList.add('active');
        designButton.classList.remove('active');
    } else {
        developmentButton.classList.remove('active');
        designButton.classList.add('active');
    }
}

// Initially show the Development section
window.onload = function () {
    toggleSection('development-section');
};


//FOR NAV BG ON SCROLL 

// document.addEventListener('DOMContentLoaded', function() {
//     var nav = document.getElementById('nav');

//     window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
//     });
// });