// --- Données des compétences (skills) ---
const skills = [
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'React.js', level: 92, icon: '⚛️' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'Tailwind CSS', level: 88, icon: '💨' },
    { name: 'Bootstrap', level: 85, icon: '🅱️' },
    { name: 'React Native', level: 80, icon: '📱' },
    { name: 'FastAPI', level: 65, icon: '⚡' },
    { name: 'IA Consulting', level: 75, icon: '🤖' }
];

// --- Données des projets (projects) ---
const projects = [
    {
        id: 1,
        title: 'Application E-commerce React',
        description: 'Développement d\'une boutique en ligne complète avec panier, authentification et paiement intégré.',
        technologies: ['React', 'Tailwind CSS', 'JavaScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 2,
        title: 'Dashboard Analytics React',
        description: 'Interface d\'administration moderne avec graphiques interactifs et gestion des données en temps réel.',
        technologies: ['React', 'Bootstrap', 'JavaScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 3,
        title: 'App Mobile React Native',
        description: 'Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.',
        technologies: ['React Native', 'JavaScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 4,
        title: 'Site Vitrine Responsive',
        description: 'Site web moderne pour entreprise avec animations CSS et design entièrement responsive.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=250&fit=crop',
        demoUrl: '#',
        codeUrl: '#'
    },
    {
        id: 5,
        title: 'Plateforme de Blog React',
        description: 'Système de blog avec éditeur de contenu, commentaires et système d\'authentification.',
        technologies: ['React', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
        demoUrl: '#',
        codeUrl: '#'
    },
    //{
        //id: 6,
        //title: 'API REST avec FastAPI',
        //description: 'Développement d\'une API REST simple pour gestion d\'utilisateurs avec documentation automatique.',
        //technologies: ['FastAPI', 'Python', 'JavaScript'],
        //image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
        //demoUrl: '#',
        //codeUrl: '#'
    //},
    {
        id: 7,
        title: 'Portfolio Personnel',
        description: 'Portfolio personnel moderne avec animations CSS avancées et design responsive.',
        technologies: ['React', 'Tailwind CSS', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
        demoUrl: '#',
        codeUrl: '#'
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

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-black/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 group project-card visible'; // Ajoute 'visible'
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
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
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
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        try {
            const backendUrl = window.location.origin;
            const response = await fetch(`${backendUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });
            
            if (response.ok) {
                alert('Message envoyé avec succès!');
                contactForm.reset();
            } else {
                throw new Error('Erreur d\'envoi');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        }
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