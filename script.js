// --- Données des compétences (skills) ---
const skills = [
    { name: 'JavaScript', level: 95, icon: '🟨' },
    {name: 'TypeScript', level: 70, icon: '🟦' },
    { name: 'React.js', level: 92, icon: '⚛️' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'Tailwind CSS', level: 88, icon: '💨' },
    { name: 'Supabase', level: 85, icon: '🟩' },
    { name: 'React Native', level: 80, icon: '📱' },
    { name: 'Vba', level: 65, icon: '📊' },
    { name: 'IA Consulting', level: 75, icon: '🤖' }
];

// --- Données des projets (projects) ---
const projects = [
    {
        id: 1,
        title: 'Hardware Power',
        description: 'Développement d\'une boutique en ligne complète avec panier, authentification et paiement intégré.',
        technologies: ['React Native', 'TypeScript', 'CSS'],
        image: 'https://plus.unsplash.com/premium_photo-1681426728047-2164a00fe3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym94JTIwY2FydG9ufGVufDB8fDB8fHww',
        demoUrl: '#',
        longDescription: 'En Cours de Developpement \nCette application e-commerce offre une expérience d\'achat et de location fluide et sécurisée. Les fonctionnalités incluent:\n- Authentification sécurisée avec JWT\n- Panier persistant\n- Paiement intégré via Stripe\n- Gestion des commandes\n- Interface administrateur\n- Système de recherche avancé',
        challenges: 'La gestion du state avec Redux et l\'intégration du système de paiement ont été les principaux défis.',
        duration: '2 mois',
        role: 'Développeur Frontend principal'
    },
    {
        id: 2,
        title: 'Kids Educ',
        description: 'C\'est un site vitrine pour un service éducatif pour enfants (KIDSeDUC). Il présente l\'offre, les activités, des témoignages et permet aux visiteurs de demander un rendez\‑vous ou de contacter l\'équipe.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGxlYXJuaW5nfGVufDB8fDB8fHww',
        demoUrl: 'https://sombre-mael.github.io/KidsEduc/',
        longDescription: 'Site vitrine présentant une offre éducative pour enfants et permettant aux visiteurs de découvrir les services et de contacter l\'équipe.',
        challenges: 'L\'optimisation des performances avec de grands ensembles de données et la mise à jour en temps réel.',
        duration: '2 mois',
        role: 'Développeur Full Stack'
    },
    {
        id: 3,
        title: 'Menu City',
        description: 'Application mobile cross-platform pour la possibiliter d\'inviter un ami a un resto proche.',
        technologies: ['React Native', 'TypeScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhdGUlMjBvZiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
        demoUrl: '#',
        longDescription: 'En cours de developpement \nApplication mobile performante incluant:\n- Localisation\n- Notifications push\n- Invitations\n- Mode sombre/clair\n- Widgets natifs',
        challenges: 'Resoudre un probleme courant et Assurer une expérience cohérente sur iOS et Android tout en maintenant des performances optimales.',
        duration: '4 mois',
        role: 'Développeur Mobile'
    },
    {
        id: 4,
        title: 'FJ TRUST MULTI SERVICES',
        description: 'Site web moderne pour entreprise avec CSS et design entièrement responsive.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://media.istockphoto.com/id/899274526/fr/photo/antenne-de-coucher-de-soleil-de-grue.webp?a=1&b=1&s=612x612&w=0&k=20&c=QNHLQHEV7IQphuryVjDymqClMhIFDP_j8fPZ3yTBbx8=',
        demoUrl: 'https://multisarl.com',
        longDescription: 'Site vitrine moderne avec:\n- Design responsive\n- Performance optimisée\n- SEO optimisé\n- Formulaires interactifs\n- Galerie dynamique',
        challenges: 'Créer des animations performantes et assurer une expérience fluide sur tous les appareils.',
        duration: '1 semaines',
        role: 'Développeur Frontend'
    },
    {
        id: 5,
        title: 'App Web Constellation',
        description: 'App Web de Constellation, prensentant l\'entrprise ainsi que ses activites au monde.',
        technologies: ['React', 'CSS', 'JavaScript', 'Tailwind CSS'],
        image: 'https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/350025544_133269706388736_1483241972385022764_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGfzqrmwmSOlOaLzPu10PGKnp_6RJJlO9Sen_pEkmU71N2rPi30vIjX2SG_1EcVW9nF_XJkCoXVlULpISS3EOSH&_nc_ohc=5z_XoRAcYMcQ7kNvwHmH9lu&_nc_oc=Adm9PvNfQNWIihvorGNHXtfXZLMfKdBupRT0Kic20SEdDK0V7k5dVLETPk5fbpXd46M&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&_nc_gid=ggaHKVZXr7dixMCaTQ6C-Q&oh=00_AfhfclmAKoZGmYhY7zkhO89fkf040_aLZyx3P1YI5trxXw&oe=6927EFA2',
        demoUrl: 'https://constellation-cd.netlify.app',
        longDescription: 'Plateforme de blog complète(a venir) avec:\n- Système de commentaires\n- Tags et catégories \nEn Bref beaucoup des nouvelles fonctionnalites en cours',
        challenges: 'L\'intégration de l\'éditeur WYSIWYG et la gestion des médias.',
        duration: '1 mois',
        role: 'Développeur Frontend'
    },
    {
        id: 6,
        title: 'Portfolio Personnel',
        description: 'Portfolio personnel moderne avec animations CSS avancées et design responsive.',
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1663882658055-40f1d4249867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D',
        demoUrl: 'https://sombre-mael.github.io/Mon-Portfolio/',
        longDescription: 'Portfolio personnel mettant en avant:\n- Animations CSS personnalisées\n- Design responsive\n- Mode sombre/clair\n- Formulaire de contact\n- Galerie de projets\n- Performance optimisée',
        challenges: 'Créer une expérience utilisateur unique tout en maintenant des temps de chargement rapides.',
        duration: '2 Semaines',
        role: 'Développeur Frontend'
    }
];

// --- Variables globales ---
let activeSection = 'home';
let isMenuOpen = false;
let scrollY = 0;

// --- Initialisation de la page ---
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();      // Initialisation du fond animé de particules
    initializeSkills();         // Affichage des compétences dans la section correspondante
    initializeProjects();       // Affichage des projets dans la section correspondante
    initializeScrollEffects();  // Effets lors du scroll et gestion de la visibilité des sections
    initializeNavigation();     // Gestion du menu de navigation (desktop & mobile)
    initializeTypingEffect();   // Effet de texte tapé dans le hero
    initializeContactForm();    // Gestion du formulaire de contact
    renderDebugData();          // Affichage des données brutes dans la section debug (JSON)
});

// --- Fond animé de particules ---
function initializeParticles() {
    const particlesContainer = document.getElementById('particles-container');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// --- Affichage dynamique des compétences dans la section "Compétences" ---
function initializeSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = ''; // Nettoie avant d'ajouter

    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'bg-black/50 p-6 rounded-xl hover:bg-black/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 skill-card visible'; // Ajoute 'visible'
        skillCard.style.animationDelay = `${index * 100}ms`;
        
        skillCard.innerHTML = `
            <div class="flex items-center mb-4">
                <span class="text-3xl mr-4 hover:scale-125 transition-transform">${skill.icon}</span>
                <h3 class="text-xl font-bold text-white">${skill.name}</h3>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                <div class="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full skill-progress skill-bar" style="--skill-level: ${skill.level}%"></div>
            </div>
            <p class="text-blue-400 font-semibold">${skill.level}%</p>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
}

// --- Affichage dynamique des projets dans la section "Projets" ---
function initializeProjects() {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Nettoie avant d'ajouter

    // Modale pour les détails du projet
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex items-center justify-center';
    modal.id = 'project-modal';
    document.body.appendChild(modal);

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-black/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group project-card visible';
        projectCard.style.animationDelay = `${index * 150}ms`;
        
        const techTags = project.technologies.map(tech => 
            `<span class="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs hover:bg-blue-600/40 transition-colors">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
            </div>
            
            <div class="p-6">
                <h3 class="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">${project.title}</h3>
                <p class="text-gray-300 mb-4 text-sm">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${techTags}
                </div>
                
                <div class="flex space-x-4">
                    <a 
                        href="${project.demoUrl}"
                        class="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors hover:underline"
                    >
                        🔗 Démo
                    </a>
                    <a 
                        href="${project.codeUrl}"
                        class="text-gray-400 hover:text-gray-300 font-semibold text-sm transition-colors hover:underline"
                    >
                        💻 Code
                    </a>
                    <button 
                        onclick="showProjectDetails(${project.id})"
                        class="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors hover:underline"
                    >
                        ℹ️ En savoir plus
                    </button>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });

    // Fonction pour afficher les détails du projet
    window.showProjectDetails = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        const modal = document.getElementById('project-modal');
        modal.innerHTML = `
            <div class="bg-gray-900 rounded-xl p-8 max-w-2xl mx-4 relative overflow-y-auto max-h-[90vh]">
                <button 
                    onclick="closeProjectModal()"
                    class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
                >
                    ×
                </button>

                <h2 class="text-3xl font-bold text-blue-400 mb-4">${project.title}</h2>
                
                <div class="mb-6">
                    <img 
                        src="${project.image}" 
                        alt="${project.title}"
                        class="w-full h-64 object-cover rounded-lg mb-4"
                    />
                </div>

                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold text-purple-400 mb-2">Description détaillée</h3>
                        <p class="text-gray-300 whitespace-pre-line">${project.longDescription}</p>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-purple-400 mb-2">Technologies utilisées</h3>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => 
                                `<span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm hover:bg-blue-600/40 transition-colors">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-purple-400 mb-2">Défis & Solutions</h3>
                        <p class="text-gray-300">${project.challenges}</p>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <h3 class="text-xl font-semibold text-purple-400 mb-2">Durée</h3>
                            <p class="text-gray-300">${project.duration}</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-purple-400 mb-2">Rôle</h3>
                            <p class="text-gray-300">${project.role}</p>
                        </div>
                    </div>

                    <div class="flex space-x-4 pt-4">
                        <a 
                            href="${project.demoUrl}"
                            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
                        >
                            Voir la démo
                        </a>
                        <a 
                            href="${project.codeUrl}"
                            class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors"
                        >
                            Voir le code
                        </a>
                    </div>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    // Fonction pour fermer la modale
    window.closeProjectModal = () => {
        const modal = document.getElementById('project-modal');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    // Fermer la modale en cliquant en dehors
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            closeProjectModal();
        }
    });
}

// --- Effets de scroll et gestion de la visibilité des sections ---
function initializeScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        scrollY = window.scrollY;
        const navbar = document.getElementById('navbar');
        
        if (scrollY > 50) {
            navbar.classList.add('bg-black/95', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-black/95', 'backdrop-blur-md', 'shadow-lg');
            navbar.classList.add('bg-transparent');
        }
        
        updateActiveSection();
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill bars when skills section becomes visible
                    if (entry.target.id === 'skills') {
                        animateSkillBars();
                    }
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Observe all sections with animation
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));
}

// --- Animation des barres de compétences ---
function animateSkillBars() {
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            bar.classList.add('animate');
        });
    }, 300);
}

// --- Gestion du menu de navigation (desktop & mobile) ---
function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger1 = document.getElementById('hamburger-1');
    const hamburger2 = document.getElementById('hamburger-2');
    const hamburger3 = document.getElementById('hamburger-3');
    
    mobileMenuToggle.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            mobileMenu.classList.remove('max-h-0');
            mobileMenu.classList.add('max-h-96', 'pb-4');
            hamburger1.classList.add('rotate-45', 'translate-y-1.5');
            hamburger2.classList.add('opacity-0');
            hamburger3.classList.add('-rotate-45', '-translate-y-1.5');
        } else {
            mobileMenu.classList.add('max-h-0');
            mobileMenu.classList.remove('max-h-96', 'pb-4');
            hamburger1.classList.remove('rotate-45', 'translate-y-1.5');
            hamburger2.classList.remove('opacity-0');
            hamburger3.classList.remove('-rotate-45', '-translate-y-1.5');
        }
    });
}

// --- Mise à jour de la section active dans la navigation ---
function updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 100 && rect.bottom >= 100) {
            if (activeSection !== sectionId) {
                activeSection = sectionId;
                
                // Update nav links
                navLinks.forEach(link => {
                    const linkSection = link.getAttribute('data-section');
                    if (linkSection === sectionId) {
                        link.classList.add('text-blue-400');
                        link.classList.remove('text-white');
                        // Add active indicator
                        if (!link.querySelector('.absolute')) {
                            const indicator = document.createElement('div');
                            indicator.className = 'absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 animate-expand';
                            link.appendChild(indicator);
                        }
                    } else {
                        link.classList.remove('text-blue-400');
                        link.classList.add('text-white');
                        // Remove active indicator
                        const indicator = link.querySelector('.absolute');
                        if (indicator) {
                            indicator.remove();
                        }
                    }
                });
            }
        }
    });
}

// --- Scroll fluide vers une section ---
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Height of fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (isMenuOpen) {
            const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
            mobileMenuToggle.click();
        }
    }
}

// --- Effet de texte tapé pour la section hero ---
function initializeTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const text = 'Frontend';
    
    // Reset text
    typingText.textContent = '';
    typingText.style.borderRight = '2px solid #3b82f6';
    typingText.style.whiteSpace = 'nowrap';
    typingText.style.overflow = 'hidden';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            typingText.textContent = text.slice(0, i + 1);
            i++;
        } else {
            clearInterval(timer);
            typingText.style.borderRight = 'none';
        }
    }, 150);
}

// --- Fonctionnalité de téléchargement du CV ---
async function downloadCV() {
    try {
        // Essaye d'abord avec le chemin absolu depuis la racine du site
        let response = await fetch('/CV.pdf');
        if (!response.ok) {
            // Si échec, essaye avec le chemin relatif
            response = await fetch('./CV.pdf');
        }
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CV.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            throw new Error('Erreur de téléchargement');
        }
    } catch (error) {
        console.error('Erreur lors du téléchargement:', error);
        alert('Erreur lors du téléchargement du CV. Veuillez vérifier que le fichier CV.pdf est bien présent dans le dossier public.');
    }
}

// --- Gestion du formulaire de contact ---
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        // Laisse le formulaire soumettre normalement à Formspree
        setTimeout(() => {
            if (contactSuccess) {
                contactSuccess.classList.remove('hidden');
            }
            contactForm.reset();
        }, 1000);
    });
}

// --- Affichage des données skills et projects dans la section debug (JSON) ---
function renderDebugData() {
    const skillsPre = document.getElementById('skills-json');
    const projectsPre = document.getElementById('projects-json');
    if (skillsPre && projectsPre) {
        skillsPre.textContent = JSON.stringify(skills, null, 2);
        projectsPre.textContent = JSON.stringify(projects, null, 2);
    }
}

// --- Exposition des fonctions globales pour les handlers HTML ---
window.scrollToSection = scrollToSection;
window.downloadCV = downloadCV;

// Affichage des données dans la console au chargement
console.log('Skills:', skills);
console.log('Projects:', projects);