document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isOpen = !mobileNav.classList.contains('hidden');
            mobileNav.classList.toggle('hidden');
            const icon = isOpen ? 'menu' : 'x';
            menuBtn.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
            lucide.createIcons();
        });

        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                menuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
                lucide.createIcons();
            });
        });
    }
});