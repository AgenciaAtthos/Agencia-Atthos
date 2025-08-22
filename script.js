document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mobileNav');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            const isOpen = !nav.classList.contains('hidden');
            nav.classList.toggle('hidden');
            const icon = isOpen ? 'menu' : 'x';
            btn.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
            lucide.createIcons();
        });

        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.add('hidden');
                btn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
                lucide.createIcons();
            });
        });
    }
});