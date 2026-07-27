/* ==========================================================
   Creation Hair & Beauty Salon - main script
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- BOOKING FORM (WhatsApp) ---------- */
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let message = document.getElementById("message").value;

            let text =
`🌸 New Beauty Salon Appointment

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

💬 Message:
${message}`;

            let whatsapp =
`https://wa.me/923200147783?text=${encodeURIComponent(text)}`;

            window.open(whatsapp, "_blank");
            bookingForm.reset();
        });
    }

    /* ---------- MOBILE MENU TOGGLE ---------- */
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menuToggle.classList.remove("active");
                nav.classList.remove("active");
            });
        });
    }

    /* ---------- SCROLL TO TOP BUTTON ---------- */
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 350) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ---------- HEADER SHADOW ON SCROLL ---------- */
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 60) {
                header.style.background = "rgba(0,0,0,.95)";
            } else {
                header.style.background = "rgba(0,0,0,.80)";
            }
        });
    }

    /* ---------- HERO BACKGROUND AUTO SLIDER ---------- */
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dots span");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(function (slide) { slide.classList.remove("active"); });
        dots.forEach(function (dot) { dot.classList.remove("active"); });

        slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 4500);
    }

    if (slides.length > 0) {
        showSlide(0);
        startSlider();

        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                clearInterval(slideInterval);
                showSlide(i);
                startSlider();
            });
        });
    }

    /* ---------- SCROLL REVEAL ANIMATION ---------- */
    const revealEls = document.querySelectorAll(
        ".service-card, .gallery-item, .package-card, .price-card, .testimonial-card, .sub-service-card"
    );

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(function (el) {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "opacity .7s ease, transform .7s ease";
            revealObserver.observe(el);
        });
    }

});
