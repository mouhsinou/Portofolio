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

// Gestion de l'envoi du Formulaire de Contact via FormSubmit AJAX
function initContactForm() {
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    if (!form || !statusDiv || !submitBtn) return;

    // Messages multilingues adaptés à la page
    const lang = document.documentElement.lang || "en";
    const i18n = {
        en: {
            sending: '<i class="fas fa-spinner fa-spin"></i> Sending message...',
            success: '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. I will get back to you soon.',
            error: '<i class="fas fa-exclamation-triangle"></i> Oops! An error occurred while sending. Please try again or email me directly at moussinoumama52@gmail.com.',
            btnDefault: '<i class="fas fa-paper-plane"></i> Send Message'
        },
        fr: {
            sending: '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...',
            success: '<i class="fas fa-check-circle"></i> Merci ! Votre message a été envoyé avec succès. Je vous répondrai très rapidement.',
            error: '<i class="fas fa-exclamation-triangle"></i> Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou m\'écrire directement à moussinoumama52@gmail.com.',
            btnDefault: '<i class="fas fa-paper-plane"></i> Envoyer le Message'
        },
        ar: {
            sending: '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...',
            success: '<i class="fas fa-check-circle"></i> شكراً لك! تم إرسال رسالتك بنجاح. سأرد عليك في أقرب وقت.',
            error: '<i class="fas fa-exclamation-triangle"></i> عذراً! حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقاً أو مراسلتي عبر البريد مباشرة.',
            btnDefault: '<i class="fas fa-paper-plane"></i> إرسال الرسالة'
        }
    };

    const t = i18n[lang] || i18n.en;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Réinitialiser l'état
        statusDiv.className = "form-status";
        statusDiv.innerHTML = "";
        statusDiv.style.display = "none";

        // Bouton en cours de chargement
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = t.sending;

        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/moussinoumama52@gmail.com", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            });

            if (response.ok) {
                statusDiv.className = "form-status success";
                statusDiv.innerHTML = t.success;
                statusDiv.style.display = "flex";
                form.reset();
            } else {
                throw new Error("HTTP " + response.status);
            }
        } catch (err) {
            console.error("Erreur envoi formulaire:", err);
            statusDiv.className = "form-status error";
            statusDiv.innerHTML = t.error;
            statusDiv.style.display = "flex";
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml || t.btnDefault;
        }
    });
}

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initMobileMenu();
    initContactForm();
});


