document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы по тем ID, которые реально прописаны в HTML
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Открыть меню
    if (menuBtn && dropdownMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Останавливаем всплытие, чтобы не срабатывал клик по документу
            dropdownMenu.classList.toggle('show'); // Используем класс .show для выпадающего меню
        });
    }

    // Закрыть меню по крестику
    if (closeBtn && dropdownMenu) {
        closeBtn.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    }

    // Закрыть при клике в любое другое место экрана
    document.addEventListener('click', (e) => {
        if (dropdownMenu && !dropdownMenu.contains(e.target) && e.target !== menuBtn) {
            dropdownMenu.classList.remove('show');
        }
    });
});