/**
 * MOUSSINOU MAMA (MSN) — Scripts Simples & Efficaces
 */

// Basculement de Thème (Sombre / Clair)
function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    if (!toggleBtn || !themeIcon) return;

    const savedTheme = localStorage.getItem("msn-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme, themeIcon);

    toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("msn-theme", newTheme);
        updateIcon(newTheme, themeIcon);
    });
}

function updateIcon(theme, iconEl) {
    if (theme === "light") {
        iconEl.classList.remove("fa-moon");
        iconEl.classList.add("fa-sun");
    } else {
        iconEl.classList.remove("fa-sun");
        iconEl.classList.add("fa-moon");
    }
}

// Changement de Langue
function handleLanguageChange(selectElement) {
    const lang = selectElement.value;
    if (lang === "ar") {
        window.location.href = "index-ar.html";
    } else if (lang === "en") {
        window.location.href = "index.html";
    } else {
        window.location.href = "index-fr.html";
    }
}

// Copier dans le presse-papier
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHtml = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="fas fa-check" style="color: var(--success);"></i>';
        setTimeout(() => {
            btnElement.innerHTML = originalHtml;
        }, 2000);
    });
}

// Gestion du Menu Mobile
function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const backdrop = document.getElementById("mobile-backdrop");

    if (!menuBtn || !mobileNav) return;

    function openMenu() {
        mobileNav.classList.add("active");
        if (backdrop) backdrop.classList.add("active");
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        mobileNav.classList.remove("active");
        if (backdrop) backdrop.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
    }

    function toggleMenu() {
        const isOpen = mobileNav.classList.contains("active");
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuBtn.addEventListener("click", toggleMenu);

    if (backdrop) {
        backdrop.addEventListener("click", closeMenu);
    }

    // Fermer quand on clique sur un lien de navigation
    const navLinks = mobileNav.querySelectorAll(".mobile-nav-link, .btn");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // Fermer avec la touche Échap
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileNav.classList.contains("active")) {
            closeMenu();
        }
    });

    // Fermer si la fenêtre est redimensionnée au-delà du breakpoint mobile
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
            closeMenu();
        }
    });
}

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initMobileMenu();
});

