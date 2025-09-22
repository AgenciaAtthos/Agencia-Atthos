document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do menu móvel
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('menu-btn');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Funcionalidade do blog (collapsible)
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.toggle('active');

            // Fecha outros conteúdos abertos
            document.querySelectorAll('.collapsible-header.active').forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = '0';
                    otherHeader.nextElementSibling.style.padding = '0 1.5rem';
                }
            });

            // Abre ou fecha o conteúdo clicado
            if (isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '1.5rem';
            } else {
                content.style.maxHeight = '0';
                content.style.padding = '0 1.5rem';
            }
        });
    });
});