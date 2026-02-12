// ============================================
// COSMIC EXPLORER PORTFOLIO - SCRIPT.JS
// Three.js Space Theme with GSAP Animations
// ============================================

// --- Skills Data with SVG Icons ---
const skills = [
    { 
        name: 'JavaScript', 
        color: '#F7DF1E',
        icon: `<svg viewBox="0 0 128 128"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.184H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>`
    },
    { 
        name: 'TypeScript', 
        color: '#3178C6',
        icon: `<svg viewBox="0 0 128 128"><rect fill="#3178C6" width="128" height="128" rx="6"/><path fill="#fff" d="M82.82 89.12c0 5.3 2.72 9.27 8.17 11.89 5.44 2.62 12.63 3.93 21.56 3.93 8.56 0 15.47-1.51 20.73-4.54 5.26-3.03 7.89-7.52 7.89-13.47 0-4.43-1.43-7.99-4.3-10.68-2.86-2.69-7.83-4.88-14.89-6.57l-9.78-2.35c-4.09-.97-6.95-2.04-8.57-3.22-1.62-1.17-2.43-2.74-2.43-4.69 0-2.18.99-3.89 2.97-5.13 1.98-1.24 4.72-1.86 8.22-1.86 3.72 0 6.64.77 8.78 2.32 2.14 1.55 3.46 3.63 3.96 6.24l13.47-1.91c-.96-5.22-3.65-9.37-8.07-12.45-4.42-3.08-10.36-4.62-17.83-4.62-7.79 0-14.07 1.67-18.84 5.01-4.77 3.34-7.15 7.84-7.15 13.51 0 4.47 1.47 8.08 4.42 10.84 2.95 2.76 7.6 4.9 13.97 6.41l10.67 2.51c4.28 1.01 7.25 2.16 8.9 3.46 1.66 1.3 2.48 2.98 2.48 5.05 0 2.35-1.1 4.2-3.3 5.54-2.2 1.35-5.26 2.02-9.19 2.02-4.06 0-7.34-.87-9.83-2.62-2.49-1.75-4.06-4.24-4.7-7.48l-13.62 1.87zM22.95 54.99v10.39h19.22v52.18h14.67V65.38h19.22V54.99H22.95z"/></svg>`
    },
    { 
        name: 'React.js', 
        color: '#61DAFB',
        icon: `<svg viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>`
    },
    { 
        name: 'Next.js', 
        color: '#ffffff',
        icon: `<svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="64" fill="currentColor"/><path fill="#000" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.853 68.137a64.2 64.2 0 006.45-5.462zM81.778 38.4h8.533v51.2h-8.533z"/></svg>`
    },
    { 
        name: 'CSS', 
        color: '#1572B6',
        icon: `<svg viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/></svg>`
    },
    { 
        name: 'Tailwind CSS', 
        color: '#06B6D4',
        icon: `<svg viewBox="0 0 128 128"><path fill="#06B6D4" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/></svg>`
    },
    { 
        name: 'Supabase', 
        color: '#3ECF8E',
        icon: `<svg viewBox="0 0 109 113"><defs><linearGradient id="a" x1="53.974%" x2="94.116%" y1="9.906%" y2="98.291%"><stop offset="0%" stop-color="#249361"/><stop offset="100%" stop-color="#3ECF8E"/></linearGradient><linearGradient id="b" x1="36.156%" x2="54.484%" y1="30.578%" y2="99.259%"><stop offset="0%"/><stop offset="100%" stop-opacity="0"/></linearGradient></defs><path fill="url(#a)" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"/><path fill="url(#b)" fill-opacity=".2" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z"/><path fill="#3ECF8E" d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072z"/></svg>`
    },
    { 
        name: 'React Native', 
        color: '#61DAFB',
        icon: `<svg viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>`
    },
    { 
        name: 'VBA', 
        color: '#217346',
        icon: `<svg viewBox="0 0 128 128"><path fill="#217346" d="M79.531 0H17.469C7.813 0 0 7.813 0 17.469v93.063C0 120.188 7.813 128 17.469 128h93.063c9.656 0 17.469-7.812 17.469-17.469V48.469L79.531 0z"/><path fill="#185C37" d="M79.531 0v31c0 9.656 7.813 17.469 17.469 17.469H128L79.531 0z"/><path fill="#fff" d="M67.5 52h-7l-8.016 23.336L44 52h-7l11.5 32h7L67.5 52zm20 0h-16v32h7V71h9c5.523 0 10-4.477 10-10s-4.477-9-10-9zm0 13h-9v-7h9c1.657 0 3 1.343 3 3s-1.343 4-3 4z"/></svg>`
    },
    { 
        name: 'IA Consulting', 
        color: '#8B5CF6',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 014 4c0 1.1-.45 2.1-1.17 2.83L12 12l-2.83-3.17A4 4 0 0112 2z"/><path d="M12 12v6"/><path d="M8 22h8"/><path d="M12 18h.01"/><circle cx="12" cy="6" r="1"/><path d="M4 12h2m12 0h2"/><path d="M6.34 6.34l1.42 1.42m8.48 8.48l1.42 1.42"/><path d="M17.66 6.34l-1.42 1.42M7.76 16.24l-1.42 1.42"/></svg>`
    }
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
let skillObjects3D = [];
let skill3DGroup;
let warpStars = [];
let sectionObjects = {};
let currentSection = 'hero';

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
    scene.fog = new THREE.FogExp2(0x050505, 0.02);
    
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
    
    // Create Warp Speed Stars
    createWarpStars();
    
    // Create Nebula Effect
    createNebula();
    
    // Create 3D Skill Objects
    create3DSkillObjects();
    
    // Create Section Transition Objects
    createSectionObjects();
    
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

// ============================================
// WARP SPEED STARS (Transition Effect)
// ============================================

function createWarpStars() {
    const warpGroup = new THREE.Group();
    const warpCount = 300;
    
    for (let i = 0; i < warpCount; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array([0, 0, 0, 0, 0, -2]);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.LineBasicMaterial({
            color: Math.random() > 0.5 ? 0x3b82f6 : 0x8b5cf6,
            transparent: true,
            opacity: 0
        });
        
        const line = new THREE.Line(geometry, material);
        
        // Random position in a cylinder around camera path
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 8;
        line.position.x = Math.cos(angle) * radius;
        line.position.y = Math.sin(angle) * radius;
        line.position.z = (Math.random() - 0.5) * 50;
        
        line.userData = {
            baseOpacity: 0.3 + Math.random() * 0.7,
            speed: 0.5 + Math.random() * 1.5
        };
        
        warpStars.push(line);
        warpGroup.add(line);
    }
    
    scene.add(warpGroup);
}

// Activate warp effect during transitions
let warpActive = false;
let warpIntensity = 0;

function activateWarp(intensity = 1) {
    warpActive = true;
    gsap.to({ value: warpIntensity }, {
        value: intensity,
        duration: 0.3,
        onUpdate: function() {
            warpIntensity = this.targets()[0].value;
        }
    });
}

function deactivateWarp() {
    gsap.to({ value: warpIntensity }, {
        value: 0,
        duration: 0.5,
        onUpdate: function() {
            warpIntensity = this.targets()[0].value;
        },
        onComplete: () => {
            warpActive = false;
        }
    });
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

// ============================================
// SECTION TRANSITION OBJECTS
// ============================================

function createSectionObjects() {
    // About Section - Floating rings
    const aboutGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(3 + i * 1.5, 0.05, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2 + (i * 0.2);
        ring.userData = { baseY: i * 0.5, speed: 0.5 + i * 0.2 };
        aboutGroup.add(ring);
    }
    aboutGroup.position.set(0, -100, -15);
    scene.add(aboutGroup);
    sectionObjects.about = aboutGroup;
    
    // Projects Section - Floating cubes grid
    const projectsGroup = new THREE.Group();
    for (let i = 0; i < 12; i++) {
        const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        const angle = (i / 12) * Math.PI * 2;
        cube.position.x = Math.cos(angle) * 6;
        cube.position.y = Math.sin(angle) * 3;
        cube.position.z = (Math.random() - 0.5) * 5;
        cube.userData = { 
            angle: angle, 
            radius: 6,
            rotSpeed: 0.02 + Math.random() * 0.02 
        };
        projectsGroup.add(cube);
    }
    projectsGroup.position.set(0, 100, -20);
    scene.add(projectsGroup);
    sectionObjects.projects = projectsGroup;
    
    // Contact Section - Particle sphere
    const contactGroup = new THREE.Group();
    const sphereGeometry = new THREE.IcosahedronGeometry(4, 2);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    contactGroup.add(sphere);
    
    // Add orbiting particles
    for (let i = 0; i < 20; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? 0x3b82f6 : 0x8b5cf6,
            transparent: true,
            opacity: 0
        });
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        particle.position.x = 5 * Math.sin(phi) * Math.cos(theta);
        particle.position.y = 5 * Math.sin(phi) * Math.sin(theta);
        particle.position.z = 5 * Math.cos(phi);
        particle.userData = { theta, phi, radius: 5 };
        contactGroup.add(particle);
    }
    contactGroup.position.set(0, 100, -25);
    scene.add(contactGroup);
    sectionObjects.contact = contactGroup;
}

// ============================================
// 3D SKILL OBJECTS
// ============================================

function create3DSkillObjects() {
    skill3DGroup = new THREE.Group();
    skill3DGroup.position.set(0, -50, -10); // Position below view initially
    
    const geometries = [
        new THREE.IcosahedronGeometry(0.5, 0),
        new THREE.OctahedronGeometry(0.5, 0),
        new THREE.TetrahedronGeometry(0.6, 0),
        new THREE.BoxGeometry(0.7, 0.7, 0.7),
        new THREE.DodecahedronGeometry(0.5, 0)
    ];
    
    const skillColors = [
        0xF7DF1E, // JavaScript - Yellow
        0x3178C6, // TypeScript - Blue
        0x61DAFB, // React - Cyan
        0xffffff, // Next.js - White
        0x1572B6, // CSS - Blue
        0x06B6D4, // Tailwind - Cyan
        0x3ECF8E, // Supabase - Green
        0x61DAFB, // React Native - Cyan
        0x217346, // VBA - Green
        0x8B5CF6  // IA - Purple
    ];
    
    // Create orbiting skill objects
    skills.forEach((skill, index) => {
        const geometry = geometries[index % geometries.length];
        const material = new THREE.MeshBasicMaterial({
            color: skillColors[index],
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Position in a circular pattern
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 8 + (index % 3) * 2;
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.y = Math.sin(angle) * radius * 0.5;
        mesh.position.z = (Math.random() - 0.5) * 5;
        
        // Store original position and rotation speed
        mesh.userData = {
            originalX: mesh.position.x,
            originalY: mesh.position.y,
            originalZ: mesh.position.z,
            rotationSpeed: 0.005 + Math.random() * 0.01,
            orbitSpeed: 0.0005 + Math.random() * 0.001,
            orbitOffset: angle,
            floatSpeed: 0.5 + Math.random() * 0.5,
            floatOffset: Math.random() * Math.PI * 2
        };
        
        skillObjects3D.push(mesh);
        skill3DGroup.add(mesh);
        
        // Add glow effect
        const glowGeometry = geometry.clone();
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: skillColors[index],
            transparent: true,
            opacity: 0.2,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.scale.set(1.3, 1.3, 1.3);
        mesh.add(glow);
    });
    
    scene.add(skill3DGroup);
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
    
    const time = Date.now() * 0.001;
    
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
    
    // Animate 3D skill objects
    if (skillObjects3D.length > 0) {
        skillObjects3D.forEach((mesh, index) => {
            const data = mesh.userData;
            
            // Rotation
            mesh.rotation.x += data.rotationSpeed;
            mesh.rotation.y += data.rotationSpeed * 0.7;
            mesh.rotation.z += data.rotationSpeed * 0.5;
            
            // Floating motion
            mesh.position.y = data.originalY + Math.sin(time * data.floatSpeed + data.floatOffset) * 0.5;
            
            // Orbital motion
            const orbitAngle = time * data.orbitSpeed + data.orbitOffset;
            const radius = Math.sqrt(data.originalX * data.originalX + data.originalZ * data.originalZ);
            mesh.position.x = Math.cos(orbitAngle) * radius;
            mesh.position.z = data.originalZ + Math.sin(orbitAngle) * 2;
        });
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
        card.setAttribute('data-testid', `skill-${skill.name.toLowerCase().replace(/\s+/g, '-').replace('.', '')}`);
        card.style.transitionDelay = `${index * 100}ms`;
        card.style.setProperty('--skill-color', skill.color);
        
        card.innerHTML = `
            <div class="skill-icon-wrapper">
                <div class="skill-icon-svg">${skill.icon}</div>
                <div class="skill-icon-glow" style="background: ${skill.color}"></div>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;
        
        // Add hover interaction for 3D effect
        card.addEventListener('mouseenter', () => {
            highlightSkill3D(index);
        });
        
        card.addEventListener('mouseleave', () => {
            resetSkill3D(index);
        });
        
        container.appendChild(card);
    });
}

// Highlight corresponding 3D object when hovering skill card
function highlightSkill3D(index) {
    if (skillObjects3D[index]) {
        skillObjects3D[index].scale.set(1.5, 1.5, 1.5);
        skillObjects3D[index].material.opacity = 1;
    }
}

function resetSkill3D(index) {
    if (skillObjects3D[index]) {
        skillObjects3D[index].scale.set(1, 1, 1);
        skillObjects3D[index].material.opacity = 0.8;
    }
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
    
    // 3D Skill Objects animation - show when scrolling to skills section
    if (skill3DGroup) {
        ScrollTrigger.create({
            trigger: '#skills',
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                gsap.to(skill3DGroup.position, {
                    y: 0,
                    duration: 1.5,
                    ease: 'power2.out'
                });
                gsap.to(skill3DGroup.rotation, {
                    y: Math.PI * 0.1,
                    duration: 2,
                    ease: 'power2.out'
                });
            },
            onLeave: () => {
                gsap.to(skill3DGroup.position, {
                    y: 50,
                    duration: 1,
                    ease: 'power2.in'
                });
            },
            onEnterBack: () => {
                gsap.to(skill3DGroup.position, {
                    y: 0,
                    duration: 1.5,
                    ease: 'power2.out'
                });
            },
            onLeaveBack: () => {
                gsap.to(skill3DGroup.position, {
                    y: -50,
                    duration: 1,
                    ease: 'power2.in'
                });
            }
        });
    }
    
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