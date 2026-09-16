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

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
});
