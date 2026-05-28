// ============================================
// COSMIC EXPLORER PORTFOLIO - SCRIPT.JS
// Stabilized UI, content and interactions
// ============================================

const skills = [
    { name: 'JavaScript', color: '#F7DF1E', label: 'JS' },
    { name: 'TypeScript', color: '#3178C6', label: 'TS' },
    { name: 'React.js', color: '#61DAFB', label: 'RE' },
    { name: 'Next.js', color: '#FFFFFF', label: 'NX' },
    { name: 'Laravel', color: '#FF2D20', label: 'LV' },
    { name: 'CSS', color: '#1572B6', label: 'CS' },
    { name: 'Tailwind CSS', color: '#06B6D4', label: 'TW' },
    { name: 'Supabase', color: '#3ECF8E', label: 'SB' },
    { name: 'React Native', color: '#61DAFB', label: 'RN' },
    { name: 'VBA', color: '#217346', label: 'VB' },
    { name: 'AI Consulting', color: '#8B5CF6', label: 'AI' }
];

const uiContent = {
    fr: {
        metaTitle: 'Mael Kahilu - Développeur Frontend | Portfolio',
        metaDescription: 'Portfolio de Mael Kahilu, développeur frontend. Découvrez mes projets web et mobile, mes compétences et ma façon de concevoir des interfaces modernes.',
        loader: {
            text: "Exploration de l'univers..."
        },
        nav: {
            home: 'Accueil',
            about: 'À propos',
            collaboration: 'Collaboration',
            skills: 'Compétences',
            projects: 'Projets',
            contact: 'Contact',
            mobileLabel: 'Ouvrir le menu',
            languageLabel: 'Changer la langue'
        },
        hero: {
            kicker: 'Développeur',
            description: "Je construis des interfaces web et mobiles lisibles, performantes et prêtes pour des produits sérieux, avec un vrai sens du détail produit et de la collaboration technique.",
            pill1: 'Disponible pour missions frontend',
            pill2: 'Ouvert aux collaborations produit',
            pill3: 'Apps web et mobile',
            ctaProjects: 'Explorer mes projets',
            ctaContact: 'Lancer une discussion',
            scroll: 'Faire défiler pour explorer',
            rotatingWords: ['Frontend', 'React', 'Mobile', 'UI']
        },
        about: {
            titleAccent: 'À propos',
            titleRest: 'de moi',
            subtitle: 'Développeur frontend orienté produit',
            text1: "Développeur frontend avec 3 ans d'expérience, je crée des interfaces web et mobiles modernes, utiles et pensées pour des usages concrets. J'accorde autant d'importance à la clarté du code qu'à la qualité perçue côté utilisateur.",
            text2: "Je progresse en continu sur React, JavaScript, TypeScript et les environnements mobiles pour livrer des produits fiables, maintenables et agréables à faire évoluer en équipe.",
            stats: {
                experience: "Ans d'expérience",
                projects: 'Projets réalisés',
                tech: 'Technologies utilisées'
            }
        },
        collaboration: {
            titleAccent: 'Pourquoi',
            titleRest: 'travailler avec moi',
            intro: "J’aime travailler avec des équipes qui veulent transformer une bonne idée en produit clair, crédible et agréable à utiliser.",
            cards: [
                {
                    kicker: 'Collaboration technique',
                    title: "Je m’intègre facilement dans une équipe",
                    text: "Je peux collaborer avec d’autres développeurs, designers ou porteurs de projet, en gardant un échange simple, rigoureux et orienté résultat."
                },
                {
                    kicker: 'Approche produit',
                    title: 'Je pense usage, lisibilité et maintenabilité',
                    text: "Mon objectif n’est pas juste de faire l’interface, mais de construire quelque chose de propre, cohérent, utile et prêt à évoluer."
                },
                {
                    kicker: 'Valeur ajoutée',
                    title: 'Je peux intervenir vite sur des bases concrètes',
                    text: 'Landing pages, interfaces web, applications mobiles, prototypes UI ou améliorations frontend: je peux contribuer rapidement avec une exécution sérieuse.'
                }
            ],
            availableKicker: 'Disponible pour',
            availableTitle: 'Missions, collaborations et renfort frontend',
            tags: [
                'Mission frontend',
                'App mobile React Native',
                'Prototype produit',
                'Refonte UI',
                "Collaboration avec d'autres devs"
            ],
            note: 'Si tu cherches un profil frontend impliqué, curieux et agréable à faire avancer avec une équipe, on peut en parler.'
        },
        skills: {
            titlePrefix: 'Mes',
            titleAccent: 'compétences'
        },
        projects: {
            titlePrefix: 'Mes',
            titleAccent: 'projets',
            intro: 'Une sélection de projets web et mobile qui montrent ma façon de construire des interfaces utiles, soignées et pensées pour un vrai usage.',
            status: {
                live: 'En ligne',
                progress: 'En cours'
            },
            demo: 'Démo',
            demoSoon: 'Démo bientôt disponible',
            viewCode: 'Voir le code',
            githubProfile: 'Profil GitHub',
            more: 'En savoir plus ->',
            modal: {
                closeLabel: 'Fermer la fenêtre',
                description: 'Description',
                challenge: 'Défis et solutions',
                technologies: 'Technologies',
                duration: 'Durée',
                role: 'Rôle',
                viewDemo: 'Voir la démo',
                unavailable: 'Indisponible pour le moment'
            }
        },
        contact: {
            titleAccent: 'Contactez',
            titleRest: 'moi',
            emailTitle: 'Email',
            socialTitle: 'Réseaux sociaux',
            socialCopy: 'Tu peux aussi me contacter ou suivre mon travail via mes profils.',
            form: {
                nameLabel: 'Nom',
                namePlaceholder: 'Votre nom',
                emailLabel: 'Email',
                emailPlaceholder: 'votre@email.com',
                messageLabel: 'Message',
                messagePlaceholder: 'Votre message...',
                submit: 'Envoyer le message',
                success: 'Votre message a bien été envoyé. Merci pour votre prise de contact.',
                error: "L'envoi a échoué pour le moment. Vous pouvez réessayer ou me contacter directement par email."
            }
        },
        footer: {
            text: '© 2026 Dev Mael. Tous droits réservés.'
        }
    },
    en: {
        metaTitle: 'Mael Kahilu - Frontend Developer | Portfolio',
        metaDescription: 'Portfolio of Mael Kahilu, frontend developer. Explore my web and mobile projects, core skills, and how I build modern interfaces.',
        loader: {
            text: 'Exploring the universe...'
        },
        nav: {
            home: 'Home',
            about: 'About',
            collaboration: 'Collaboration',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            mobileLabel: 'Open menu',
            languageLabel: 'Change language'
        },
        hero: {
            kicker: 'Developer',
            description: 'I build clear, high-quality web and mobile interfaces for serious products, with strong attention to product thinking, execution, and technical collaboration.',
            pill1: 'Available for frontend work',
            pill2: 'Open to product collaboration',
            pill3: 'Web and mobile apps',
            ctaProjects: 'Explore my work',
            ctaContact: 'Start a conversation',
            scroll: 'Scroll to explore',
            rotatingWords: ['Frontend', 'React', 'Mobile', 'UI']
        },
        about: {
            titleAccent: 'About',
            titleRest: 'me',
            subtitle: 'Product-minded frontend developer',
            text1: 'With 3 years of experience in frontend development, I build modern web and mobile interfaces designed for real usage. I care as much about code clarity as I do about the quality users actually feel.',
            text2: 'I keep improving in React, JavaScript, TypeScript, and mobile environments to deliver reliable, maintainable products that are pleasant to grow within a team.',
            stats: {
                experience: 'Years of experience',
                projects: 'Completed projects',
                tech: 'Technologies used'
            }
        },
        collaboration: {
            titleAccent: 'Why',
            titleRest: 'work with me',
            intro: 'I enjoy working with teams that want to turn a strong idea into a clear, credible, and enjoyable product.',
            cards: [
                {
                    kicker: 'Technical collaboration',
                    title: 'I integrate smoothly into a team',
                    text: 'I can work effectively with developers, designers, and project owners while keeping communication simple, structured, and result-driven.'
                },
                {
                    kicker: 'Product mindset',
                    title: 'I care about usability, clarity, and maintainability',
                    text: 'My goal is not just to build the interface, but to shape something clean, coherent, useful, and ready to evolve.'
                },
                {
                    kicker: 'Practical value',
                    title: 'I can contribute quickly on concrete needs',
                    text: 'Landing pages, web interfaces, mobile apps, UI prototypes, or frontend improvements: I can step in quickly with solid execution.'
                }
            ],
            availableKicker: 'Available for',
            availableTitle: 'Frontend missions, product collaboration, and team support',
            tags: [
                'Frontend mission',
                'React Native mobile app',
                'Product prototype',
                'UI redesign',
                'Collaboration with other developers'
            ],
            note: 'If you are looking for a frontend profile who is involved, curious, and easy to move forward with in a team, we should talk.'
        },
        skills: {
            titlePrefix: 'My',
            titleAccent: 'skills'
        },
        projects: {
            titlePrefix: 'My',
            titleAccent: 'projects',
            intro: 'A selection of web and mobile work that reflects how I build useful, polished interfaces designed for real use.',
            status: {
                live: 'Live',
                progress: 'In progress'
            },
            demo: 'Demo',
            demoSoon: 'Demo coming soon',
            viewCode: 'View code',
            githubProfile: 'GitHub profile',
            more: 'Learn more ->',
            modal: {
                closeLabel: 'Close window',
                description: 'Overview',
                challenge: 'Challenges and solutions',
                technologies: 'Technologies',
                duration: 'Duration',
                role: 'Role',
                viewDemo: 'View demo',
                unavailable: 'Unavailable for now'
            }
        },
        contact: {
            titleAccent: 'Contact',
            titleRest: 'me',
            emailTitle: 'Email',
            socialTitle: 'Social links',
            socialCopy: 'You can also reach out or follow my work through these profiles.',
            form: {
                nameLabel: 'Name',
                namePlaceholder: 'Your name',
                emailLabel: 'Email',
                emailPlaceholder: 'your@email.com',
                messageLabel: 'Message',
                messagePlaceholder: 'Your message...',
                submit: 'Send message',
                success: 'Your message has been sent successfully. Thank you for reaching out.',
                error: 'The message could not be sent right now. You can try again or contact me directly by email.'
            }
        },
        footer: {
            text: '© 2026 Dev Mael. All rights reserved.'
        }
    }
};

const projects = [
    {
        id: 1,
        title: { fr: 'Hakuna Matata Market', en: 'Hakuna Matata Market' },
        description: {
            fr: "Application Expo de marketplace locale pensée pour la vente, la location et la livraison, avec deux espaces distincts pour les clients et l'administration.",
            en: 'Expo marketplace app built for local sales, rentals, and delivery, with dedicated client and admin experiences.'
        },
        technologies: ['Expo', 'React Native', 'TypeScript', 'AsyncStorage'],
        image: 'https://plus.unsplash.com/premium_photo-1681426728047-2164a00fe3dc?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/Hakuna-Matata-Market',
        codeLabel: { fr: 'Voir le code', en: 'View code' },
        status: 'progress',
        longDescription: {
            fr: "Application mobile conçue pour gérer un marché local depuis une seule interface.\n- Catalogue vente et location\n- Panier mixte et validation de commandes\n- Références de commande et numéros de facture\n- Historique client et factures\n- Dashboard admin avec suivi de livraison, impression PDF et contact WhatsApp",
            en: 'Mobile app designed to manage a local market from one interface.\n- Sales and rental catalog\n- Mixed cart and checkout flow\n- Order references and invoice numbers\n- Customer history and invoices\n- Admin dashboard with delivery tracking, PDF printing, and WhatsApp contact'
        },
        challenges: {
            fr: "Structurer une logique métier riche côté frontend, regrouper correctement les commandes multi-articles et garder une expérience claire pour les profils client et admin.",
            en: 'Structuring a rich business workflow on the frontend, grouping multi-item orders correctly, and keeping the experience clear for both client and admin users.'
        },
        duration: { fr: '2 mois', en: '2 months' },
        role: { fr: 'Développeur frontend principal', en: 'Lead frontend developer' }
    },
    {
        id: 2,
        title: { fr: 'Rafiki Écolier', en: 'Rafiki Ecolier' },
        description: {
            fr: "Plateforme éducative interactive pensée pour les enfants, avec quiz, jeux et parcours progressif pour rendre l'apprentissage plus engageant.",
            en: 'Interactive educational platform for children, using quizzes, games, and progressive learning paths to make learning more engaging.'
        },
        technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60',
        demoUrl: 'https://sombre-mael.github.io/KidsEduc/',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: { fr: 'Profil GitHub', en: 'GitHub profile' },
        status: 'live',
        longDescription: {
            fr: "Plateforme éducative conçue pour rendre l'apprentissage plus engageant pour les enfants.\n- Quiz interactifs\n- Jeux éducatifs\n- Parcours de progression\n- Interface colorée et accessible\n- Contenus pensés pour la découverte",
            en: 'Educational platform designed to make learning more engaging for children.\n- Interactive quizzes\n- Educational games\n- Progress-based learning flow\n- Colorful and accessible interface\n- Discovery-oriented content'
        },
        challenges: {
            fr: "Trouver le bon équilibre entre richesse visuelle, simplicité d'usage et performance sur différents appareils.",
            en: 'Finding the right balance between strong visuals, ease of use, and performance across devices.'
        },
        duration: { fr: '2 mois', en: '2 months' },
        role: { fr: 'Développeur frontend', en: 'Frontend developer' }
    },
    {
        id: 3,
        title: { fr: 'KULIPA', en: 'KULIPA' },
        description: {
            fr: "Application mobile de facturation orientée usage métier, avec tableau de bord, gestion client et suivi précis des statuts de facture.",
            en: 'Business-focused invoicing mobile app with dashboard, client management, and precise invoice status tracking.'
        },
        technologies: ['Expo', 'React Native', 'TypeScript', 'Zustand'],
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/kulipa',
        codeLabel: { fr: 'Voir le code', en: 'View code' },
        status: 'progress',
        longDescription: {
            fr: "Application mobile de gestion commerciale centrée sur la facturation.\n- Dashboard avec indicateurs de paiement\n- Suivi des factures par statut\n- Gestion des clients\n- Stores locaux avec Zustand\n- Préparation à l'impression et au partage de documents",
            en: 'Commercial management mobile app centered on invoicing.\n- Dashboard with payment insights\n- Invoice status tracking\n- Client management\n- Local state stores with Zustand\n- Foundation for printing and sharing documents'
        },
        challenges: {
            fr: "Construire une base mobile claire pour la gestion de factures, tout en gardant des écrans simples à parcourir et une structure extensible pour la suite.",
            en: 'Building a clear mobile foundation for invoicing while keeping screens simple to navigate and the structure extensible.'
        },
        duration: { fr: '1 mois', en: '1 month' },
        role: { fr: 'Développeur frontend', en: 'Frontend developer' }
    },
    {
        id: 4,
        title: { fr: 'Crypto Price Tracker', en: 'Crypto Price Tracker' },
        description: {
            fr: "Application web et mobile de suivi crypto en temps réel, conçue avec une stack moderne et une base prête pour des fonctionnalités plus avancées.",
            en: 'Real-time crypto tracking app for web and mobile, built on a modern stack and prepared for more advanced product features.'
        },
        technologies: ['Expo', 'React Native', 'TypeScript', 'tRPC', 'Drizzle ORM'],
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/crypto-price-tracker',
        codeLabel: { fr: 'Voir le code', en: 'View code' },
        status: 'progress',
        longDescription: {
            fr: "Projet de suivi crypto construit sur une stack moderne mobile/web.\n- Liste temps réel des cryptomonnaies\n- Rafraîchissement manuel des données\n- Gestion des thèmes clair/sombre\n- Architecture Expo Router et hooks dédiés\n- Backend tRPC et schéma Drizzle prêts pour les favoris et évolutions futures",
            en: 'Crypto tracking project built on a modern mobile/web stack.\n- Real-time cryptocurrency list\n- Manual data refresh\n- Light and dark theme handling\n- Expo Router architecture with dedicated hooks\n- tRPC backend and Drizzle schema ready for favorites and future growth'
        },
        challenges: {
            fr: "Rendre les données de marché lisibles et fiables côté UI tout en préparant une architecture plus ambitieuse qu'une simple liste de prix.",
            en: 'Making market data readable and reliable in the UI while preparing a more ambitious architecture than a simple price list.'
        },
        duration: { fr: '1 mois', en: '1 month' },
        role: { fr: 'Développeur full stack', en: 'Full-stack developer' }
    },
    {
        id: 5,
        title: { fr: 'Menu City', en: 'Menu City' },
        description: {
            fr: "Application mobile cross-platform pour découvrir un restaurant proche, partager une sortie et préparer des interactions sociales simples.",
            en: 'Cross-platform mobile app to discover nearby restaurants, share outings, and prepare lightweight social interactions.'
        },
        technologies: ['React Native', 'TypeScript', 'CSS'],
        image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: { fr: 'Profil GitHub', en: 'GitHub profile' },
        status: 'progress',
        longDescription: {
            fr: "Application mobile orientée découverte et partage.\n- Localisation des restaurants\n- Invitations entre contacts\n- Notifications push\n- Expérience mobile responsive\n- Base prête pour des fonctionnalités sociales",
            en: 'Mobile app focused on discovery and sharing.\n- Restaurant discovery by location\n- Contact invitations\n- Push notifications\n- Responsive mobile experience\n- Foundation for social features'
        },
        challenges: {
            fr: "Maintenir une expérience cohérente sur mobile tout en préparant des fonctions sociales et géolocalisées.",
            en: 'Keeping the mobile experience coherent while preparing social and location-based features.'
        },
        duration: { fr: '4 mois', en: '4 months' },
        role: { fr: 'Développeur mobile', en: 'Mobile developer' }
    },
    {
        id: 6,
        title: { fr: 'FJ Trust Multi Services', en: 'FJ Trust Multi Services' },
        description: {
            fr: "Site vitrine d'entreprise conçu pour présenter l'offre, rassurer les prospects et fournir une présence en ligne claire sur tous les écrans.",
            en: 'Corporate website built to present services, reassure prospects, and provide a clear online presence across devices.'
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://media.istockphoto.com/id/899274526/fr/photo/antenne-de-coucher-de-soleil-de-grue.webp?a=1&b=1&s=612x612&w=0&k=20&c=QNHLQHEV7IQphuryVjDymqClMhIFDP_j8fPZ3yTBbx8=',
        demoUrl: 'https://multisarl.com',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: { fr: 'Profil GitHub', en: 'GitHub profile' },
        status: 'live',
        longDescription: {
            fr: "Site vitrine moderne conçu pour renforcer la présence en ligne de l'entreprise.\n- Design responsive\n- Mise en avant des services\n- Formulaires de contact\n- Pages légères et rapides à charger\n- Structure pensée pour la clarté",
            en: 'Modern showcase website designed to strengthen the company’s online presence.\n- Responsive design\n- Clear service presentation\n- Contact forms\n- Lightweight and fast-loading pages\n- Structure built for clarity'
        },
        challenges: {
            fr: "Créer une présence en ligne crédible avec un design sobre, lisible et performant sur mobile.",
            en: 'Creating a credible online presence with a sober, readable design that still performs well on mobile.'
        },
        duration: { fr: '1 semaine', en: '1 week' },
        role: { fr: 'Développeur frontend', en: 'Frontend developer' }
    },
    {
        id: 7,
        title: { fr: 'App Web Constellation', en: 'Constellation Web App' },
        description: {
            fr: "Site de présentation d'entreprise conçu pour mettre en avant l'activité, les services et la vision de marque dans une interface claire.",
            en: 'Company presentation website built to highlight the business, services, and brand vision through a clear interface.'
        },
        technologies: ['React', 'CSS', 'JavaScript', 'Tailwind CSS'],
        image: 'assets/constellation.jpg',
        demoUrl: 'https://constellation-cd.netlify.app',
        codeUrl: 'https://github.com/Sombre-mael?tab=repositories',
        codeLabel: { fr: 'Profil GitHub', en: 'GitHub profile' },
        status: 'live',
        longDescription: {
            fr: "Application web conçue pour présenter l'entreprise et poser les bases d'évolutions éditoriales futures.\n- Présentation de l'activité\n- Mise en avant des services\n- Base frontend extensible\n- Architecture claire pour les prochaines fonctionnalités\n- Déploiement web accessible",
            en: 'Web application designed to present the company and lay the groundwork for future editorial growth.\n- Business presentation\n- Service showcase\n- Extensible frontend foundation\n- Clear architecture for future features\n- Accessible web deployment'
        },
        challenges: {
            fr: "Concevoir une base visuelle propre et réutilisable pour accueillir ensuite des modules plus riches sans alourdir le parcours.",
            en: 'Designing a clean, reusable visual foundation that can later support richer modules without slowing down the experience.'
        },
        duration: { fr: '1 mois', en: '1 month' },
        role: { fr: 'Développeur frontend', en: 'Frontend developer' }
    },
    {
        id: 8,
        title: { fr: 'LinkShort', en: 'LinkShort' },
        description: {
            fr: "Outil web de raccourcissement d'URL avec génération de QR code personnalisable, pensé pour un usage rapide et une interface moderne.",
            en: 'URL shortener web tool with customizable QR code generation, designed for fast usage and a modern interface.'
        },
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/LinkShort',
        codeLabel: { fr: 'Voir le code', en: 'View code' },
        status: 'progress',
        longDescription: {
            fr: "Application web utilitaire construite pour raccourcir un lien et produire un QR code prêt au partage.\n- Validation d'URL\n- Raccourcissement via API is.gd\n- Copie rapide du lien\n- QR code personnalisable (couleurs, taille, marge, niveau de correction)\n- Export PNG du QR code",
            en: 'Utility web app built to shorten links and generate share-ready QR codes.\n- URL validation\n- Shortening via the is.gd API\n- Quick copy flow\n- Customizable QR code (colors, size, margin, correction level)\n- PNG export'
        },
        challenges: {
            fr: "Créer une interface à la fois simple et agréable autour d'un usage très court, tout en ajoutant une personnalisation réelle du QR code sans alourdir l'expérience.",
            en: 'Building an interface that stays simple around a very short task while still adding meaningful QR code customization.'
        },
        duration: { fr: '2 semaines', en: '2 weeks' },
        role: { fr: 'Développeur frontend', en: 'Frontend developer' }
    },
    {
        id: 9,
        title: { fr: 'School Manage', en: 'School Manage' },
        description: {
            fr: "Assistant scolaire web capable de répondre rapidement sur des élèves, paiements, classes ou événements via une interface de chatbot simple.",
            en: 'Web-based school assistant able to answer quickly about students, payments, classes, and events through a simple chatbot interface.'
        },
        technologies: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60',
        demoUrl: '',
        codeUrl: 'https://github.com/Sombre-mael/SchoolManage',
        codeLabel: { fr: 'Voir le code', en: 'View code' },
        status: 'progress',
        longDescription: {
            fr: "Projet web léger orienté assistance scolaire plutôt que gestion lourde.\n- API Express pour le chat\n- Détection d'intention et routage des demandes\n- Consultation d'emploi du temps, absences, notes et paiements\n- Données mockées pour les tests\n- Interface web simple pour dialoguer avec le bot",
            en: 'Lightweight web project focused on school assistance rather than full management.\n- Express API for chat\n- Intent detection and request routing\n- Timetable, absence, grade, and payment lookups\n- Mocked data for testing\n- Simple web UI for chatbot interaction'
        },
        challenges: {
            fr: "Transformer des besoins scolaires concrets en intents simples, puis renvoyer une réponse utile et lisible sans complexifier inutilement l'interface.",
            en: 'Turning concrete school needs into simple intents, then returning useful and readable answers without making the interface heavier than necessary.'
        },
        duration: { fr: '2 semaines', en: '2 weeks' },
        role: { fr: 'Développeur backend / frontend', en: 'Backend / frontend developer' }
    },
    {
        id: 10,
        title: { fr: 'Portfolio Personnel', en: 'Personal Portfolio' },
        description: {
            fr: "Portfolio immersif conçu pour présenter mon profil, mes compétences et mes projets dans une expérience visuelle forte et plus crédible côté recruteur.",
            en: 'Immersive portfolio built to present my profile, skills, and projects through a strong visual experience with clearer recruiter value.'
        },
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1663882658055-40f1d4249867?w=500&auto=format&fit=crop&q=60',
        demoUrl: 'https://sombre-mael.github.io/Mon-Portfolio/',
        codeUrl: 'https://github.com/Sombre-mael/Mon-Portfolio',
        codeLabel: { fr: 'Voir le code', en: 'View code' },
        status: 'live',
        longDescription: {
            fr: "Portfolio personnel pensé pour marier identité visuelle, crédibilité professionnelle et ouverture à la collaboration.\n- Univers graphique fort\n- Sections claires\n- Mise en avant des projets\n- Formulaire de contact\n- Expérience responsive",
            en: 'Personal portfolio designed to combine visual identity, professional credibility, and openness to collaboration.\n- Strong visual universe\n- Clear sections\n- Project showcase\n- Contact form\n- Responsive experience'
        },
        challenges: {
            fr: "Créer une expérience visuelle différenciante sans sacrifier la lisibilité, la stabilité et la cohérence globale du parcours.",
            en: 'Creating a distinctive visual experience without sacrificing readability, stability, or overall flow.'
        },
        duration: { fr: '2 semaines', en: '2 weeks' },
        role: { fr: 'Développeur frontend', en: 'Frontend developer' }
    }
];

let currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
let typingIntervalId;

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
let currentOpenProjectId = null;

const sectionIds = ['hero', 'about', 'collaboration', 'skills', 'projects', 'contact'];

document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initLanguage();
    initSkills();
    initNavigation();
    initProgressDots();
    initScrollAnimations();
    initContactForm();
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

function initLanguage() {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && uiContent[savedLanguage]) {
        currentLanguage = savedLanguage;
    }

    document.querySelectorAll('.language-btn').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.language));
    });

    setLanguage(currentLanguage, { persist: false });
}

function setLanguage(language, options = {}) {
    if (!uiContent[language]) {
        return;
    }

    const { persist = true } = options;
    currentLanguage = language;

    if (persist) {
        localStorage.setItem('portfolio-language', language);
    }

    document.documentElement.lang = language;
    document.title = getUiText('metaTitle');

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
        descriptionMeta.setAttribute('content', getUiText('metaDescription'));
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const value = getUiText(element.dataset.i18n);
        if (typeof value === 'string') {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const value = getUiText(element.dataset.i18nPlaceholder);
        if (typeof value === 'string') {
            element.setAttribute('placeholder', value);
        }
    });

    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        mobileToggle.setAttribute('aria-label', getUiText('nav.mobileLabel'));
    }

    const languageSwitch = document.querySelector('.language-switch');
    if (languageSwitch) {
        languageSwitch.setAttribute('aria-label', getUiText('nav.languageLabel'));
    }

    document.querySelectorAll('.language-btn').forEach((button) => {
        const isActive = button.dataset.language === language;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    initProjects();
    initTypingEffect();

    if (currentOpenProjectId !== null) {
        window.showProjectModal(currentOpenProjectId);
    }

    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
}

function getUiText(path) {
    const value = path
        .split('.')
        .reduce((accumulator, key) => accumulator?.[key], uiContent[currentLanguage]);

    return value ?? '';
}

function getLocalizedValue(value) {
    if (value && typeof value === 'object' && !Array.isArray(value) && ('fr' in value || 'en' in value)) {
        return value[currentLanguage] || value.fr || value.en || '';
    }

    return value;
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
        image.alt = getLocalizedValue(project.title);
        image.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'project-overlay';

        imageWrapper.append(image, overlay);

        const content = document.createElement('div');
        content.className = 'project-content';

        const header = document.createElement('div');
        header.className = 'project-header';

        const titleGroup = document.createElement('div');
        titleGroup.className = 'project-title-group';

        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = getLocalizedValue(project.title);

        titleGroup.appendChild(title);

        header.append(titleGroup, createStatusBadge(project.status));

        const description = document.createElement('p');
        description.className = 'project-description';
        description.textContent = getLocalizedValue(project.description);

        const techList = document.createElement('div');
        techList.className = 'project-tech';
        project.technologies.forEach((tech) => techList.appendChild(createTechTag(tech)));

        const links = document.createElement('div');
        links.className = 'project-links';
        links.append(
            createProjectAnchor(project.demoUrl, getUiText('projects.demo'), `demo-link-${project.id}`, true),
            createProjectAnchor(project.codeUrl, getLocalizedValue(project.codeLabel) || getUiText('projects.viewCode'), `code-link-${project.id}`, false),
            createMoreButton(project.id)
        );

        content.append(header, description, techList, links);
        card.append(imageWrapper, content);

        if (document.body.dataset.animationsReady === 'true') {
            card.classList.add('visible');
        }

        container.appendChild(card);
    });
}

function createStatusBadge(status) {
    const badge = document.createElement('span');
    badge.className = `project-status ${status === 'live' ? 'is-live' : 'is-progress'}`;
    badge.textContent = getUiText(`projects.status.${status}`);
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
    anchor.append(document.createTextNode(url ? label : getUiText('projects.demoSoon')));
    return anchor;
}

function createMoreButton(projectId) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-link-more';
    button.dataset.testid = `more-link-${projectId}`;
    button.textContent = getUiText('projects.more');
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
    closeButton.setAttribute('aria-label', getUiText('projects.modal.closeLabel'));
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', window.closeProjectModal);

    const image = document.createElement('img');
    image.className = 'modal-image';
    image.src = project.image;
    image.alt = getLocalizedValue(project.title);

    const title = document.createElement('h2');
    title.className = 'modal-title';
    title.textContent = getLocalizedValue(project.title);

    const descriptionSection = createModalSection(getUiText('projects.modal.description'), getLocalizedValue(project.longDescription));
    const challengeSection = createModalSection(getUiText('projects.modal.challenge'), getLocalizedValue(project.challenges));

    const techSection = document.createElement('div');
    techSection.className = 'modal-section';
    const techHeading = document.createElement('h4');
    techHeading.textContent = getUiText('projects.modal.technologies');
    const techList = document.createElement('div');
    techList.className = 'project-tech';
    project.technologies.forEach((tech) => techList.appendChild(createTechTag(tech)));
    techSection.append(techHeading, techList);

    const meta = document.createElement('div');
    meta.className = 'modal-meta';
    meta.append(
        createModalSection(getUiText('projects.modal.duration'), getLocalizedValue(project.duration)),
        createModalSection(getUiText('projects.modal.role'), getLocalizedValue(project.role))
    );

    const buttons = document.createElement('div');
    buttons.className = 'modal-buttons';
    buttons.append(
        createModalButton(project.demoUrl, getUiText('projects.modal.viewDemo'), 'modal-demo-btn', 'modal-btn modal-btn-primary'),
        createModalButton(project.codeUrl, getLocalizedValue(project.codeLabel) || getUiText('projects.viewCode'), 'modal-code-btn', 'modal-btn modal-btn-secondary')
    );

    content.append(closeButton, image, title, descriptionSection, techSection, challengeSection, meta, buttons);

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    currentOpenProjectId = projectId;
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
    anchor.textContent = url ? label : getUiText('projects.modal.unavailable');

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
    currentOpenProjectId = null;
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

    gsap.utils.toArray('.section-intro, .collaboration-card, .availability-panel').forEach((element, index) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 28
        }, {
            scrollTrigger: {
                trigger: element,
                start: 'top 88%'
            },
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: index * 0.04,
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

    document.body.dataset.animationsReady = 'true';
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

    if (typingIntervalId) {
        window.clearInterval(typingIntervalId);
    }

    const words = getUiText('hero.rotatingWords');
    if (!Array.isArray(words) || words.length === 0) {
        return;
    }

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

    typingIntervalId = window.setInterval(rotateWord, 2200);
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
            setFormStatus(status, 'is-success', getUiText('contact.form.success'));
        } catch (error) {
            setFormStatus(status, 'is-error', getUiText('contact.form.error'));
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
