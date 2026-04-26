document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Логика выпадающего меню ---
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (menuBtn && dropdownMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }

    if (closeBtn && dropdownMenu) {
        closeBtn.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    }

    document.addEventListener('click', (e) => {
        if (dropdownMenu && !dropdownMenu.contains(e.target) && e.target !== menuBtn) {
            dropdownMenu.classList.remove('show');
        }
    });

    // --- 2. Логика авторизации (Замена Вход на Профиль) ---
    // Ищем кнопку в шапке
    const loginBtn = document.querySelector('.header-actions .btn'); 
    
    if (loginBtn && localStorage.getItem('isLoggedIn') === 'true') {
        loginBtn.textContent = 'Профиль';
        if (!window.location.pathname.includes('user/')) {
            loginBtn.href = 'user/dashboard.html';
        }
        loginBtn.classList.add('profile-active'); 
    }

    // --- 3. Логика кнопки "Выйти" ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Очищаем статус входа
            localStorage.removeItem('isLoggedIn');
            // Выкидываем на главную (из папки user выходим через ../)
            window.location.href = '../index.html';
        });
    }
});