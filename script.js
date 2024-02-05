// script.js

// bg animation 
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX);
        curY += (tgY - curY);
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

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
    if (window.scrollY > 650) {
    scrollButton.style.display = 'block';
    } else {
    scrollButton.style.display = 'none';
    }
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

// ME Image Section Fade out animation
document.addEventListener("DOMContentLoaded", function () {
    const home = document.getElementById('meImage');

    function fadeOutImage() {
    const scrollPosition = window.scrollY;
    const triggerPosition = 0;

    if (scrollPosition >= triggerPosition) {
        home.style.opacity = 1 - (scrollPosition - triggerPosition) / 300;
    } else {
        home.style.opacity = 1;
    }
    }
    window.addEventListener('scroll', fadeOutImage);
});


/// smooth nav scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
    const spanLinks = document.querySelectorAll('.subline a, .bodytxt2 a');

    function attachClickEvent(element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    }

    navLinks.forEach(link => {
        attachClickEvent(link);
    });

    spanLinks.forEach(link => {
        attachClickEvent(link);
    });
});


// nav bg on scroll
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 1900) {
            navbar.style.backgroundColor = "rgba(18, 11, 79, 1)";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});

// nav bar text color 
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');

    function highlightNavLink() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });

                navLinks[index].classList.add('active');
            }
        });
    }

    document.addEventListener('scroll', highlightNavLink);

    // Initial call to set the active section on page load
    highlightNavLink();
});


// resume download
var buttons = document.querySelectorAll('.btn-resumedownload');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = 'https://aanujkhurana.github.io/resume/anujkhurana.pdf';
        link.target = '_blank'; // Open in a new tab or window
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});


// form submission //
// clear form after submissiom
function clearForm() {
    // Get the form element by its ID
    var form = document.getElementById('myForm');

    // Reset the form to clear the text fields
    form.reset();
}
// form submission handle for popup
async function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data using FormData object
    var form = document.getElementById('myForm');
    var formData = new FormData(form);

    // Perform any additional actions you need here
    console.log('Form data:', formData);

    // Clear the form
    clearForm();

    // Manually submit the form using fetch
    try {
        const response = await fetch('https://formspree.io/f/mqkrewbn', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            console.log('Form submitted successfully');

            // Display success overlay
            document.getElementById('overlay').style.display = 'flex';

            // Hide overlay after 3 seconds
            setTimeout(function () {
                document.getElementById('overlay').style.display = 'none';
            }, 3000);
        } else {
            console.error('Error submitting form:', response.statusText);
            // Handle error if needed
        }
    } catch (error) {
        console.error('Error submitting form:', error.message);
        // Handle error if needed
    }
}