/* =========================================
   1. NAVIGATION & MOBILE MENU
   ========================================= */
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');

// Toggle Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* =========================================
   2. TYPEWRITER EFFECT
   ========================================= */
const stackInfo = document.getElementById('stack-info');

if (stackInfo) {
    const typewriter = new Typewriter(stackInfo, {
        loop: true,
        delay: 75,
    });

    typewriter
        .typeString('Desenvolvedor Full-Stack')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Designer Gráfico')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Criador de Soluções')
        .pauseFor(1000)
        .start();
}

/* =========================================
   3. WHATSAPP CONTACT REDIRECT
   ========================================= */
function sendMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const phoneNumber = '5568992402096'; // Fixed number format
        const textMessage = `Olá, meu nome é ${name}. ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

        window.open(url, '_blank');
    } else {
        alert('Por favor, preencha seu nome e a mensagem para continuarmos.');
    }
}

/* =========================================
   4. DISCORD STATUS (Lanyard API)
   ========================================= */
function updateStatus() {
    const tag = document.getElementById('status-tag');
    if (!tag) return;

    fetch('https://api.lanyard.rest/v1/users/701953428510736396')
        .then(response => response.json())
        .then(data => {
            const status = data.data.discord_status;

            switch (status) {
                case 'online':
                    tag.textContent = 'ONLINE';
                    tag.classList.remove('offline');
                    tag.classList.add('online');
                    tag.style.color = '#2ecc71';
                    tag.style.borderColor = '#2ecc71';
                    tag.style.background = 'rgba(46, 204, 113, 0.2)';
                    break;

                case 'idle':
                    tag.textContent = 'AUSENTE';
                    tag.classList.remove('offline');
                    tag.style.color = '#f1c40f';
                    tag.style.borderColor = '#f1c40f';
                    tag.style.background = 'rgba(241, 196, 15, 0.2)';
                    break;

                case 'dnd':
                    tag.textContent = 'OCUPADO';
                    tag.classList.remove('offline');
                    tag.style.color = '#e74c3c';
                    tag.style.borderColor = '#e74c3c';
                    tag.style.background = 'rgba(231, 76, 60, 0.2)';
                    break;

                case 'offline':
                default:
                    tag.textContent = 'OFFLINE';
                    // styles already set in CSS for offline
                    break;
            }
        })
        .catch(error => console.error('Error fetching status:', error));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    updateStatus();
    // Update year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ===============================
// TRANSLATIONS
// ===============================
const translations = {
    pt: {
        nav: {
            home: "Home",
            about: "Sobre",
            projects: "Projetos",
            services: "Serviços",
            contact: "Contato"
        },

        hero: {
            title: "Transformando ideias em jogos dentro do Roblox",
            stack: "Modelador 3D • UGC Creator • Scripter Roblox",
            roles: [
                "Modelador 3D",
                "Criador de UGC",
                "Scripter",
                "Desenvolvedor Web"
            ],
            projects: "Ver Projetos",
            contact: "Fale Comigo"
        },

        about: {
            title: "Sobre mim",
            subtitle: "Criador focado em Modelagem 3D",
            text: "Trabalho com modelagem 3D no Roblox e também atuo como UGC Creator e Scripter. Meu foco principal é a modelagem, mas possuo conhecimento em outras áreas necessárias para o desenvolvimento de jogos completos.",
            skill1: "Modelagem 3D & UGC",
            skill2: "Desenvolvimento Web",
            skill3: "Scripting"
        },

        projects: {
            title: "Projetos em Destaque",
            subtitle: "Uma seleção dos meus melhores trabalhos.",
            more: "Mais projetos"
        },

        services: {
            title: "Serviços",
            subtitle: "Soluções profissionais para o seu projeto.",

            web: {
                title: "Desenvolvimento Web",
                text: "Sites institucionais, sites para jogos ou sistemas web completos."
            },

            modeling: {
                title: "Modelagem 3D & UGC",
                text: "Criação de assets, itens para jogos ou UGC personalizados para o catálogo do Roblox."
            },

            scripting: {
                title: "Scripting",
                text: "Desenvolvimento de scripts completos e otimizados para jogos no Roblox."
            }
        },

        contact: {
            title: "Vamos conversar?",
            subtitle: "Transforme sua ideia em projeto hoje mesmo.",

            infoTitle: "Informações de Contato",
            infoText: "Sinta-se à vontade para entrar em contato, de preferência via Discord para uma resposta mais rápida.",

            discordLabel: "Discord:",
            emailLabel: "Email:",

            alertTitle: "Atenção:",
            alertText: "No momento estou priorizando projetos de curto/médio prazo.",

            nameLabel: "Seu Nome",
            namePlaceholder: "Seu nome",

            messageLabel: "Sua Ideia / Mensagem",
            messagePlaceholder: "Descreva sua ideia ou projeto...",

            button: "Iniciar conversa no Discord"
        }
    },

    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            services: "Services",
            contact: "Contact"
        },

        hero: {
            title: "Turning ideas into games on Roblox",
            stack: "3D Modeler • UGC Creator • Roblox Scripter",
            roles: [
                "3D Modeler",
                "UGC Creator",
                "Scripter",
                "Web Developer"
            ],
            projects: "View Projects",
            contact: "Contact Me"
        },

        about: {
            title: "About me",
            subtitle: "Creator focused on 3D Modeling",
            text: "I work with 3D modeling on Roblox and also act as a UGC Creator and Scripter. My main focus is modeling, but I also have knowledge in other areas required to build complete games.",
            skill1: "3D Modeling & UGC",
            skill2: "Web Development",
            skill3: "Scripting"
        },

        projects: {
            title: "Featured Projects",
            subtitle: "A selection of my best work.",
            more: "More projects"
        },

        services: {
            title: "Services",
            subtitle: "Professional solutions for your project.",

            web: {
                title: "Web Development",
                text: "Institutional websites, game websites, or complete web systems."
            },

            modeling: {
                title: "3D Modeling & UGC",
                text: "Creation of assets, game items, or custom UGC for the Roblox catalog."
            },

            scripting: {
                title: "Scripting",
                text: "Development of complete and optimized scripts for Roblox games."
            }
        },

        contact: {
    title: "Let's talk?",
    subtitle: "Turn your idea into a project today.",

    infoTitle: "Contact Information",
    infoText: "Feel free to get in touch, preferably via Discord for a faster response.",

    discordLabel: "Discord:",
    emailLabel: "Email:",

    alertTitle: "Notice:",
    alertText: "At the moment, I am prioritizing short to medium-term projects.",

    nameLabel: "Your Name",
    namePlaceholder: "Your name",

    messageLabel: "Your Idea / Message",
    messagePlaceholder: "Describe your idea or project...",

    button: "Start a conversation on Discord"
}
    }
};


// ===============================
// ELEMENTS (LANGUAGE)
// ===============================
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const currentLang = document.getElementById('current-lang');
const currentFlag = document.getElementById('current-flag');

// ===============================
// TYPEWRITER HANDLER
// ===============================
let typewriterInstance = null;

function startTypewriter(lang) {
    const el = document.getElementById('stack-info');
    if (!el || typeof Typewriter === 'undefined') return;

    // Limpa instância anterior
    if (typewriterInstance) {
        typewriterInstance.stop();
        typewriterInstance = null;
        el.innerHTML = '';
    }

    const roles = translations[lang].hero.roles;

    typewriterInstance = new Typewriter(el, {
        loop: true,
        delay: 75,
        deleteSpeed: 40
    });

    roles.forEach(role => {
        typewriterInstance
            .typeString(role)
            .pauseFor(1200)
            .deleteAll();
    });

    typewriterInstance.start();
}

// ===============================
// SET LANGUAGE
// ===============================
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let text = translations[lang];

        keys.forEach(key => {
            if (text) text = text[key];
        });

        if (text) el.textContent = text;
    });

    // Atualiza botão de idioma
    if (lang === 'pt') {
        currentLang.textContent = 'PT';
        currentFlag.src = 'images/flags/br.png';
        currentFlag.alt = 'Português';
    } else {
        currentLang.textContent = 'EN';
        currentFlag.src = 'images/flags/us.png';
        currentFlag.alt = 'English';
    }

    // Atualiza animação do hero
    startTypewriter(lang);

    localStorage.setItem('siteLang', lang);
}

// ===============================
// LANGUAGE MENU EVENTS
// ===============================
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.style.display =
        langMenu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('#lang-menu li').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.dataset.lang;
        setLanguage(lang);
        langMenu.style.display = 'none';
    });
});

document.addEventListener('click', () => {
    langMenu.style.display = 'none';
});

// ===============================
// LOAD SAVED LANGUAGE
// ===============================
const savedLang = localStorage.getItem('siteLang') || 'pt';
setLanguage(savedLang);
