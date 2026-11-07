/**
 * Soares Instalações Elétricas - Script Principal (Interatividade, A11y e Conversão)
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const contactForm = document.getElementById('contact-form');

    // 1. Controle do Menu Mobile Acessível
    if (menuToggle && navMenu) {
        const closeMenu = () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        };

        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            const nextState = !isExpanded;
            menuToggle.setAttribute('aria-expanded', String(nextState));
            navMenu.classList.toggle('active', nextState);
        });

        // Fecha o menu ao clicar em qualquer link de navegação interno
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (
                navMenu.classList.contains('active') &&
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Fecha o menu ao pressionar a tecla Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
                menuToggle.focus();
            }
        });
    }

    // 2. Máscara Automática de Telefone/WhatsApp (DDD 47 e padrão BR)
    const phoneInput = document.getElementById('telefone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length > 11) v = v.slice(0, 11);
            if (v.length > 6) {
                e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
            } else if (v.length > 2) {
                e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
            } else if (v.length > 0) {
                e.target.value = `(${v}`;
            } else {
                e.target.value = '';
            }
        });
    }

    // 3. Efeito Scrolled no Header e ScrollSpy para Links Ativos
    const header = document.querySelector('.site-header');
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-menu .nav-link');

    const handleScroll = () => {
        if (header) {
            if (window.scrollY > 30) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }

        // Identifica a seção visível e atualiza o link ativo
        let currentSectionId = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navAnchors.forEach((anchor) => {
            const href = anchor.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                anchor.classList.add('nav-link-active');
            } else {
                anchor.classList.remove('nav-link-active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 4. Submissão do Formulário de Contato via WhatsApp
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome')?.value.trim() || '';
            const telefone = document.getElementById('telefone')?.value.trim() || '';
            const tipoImovel = document.getElementById('tipo-imovel')?.value.trim() || '';
            const mensagem = document.getElementById('mensagem')?.value.trim() || '';

            const textoBase = [
                'Olá! Vim pelo formulário do site da Soares Instalações Elétricas.',
                nome ? `*Nome:* ${nome}` : '',
                telefone ? `*Telefone:* ${telefone}` : '',
                tipoImovel ? `*Tipo de Serviço:* ${tipoImovel}` : '',
                mensagem ? `*Necessidade:* ${mensagem}` : ''
            ]
                .filter(Boolean)
                .join('\n');

            const whatsappUrl = `https://wa.me/5547991054858?text=${encodeURIComponent(textoBase)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
});
