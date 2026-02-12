// ============================================
// COSMIC EXPLORER PORTFOLIO - SCRIPT.JS
// Three.js Space Theme with GSAP Animations
// ============================================

// --- Skills Data ---
const skills = [
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'React Native', icon: '📱' },
    { name: 'VBA', icon: '📊' },
    { name: 'IA Consulting', icon: '🤖' }
];

// --- Projects Data ---
const projects = [
    {
        id: 1,
        title: 'Hardware Power',
        description: "Développement d'une boutique en ligne complète avec panier, authentification et paiement intégré.",
        technologies: ['React Native', 'TypeScript', 'CSS'],
        image: 'https://plus.unsplash.com/premium_photo-1681426728047-2164a00fe3dc?w=500&auto=format&fit=crop&q=60',
        demoUrl: '#',
        codeUrl: 'https://github.com/Sombre-mael/Hardware-Power',
        longDescription: "En Cours de Developpement\nCette application e-commerce offre une expérience d'achat et de location fluide et sécurisée.\n- Authentification sécurisée avec JWT\n- Panier persistant\n- Paiement intégré via Stripe\n- Gestion des commandes\n- Interface administrateur",
        challenges: "La gestion du state avec Redux et l'intégration du système de paiement ont été les principaux défis.",
        duration: '2 mois',
        role: 'Développeur Frontend principal'
    },
    {
        id: 2,
        title: 'Rafiki Ecolier',
        description: "Plateforme éducative interactive pour enfants avec quiz et jeux d'apprentissage basés sur l'IA.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60',
        demoUrl: 'https://sombre-mael.github.io/KidsEduc/',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        longDescription: "Plateforme éducative présentant une offre éducative pour enfants:\n- Quiz interactifs\n- Jeux éducatifs\n- Contenu multimédia\n- Suivi des progrès\n- Interface conviviale et colorée",
        challenges: "L'optimisation des performances avec de grands ensembles de données et la mise à jour en temps réel.",
        duration: '2 mois',
        role: 'Développeur Full Stack'
    },
    {
        id: 3,
        title: 'Menu City',
        description: "Application mobile cross-platform pour inviter un ami au restaurant le plus proche.",
        technologies: ['React Native', 'TypeScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=500&auto=format&fit=crop&q=60',
        demoUrl: '#',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        longDescription: "En cours de développement\nApplication mobile performante incluant:\n- Localisation\n- Notifications push\n- Invitations\n- Mode sombre/clair\n- Widgets natifs",
        challenges: "Assurer une expérience cohérente sur iOS et Android tout en maintenant des performances optimales.",
        duration: '4 mois',
        role: 'Développeur Mobile'
    },
    {
        id: 4,
        title: 'FJ TRUST MULTI SERVICES',
        description: "Site web moderne pour entreprise avec CSS et design entièrement responsive.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://media.istockphoto.com/id/899274526/fr/photo/antenne-de-coucher-de-soleil-de-grue.webp?a=1&b=1&s=612x612&w=0&k=20&c=QNHLQHEV7IQphuryVjDymqClMhIFDP_j8fPZ3yTBbx8=',
        demoUrl: 'https://multisarl.com',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        longDescription: "Site vitrine moderne avec:\n- Design responsive\n- Performance optimisée\n- SEO optimisé\n- Formulaires interactifs\n- Galerie dynamique",
        challenges: "Créer des animations performantes et assurer une expérience fluide sur tous les appareils.",
        duration: '1 semaine',
        role: 'Développeur Frontend'
    },
    {
        id: 5,
        title: 'App Web Constellation',
        description: "App Web de Constellation, présentant l'entreprise ainsi que ses activités au monde.",
        technologies: ['React', 'CSS', 'JavaScript', 'Tailwind CSS'],
        image: 'https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/350025544_133269706388736_1483241972385022764_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGfzqrmwmSOlOaLzPu10PGKnp_6RJJlO9Sen_pEkmU71N2rPi30vIjX2SG_1EcVW9nF_XJkCoXVlULpISS3EOSH&_nc_ohc=5z_XoRAcYMcQ7kNvwHmH9lu&_nc_oc=Adm9PvNfQNWIihvorGNHXtfXZLMfKdBupRT0Kic20SEdDK0V7k5dVLETPk5fbpXd46M&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&_nc_gid=ggaHKVZXr7dixMCaTQ6C-Q&oh=00_AfhfclmAKoZGmYhY7zkhO89fkf040_aLZyx3P1YI5trxXw&oe=6927EFA2',
        demoUrl: 'https://constellation-cd.netlify.app',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        longDescription: "Plateforme de blog complète (à venir) avec:\n- Système de commentaires\n- Tags et catégories\nEn bref beaucoup de nouvelles fonctionnalités en cours",
        challenges: "L'intégration de l'éditeur WYSIWYG et la gestion des médias.",
        duration: '1 mois',
        role: 'Développeur Frontend'
    },
    {
        id: 6,
        title: 'Portfolio Personnel',
        description: "Portfolio personnel moderne avec animations CSS avancées et design responsive.",
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1663882658055-40f1d4249867?w=500&auto=format&fit=crop&q=60',
        demoUrl: 'https://sombre-mael.github.io/Mon-Portfolio/',
        codeUrl: 'https://github.com/Sombre-mael/Mon-Portfolio',
        longDescription: "Portfolio personnel mettant en avant:\n- Animations CSS personnalisées\n- Design responsive\n- Mode sombre/clair\n- Formulaire de contact\n- Galerie de projets\n- Performance optimisée",
        challenges: "Créer une expérience utilisateur unique tout en maintenant des temps de chargement rapides.",
        duration: '2 Semaines',
        role: 'Développeur Frontend'
    }
];

// --- Three.js Scene Variables ---
let scene, camera, renderer, stars, nebula;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

// --- Initialize Everything ---
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initSkills();
    initProjects();
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initTypingEffect();
    
    // Hide loader after everything is ready
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
});

// ============================================
// THREE.JS SPACE SCENE
// ============================================

function initThreeJS() {
    const canvas = document.getElementById('space-canvas');
    
    // Scene
    scene = new THREE.Scene();
    
    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        antialias: true,
        alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create Stars
    createStarField();
    
    // Create Nebula Effect
    createNebula();
    
    // Mouse move for parallax
    document.addEventListener('mousemove', onMouseMove);
    
    // Resize handler
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    animate();
}

function createStarField() {
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    const colorPalette = [
        new THREE.Color(0x3b82f6), // Blue
        new THREE.Color(0x8b5cf6), // Purple
        new THREE.Color(0x06b6d4), // Cyan
        new THREE.Color(0xffffff)  // White
    ];
    
    for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        
        // Position
        positions[i3] = (Math.random() - 0.5) * 100;
        positions[i3 + 1] = (Math.random() - 0.5) * 100;
        positions[i3 + 2] = (Math.random() - 0.5) * 100;
        
        // Color
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
        
        // Size
        sizes[i] = Math.random() * 2;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const starsMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });
    
    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
}

function createNebula() {
    // Create multiple nebula clouds
    const nebulaGroup = new THREE.Group();
    
    const nebulaColors = [0x3b82f6, 0x8b5cf6, 0x06b6d4];
    
    for (let i = 0; i < 3; i++) {
        const geometry = new THREE.SphereGeometry(15 + i * 5, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: nebulaColors[i],
            transparent: true,
            opacity: 0.03,
            side: THREE.BackSide
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            -30 - i * 10
        );
        
        nebulaGroup.add(mesh);
    }
    
    nebula = nebulaGroup;
    scene.add(nebula);
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Smooth camera movement based on mouse
    targetX += (mouseX - targetX) * 0.02;
    targetY += (mouseY - targetY) * 0.02;
    
    camera.position.x += (targetX * 2 - camera.position.x) * 0.05;
    camera.position.y += (targetY * 2 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    // Rotate stars slowly
    if (stars) {
        stars.rotation.y += 0.0002;
        stars.rotation.x += 0.0001;
    }
    
    // Animate nebula
    if (nebula) {
        nebula.rotation.y += 0.0001;
    }
    
    renderer.render(scene, camera);
}

// ============================================
// SKILLS SECTION
// ============================================

function initSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    skills.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.setAttribute('data-testid', `skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`);
        card.style.transitionDelay = `${index * 100}ms`;
        
        card.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;
        
        container.appendChild(card);
    });
}

// ============================================
// PROJECTS SECTION
// ============================================

function initProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-testid', `project-${project.id}`);
        card.style.transitionDelay = `${index * 150}ms`;
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                <div class="project-overlay"></div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">
                    <a href="${project.demoUrl}" target="_blank" class="project-link" data-testid="demo-link-${project.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Démo
                    </a>
                    <a href="${project.codeUrl}" target="_blank" class="project-link" data-testid="code-link-${project.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                        </svg>
                        Code
                    </a>
                    <button class="project-link-more" onclick="showProjectModal(${project.id})" data-testid="more-link-${project.id}">
                        En savoir plus →
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// --- Project Modal ---
window.showProjectModal = function(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const content = modal.querySelector('.modal-content');
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    content.innerHTML = `
        <button class="modal-close" onclick="closeProjectModal()" data-testid="modal-close">×</button>
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <h2 class="modal-title">${project.title}</h2>
        
        <div class="modal-section">
            <h4>Description</h4>
            <p>${project.longDescription}</p>
        </div>
        
        <div class="modal-section">
            <h4>Technologies</h4>
            <div class="project-tech">${techTags}</div>
        </div>
        
        <div class="modal-section">
            <h4>Défis & Solutions</h4>
            <p>${project.challenges}</p>
        </div>
        
        <div class="modal-meta">
            <div class="modal-section">
                <h4>Durée</h4>
                <p>${project.duration}</p>
            </div>
            <div class="modal-section">
                <h4>Rôle</h4>
                <p>${project.role}</p>
            </div>
        </div>
        
        <div class="modal-buttons">
            <a href="${project.demoUrl}" target="_blank" class="modal-btn modal-btn-primary" data-testid="modal-demo-btn">Voir la démo</a>
            <a href="${project.codeUrl}" target="_blank" class="modal-btn modal-btn-secondary" data-testid="modal-code-btn">Voir le code</a>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
};

// Close modal on backdrop click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveSection();
    });
}

function updateActiveSection() {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    const progressDots = document.querySelectorAll('.progress-dot');
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isActive = rect.top <= 150 && rect.bottom >= 150;
        
        if (isActive) {
            // Update nav links
            navLinks.forEach(link => {
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Update progress dots
            progressDots.forEach(dot => {
                if (dot.getAttribute('data-section') === sectionId) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    });
}

// Scroll to section function
window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// ============================================
// SCROLL ANIMATIONS (GSAP)
// ============================================

function initScrollAnimations() {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
    
    // Skill cards animation
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.05,
            ease: 'power2.out'
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Parallax effect for Three.js based on scroll
    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            if (camera) {
                camera.position.z = 5 + self.progress * 3;
            }
        }
    });
    
    // Hero content fade in
    gsap.from('.hero-content > *', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 1.5
    });
}

// ============================================
// TYPING EFFECT
// ============================================

function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    
    const words = ['Frontend', 'React', 'Mobile', 'Web'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 2000);
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('contact-success');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        // Let Formspree handle the submission
        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.remove('hidden');
            }
            form.reset();
        }, 1000);
    });
}

// ============================================
// CV DOWNLOAD
// ============================================

window.downloadCV = async function() {
    try {
        let response = await fetch('/CV.pdf');
        if (!response.ok) {
            response = await fetch('./CV.pdf');
        }
        
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CV_Mael_Kahilu.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } else {
            throw new Error('CV not found');
        }
    } catch (error) {
        console.error('Download error:', error);
        alert('Erreur lors du téléchargement du CV. Veuillez réessayer.');
    }
};

// ============================================
// PROGRESS DOTS CLICK HANDLERS
// ============================================

document.querySelectorAll('.progress-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const section = dot.getAttribute('data-section');
        scrollToSection(section);
    });
});

// Log for debugging
console.log('🚀 Cosmic Explorer Portfolio initialized');
console.log('Skills:', skills);
console.log('Projects:', projects);