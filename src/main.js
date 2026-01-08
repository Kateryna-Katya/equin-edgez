document.addEventListener('DOMContentLoaded', () => {
    // 1. ИНИЦИАЛИЗАЦИЯ БИБЛИОТЕК
    AOS.init({ duration: 1000, once: true });
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // 2. ЭФФЕКТ ХЕДЕРА ПРИ СКРОЛЛЕ
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.style.padding = window.scrollY > 50 ? '12px 0' : '20px 0';
        header.style.background = window.scrollY > 50 ? 'rgba(6, 9, 18, 0.95)' : 'rgba(6, 9, 18, 0.8)';
    });

    // 3. МОБИЛЬНОЕ МЕНЮ
    const burger = document.getElementById('burger');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu__link');

    const toggleMenu = (state) => {
        mobileMenu.classList.toggle('active', state);
        document.body.style.overflow = state ? 'hidden' : '';
    };

    burger.addEventListener('click', () => toggleMenu(true));
    menuClose.addEventListener('click', () => toggleMenu(false));
    menuLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    // 4. ТЕРМИНАЛ (TYPEWRITER)
    if (document.querySelector('#typewriter')) {
        new TypeIt("#typewriter", {
            speed: 50,
            waitUntilVisible: true,
            loop: true
        })
        .type('<span style="color: #bf00ff">import</span> equin_edge_ai', {delay: 300}).break()
        .type('<span style="color: #bf00ff">class</span> <span style="color: #00f5ff">AIAssistant</span>:', {delay: 500}).break()
        .type('    <span style="color: #bf00ff">def</span> __init__(self):').break()
        .type('        self.status = <span style="color: #ce9178">"Innovation"</span>').break()
        .type('<span style="color: #27c93f"># Запуск протокола...</span>', {delay: 1000})
        .delete().type('<span style="color: #00f5ff">System.deploy(bot_v2)</span>').pause(2000).go();
    }

    // 5. АККОРДЕОН ПРЕИМУЩЕСТВ
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            featureItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // 6. ФОРМА ОБРАТНОЙ СВЯЗИ
    const form = document.getElementById('ai-form');
    if (form) {
        const phoneInput = document.getElementById('phone');
        const captchaInput = document.getElementById('captcha-input');
        const successMsg = document.getElementById('form-success');
        
        // Генерация капчи
        const n1 = Math.floor(Math.random() * 10), n2 = Math.floor(Math.random() * 10);
        const correct = n1 + n2;
        document.getElementById('captcha-label').textContent = `Решите: ${n1} + ${n2} = ?`;

        phoneInput.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^0-9+]/g, ''));

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (parseInt(captchaInput.value) !== correct) return alert('Ошибка капчи!');
            
            const btn = form.querySelector('button');
            btn.disabled = true; btn.textContent = 'Отправка...';

            setTimeout(() => {
                form.reset();
                btn.style.display = 'none';
                successMsg.classList.add('active');
                lucide.createIcons();
            }, 1500);
        });
    }

    // 7. COOKIE POPUP LOGIC
    const cookiePopup = document.getElementById('cookie-popup');
    const cookieAccept = document.getElementById('cookie-accept');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => cookiePopup.classList.add('show'), 2000);
    }

    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookiePopup.classList.remove('show');
    });

    // 8. ПАРАЛЛАКС ЧАСТИЦ
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth, y = e.clientY / window.innerHeight;
        document.querySelectorAll('.data-particle').forEach(p => {
            p.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        });
    });
});