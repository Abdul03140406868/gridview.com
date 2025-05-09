document.addEventListener('DOMContentLoaded', function() {
    // Tournament registration links
    const tournamentLinks = {
        'booyah-battle': 'https://abdul03140406868.github.io/tournament-register/',
        'bullet-blaze': 'https://abdul03140406868.github.io/tournament-register/',
        'elite-clash': 'https://abdul03140406868.github.io/tournament-register/',
        'pro-league': 'https://abdul03140406868.github.io/tournament-register/'
    };

    // Add click event to all register buttons
    document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.tournament-card');
            const tournamentId = card.getAttribute('data-tournament');
            
            // Redirect to registration page
            window.location.href = tournamentLinks[tournamentId];
        });
    });

    // Animation for tournament cards on load
    const cards = document.querySelectorAll('.tournament-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});