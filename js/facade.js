let currentFloor = 0;
const totalFloors = 4;
const floorNames = ['RDC', '1er étage', '2ème étage', '3ème étage'];

const slidesWrapper = document.getElementById('slidesWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const floorLabel = document.getElementById('floorLabel');
const progressDots = document.querySelectorAll('.progress-dot');
const modal = document.getElementById('modal');

const roomDetails = {
    'Salle 6': {
        type: 'Salle polyvalente - CM/TD',
        courses: [
            { name: 'Économie', semester: 'S1', type: 'CM/TD' },
            { name: 'Économie', semester: 'S2', type: 'CM/TD' },
            { name: 'Droit', semester: 'S1', type: 'CM/TD' },
            { name: 'Droit numérique', semester: 'S2', type: 'CM/TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'CM/TD' },
            { name: 'Statistique descriptive bivariée', semester: 'S1', type: 'CM/TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'CM/TD' },
            { name: 'Probabilité', semester: 'S1', type: 'CM/TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'CM/TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'CM/TD' }
        ]
    },
    'Salle 9': {
        type: 'Salle informatique - TP',
        courses: [
            { name: 'Base de la programmation (Python)', semester: 'S1', type: 'TP' },
            { name: 'Base de la programmation 2 (Python)', semester: 'S2', type: 'TP' },
            { name: 'Base de données relationnelle (SQL)', semester: 'S1', type: 'TP' },
            { name: 'Base de données relationnelle 2 (SQL)', semester: 'S2', type: 'TP' },
            { name: 'Tableur et reporting', semester: 'S1', type: 'TP' },
            { name: 'Programmation statistique (R)', semester: 'S2', type: 'TP' }
        ]
    },
    'Salle 15': {
        type: 'Salle informatique - TP',
        courses: [
            { name: 'Base de la programmation (Python)', semester: 'S1', type: 'TP' },
            { name: 'Base de la programmation 2 (Python)', semester: 'S2', type: 'TP' },
            { name: 'Base de données relationnelle (SQL)', semester: 'S1', type: 'TP' },
            { name: 'Base de données relationnelle 2 (SQL)', semester: 'S2', type: 'TP' },
            { name: 'Programmation statistique (R)', semester: 'S2', type: 'TP' },
            { name: 'Reporting et dataviz', semester: 'S2', type: 'TP' }
        ]
    },
    'Salle 19': {
        type: 'Salle informatique - TP/TD',
        courses: [
            { name: 'Base de la programmation (Python)', semester: 'S1', type: 'TP' },
            { name: 'Base de la programmation 2 (Python)', semester: 'S2', type: 'TP' },
            { name: 'Base de données relationnelle (SQL)', semester: 'S1', type: 'TP' },
            { name: 'Base de données relationnelle 2 (SQL)', semester: 'S2', type: 'TP' },
            { name: 'Tableur et reporting', semester: 'S1', type: 'TP' },
            { name: 'Programmation statistique (R)', semester: 'S2', type: 'TP' },
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Reporting et dataviz', semester: 'S2', type: 'TD/TP' }
        ]
    },
    'Amphi 1': {
        type: 'Amphithéâtre - CM',
        courses: [
            { name: 'Toutes les matières en Cours Magistraux', semester: 'S1 & S2', type: 'CM' }
        ]
    },
    'Amphi 2': {
        type: 'Amphithéâtre - CM',
        courses: [
            { name: 'Toutes les matières en Cours Magistraux', semester: 'S1 & S2', type: 'CM' }
        ]
    },
    'Salle 21': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 22': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 23': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 24': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 25': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 30': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 30bis': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 31': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Salle 31bis': {
        type: 'Salle de TD',
        courses: [
            { name: 'Probabilité', semester: 'S1', type: 'TD' },
            { name: 'Probabilité 2', semester: 'S2', type: 'TD' },
            { name: 'Statistique descriptive', semester: 'S1', type: 'TD' },
            { name: 'Statistique descriptive 2', semester: 'S2', type: 'TD' },
            { name: 'Bases de l\'algèbre', semester: 'S2', type: 'TD' },
            { name: 'Cryptographie', semester: 'S2', type: 'TD' },
            { name: 'Économie', semester: 'S1 & S2', type: 'TD' },
            { name: 'Communication', semester: 'S1 & S2', type: 'TD' }
        ]
    },
    'Bibliothèque': {
        type: 'Bibliothèque Universitaire',
        description: 'Équipée d\'ordinateurs, livres sur tous les thèmes et d\'une salle pour réviser vos présentations PowerPoint. Ordinateurs à disposition pour les boursiers.',
        courses: []
    },
    'Self': {
        type: 'Restaurant Universitaire',
        description: '🍽️ Repas à 1€ pour les boursiers, sinon 3,30€ selon un système de points (6 max).<br>• Plat : 4 à 6 points<br>• Entrée : 1 à 3 points<br>• Fromage/Dessert : 1 à 3 points',
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

// Gestion des clics sur les salles
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
                <h3>Informations :</h3>
                <p style="color: #374151; line-height: 1.6; margin-top: 0.75rem;">${details.description}</p>
            `;
        } else if (details.courses.length > 0) {
            let coursesHTML = '<h3>Matières enseignées :</h3><div style="margin-top: 1rem; max-height: 400px; overflow-y: auto;">';
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

// Fermer la modal en cliquant à l'extérieur
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Navigation au clavier
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousFloor();
    if (e.key === 'ArrowRight') nextFloor();
    if (e.key === 'Escape') closeModal();
});

// Initialisation
updateNavigation();
