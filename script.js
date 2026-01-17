/* ===============================
   SMOOTH SCROLL FOR NAV LINKS
================================ */
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            targetSection?.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* ===============================
   ACTIVE NAV LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });

    /* Sticky Navbar Shadow */
    navbar.style.boxShadow =
        window.scrollY > 60 ? "0 6px 18px rgba(0,0,0,0.3)" : "none";
});


/* ===============================
   FADE-IN ANIMATION (MODERN)
================================ */
const animatedElements = document.querySelectorAll(
    "section, .skill-card, .project-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

animatedElements.forEach(el => observer.observe(el));


/* ===============================
   OPTIONAL: SCROLL TO TOP BUTTON
   (Enable only if button exists)
================================ */
/*
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
*/
