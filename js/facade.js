let currentFloor = 0;
const totalFloors = 4;
const floorNames = ['Rez-de-chaussée', '1er étage', '2ème étage', '3ème étage'];

const slidesWrapper = document.getElementById('slidesWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const floorLabel = document.getElementById('floorLabel');
const progressDots = document.querySelectorAll('.progress-dot');
const modal = document.getElementById('modal');

const roomDetails = {
    'Salle 6': {
        type: 'Salle de TD',
        courses: [
            { name: 'Économie', semester: 'S1', type: 'Cours/TD' },
            { name: 'Économie', semester: 'S2', type: 'Cours/TD' },
            { name: 'Droit', semester: 'S1', type: 'Cours/TD' },
            { name: 'Droit du numérique', semester: 'S2', type: 'Cours/TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'Cours/TD' },
            { name: 'Statistiques à deux variables', semester: 'S1', type: 'Cours/TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'Cours/TD' },
            { name: 'Probabilités', semester: 'S1', type: 'Cours/TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'Cours/TD' },
            { name: 'Cryptographie (coder des messages secrets)', semester: 'S2', type: 'Cours/TD' }
        ]
    },
    'Salle 9': {
        type: 'Salle info - TP sur ordinateur',
        courses: [
            { name: 'Apprendre à coder en Python', semester: 'S1', type: 'TP' },
            { name: 'Python niveau 2', semester: 'S2', type: 'TP' },
            { name: 'Bases de données SQL', semester: 'S1', type: 'TP' },
            { name: 'Bases de données SQL niveau 2', semester: 'S2', type: 'TP' },
            { name: 'Excel et tableaux de bord', semester: 'S1', type: 'TP' },
            { name: 'Programmation avec R (pour les stats)', semester: 'S2', type: 'TP' }
        ]
    },
    'Salle 15': {
        type: 'Salle info - TP sur ordinateur',
        courses: [
            { name: 'Apprendre à coder en Python', semester: 'S1', type: 'TP' },
            { name: 'Python niveau 2', semester: 'S2', type: 'TP' },
            { name: 'Bases de données SQL', semester: 'S1', type: 'TP' },
            { name: 'Bases de données SQL niveau 2', semester: 'S2', type: 'TP' },
            { name: 'Programmation avec R (pour les stats)', semester: 'S2', type: 'TP' },
            { name: 'Créer des graphiques et visuels', semester: 'S2', type: 'TP' }
        ]
    },
    'Salle 19': {
        type: 'Salle info - TP et TD',
        courses: [
            { name: 'Apprendre à coder en Python', semester: 'S1', type: 'TP' },
            { name: 'Python niveau 2', semester: 'S2', type: 'TP' },
            { name: 'Bases de données SQL', semester: 'S1', type: 'TP' },
            { name: 'Bases de données SQL niveau 2', semester: 'S2', type: 'TP' },
            { name: 'Excel et tableaux de bord', semester: 'S1', type: 'TP' },
            { name: 'Programmation avec R (pour les stats)', semester: 'S2', type: 'TP' },
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Créer des graphiques et visuels', semester: 'S2', type: 'TD/TP' }
        ]
    },
    'Amphi 1': {
        type: 'Amphithéâtre - Cours magistraux',
        courses: [
            { name: 'Tous tes cours en grand groupe sont ici', semester: 'S1 & S2', type: 'CM' }
        ]
    },
    'Amphi 2': {
        type: 'Amphithéâtre - Cours magistraux',
        courses: [
            { name: 'Tous tes cours en grand groupe sont ici', semester: 'S1 & S2', type: 'CM' }
        ]
    },
    'Salle 21': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 22': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 23': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 24': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 25': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 30': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 30bis': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 31': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 31bis': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilités', semester: 'S1', type: 'TD' },
            { name: 'Probabilités 2', semester: 'S2', type: 'TD' },
            { name: 'Statistiques (les bases)', semester: 'S1', type: 'TD' },
            { name: 'Statistiques 2', semester: 'S2', type: 'TD' },
            { name: 'Algèbre (les bases)', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie (messages secrets)', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Bibliothèque': {
        type: 'Bibliothèque Universitaire',
        description: 'Des ordis, plein de livres sur tous les sujets et une salle pour répéter tes présentations PowerPoint. Si t\'es boursier, tu peux même utiliser les ordinateurs gratuitement !',
        courses: []
    },
    'Self': {
        type: 'Restaurant Universitaire (Resto U)',
        description: '🍽️ Repas à seulement 1€ si t\'es boursier, sinon 3,30€ avec un système de points (6 max).<br>• Plat principal : 4 à 6 points<br>• Entrée : 1 à 3 points<br>• Fromage ou Dessert : 1 à 3 points',
        courses: []
    }
};

function updateNavigation() {
    prevBtn.disabled = currentFloor === 0;
    nextBtn.disabled = currentFloor === totalFloors - 1;
    floorLabel.textContent = floorNames[currentFloor];
    
    progressDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentFloor);
    });
}

function goToFloor(floor) {
    currentFloor = floor;
    gsap.to(slidesWrapper, {
        x: `-${currentFloor * 25}%`,
        duration: 0.8,
        ease: 'power3.inOut'
    });
    updateNavigation();
}

function nextFloor() {
    if (currentFloor < totalFloors - 1) {
        currentFloor++;
        gsap.to(slidesWrapper, {
            x: `-${currentFloor * 25}%`,
            duration: 0.8,
            ease: 'power3.inOut'
        });
        updateNavigation();
    }
}

function previousFloor() {
    if (currentFloor > 0) {
        currentFloor--;
        gsap.to(slidesWrapper, {
            x: `-${currentFloor * 25}%`,
            duration: 0.8,
            ease: 'power3.inOut'
        });
        updateNavigation();
    }
}

// Quand tu cliques sur une salle
document.querySelectorAll('.room:not(.gray)').forEach(room => {
    room.addEventListener('click', () => {
        const name = room.dataset.name;
        const details = roomDetails[name];
        
        if (!details) return;
        
        document.getElementById('modalTitle').textContent = name;
        document.getElementById('modalSubtitle').textContent = details.type;
        
        const modalContent = document.getElementById('modalContent');
        if (name === 'Bibliothèque' || name === 'Self') {
            modalContent.innerHTML = `
                <h3>Infos pratiques :</h3>
                <p style="color: #374151; line-height: 1.6; margin-top: 0.75rem;">${details.description}</p>
            `;
        } else if (details.courses.length > 0) {
            let coursesHTML = '<h3>Ce que tu feras dans cette salle :</h3><div style="margin-top: 1rem; max-height: 400px; overflow-y: auto;">';
            details.courses.forEach(course => {
                coursesHTML += `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: white; border-radius: 0.5rem; margin-bottom: 0.5rem; border-left: 4px solid #2563eb;">
                        <span style="color: #374151; font-weight: 500;">${course.name}</span>
                        <div style="display: flex; gap: 0.5rem;">
                            <span style="background: #2563eb; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">${course.semester}</span>
                            <span style="background: #f3f4f6; color: #6b7280; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;">${course.type}</span>
                        </div>
                    </div>
                `;
            });
            coursesHTML += '</div>';
            modalContent.innerHTML = coursesHTML;
        }
        
        modal.classList.add('active');
    });
});

function closeModal() {
    modal.classList.remove('active');
}

// Fermer en cliquant à côté
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Navigation au clavier (pratique !)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousFloor();
    if (e.key === 'ArrowRight') nextFloor();
    if (e.key === 'Escape') closeModal();
});

// On lance tout
updateNavigation();
