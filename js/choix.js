document.addEventListener('DOMContentLoaded', () => {

  const categoryMapping = {
    "Matières Général": "Matières préférées",
    "Mathématique Général": "Compétences",
    "Programmation Général": "Profil étudiant",
    "Anglais/Droit/Eco/Communication": "Ambition",
    "Vos Motivations Général": "Vie étudiante"
  };

  const questionsData = {
    "Matières préférées": [
      {
        question: "Entre ces deux domaines mathématiques, tu préfères :",
        choiceA: { text: "Probabilités 📊", points: { statistique: 3, analytique: 2 } },
        choiceB: { text: "Cryptologie 🔐", points: { securite: 3, logique: 2 } }
      },
      {
        question: "Pour résoudre un problème informatique, tu préfères :",
        choiceA: { text: "Algorithmes 🧩", points: { logique: 3, technique: 2 } },
        choiceB: { text: "Programmation statistique 📋", points: { statistique: 3, analytique: 1 } }
      },
      {
        question: "Entre ces deux spécialités techniques, tu choisis :",
        choiceA: { text: "Bases de données 🗄️", points: { systematique: 3, technique: 2 } },
        choiceB: { text: "Cybersécurité 🤖", points: { securite: 3, protection: 2 } }
      }
    ],
    "Compétences": [
      {
        question: "Pour un projet de développement, tu préfères :",
        choiceA: { text: "Développer des sites web 🌐", points: { web: 3, interface: 2 } },
        choiceB: { text: "Créer des applis mobiles 📱", points: { mobile: 3, innovation: 2 } }
      },
      {
        question: "Entre ces deux projets créatifs, tu choisis :",
        choiceA: { text: "Créer un Dashboard de données ⚙️", points: { visualisation: 3, analytique: 2 } },
        choiceB: { text: "Créer un jeu vidéo 🎮", points: { ludique: 3, creatif: 2 } }
      },
      {
        question: "Tu préfères quoi entre :",
        choiceA: { text: "Manipuler des bases de données (organisation et de structuration des données afin de faciliter leur interprétation) 🗄️", points: { donnees: 3, systematique: 2 } },
        choiceB: { text: "Visualiser des graphiques 📊", points: { visualisation: 3, communication: 2 } }
      },
      {
        question: "Face à un problème technique, tu préfères :",
        choiceA: { text: "Déboguer du code (corriger du code) 🐞", points: { technique: 3, methodique: 2 } },
        choiceB: { text: "Faire une enquête 💡", points: { investigation: 3, curieux: 2 } }
      }
    ],
    "Profil étudiant": [
      {
        question: "Pour les projets scolaires, tu préfères :",
        choiceA: { text: "Travailler seul 🧑‍💻", points: { independant: 3, concentre: 2 } },
        choiceB: { text: "Avancer en groupe 👥", points: { collaboratif: 3, social: 2 } }
      },
      {
        question: "Dans une équipe de projet, tu es plutôt :",
        choiceA: { text: "Leader 👑", points: { leadership: 3, decisif: 2 } },
        choiceB: { text: "Soutenir l'équipe 🤝", points: { supportif: 3, cooperatif: 2 } }
      },
      {
        question: "Face aux imprévus, tu as tendance à :",
        choiceA: { text: "Improviser selon la situation 🎲", points: { adaptable: 3, flexible: 2 } },
        choiceB: { text: "Tout planifier 📅", points: { planificateur: 3, organise: 2 } }
      },
      {
        question: "Pour tes études, tu préfères :",
        choiceA: { text: "Suivre un cadre strict 📏", points: { structure: 3, discipline: 2 } },
        choiceB: { text: "Avancer librement 🌀", points: { liberte: 3, creatif: 2 } }
      }
    ],
    "Ambition": [
      {
        question: "Après tes études, tu veux :",
        choiceA: { text: "Trouver un emploi rapidement 💼", points: { pragmatique: 3, actif: 2 } },
        choiceB: { text: "Continuer les études 🎓", points: { academique: 3, specialisation: 2 } }
      },
      {
        question: "Pour ton avenir professionnel, tu préfères :",
        choiceA: { text: "Travailler dans une grande entreprise 🏢", points: { stabilite: 3, securite: 2 } },
        choiceB: { text: "Créer ta propre entreprise 🚀", points: { entrepreneur: 3, innovant: 2 } }
      },
      {
        question: "Concernant la poursuite d'études, tu préfères :",
        choiceA: { text: "Faire un BUT/Master/École d'ingénieur 📚", points: { formation: 3, expertise: 2 } },
        choiceB: { text: "Rentrer dans le monde professionel 🏛️", points: { experience: 3, pratique: 2 } }
      },
      {
        question: "Pour ta carrière, tu veux :",
        choiceA: { text: "Partir à l'étranger ✈️", points: { international: 3, aventurier: 2 } },
        choiceB: { text: "Rester en France 🏠", points: { local: 3, ancrage: 2 } }
      }
    ],
    "Vie étudiante": [
      {
        question: "Le soir après les cours, tu préfères :",
        choiceA: { text: "Participer aux soirées 🎉", points: { social: 3, festif: 2 } },
        choiceB: { text: "Rester chez soi 📚", points: { calme: 3, studieux: 2 } }
      },
      {
        question: "Pour te détendre, tu choisis :",
        choiceA: { text: "Faire du sport 🏋️", points: { actif: 3, sante: 2 } },
        choiceB: { text: "Jouer aux jeux vidéo 🎮", points: { numerique: 3, detente: 2 } }
      },
      {
        question: "Les week-ends, tu préfères :",
        choiceA: { text: "Travailler le week-end 🌍", points: { travailleur: 3, ambitieux: 2 } },
        choiceB: { text: "Se reposer tranquillement 🛋️", points: { equilibre: 3, ressourcement: 2 } }
      },
      {
        question: "Pour t'épanouir, tu préfères :",
        choiceA: { text: "S'investir dans une asso 🤲", points: { engagement: 3, altruiste: 2 } },
        choiceB: { text: "Faire des projets personnels 📅", points: { personnel: 3, autonome: 2 } }
      }
    ]
  };

  const personalityProfiles = {
    "Matières préférées": {
      "L'Analyste Statistique": {
        description: "Tu excelles dans l'analyse de données et les probabilités. Tu aimes transformer les chiffres en données pour évoquer des tendances.",
        traits: ["statistique", "analytique"],
        career: "Data Analyst, Biostatisticien, Actuaire"
      },
      "L'Expert Sécurité": {
        description: "Tu es passionné par la protection des systèmes et la cryptographie. La cybersécurité te fascine.",
        traits: ["securite", "protection"],
        career: "Expert cybersécurité, Consultant sécurité, Cryptographe"
      },
      "Le Développeur Logique": {
        description: "Tu excelles dans la résolution algorithmique et la programmation structurée.",
        traits: ["logique", "technique"],
        career: "Ingénieur logiciel, Développeur backend, Architecte système"
      },
      "L'Organisateur de Données": {
        description: "Tu maîtrises parfaitement la gestion et l'organisation des bases de données.",
        traits: ["systematique", "donnees"],
        career: "Administrateur base de données, Data Engineer, Architecte données"
      }
    },
    "Compétences": {
      "Le Développeur Web/Mobile": {
        description: "Tu excelles dans la création d'interfaces et d'applications utilisateur.",
        traits: ["web", "mobile", "interface"],
        career: "Développeur Full-Stack, Développeur mobile, UX/UI Designer"
      },
      "Le Visualisateur de Données": {
        description: "Tu sais parfaitement présenter et communiquer les données de manière claire et précise.",
        traits: ["visualisation", "communication"],
        career: "Data Visualizer, Business Intelligence, Consultant BI"
      },
      "Le Créateur Ludique": {
        description: "Tu combines créativité et technique pour créer des expériences engageantes.",
        traits: ["ludique", "creatif", "innovation"],
        career: "Game Developer, Creative Developer, Designer interactif"
      },
      "L'Investigateur Technique": {
        description: "Tu excelles dans l'analyse technique et la résolution de problèmes complexes.",
        traits: ["investigation", "technique", "methodique"],
        career: "DevOps Engineer, Expert technique, Consultant IT"
      }
    },
    "Profil étudiant": {
      "L'Indépendant Organisé": {
        description: "Tu travailles de manière autonome avec une approche structurée et planifiée.",
        traits: ["independant", "planificateur", "structure"],
        career: "Chef de projet technique, Développeur senior, Architecte logiciel",
        conseils: [
          "Planifie tes révisions avec des objectifs clairs et atteignables.",
          "Utilise des outils comme des agendas ou des applications de gestion de tâches.",
          "Exploite ta rigueur pour avancer dans des projets longs et complexes."
        ]
      },
      "Le Leader Collaboratif": {
        description: "Tu sais diriger une équipe tout en valorisant la collaboration.",
        traits: ["leadership", "collaboratif", "decisif"],
        career: "Scrum Master, Tech Lead, Manager d'équipe technique",
        conseils: [
          "Prends des initiatives dans les travaux de groupe pour organiser et motiver les autres.",
          "Apprends à déléguer et à faire confiance à tes coéquipiers.",
          "Travaille ton écoute active pour améliorer la cohésion d'équipe."
        ]
      },
      "L'Adaptable Créatif": {
        description: "Tu excelles dans l'improvisation et l'innovation face aux défis.",
        traits: ["adaptable", "flexible", "creatif"],
        career: "Développeur Full-Stack, Consultant agile, Innovation Manager",
        conseils: [
          "Utilise ta créativité pour trouver des approches originales lors des projets ou examens.",
          "Ne crains pas de proposer des idées différentes, même si elles sortent des sentiers battus.",
          "Complète ton inventivité par un minimum de planification pour éviter de te disperser."
        ]
      },
      "Le Collaborateur Structuré": {
        description: "Tu préfères travailler en équipe dans un environnement organisé.",
        traits: ["supportif", "cooperatif", "discipline"],
        career: "Business Analyst, Product Owner, Coordinateur de projet",
        conseils: [
          "Appuie tes camarades en apportant ton sens de l'organisation aux projets collectifs.",
          "Cherche à clarifier les rôles et les responsabilités pour éviter les confusions.",
          "Mets en avant ta discipline pour respecter les échéances communes."
        ]
      }
    },
    "Ambition": {
      "Le Pragmatique Actif": {
        description: "Tu privilégies l'action concrète et les résultats rapides dans ta carrière.",
        traits: ["pragmatique", "actif", "experience"],
        career: "Chef de projet, Consultant, Manager opérationnel"
      },
      "L'Académique Spécialisé": {
        description: "Tu vises l'excellence académique et la spécialisation poussée.",
        traits: ["academique", "specialisation", "formation"],
        career: "Chercheur, Ingénieur expert, Consultant spécialisé"
      },
      "L'Entrepreneur Innovant": {
        description: "Tu veux créer et innover dans le monde des affaires.",
        traits: ["entrepreneur", "innovant"],
        career: "Créateur de startup, Directeur innovation, Consultant stratégique"
      },
      "L'Aventurier International": {
        description: "Tu cherches les défis à l'international et les nouvelles expériences.",
        traits: ["international", "aventurier"],
        career: "Consultant international, Chef de projet global, Expert expatrié"
      }
    },
    "Vie étudiante": {
      "Le Social Actif": {
        description: "Tu combines vie sociale épanouie et activité physique. Tu es énergique et engagé.",
        traits: ["social", "actif", "engagement"],
        career: "Manager d'équipe, Consultant, Responsable RH"
      },
      "L'Équilibré Numérique": {
        description: "Tu sais allier détente numérique et équilibre personnel.",
        traits: ["numerique", "equilibre", "personnel"],
        career: "Développeur, Game Designer, Consultant IT"
      },
      "L'Ambitieux Travailleur": {
        description: "Tu es très motivé et n'hésites pas à t'investir pleinement dans tes projets.",
        traits: ["travailleur", "ambitieux", "festif"],
        career: "Entrepreneur, Directeur, Consultant senior"
      },
      "Le Studieux Autonome": {
        description: "Tu privilégies le calme et l'autonomie pour développer tes projets personnels.",
        traits: ["calme", "studieux", "autonome"],
        career: "Chercheur, Développeur indépendant, Analyste"
      }
    }
  };

  let selectedCategory = "Matières préférées";
  let currentQuestionIndex = 0;
  let scores = {};
  let currentQuestions = [];

  const card1 = document.getElementById('card1');
  const card2 = document.getElementById('card2');
  const roundIndicator = document.getElementById('roundIndicator');
  const categoryElements = document.querySelectorAll('.category');

  function initializeScores() {
    scores = {
      statistique: 0, analytique: 0, securite: 0, logique: 0, technique: 0, 
      systematique: 0, protection: 0, donnees: 0,
      // Compétences
      web: 0, interface: 0, mobile: 0, innovation: 0, visualisation: 0, 
      communication: 0, ludique: 0, creatif: 0, investigation: 0, methodique: 0, curieux: 0,
      // Profil étudiant
      independant: 0, concentre: 0, collaboratif: 0, social: 0, leadership: 0,
      decisif: 0, supportif: 0, cooperatif: 0, adaptable: 0, flexible: 0,
      planificateur: 0, organise: 0, structure: 0, discipline: 0, liberte: 0,
      // Ambition
      pragmatique: 0, actif: 0, academique: 0, specialisation: 0, stabilite: 0,
      entrepreneur: 0, innovant: 0, formation: 0, expertise: 0, experience: 0,
      pratique: 0, international: 0, aventurier: 0, local: 0, ancrage: 0,
      // Vie étudiante
      festif: 0, calme: 0, studieux: 0, sante: 0, numerique: 0, detente: 0,
      travailleur: 0, ambitieux: 0, equilibre: 0, ressourcement: 0, engagement: 0,
      altruiste: 0, personnel: 0, autonome: 0
    };
  }

  function calculateDominantProfile(category) {
    const profiles = personalityProfiles[category];
    let maxScore = 0;
    let dominantProfile = null;

    console.log('=== CALCUL DU PROFIL ===');
    console.log('Catégorie:', category);
    console.log('Scores actuels:', scores);

    for (const [profileName, profileData] of Object.entries(profiles)) {
      let profileScore = 0;
      profileData.traits.forEach(trait => {
        profileScore += scores[trait] || 0;
      });
      
      console.log(`${profileName}: ${profileScore} points (traits: ${profileData.traits.join(', ')})`);
      
      if (profileScore > maxScore) {
        maxScore = profileScore;
        dominantProfile = { name: profileName, ...profileData, score: profileScore };
      }
    }

    console.log('Profil dominant:', dominantProfile);
    return dominantProfile;
  }

  function updateProgressIndicator() {
    const totalQuestions = currentQuestions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    
    roundIndicator.innerHTML = `
      <div style="margin-bottom: 0.5rem;">
        Question ${currentQuestionIndex + 1} sur ${totalQuestions}
      </div>
      <div style="background: rgba(255,255,255,0.3); border-radius: 10px; height: 8px; overflow: hidden;">
        <div style="background: #4CAF50; height: 100%; width: ${progress}%; transition: width 0.3s ease; border-radius: 10px;"></div>
      </div>
    `;
  }

  function displayQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
      const question = currentQuestions[currentQuestionIndex];
      
      updateProgressIndicator();
      
      // Reset cards without gsap
      card1.style.opacity = '1';
      card2.style.opacity = '1';
      card1.style.transform = 'scale(1)';
      card2.style.transform = 'scale(1)';
      

      card1.innerHTML = `
        <div style="padding: 2rem; text-align: center; min-height: 300px; display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-size: 1.3rem; margin-bottom: 2rem; color: #2c3e50; line-height: 1.4;">
            ${question.question}
          </h3>
          <div style="background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white; padding: 1.5rem; border-radius: 15px; cursor: pointer; transition: all 0.3s ease;">
            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Option A</h4>
            <p style="font-size: 1.1rem; line-height: 1.4;">${question.choiceA.text}</p>
          </div>
        </div>
      `;

      card2.innerHTML = `
        <div style="padding: 2rem; text-align: center; min-height: 300px; display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-size: 1.3rem; margin-bottom: 2rem; color: #2c3e50; line-height: 1.4;">
            ${question.question}
          </h3>
          <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); color: white; padding: 1.5rem; border-radius: 15px; cursor: pointer; transition: all 0.3s ease;">
            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Option B</h4>
            <p style="font-size: 1.1rem; line-height: 1.4;">${question.choiceB.text}</p>
          </div>
        </div>
      `;



    } else {
      showResults();
    }
  }

  function handleAnswer(choice) {
    const question = currentQuestions[currentQuestionIndex];
    const selectedChoice = choice === 'A' ? question.choiceA : question.choiceB;
    const selectedCard = choice === 'A' ? card1 : card2;
    
    card1.style.pointerEvents = 'none';
    card2.style.pointerEvents = 'none';
    
    Object.entries(selectedChoice.points).forEach(([trait, points]) => {
      scores[trait] += points;
    });

    currentQuestionIndex++;
    
    // Animation without gsap
    const optionDiv = selectedCard.querySelector('div:last-child');
    optionDiv.style.transition = 'background 0.2s ease';
    optionDiv.style.background = '#4CAF50';
    
    setTimeout(() => {
      card1.style.transition = 'opacity 0.2s ease';
      card2.style.transition = 'opacity 0.2s ease';
      card1.style.opacity = '0';
      card2.style.opacity = '0';
      
      setTimeout(() => {
        card1.style.pointerEvents = 'auto';
        card2.style.pointerEvents = 'auto';
        card1.style.transition = '';
        card2.style.transition = '';
        
        displayQuestion();
      }, 300);
    }, 500);
  }

  function showResults() {
    const profile = calculateDominantProfile(selectedCategory);
    
    if (profile) {
      document.body.classList.add('victory-background');
      
      // Construire le HTML des débouchés si disponibles
      let careerHTML = '';
      if (profile.career) {
        careerHTML = `
          <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; margin-top: 1rem;">
            <h4 style="color: #f39c12; margin-bottom: 0.5rem;">💼 Débouchés recommandés :</h4>
            <p style="color: black; font-weight: 600;">${profile.career}</p>
          </div>
        `;
      }
      
      // Construire le HTML des conseils si disponibles
      let conseilsHTML = '';
      if (profile.conseils && profile.conseils.length > 0) {
        conseilsHTML = `
          <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; margin-top: 1rem;">
            <h4 style="color: #f39c12; margin-bottom: 0.5rem;">💡 Conseils pour réussir :</h4>
            <ul style="text-align: left; color: black; font-weight: 500; line-height: 1.8;">
              ${profile.conseils.map(conseil => `<li>${conseil}</li>`).join('')}
            </ul>
          </div>
        `;
      }
      
      document.body.innerHTML = `
        <button class="btn-finish" onclick="location.reload()">← Retour aux catégories</button>
        <div class="winner">
          <h1>🎯 Votre Profil : ${selectedCategory}</h1>
          <h2>${profile.name}</h2>
          <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 15px; margin: 2rem 0; backdrop-filter: blur(10px);">
            <p style="font-size: 1.2rem; line-height: 1.6; color: black; margin-bottom: 1.5rem;">
              ${profile.description}
            </p>
            ${careerHTML}
            ${conseilsHTML}
          </div>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button onclick="location.reload()" class="gradient-button">🔄 Tester une autre catégorie</button>
          </div>
        </div>
      `;
    }
  }

  function initializeQuiz() {
    const category = selectedCategory;
    currentQuestions = questionsData[category] || [];
    currentQuestionIndex = 0;
    
    if (currentQuestions.length > 0) {
      displayQuestion();
    }
  }

  categoryElements.forEach(elem => {
    elem.addEventListener('click', () => {
      categoryElements.forEach(e => e.classList.remove('selected'));
      elem.classList.add('selected');
      const dataCategory = elem.getAttribute('data-category');
      selectedCategory = categoryMapping[dataCategory] || dataCategory;
      initializeScores();
      initializeQuiz();
    });
  });

  if (card1 && card2) {
    card1.addEventListener('click', () => handleAnswer('A'));
    card2.addEventListener('click', () => handleAnswer('B'));
  }

  initializeScores();
  initializeQuiz();
});
