document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const heroSection = document.querySelector('header'); // قسم Hero
    const navbar = document.querySelector('.navbar'); // شريط التنقل
    const darkIcon = document.querySelector('.dark-mode-icon');
    const lightIcon = document.querySelector('.light-mode-icon');

    // 1. تحقق من تفضيل المستخدم المحفوظ في localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            heroSection.classList.add('dark-mode');
            navbar.classList.add('dark-mode');
            darkModeToggle.checked = true; // اجعل الزر في وضع التشغيل
            darkIcon.classList.remove('d-none');
            lightIcon.classList.add('d-none');
        } else {
            // للتأكد من إزالة وضع الليل إذا كان مفعلًا سابقًا ومحفوظًا كـ light
            body.classList.remove('dark-mode');
            heroSection.classList.remove('dark-mode');
            navbar.classList.remove('dark-mode');
            darkModeToggle.checked = false; // اجعل الزر في وضع الإيقاف
            darkIcon.classList.add('d-none');
            lightIcon.classList.remove('d-none');
        }
    } else {
        // إذا لم يكن هناك تفضيل محفوظ، تحقق من تفضيل النظام (OS preference)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            heroSection.classList.add('dark-mode');
            navbar.classList.add('dark-mode');
            darkModeToggle.checked = true;
            darkIcon.classList.remove('d-none');
            lightIcon.classList.add('d-none');
        }
    }

    // 2. الاستماع لحدث التبديل
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            heroSection.classList.add('dark-mode');
            navbar.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkIcon.classList.remove('d-none');
            lightIcon.classList.add('d-none');
        } else {
            body.classList.remove('dark-mode');
            heroSection.classList.remove('dark-mode');
            navbar.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkIcon.classList.add('d-none');
            lightIcon.classList.remove('d-none');
        }
    });
});