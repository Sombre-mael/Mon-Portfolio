// ============================================
// COSMIC EXPLORER PORTFOLIO - SCRIPT.JS
// Stabilized UI, content and interactions
// ============================================

const skills = [
    { name: 'JavaScript', color: '#F7DF1E', label: 'JS' },
    { name: 'TypeScript', color: '#3178C6', label: 'TS' },
    { name: 'React.js', color: '#61DAFB', label: 'RE' },
    { name: 'Next.js', color: '#FFFFFF', label: 'NX' },
    { name: 'CSS', color: '#1572B6', label: 'CS' },
    { name: 'Tailwind CSS', color: '#06B6D4', label: 'TW' },
    { name: 'Supabase', color: '#3ECF8E', label: 'SB' },
    { name: 'React Native', color: '#61DAFB', label: 'RN' },
    { name: 'VBA', color: '#217346', label: 'VB' },
    { name: 'IA Consulting', color: '#8B5CF6', label: 'IA' }
];

const projects = [
    {
        id: 1,
        title: 'Hakuna Matata Market',
        description: "Application Expo orientee vente, location et livraison avec double espace client/admin et gestion complete du cycle de commande.",
        technologies: ['Expo', 'React Native', 'TypeScript', 'AsyncStorage'],
        image: 'https://plus.unsplash.com/premium_photo-1681426728047-2164a00fe3dc?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/Hakuna-Matata-Market',
        codeLabel: 'Voir le code',
        status: 'En cours',
        longDescription: "Application mobile pensee pour gerer un marche local depuis une seule interface.\n- Catalogue vente et location\n- Panier et validation de commandes mixtes\n- References de commande et numeros de facture\n- Historique client et factures\n- Dashboard admin avec suivi de livraison, impression PDF et contact WhatsApp",
        challenges: "Structurer une logique metier riche cote frontend, regrouper correctement les commandes multi-articles et garder une experience claire pour les profils client et admin.",
        duration: '2 mois',
        role: 'Developpeur frontend principal'
    },
    {
        id: 2,
        title: 'Rafiki Ecolier',
        description: "Plateforme educative interactive pour enfants avec contenus ludiques, quiz et apprentissage progressif.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60',
        demoUrl: 'https://sombre-mael.github.io/KidsEduc/',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: 'Profil GitHub',
        status: 'En ligne',
        longDescription: "Plateforme educative concue pour rendre l'apprentissage plus engageant pour les enfants.\n- Quiz interactifs\n- Jeux educatifs\n- Parcours de progression\n- Interface coloree et accessible\n- Contenus penses pour la decouverte",
        challenges: "Trouver le bon equilibre entre richesse visuelle, simplicite d'usage et performance sur differents appareils.",
        duration: '2 mois',
        role: 'Developpeur frontend'
    },
    {
        id: 3,
        title: 'KULIPA',
        description: "Application mobile de facturation avec tableau de bord, gestion clients et suivi d'etat des factures.",
        technologies: ['Expo', 'React Native', 'TypeScript', 'Zustand'],
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/kulipa',
        codeLabel: 'Voir le code',
        status: 'En cours',
        longDescription: "Application mobile de gestion commerciale centree sur la facturation.\n- Dashboard avec indicateurs de paiement\n- Suivi des factures par statut\n- Gestion des clients\n- Stores locaux avec Zustand\n- Preparation a l'impression et au partage de documents",
        challenges: "Construire une base mobile claire pour la gestion de factures, tout en gardant des ecrans simples a parcourir et une structure extensible pour la suite.",
        duration: '1 mois',
        role: 'Developpeur frontend'
    },
    {
        id: 4,
        title: 'Crypto Price Tracker',
        description: "Application mobile et web de suivi des cryptomonnaies avec prix en temps reel, gestion des etats reseau et base prete pour des fonctionnalites avancees.",
        technologies: ['Expo', 'React Native', 'TypeScript', 'tRPC', 'Drizzle ORM'],
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/crypto-price-tracker',
        codeLabel: 'Voir le code',
        status: 'En cours',
        longDescription: "Projet de suivi crypto construit sur une stack moderne mobile/web.\n- Liste temps reel des cryptomonnaies\n- Rafraichissement manuel des donnees\n- Gestion des themes clair/sombre\n- Architecture Expo Router et hooks dedies\n- Backend tRPC et schema Drizzle deja prepares pour les favoris et evolutions futures",
        challenges: "Rendre les donnees de marche lisibles et fiables cote UI tout en preparant une architecture technique plus ambitieuse que l'affichage d'une simple liste.",
        duration: '1 mois',
        role: 'Developpeur full stack'
    },
    {
        id: 5,
        title: 'Menu City',
        description: "Application mobile cross-platform pour proposer un restaurant proche et inviter facilement un contact.",
        technologies: ['React Native', 'TypeScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: 'Profil GitHub',
        status: 'En cours',
        longDescription: "Application mobile orientee decouverte et partage.\n- Localisation des restaurants\n- Invitations entre contacts\n- Notifications push\n- Experience mobile responsive\n- Base prete pour des fonctionnalites sociales",
        challenges: "Maintenir une experience coherente sur mobile tout en preparant des fonctions sociales et geolocalisees.",
        duration: '4 mois',
        role: 'Developpeur mobile'
    },
    {
        id: 6,
        title: 'FJ Trust Multi Services',
        description: "Site vitrine d'entreprise concu pour presenter les services, rassurer les prospects et rester lisible sur tous les ecrans.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://media.istockphoto.com/id/899274526/fr/photo/antenne-de-coucher-de-soleil-de-grue.webp?a=1&b=1&s=612x612&w=0&k=20&c=QNHLQHEV7IQphuryVjDymqClMhIFDP_j8fPZ3yTBbx8=',
        demoUrl: 'https://multisarl.com',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: 'Profil GitHub',
        status: 'En ligne',
        longDescription: "Site vitrine moderne concu pour renforcer la presence en ligne de l'entreprise.\n- Design responsive\n- Mise en avant des services\n- Formulaires de contact\n- Pages legeres et rapides a charger\n- Structure pensee pour la clarte",
        challenges: "Creer une presence en ligne credible avec un design sobre, lisible et performant sur mobile.",
        duration: '1 semaine',
        role: 'Developpeur frontend'
    },
    {
        id: 7,
        title: 'App Web Constellation',
        description: "Site de presentation d'entreprise concu pour mettre en avant l'activite, les services et la vision de la marque.",
        technologies: ['React', 'CSS', 'JavaScript', 'Tailwind CSS'],
        image: 'assets/constellation.jpg',
        demoUrl: 'https://constellation-cd.netlify.app',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: 'Profil GitHub',
        status: 'En ligne',
        longDescription: "Application web concue pour presenter l'entreprise et poser les bases d'evolutions editoriales futures.\n- Presentation de l'activite\n- Mise en avant des services\n- Base frontend extensible\n- Architecture claire pour les prochaines fonctionnalites\n- Deploiement web accessible",
        challenges: "Concevoir une base visuelle propre et reutilisable pour accueillir ensuite des modules plus riches sans alourdir le parcours.",
        duration: '1 mois',
        role: 'Developpeur frontend'
    },
    {
        id: 8,
        title: 'LinkShort',
        description: "Outil web de raccourcissement d'URL avec generation de QR code personnalisable et interface moderne orientee usage rapide.",
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/LinkShort',
        codeLabel: 'Voir le code',
        status: 'En cours',
        longDescription: "Application web utilitaire construite pour raccourcir un lien et produire un QR code pret au partage.\n- Validation d'URL\n- Raccourcissement via API is.gd\n- Copie rapide du lien\n- QR code personnalisable (couleurs, taille, marge, niveau de correction)\n- Export PNG du QR code",
        challenges: "Creer une interface a la fois simple et agreable autour d'un usage tres court, tout en ajoutant une personnalisation reelle du QR code sans alourdir l'experience.",
        duration: '2 semaines',
        role: 'Developpeur frontend'
    },
    {
        id: 9,
        title: 'School Manage',
        description: "Assistant scolaire web permettant d'interroger rapidement des donnees d'eleves, de classes, de paiements et d'evenements via un chatbot simple.",
        technologies: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/SchoolManage',
        codeLabel: 'Voir le code',
        status: 'En cours',
        longDescription: "Projet web leger oriente assistance scolaire plutot que gestion lourde.\n- API Express pour le chat\n- Detection d'intention et routage des demandes\n- Consultation d'emploi du temps, absences, notes et paiements\n- Donnees mockees pour les tests\n- Interface web simple pour dialoguer avec le bot",
        challenges: "Transformer des besoins scolaires concrets en intents simples, puis renvoyer une reponse utile et lisible sans complexifier inutilement l'interface.",
        duration: '2 semaines',
        role: 'Developpeur backend / frontend'
    },
    {
        id: 10,
        title: 'Portfolio Personnel',
        description: "Portfolio immersif concu pour presenter mon profil, mes competences et mes projets a travers une experience visuelle forte.",
        technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1663882658055-40f1d4249867?w=500&auto=format&fit=crop&q=60',
        demoUrl: 'https://sombre-mael.github.io/Mon-Portfolio/',
        codeUrl: 'https://github.com/Sombre-mael/Mon-Portfolio',
        codeLabel: 'Voir le code',
        status: 'En ligne',
        longDescription: "Portfolio personnel pense pour marier identite visuelle et presentation professionnelle.\n- Univers graphique fort\n- Sections claires\n- Mise en avant des projets\n- Formulaire de contact\n- Experience responsive",
        challenges: "Creer une experience visuelle differenciante sans sacrifier la lisibilite, la stabilite et la coherence globale du parcours.",
        duration: '2 semaines',
        role: 'Developpeur frontend'
    }
];

let scene;
let camera;
let renderer;
let stars;
let nebula;
let skill3DGroup;
let warpStars = [];
let sectionObjects = {};
let skillObjects3D = [];
let targetX = 0;
let targetY = 0;
let mouseX = 0;
let mouseY = 0;

const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];

document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initSkills();
    initProjects();
    initNavigation();
    initProgressDots();
    initScrollAnimations();
    initContactForm();
    initTypingEffect();
    updateActiveSection();
    secureBlankLinks();

    window.setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1200);
});

function initThreeJS() {
    const canvas = document.getElementById('space-canvas');
    if (!canvas || typeof THREE === 'undefined') {
        return;
    }

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.018);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    createStarField();
    createNebula();
    createWarpStars();
    create3DSkillObjects();
    createSectionObjects();

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);

    animate();
}

function createStarField() {
    const geometry = new THREE.BufferGeometry();
    const starCount = 3500;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const palette = [
        new THREE.Color(0x3b82f6),
        new THREE.Color(0x8b5cf6),
        new THREE.Color(0x06b6d4),
        new THREE.Color(0xffffff)
    ];

    for (let index = 0; index < starCount; index += 1) {
        const i3 = index * 3;
        const color = palette[Math.floor(Math.random() * palette.length)];

        positions[i3] = (Math.random() - 0.5) * 140;
        positions[i3 + 1] = (Math.random() - 0.5) * 140;
        positions[i3 + 2] = (Math.random() - 0.5) * 140;

        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.9
    });

    stars = new THREE.Points(geometry, material);
    scene.add(stars);
}

function createNebula() {
    const geometry = new THREE.SphereGeometry(18, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.06,
        wireframe: true
    });

    nebula = new THREE.Mesh(geometry, material);
    nebula.position.z = -18;
    scene.add(nebula);
}

function createWarpStars() {
    const material = new THREE.LineBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0
    });

    for (let index = 0; index < 45; index += 1) {
        const points = [
            new THREE.Vector3(0, 0, -20),
            new THREE.Vector3(0, 0, 12)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material.clone());
        line.position.set(
            (Math.random() - 0.5) * 16,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 20
        );
        line.rotation.z = Math.random() * Math.PI;
        line.visible = false;
        warpStars.push(line);
        scene.add(line);
    }
}

function create3DSkillObjects() {
    skill3DGroup = new THREE.Group();
    skill3DGroup.position.set(0, 22, -8);

    const geometries = [
        () => new THREE.IcosahedronGeometry(0.55, 0),
        () => new THREE.OctahedronGeometry(0.55, 0),
        () => new THREE.TetrahedronGeometry(0.7, 0),
        () => new THREE.BoxGeometry(0.8, 0.8, 0.8),
        () => new THREE.DodecahedronGeometry(0.55, 0)
    ];

    skills.forEach((skill, index) => {
        const geometry = geometries[index % geometries.length]();
        const material = new THREE.MeshBasicMaterial({
            color: skill.color,
            wireframe: true,
            transparent: true,
            opacity: 0.72
        });
        const mesh = new THREE.Mesh(geometry, material);
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 5 + (index % 2) * 0.8;

        mesh.position.set(
            Math.cos(angle) * radius,
            Math.sin(angle) * 2.5,
            Math.sin(angle * 1.3) * 2
        );

        mesh.userData = {
            baseScale: 1,
            angle,
            radius,
            yOffset: Math.sin(index) * 0.35,
            speed: 0.004 + index * 0.0003
        };

        skillObjects3D.push(mesh);
        skill3DGroup.add(mesh);
    });

    scene.add(skill3DGroup);
}

function createSectionObjects() {
    createAboutObjects();
    createProjectObjects();
    createContactObjects();
}

function createAboutObjects() {
    const group = new THREE.Group();
    group.position.set(0, 40, -12);

    [2.5, 3.8, 5.1].forEach((radius, index) => {
        const geometry = new THREE.RingGeometry(radius, radius + 0.06, 64);
        const material = new THREE.MeshBasicMaterial({
            color: index % 2 === 0 ? 0x3b82f6 : 0x8b5cf6,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(geometry, material);
        ring.rotation.x = Math.PI / 2.5;
        ring.rotation.y = index * 0.5;
        group.add(ring);
    });

    sectionObjects.about = group;
    scene.add(group);
}

function createProjectObjects() {
    const group = new THREE.Group();
    group.position.set(0, 45, -15);

    for (let index = 0; index < 8; index += 1) {
        const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
        const material = new THREE.MeshBasicMaterial({
            color: index % 2 === 0 ? 0x06b6d4 : 0x3b82f6,
            wireframe: true,
            transparent: true,
            opacity: 0
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 8
        );
        cube.scale.set(0.3, 0.3, 0.3);
        cube.userData = {
            basePosition: cube.position.clone(),
            rotSpeed: 0.004 + Math.random() * 0.01
        };
        group.add(cube);
    }

    sectionObjects.projects = group;
    scene.add(group);
}

function createContactObjects() {
    const group = new THREE.Group();
    group.position.set(0, 48, -18);

    const sphereGeometry = new THREE.SphereGeometry(2.3, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);

    for (let index = 0; index < 18; index += 1) {
        const geometry = new THREE.SphereGeometry(0.08, 8, 8);
        const material = new THREE.MeshBasicMaterial({
            color: 0x06b6d4,
            transparent: true,
            opacity: 0
        });
        const particle = new THREE.Mesh(geometry, material);
        const phi = Math.random() * Math.PI;
        const theta = Math.random() * Math.PI * 2;
        const radius = 2.8 + Math.random() * 1.2;

        particle.userData = { phi, theta, radius };
        particle.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        );

        group.add(particle);
    }

    sectionObjects.contact = group;
    scene.add(group);
}

function animate() {
    if (!renderer || !scene || !camera) {
        return;
    }

    requestAnimationFrame(animate);

    const time = performance.now() * 0.001;

    targetX += (mouseX - targetX) * 0.03;
    targetY += (mouseY - targetY) * 0.03;

    camera.position.x = targetX * 0.6;
    camera.position.y = targetY * 0.35;
    camera.lookAt(scene.position);

    if (stars) {
        stars.rotation.y = time * 0.01;
        stars.rotation.x = time * 0.004;
    }

    if (nebula) {
        nebula.rotation.y = time * 0.04;
        nebula.rotation.x = Math.sin(time * 0.15) * 0.25;
    }

    if (skill3DGroup) {
        skill3DGroup.rotation.y += 0.0025;
        skill3DGroup.children.forEach((mesh, index) => {
            mesh.rotation.x += mesh.userData.speed;
            mesh.rotation.y += mesh.userData.speed * 0.8;
            mesh.position.y = Math.sin(time * 1.5 + index) * 0.35 + mesh.userData.yOffset;
        });
    }

    animateSectionObjects(time);
    animateWarpStars();

    renderer.render(scene, camera);
}

function animateSectionObjects(time) {
    if (sectionObjects.about) {
        sectionObjects.about.rotation.z += 0.002;
    }

    if (sectionObjects.projects) {
        sectionObjects.projects.children.forEach((cube, index) => {
            cube.rotation.x += cube.userData.rotSpeed;
            cube.rotation.y += cube.userData.rotSpeed * 0.7;
            cube.position.y = cube.userData.basePosition.y + Math.sin(time + index) * 0.35;
        });
    }

    if (sectionObjects.contact) {
        const sphere = sectionObjects.contact.children[0];
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.003;

        for (let index = 1; index < sectionObjects.contact.children.length; index += 1) {
            const particle = sectionObjects.contact.children[index];
            const theta = particle.userData.theta + time * 0.35;
            const radius = particle.userData.radius;
            const phi = particle.userData.phi;

            particle.position.x = radius * Math.sin(phi) * Math.cos(theta);
            particle.position.z = radius * Math.sin(phi) * Math.sin(theta);
        }
    }
}

function animateWarpStars() {
    warpStars.forEach((line, index) => {
        if (!line.visible) {
            return;
        }

        line.position.z += 0.7 + index * 0.01;
        if (line.position.z > 16) {
            line.position.z = -20;
        }
    });
}

function activateWarp(opacity = 0.8) {
    const overlay = document.getElementById('warp-overlay');
    if (overlay) {
        overlay.classList.add('active');
    }

    warpStars.forEach((line) => {
        line.visible = true;
        line.material.opacity = opacity;
        line.position.z = -20 - Math.random() * 8;
    });
}

function deactivateWarp() {
    const overlay = document.getElementById('warp-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }

    warpStars.forEach((line) => {
        line.visible = false;
        line.material.opacity = 0;
    });
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    if (!camera || !renderer) {
        return;
    }

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function initSkills() {
    const container = document.getElementById('skills-container');
    if (!container) {
        return;
    }

    container.replaceChildren();

    skills.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.dataset.testid = `skill-${slugify(skill.name)}`;
        card.style.transitionDelay = `${index * 100}ms`;
        card.style.setProperty('--skill-color', skill.color);

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'skill-icon-wrapper';

        const icon = document.createElement('div');
        icon.className = 'skill-icon-svg';
        icon.textContent = skill.label;
        icon.style.color = skill.color;
        icon.style.fontFamily = 'Orbitron, sans-serif';
        icon.style.fontWeight = '700';
        icon.style.fontSize = '1.2rem';
        icon.style.display = 'flex';
        icon.style.alignItems = 'center';
        icon.style.justifyContent = 'center';

        const glow = document.createElement('div');
        glow.className = 'skill-icon-glow';
        glow.style.background = skill.color;

        const name = document.createElement('div');
        name.className = 'skill-name';
        name.textContent = skill.name;

        iconWrapper.append(icon, glow);
        card.append(iconWrapper, name);

        card.addEventListener('mouseenter', () => highlightSkill3D(index));
        card.addEventListener('mouseleave', () => resetSkill3D(index));

        container.appendChild(card);
    });
}

function highlightSkill3D(index) {
    const mesh = skillObjects3D[index];
    if (!mesh) {
        return;
    }

    mesh.scale.set(1.45, 1.45, 1.45);
    mesh.material.opacity = 1;
}

function resetSkill3D(index) {
    const mesh = skillObjects3D[index];
    if (!mesh) {
        return;
    }

    mesh.scale.set(1, 1, 1);
    mesh.material.opacity = 0.72;
}

function initProjects() {
    const container = document.getElementById('projects-container');
    if (!container) {
        return;
    }

    container.replaceChildren();

    projects.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.dataset.testid = `project-${project.id}`;
        card.style.transitionDelay = `${index * 150}ms`;

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'project-image-wrapper';

        const image = document.createElement('img');
        image.className = 'project-image';
        image.src = project.image;
        image.alt = project.title;
        image.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'project-overlay';

        imageWrapper.append(image, overlay);

        const content = document.createElement('div');
        content.className = 'project-content';

        const header = document.createElement('div');
        header.className = 'project-header';

        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;

        header.append(title, createStatusBadge(project.status));

        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = project.description;

        const techList = document.createElement('div');
        techList.className = 'project-tech';
        project.technologies.forEach((tech) => techList.appendChild(createTechTag(tech)));

        const links = document.createElement('div');
        links.className = 'project-links';
        links.append(
            createProjectAnchor(project.demoUrl, 'Demo', `demo-link-${project.id}`, true),
            createProjectAnchor(project.codeUrl, project.codeLabel || 'Voir le code', `code-link-${project.id}`, false),
            createMoreButton(project.id)
        );

        content.append(header, description, techList, links);
        card.append(imageWrapper, content);
        container.appendChild(card);
    });
}

function createStatusBadge(status) {
    const badge = document.createElement('span');
    badge.className = `project-status ${status === 'En ligne' ? 'is-live' : 'is-progress'}`;
    badge.textContent = status;
    return badge;
}

function createTechTag(label) {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.textContent = label;
    return tag;
}

function createProjectAnchor(url, label, testId, isDemo) {
    const anchor = document.createElement('a');
    anchor.className = 'project-link';
    anchor.dataset.testid = testId;

    if (url) {
        anchor.href = url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    } else {
        anchor.classList.add('is-disabled');
        anchor.href = '#';
        anchor.setAttribute('aria-disabled', 'true');
        anchor.tabIndex = -1;
    }

    anchor.appendChild(createInlineIcon(isDemo ? 'external' : 'code'));
    anchor.append(document.createTextNode(url ? label : 'Demo bientot disponible'));
    return anchor;
}

function createMoreButton(projectId) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-link-more';
    button.dataset.testid = `more-link-${projectId}`;
    button.textContent = 'En savoir plus ->';
    button.addEventListener('click', () => window.showProjectModal(projectId));
    return button;
}

function createInlineIcon(type) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');

    if (type === 'external') {
        const path1 = document.createElementNS(svgNS, 'path');
        path1.setAttribute('d', 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6');
        const polyline = document.createElementNS(svgNS, 'polyline');
        polyline.setAttribute('points', '15 3 21 3 21 9');
        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', '10');
        line.setAttribute('y1', '14');
        line.setAttribute('x2', '21');
        line.setAttribute('y2', '3');
        svg.append(path1, polyline, line);
    } else {
        const polyline1 = document.createElementNS(svgNS, 'polyline');
        polyline1.setAttribute('points', '16 18 22 12 16 6');
        const polyline2 = document.createElementNS(svgNS, 'polyline');
        polyline2.setAttribute('points', '8 6 2 12 8 18');
        svg.append(polyline1, polyline2);
    }

    return svg;
}

window.showProjectModal = function showProjectModal(projectId) {
    const project = projects.find((item) => item.id === projectId);
    const modal = document.getElementById('project-modal');
    const content = modal?.querySelector('.modal-content');

    if (!project || !modal || !content) {
        return;
    }

    content.replaceChildren();

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'modal-close';
    closeButton.dataset.testid = 'modal-close';
    closeButton.setAttribute('aria-label', 'Fermer la fenetre');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', window.closeProjectModal);

    const image = document.createElement('img');
    image.className = 'modal-image';
    image.src = project.image;
    image.alt = project.title;

    const title = document.createElement('h2');
    title.className = 'modal-title';
    title.textContent = project.title;

    const descriptionSection = createModalSection('Description', project.longDescription);
    const challengeSection = createModalSection('Defis et solutions', project.challenges);

    const techSection = document.createElement('div');
    techSection.className = 'modal-section';
    const techHeading = document.createElement('h4');
    techHeading.textContent = 'Technologies';
    const techList = document.createElement('div');
    techList.className = 'project-tech';
    project.technologies.forEach((tech) => techList.appendChild(createTechTag(tech)));
    techSection.append(techHeading, techList);

    const meta = document.createElement('div');
    meta.className = 'modal-meta';
    meta.append(
        createModalSection('Duree', project.duration),
        createModalSection('Role', project.role)
    );

    const buttons = document.createElement('div');
    buttons.className = 'modal-buttons';
    buttons.append(
        createModalButton(project.demoUrl, 'Voir la demo', 'modal-demo-btn', 'modal-btn modal-btn-primary'),
        createModalButton(project.codeUrl, project.codeLabel || 'Voir le code', 'modal-code-btn', 'modal-btn modal-btn-secondary')
    );

    content.append(closeButton, image, title, descriptionSection, techSection, challengeSection, meta, buttons);

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

function createModalSection(title, text) {
    const section = document.createElement('div');
    section.className = 'modal-section';

    const heading = document.createElement('h4');
    heading.textContent = title;

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    section.append(heading, paragraph);
    return section;
}

function createModalButton(url, label, testId, className) {
    const anchor = document.createElement('a');
    anchor.className = className;
    anchor.dataset.testid = testId;
    anchor.textContent = url ? label : 'Indisponible pour le moment';

    if (url) {
        anchor.href = url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    } else {
        anchor.classList.add('is-disabled');
        anchor.href = '#';
        anchor.setAttribute('aria-disabled', 'true');
        anchor.tabIndex = -1;
    }

    return anchor;
}

window.closeProjectModal = function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) {
        return;
    }

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
        window.closeProjectModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        window.closeProjectModal();
    }
});

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLogo = document.querySelector('.nav-logo');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    navLogo?.addEventListener('click', () => window.scrollToSection('hero'));

    mobileToggle?.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    navLinks?.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            mobileToggle?.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
        updateActiveSection();
    });
}

function updateActiveSection() {
    const navLinks = document.querySelectorAll('.nav-link');
    const progressDots = document.querySelectorAll('.progress-dot');

    sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) {
            return;
        }

        const rect = section.getBoundingClientRect();
        const isActive = rect.top <= 180 && rect.bottom >= 180;

        if (isActive) {
            navLinks.forEach((link) => link.classList.toggle('active', link.dataset.section === sectionId));
            progressDots.forEach((dot) => dot.classList.toggle('active', dot.dataset.section === sectionId));
        }
    });
}

window.scrollToSection = function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) {
        return;
    }

    const offset = 80;
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
};

function initProgressDots() {
    document.querySelectorAll('.progress-dot').forEach((dot) => {
        dot.addEventListener('click', () => {
            const sectionId = dot.dataset.section;
            if (sectionId) {
                window.scrollToSection(sectionId);
            }
        });
    });
}

function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 82%'
            },
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out'
        });
    });

    gsap.utils.toArray('.skill-card').forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%'
            },
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: index * 0.04,
            ease: 'power2.out'
        });
    });

    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 88%'
            },
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: index * 0.06,
            ease: 'power2.out'
        });
    });

    gsap.from('.hero-content > *', {
        opacity: 0,
        y: 36,
        duration: 0.85,
        stagger: 0.12,
        delay: 1.05,
        ease: 'power2.out'
    });

    ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            if (!camera) {
                return;
            }

            camera.position.z = 6 + self.progress * 3.8;
            camera.rotation.z = Math.sin(self.progress * Math.PI) * 0.035;
        }
    });

    bindSectionWarp('#about', sectionObjects.about, 0.55, 800, (object) => {
        object.children.forEach((ring, index) => {
            gsap.to(ring.material, {
                opacity: 0.34 + index * 0.08,
                duration: 0.7,
                delay: index * 0.12
            });
        });
    });

    bindSectionWarp('#skills', skill3DGroup, 0.68, 650, () => {
        if (!skill3DGroup) {
            return;
        }

        gsap.to(skill3DGroup.rotation, {
            y: skill3DGroup.rotation.y + Math.PI * 0.15,
            duration: 1.4,
            ease: 'power2.out'
        });
    });

    bindSectionWarp('#projects', sectionObjects.projects, 0.82, 700, (object) => {
        object.children.forEach((cube, index) => {
            gsap.to(cube.material, {
                opacity: 0.58,
                duration: 0.45,
                delay: index * 0.03
            });
            gsap.to(cube.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.65,
                delay: index * 0.03,
                ease: 'back.out(1.6)'
            });
        });
    });

    bindSectionWarp('#contact', sectionObjects.contact, 1, 850, (object) => {
        object.children.forEach((item, index) => {
            gsap.to(item.material, {
                opacity: index === 0 ? 0.34 : 0.82,
                duration: 0.7,
                delay: index * 0.02
            });
        });
    });
}

function bindSectionWarp(trigger, object3D, warpOpacity, timeout, onEnterCallback) {
    if (typeof ScrollTrigger === 'undefined') {
        return;
    }

    ScrollTrigger.create({
        trigger,
        start: 'top 82%',
        end: 'bottom 18%',
        onEnter: () => {
            activateWarp(warpOpacity);
            window.setTimeout(deactivateWarp, timeout);
            revealObjectGroup(object3D, onEnterCallback);
        },
        onEnterBack: () => revealObjectGroup(object3D, onEnterCallback),
        onLeave: () => hideObjectGroup(object3D),
        onLeaveBack: () => hideObjectGroup(object3D, true)
    });
}

function revealObjectGroup(object3D, callback) {
    if (!object3D) {
        return;
    }

    gsap.to(object3D.position, {
        y: 0,
        duration: 1.25,
        ease: 'power2.out'
    });

    if (typeof callback === 'function') {
        callback(object3D);
    }
}

function hideObjectGroup(object3D, leaveBack = false) {
    if (!object3D) {
        return;
    }

    gsap.to(object3D.position, {
        y: leaveBack ? -20 : 20,
        duration: 0.9,
        ease: 'power2.inOut'
    });

    object3D.children?.forEach((item) => {
        if (item.material?.opacity !== undefined) {
            gsap.to(item.material, {
                opacity: 0,
                duration: 0.35
            });
        }
    });
}

function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) {
        return;
    }

    const words = ['Frontend', 'React', 'Mobile', 'UI'];
    let wordIndex = 0;

    typingText.textContent = words[wordIndex];

    function rotateWord() {
        typingText.classList.add('is-changing');

        window.setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            typingText.textContent = words[wordIndex];
            typingText.classList.remove('is-changing');
        }, 220);
    }

    window.setInterval(rotateWord, 2200);
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');
    const submitButton = form?.querySelector('button[type="submit"]');

    if (!form || !status || !submitButton) {
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        setFormStatus(status, '', '');
        submitButton.disabled = true;
        submitButton.classList.add('is-loading');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            form.reset();
            setFormStatus(status, 'is-success', 'Votre message a bien ete envoye. Merci pour votre prise de contact.');
        } catch (error) {
            setFormStatus(status, 'is-error', "L'envoi a echoue pour le moment. Vous pouvez reessayer ou me contacter directement par email.");
        } finally {
            submitButton.disabled = false;
            submitButton.classList.remove('is-loading');
        }
    });
}

function setFormStatus(element, stateClass, message) {
    element.className = 'form-status';

    if (!message) {
        element.classList.add('hidden');
        element.textContent = '';
        return;
    }

    element.classList.add(stateClass);
    element.textContent = message;
}

window.downloadCV = function downloadCV() {
    const link = document.createElement('a');
    link.href = new URL('CV.pdf', window.location.href).href;
    link.download = 'CV_Mael_Kahilu.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function secureBlankLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        if (!link.rel.includes('noopener')) {
            link.rel = 'noopener noreferrer';
        }
    });
}

function slugify(value) {
    return value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
