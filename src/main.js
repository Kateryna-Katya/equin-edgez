document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.background = 'rgba(6, 9, 18, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(6, 9, 18, 0.8)';
        }
    });

    // Mobile Menu (Burger) logic
    const burger = document.getElementById('burger');
    // В следующих этапах добавим выезжающее мобильное меню
    // Добавь это в начало файла или загрузи библиотеку через CDN в HTML
// <script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>

function initTypewriter() {
    new TypeIt("#typewriter", {
        speed: 50,
        waitUntilVisible: true,
        loop: true
    })
    .type('<span style="color: #bf00ff">import</span> equin_edge_ai', {delay: 300})
    .break()
    .type('<span style="color: #bf00ff">class</span> <span style="color: #00f5ff">AIAssistant</span>:', {delay: 500})
    .break()
    .type('    <span style="color: #bf00ff">def</span> __init__(self):', {delay: 200})
    .break()
    .type('        self.status = <span style="color: #ce9178">"Innovation"</span>', {delay: 300})
    .break()
    .type('        self.power = <span style="color: #ce9178">"Unlimited"</span>', {delay: 800})
    .break()
    .type('<span style="color: #27c93f"># Запуск протокола...</span>', {delay: 1000})
    .delete()
    .type('<span style="color: #00f5ff">System.deploy(bot_v2)</span>')
    .pause(2000)
    .go();
}

// Вызови функцию внутри DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... предыдущий код ...
    if (document.querySelector('#typewriter')) {
        initTypewriter();
    }
});
});