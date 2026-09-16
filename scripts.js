/**
 * MOUSSINOU MAMA (MSN) — PORTFOLIO ENGINE
 * Senior Software Engineer & Systems Architect
 */

// ==========================================
// 1. In-depth Case Studies Database
// ==========================================
const CASE_STUDIES = {
    minfo: {
        title: "Minfo — Écosystème AudioQR & QR Commerce",
        subtitle: "Monorepo polyglotte distribué (Backend Django REST, Web React 19, Mobile Flutter, Shopify Embedded)",
        badge: "Flagship Ecosystem",
        category: "distributed",
        role: "Lead Software Engineer & Systems Architect (CodeLab)",
        stack: ["Django 5", "DRF", "React 19", "Flutter", "Shopify App Bridge", "PostgreSQL", "Redis", "WebSockets", "Nginx", "Docker"],
        problem: "Connecter des objets physiques (packagings, cartes de visite, événements, commerces) à des expériences digitales instantanées sans friction applicative, avec synchronisation omnicanale en temps réel et intégration native e-commerce pour marchands Shopify.",
        architecture: `
minfo/
├── services/api/              # API REST Django (30+ modules métier)
│   ├── campaigns/ & studio/   # Drag & drop builder, multi-pages, design engine
│   ├── soundcode_sdk/         # Détection de signature audio & AudioQR propriétaire
│   ├── shopify_bridge/        # Échange de tokens marchands & synchronisation catalogue
│   ├── wallet_passes/         # Émission de pass Apple & Google Wallet
│   └── integrations/          # WebSockets realtime & webhooks transactionnels
├── minfo-web/                 # React 19 SPA (Vite, i18next 17 langues, TipTap, Vercel CI/CD)
├── minfo-flutter/             # Application cross-platform (WebRTC, scanner QR, AudioQR engine)
├── minfo-shopify-dash/        # Application embarquée Shopify (Polaris, App Bridge)
└── packages/                  # OpenAPI spec contract, Studio-UI, Dart AudioQR SDK
        `.trim(),
        highlights: [
            "Conception d'une architecture API-first régie par un contrat OpenAPI partagé entre 4 clients distincts (Web, Flutter, Shopify, Partenaires).",
            "Développement du SDK Dart pour le décodage en temps réel des signatures audio ultra-haute fréquence (AudioQR) et QR codes.",
            "Internationalisation intégrale en 17 langues (i18next) avec support RTL pour l'arabe et typographies adaptées.",
            "Pipeline de déploiement haute disponibilité sur VPS Ubuntu avec Nginx reverse proxy, sockets Gunicorn, workers Redis et monitoring PostHog/Firebase."
        ],
        metrics: [
            { label: "Modules Backend", val: "30+" },
            { label: "Langues Supportées", val: "17" },
            { label: "Cibles Cross-Platform", val: "4 (Web, iOS, Android, Shopify)" },
            { label: "Disponibilité", val: "99.9%" }
        ],
        links: [
            { text: "Documentation Écosystème", url: "#" }
        ]
    },

    iskane: {
        title: "ISKANE A2S — Foyer Universitaire Islamique",
        subtitle: "Système d'admission universitaire de bout en bout avec QCM anti-triche & scoring automatisé",
        badge: "Full-Stack Enterprise",
        category: "cloud",
        role: "Full-Stack Architect & Lead Developer",
        stack: ["React 18", "Django 5 + DRF", "Vite PWA", "PostgreSQL", "Tailwind CSS", "Zustand", "ReportLab", "Brevo API", "Railway", "Vercel"],
        problem: "Automatiser l'intégralité du concours d'admission et du suivi académique de centaines de candidats : de la candidature en 6 étapes jusqu'aux jurys oraux, avec une garantie d'intégrité absolue lors des épreuves de QCM à distance.",
        architecture: `
iskane-system/
├── backend/ (8 Django apps)
│   ├── users/                 # RBAC (5 rôles distincts, vérification OTP, JWT)
│   ├── applications/          # Dossier candidat 6 étapes, upload documents, workflows
│   ├── qcm/                   # Épreuves synchronisées, timer strict, anti-cheat engine
│   ├── oral/                  # Grille de notation sur 5 critères par jury
│   └── students/              # Gestion académique, sanctions et réintégrations automatiques
└── frontend/ (React 18 PWA)   # Offline-first Workbox, formulaires Zod, support FR ↔ AR (RTL)
        `.trim(),
        highlights: [
            "Moteur de QCM sécurisé : OTP unique par e-mail, horodatage serveur et détection active de perte de focus d'écran (anti-triche avec disqualification ou ajustement automatique du score).",
            "Génération dynamique de relevés et classements d'admission au format PDF via ReportLab avec normalisation toponymique et gestion des alias municipaux.",
            "Support bilingue complet Français / Arabe avec adaptation bidirectionnelle de l'interface (RTL fluide).",
            "Architecture RBAC robuste à 5 rôles (Candidat, Examinateur, Enseignant, Admin, Super Admin) protégeant plus de 130 endpoints REST."
        ],
        metrics: [
            { label: "Endpoints API", val: "130+" },
            { label: "Rôles RBAC", val: "5" },
            { label: "Étapes Candidature", val: "6" },
            { label: "Intégrité QCM", val: "Anti-triche actif" }
        ],
        links: [
            { text: "Documentation Projet", url: "#" }
        ]
    },

    masante: {
        title: "MaSanté+ — Plateforme de Santé Numérique Mobile-First",
        subtitle: "Solution e-santé tripartite (Patients, Praticiens, Admins) pour le suivi médical au Bénin",
        badge: "HealthTech / Mobile",
        category: "mobile",
        role: "Lead Mobile & Backend Developer",
        stack: ["Flutter 3.x", "Riverpod", "Django 4.2 DRF", "PostgreSQL", "Firebase Messaging (FCM)", "Google Auth", "drf-spectacular"],
        problem: "Décloisonner l'accès aux soins de santé primaires au Bénin en fournissant une application mobile rapide, sécurisée et capable de fonctionner avec une connectivité intermittente, tout en garantissant la confidentialité des dossiers médicaux.",
        architecture: `
MaSante/ (Monorepo)
├── backend/                   # Django REST Framework (7 apps modulaires)
│   ├── accounts/ & medical/   # Dossier médical informatisé, rôles stricts, auth Google
│   ├── appointments/          # Prise de RDV, intégration visio/meeting
│   ├── subscriptions/         # Forfaits & souscriptions santé
│   └── notifications/         # Notification engine (FCM push + local badge)
└── frontend/                  # Flutter iOS & Android (Clean architecture par features)
    ├── core/ & network/       # Dio interceptor, JWT rotation avec Flutter Secure Storage
    └── features/              # Riverpod state providers, UI Material ergonomique
        `.trim(),
        highlights: [
            "Architecture modulaire Flutter régie par Riverpod 2.x et repository pattern pour une séparation nette entre couche de présentation et logique métier.",
            "Suite de 39+ tests automatisés couvrant les workflows critiques d'authentification, de gestion de sessions et de sécurité des données de santé.",
            "Stockage sécurisé des tokens chiffrés sur le terminal mobile via Flutter Secure Storage et intercepteur réseau Dio avec rafraîchissement transparent.",
            "Contrat d'API documenté et typé automatiquement via drf-spectacular (OpenAPI / Swagger)."
        ],
        metrics: [
            { label: "Tests Unitaires Backend", val: "39+" },
            { label: "Modules Métier", val: "7" },
            { label: "Rôles Utilisateurs", val: "3 (Patient, Agent, Admin)" },
            { label: "Push Notification", val: "FCM Temps Réel" }
        ],
        links: [
            { text: "Documentation Technique", url: "#" }
        ]
    },

    allopro: {
        title: "AlloPro — Plateforme de Services de Proximité",
        subtitle: "Application mobile de mise en relation de clients et prestataires qualifiés au Bénin",
        badge: "Live Play Store",
        category: "mobile",
        role: "Lead Mobile Developer",
        stack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Storage", "Firebase Auth", "GetX", "Google Play"],
        problem: "Permettre aux ménages et entreprises de trouver en quelques clics des artisans et prestataires vérifiés, tout en offrant aux professionnels un canal de visibilité avec abonnements et messagerie instantanée.",
        architecture: `
AlloPro Architecture:
- Client Flutter optimisé pour smartphones Android d'entrée à haut de gamme.
- Base NoSQL temps réel Firestore avec indexation multi-critères (spécialité, ville, note moyenne).
- Push notifications ciblées (Firebase Cloud Messaging) lors de devis, messages et avis clients.
- Intégration de formule d'abonnement AlloPro+ (3 paliers de visibilité).
        `.trim(),
        highlights: [
            "Déploiement public réussi sur le Google Play Store avec des centaines de téléchargements actifs.",
            "Messagerie instantanée bidirectionnelle en temps réel avec upload d'images et statut de lecture.",
            "Recherche géolocalisée et filtrage dynamique par métier et disponibilité."
        ],
        metrics: [
            { label: "Statut", val: "En Production" },
            { label: "Store", val: "Google Play Store" },
            { label: "Langues", val: "FR, EN, AR" }
        ],
        links: [
            { text: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.allopro.allopro" },
            { text: "Vidéo Démo YouTube", url: "https://youtu.be/XSc0m07hXcM?si=pplgiT2FSJfK-_qj" }
        ]
    },

    parky: {
        title: "Parky — Système Intelligent de Réservation de Parking",
        subtitle: "Application mobile géolocalisée temps réel pour conducteurs et gestionnaires de parkings",
        badge: "IoT & Mobility",
        category: "mobile",
        role: "Mobile & Cloud Developer",
        stack: ["Flutter", "Firebase", "Google Maps API", "Geolocator", "Stripe / Mobile Money"],
        problem: "Fluidifier la recherche de stationnement urbain en permettant aux conducteurs de réserver et payer leur place en amont, tout en fournissant un tableau de bord d'occupation pour les propriétaires.",
        architecture: `
Parky Core:
- Tracking GPS précis via Geolocator et affichage custom sur Google Maps.
- Système multi-rôles : Conducteur (recherche & réservation) et Gestionnaire (gestion des places & tarification).
- Calendrier interactif avec validation de créneau anti-chevauchement.
        `.trim(),
        highlights: [
            "Affichage fluide de dizaines de marqueurs de stationnement avec clustering sur Google Maps.",
            "Tableau de bord d'analyse des revenus et taux d'occupation pour les propriétaires.",
            "Téléchargement de l'APK de test disponible pour démonstration en direct."
        ],
        metrics: [
            { label: "Cartographie", val: "Google Maps Temps Réel" },
            { label: "Rôles", val: "Client, Propriétaire, Admin" }
        ],
        links: [
            { text: "Télécharger l'APK", url: "https://drive.google.com/file/d/1ZduVRKx2NIhzlLoLQtLeKL4T0wroVE0w/view?usp=sharing" }
        ]
    },

    shopeasy: {
        title: "ShopEasy — E-Commerce Moderne Multi-Plateforme",
        subtitle: "Boutique en ligne complète avec persistance locale Hive, 12 langues et génération de factures PDF",
        badge: "Cross-Platform",
        category: "mobile",
        role: "Mobile Developer",
        stack: ["Flutter", "Dart", "GetX", "Hive NoSQL", "PDF Generation", "Intl 12 Langues"],
        problem: "Créer une expérience d'achat ultra-rapide fonctionnant hors-ligne et en ligne sur Android, iOS, Web et Desktop, dotée d'une gestion complète du panier et de facturation instantanée.",
        architecture: `
ShopEasy Architecture:
- Gestion d'état réactive GetX avec cycle de vie optimisé.
- Cache ultra-rapide local via Hive NoSQL pour un démarrage instantané.
- Moteur d'internationalisation couvrant 12 langues (FR, EN, AR, ES, DE, IT, PT, RU, CN, JP, KR, HI).
- Module de génération de reçus d'achat au format PDF téléchargeables.
        `.trim(),
        highlights: [
            "Catalogue interactif avec gestion des variantes complexes (tailles, couleurs, capacités de stockage).",
            "Tableau de bord administrateur avec suivi de l'inventaire et statistiques de ventes.",
            "Prise en charge native du thème clair et sombre persistant."
        ],
        metrics: [
            { label: "Langues", val: "12 Langues" },
            { label: "Moteur Local", val: "Hive DB" }
        ],
        links: [
            { text: "Détails Projet", url: "#" }
        ]
    },

    covid19: {
        title: "Plateforme IA de Diagnostic Prédictif COVID-19",
        subtitle: "Diagnostic médical assisté par apprentissage automatique à partir de biomarqueurs et signaux respiratoires",
        badge: "AI & Healthcare",
        category: "ai",
        role: "Data Scientist & ML Engineer",
        stack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy", "Data Science"],
        problem: "Offrir un outil de triage médical rapide pour estimer la probabilité d'infection au COVID-19 à partir de données respiratoires cliniques.",
        architecture: `
ML Pipeline:
- Prétraitement et nettoyage des données cliniques avec imputation et standardisation.
- Entraînement et optimisation d'hyperparamètres de modèles supervisés (Random Forest, Gradient Boosting).
- Déploiement cloud sur Streamlit pour une utilisation médicale interactive en temps réel.
        `.trim(),
        highlights: [
            "Modèle prédictif évalué avec une haute sensibilité pour minimiser les faux négatifs cliniques.",
            "Application en ligne accessible publiquement et documentée par un rapport technique approfondi."
        ],
        metrics: [
            { label: "Interface", val: "Streamlit Cloud Live" },
            { label: "Discipline", val: "Machine Learning Médical" }
        ],
        links: [
            { text: "Tester l'application en ligne", url: "https://moussinou-covid-diagnostics.streamlit.app/" },
            { text: "Lire le document technique", url: "https://drive.google.com/file/d/1jl1MJON2KpFDIaJZsnYck7PHzKHaN5Uv/view?usp=sharing" }
        ]
    },

    churn: {
        title: "Prédiction de Désabonnement Client (Telecom Churn)",
        subtitle: "Système prédictif ML pour anticiper et prévenir la perte de clients télécoms",
        badge: "Data Science",
        category: "ai",
        role: "Data Scientist",
        stack: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "Feature Engineering"],
        problem: "Identifier proactivement les abonnés à haut risque d'attrition pour déclencher des campagnes de rétention ciblées.",
        architecture: `
Data Pipeline:
- Analyse exploratoire des variables comportementales (durée d'appels, consommation données, réclamations).
- Classification avec matrice de confusion optimisée pour maximiser le ROI de rétention.
- Dashboard interactif de simulation en direct pour les équipes marketing.
        `.trim(),
        highlights: [
            "Génération d'insights d'interprétabilité (SHAP values) pour expliquer les motifs de churn.",
            "Application web interactive déployée sur Streamlit."
        ],
        metrics: [
            { label: "Application", val: "Streamlit Live" },
            { label: "Domaine", val: "Predictive Analytics" }
        ],
        links: [
            { text: "Tester la solution en direct", url: "https://moussinouchurnpredict.streamlit.app/" }
        ]
    },

    robotics: {
        title: "Bras Robotique Autonome Intelligent",
        subtitle: "Système robotique combinant Computer Vision et tri autonome de composants",
        badge: "Robotics & CV",
        category: "ai",
        role: "Robotics & Computer Vision Engineer (EEIA)",
        stack: ["Python", "OpenCV", "TensorFlow", "Robotique Embarquée", "Traitement de Signal"],
        problem: "Concevoir un bras mécanique autonome capable d'identifier, localiser dans l'espace et trier avec précision des composants électroniques sur une chaîne logistique.",
        architecture: `
Vision & Control Pipeline:
- Flux vidéo traité en temps réel via OpenCV (détection de contours, segmentation de couleur et morphologie).
- Classification d'objets par réseau de neurones convolutifs (CNN) sous TensorFlow.
- Asservissement cinématique direct des servomoteurs pour la préhension et le tri.
        `.trim(),
        highlights: [
            "Projet distingué lors de la session Bénin Excellence / EEIA.",
            "Fusion réussie entre traitement de signal visuel et commande mécanique temps réel."
        ],
        metrics: [
            { label: "Traitement", val: "Vision Temps Réel" },
            { label: "Frameworks", val: "OpenCV + TensorFlow" }
        ],
        links: []
    }
};

// ==========================================
// 2. Terminal Interactive Typing Animation
// ==========================================
const TERMINAL_SNIPPETS = [
    {
        cmd: "minfo --inspect-architecture",
        out: "✓ Backend: Django REST (30+ modules, PostgreSQL, Redis)\n✓ Web: React 19 SPA (17 languages)\n✓ Mobile: Flutter (AudioQR & QR Commerce)\n✓ Merchant: Shopify App Bridge & Polaris\n→ Status: Systems operational [99.9% uptime]"
    },
    {
        cmd: "pytest tests/ --cov=services",
        out: "services/api/campaigns ........ [100%]\nservices/api/connect .......... [100%]\nservices/api/soundcode_sdk .... [100%]\nservices/api/shopify_bridge ... [100%]\n================ 42 passed in 1.48s ================"
    },
    {
        cmd: "cat /etc/engineer/profile.json",
        out: '{\n  "engineer": "Moussinou MAMA (MSN)",\n  "degree": "Master SI & Networks (IFRI-UAC)",\n  "speciality": "Systems Architecture & Polyglot Dev",\n  "ready_for": ["Senior Full-Stack", "Lead Mobile", "Staff Architect"]\n}'
    }
];

function initHeroTerminal() {
    const cmdEl = document.getElementById("terminal-cmd");
    const outEl = document.getElementById("terminal-out");
    if (!cmdEl || !outEl) return;

    let snippetIndex = 0;

    function runSnippet() {
        const item = TERMINAL_SNIPPETS[snippetIndex];
        cmdEl.textContent = "";
        outEl.textContent = "";
        
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < item.cmd.length) {
                cmdEl.textContent += item.cmd.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    outEl.textContent = item.out;
                    setTimeout(() => {
                        snippetIndex = (snippetIndex + 1) % TERMINAL_SNIPPETS.length;
                        runSnippet();
                    }, 4000);
                }, 400);
            }
        }, 50);
    }

    runSnippet();
}

// ==========================================
// 3. Profile Avatar Toggle Animation
// ==========================================
function initProfileAvatar() {
    const avatar = document.getElementById("hero-avatar");
    if (!avatar) return;

    const avatars = ["msn.png", "msn1.jpeg"];
    let currIdx = 0;

    setInterval(() => {
        avatar.classList.add("fade");
        setTimeout(() => {
            currIdx = (currIdx + 1) % avatars.length;
            avatar.src = avatars[currIdx];
            avatar.classList.remove("fade");
        }, 400);
    }, 6000);
}

// ==========================================
// 4. Project Filter Tabs
// ==========================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "flex";
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

// ==========================================
// 5. Case Study Modal Engine
// ==========================================
function openCaseStudy(projectId) {
    const project = CASE_STUDIES[projectId];
    if (!project) return;

    const modalBackdrop = document.getElementById("case-study-modal");
    const modalTitle = document.getElementById("modal-project-title");
    const modalSub = document.getElementById("modal-project-subtitle");
    const modalBody = document.getElementById("modal-project-body");

    modalTitle.textContent = project.title;
    modalSub.textContent = project.subtitle;

    let metricsHtml = "";
    if (project.metrics && project.metrics.length > 0) {
        metricsHtml = `
            <div class="project-key-stats" style="margin-bottom: 2rem; background: var(--bg-tertiary); padding: 1rem 1.5rem; border-radius: var(--radius-md);">
                ${project.metrics.map(m => `
                    <div class="stat-item">
                        <span class="stat-val" style="font-size: 1.25rem;">${m.val}</span>
                        <span class="stat-desc">${m.label}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let linksHtml = "";
    if (project.links && project.links.length > 0) {
        linksHtml = `
            <div class="modal-section">
                <h4><i class="fas fa-link" style="color: var(--accent-cyan);"></i> Liens & Démonstrations</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem;">
                    ${project.links.map(l => `
                        <a href="${l.url}" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">
                            <i class="fas fa-external-link-alt"></i> ${l.text}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <span class="tag tag-cyan" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;"><i class="fas fa-user-tag"></i> ${project.role}</span>
            <span class="tag tag-purple" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;"><i class="fas fa-award"></i> ${project.badge}</span>
        </div>

        ${metricsHtml}

        <div class="modal-section">
            <h4><i class="fas fa-bullseye" style="color: var(--accent-rose);"></i> Le Défi Technique Résolu</h4>
            <p>${project.problem}</p>
        </div>

        <div class="modal-section">
            <h4><i class="fas fa-sitemap" style="color: var(--accent-cyan);"></i> Architecture Système & Flux de Données</h4>
            <pre class="arch-spec-box"><code>${escapeHtml(project.architecture)}</code></pre>
        </div>

        <div class="modal-section">
            <h4><i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> Réalisations & Bonnes Pratiques</h4>
            <ul class="hl-list" style="margin-top: 0.75rem;">
                ${project.highlights.map(h => `
                    <li><i class="fas fa-chevron-right"></i> <span>${h}</span></li>
                `).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h4><i class="fas fa-layer-group" style="color: var(--accent-indigo);"></i> Stack Technique Détaillée</h4>
            <div class="skill-chips" style="margin-top: 0.5rem;">
                ${project.stack.map(s => `<span class="skill-chip">${s}</span>`).join('')}
            </div>
        </div>

        ${linksHtml}
    `;

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCaseStudy() {
    const modalBackdrop = document.getElementById("case-study-modal");
    if (modalBackdrop) {
        modalBackdrop.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================
// 6. Theme Toggle (Dark/Light)
// ==========================================
function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    if (!toggleBtn || !themeIcon) return;

    const savedTheme = localStorage.getItem("msn-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme, themeIcon);

    toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("msn-theme", newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconEl) {
    if (theme === "light") {
        iconEl.classList.remove("fa-moon");
        iconEl.classList.add("fa-sun");
    } else {
        iconEl.classList.remove("fa-sun");
        iconEl.classList.add("fa-moon");
    }
}

// ==========================================
// 7. Language Selector Switcher
// ==========================================
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

// ==========================================
// 8. Clipboard Copy Utility
// ==========================================
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHtml = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="fas fa-check" style="color: var(--accent-emerald);"></i>';
        setTimeout(() => {
            btnElement.innerHTML = originalHtml;
        }, 2000);
    });
}

// ==========================================
// 9. DOM Ready Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initHeroTerminal();
    initProfileAvatar();
    initProjectFilters();

    // Close modal on click outside or escape key
    const modal = document.getElementById("case-study-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeCaseStudy();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCaseStudy();
        }
    });

    // Form simulation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Transmis !';
                submitBtn.style.background = "var(--accent-emerald)";
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = "";
                }, 3000);
            }, 1000);
        });
    }
});
