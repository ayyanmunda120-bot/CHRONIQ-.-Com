/* =========================================================
   CHRONIQ - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE NAVBAR
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("show");

        const isOpen = mainNav.classList.contains("show");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });


    /* Close menu when a link is clicked */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("show");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        if (
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            mainNav.classList.remove("show");

            menuToggle.innerHTML = "☰";

        }

    });

}


/* =========================================================
   2. SEARCH
========================================================= */

const searchForm = document.querySelector(".search-box form");
const searchInput = document.querySelector(".search-box input");

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {

            alert("Please enter a product name.");

            searchInput.focus();

            return;

        }

        alert(
            "Searching for: " + searchValue
        );

    });

}


/* =========================================================
   3. NEWSLETTER
========================================================= */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput =
            newsletterForm.querySelector("input[type='email']");

        const email = emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            emailInput.focus();

            return;

        }

        alert(
            "Thank you for subscribing to CHRONIQ!"
        );

        emailInput.value = "";

    });

}


/* =========================================================
   4. ACTIVE NAVBAR LINK
========================================================= */

const allNavLinks =
    document.querySelectorAll(".nav-link");

allNavLinks.forEach(link => {

    link.addEventListener("click", function () {

        allNavLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* =========================================================
   5. SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#"
        ) {

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* =========================================================
   6. PRODUCT BUTTONS
========================================================= */

const productButtons =
    document.querySelectorAll(".product-bottom a");

productButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const productCard =
            this.closest(".product-card");

        const productName =
            productCard.querySelector("h3")?.textContent.trim();

        if (productName) {

            alert(
                productName +
                " - Product details coming soon!"
            );

        }

    });

});


/* =========================================================
   7. PAGE LOAD ANIMATION
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});


/* =========================================================
   8. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".category-card, .product-card, .review-card, .about-container"
    );

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   9. CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} CHRONIQ. All Rights Reserved.`;

}


/* =========================================================
   10. ESC KEY - CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        mainNav &&
        menuToggle
    ) {

        mainNav.classList.remove("show");

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});