// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Met en surbrillance le lien de la page active dans la sidebar
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'dashboard.html';
    
    document.querySelectorAll('.nav-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href === page || (page === '' && href === 'dashboard.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Simuler un badge de notification aléatoire
    const notifBtn = document.querySelector('.notif-btn');
    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            alert("Vous avez 3 nouvelles notifications RH.");
        });
    }
});
