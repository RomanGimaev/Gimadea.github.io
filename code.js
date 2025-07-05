document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

 /// Меню ///

    // Открытие/закрытие боковой панели
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Проверяем, открыт ли сайдбар
        if (sidebar.classList.contains('active')) {
            // Если открыт - закрываем
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        } else {
            // Если закрыт - открываем
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        }
    });

    // Закрытие при клике на оверлей или вне панели
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });

    // Закрытие при клике на Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        }
    });
});