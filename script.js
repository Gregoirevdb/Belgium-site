// Structure multilingue
const translations = {
    fr: {
        siteTitle: "Bienvenue en Belgique",
        siteSubtitle: "Découvrez la Belgique, son histoire, ses anecdotes et ses personnages emblématiques.",
        navAccueil: "Accueil",
        navCarte: "Carte",
        navHistoire: "Histoire",
        histoireTitre: "Histoire de la Belgique",
        histoireTexte: [
            "La Belgique, située au carrefour de l’Europe, possède une histoire riche et complexe. Elle fut successivement occupée par les Celtes, les Romains, les Francs, les Espagnols, les Autrichiens, les Français et les Néerlandais. En 1830, la Belgique obtient son indépendance et devient une monarchie constitutionnelle.",
            "Le pays a connu deux guerres mondiales, une industrialisation rapide et une évolution vers un État fédéral. Aujourd’hui, la Belgique est reconnue pour sa diversité culturelle, ses trois langues officielles et son rôle central dans l’Union européenne."
        ],
        histoirePersonnages: "Parmi les personnages importants de l’histoire belge :",
        aProposTitre: "À propos",
        aProposTexte: "Ce site a été créé pour découvrir la Belgique, son histoire, ses anecdotes et ses figures emblématiques.",
        anecdotesTitre: "Anecdotes insolites",
        anecdotes: [
            "La Belgique détient le record du plus long gouvernement sans majorité (541 jours en 2010-2011).",
            "Le mot 'spa' vient de la ville belge Spa, célèbre pour ses sources thermales.",
            "La Belgique possède plus de 1 000 sortes de bières différentes.",
            "Le saxophone a été inventé par un Belge, Adolphe Sax.",
            "La Belgique a plus de châteaux par km² que la France.",
            "La première carte perforée pour ordinateur fut inventée à Bruxelles.",
            "La Belgique est le pays d'origine de Tintin, Spirou et les Schtroumpfs.",
            "Le plus petit gratte-ciel du monde se trouve à Anvers."
        ],
        contactsTitre: "Contacts",
        contacts: "Contactez-nous à info@belgique.be"
    },
    nl: {
        siteTitle: "Welkom in België",
        siteSubtitle: "Ontdek België, zijn geschiedenis, weetjes en beroemde figuren.",
        navAccueil: "Startpagina",
        navCarte: "Kaart",
        navHistoire: "Geschiedenis",
        histoireTitre: "Geschiedenis van België",
        histoireTexte: [
            "België ligt in het hart van Europa en heeft een rijke en complexe geschiedenis. Het land werd achtereenvolgens bezet door Kelten, Romeinen, Franken, Spanjaarden, Oostenrijkers, Fransen en Nederlanders. In 1830 werd België onafhankelijk en een constitutionele monarchie.",
            "Het land kende twee wereldoorlogen, een snelle industrialisatie en evolueerde naar een federale staat. Vandaag staat België bekend om zijn culturele diversiteit, drie officiële talen en centrale rol in de Europese Unie."
        ],
        histoirePersonnages: "Enkele belangrijke figuren uit de Belgische geschiedenis:",
        aProposTitre: "Over",
        aProposTexte: "Deze site is gemaakt om België, zijn geschiedenis, weetjes en beroemde figuren te ontdekken.",
        anecdotesTitre: "Opmerkelijke weetjes",
        anecdotes: [
            "België heeft het record van de langste regering zonder meerderheid (541 dagen in 2010-2011).",
            "Het woord 'spa' komt van de Belgische stad Spa, beroemd om zijn thermale bronnen.",
            "België heeft meer dan 1.000 verschillende soorten bier.",
            "De saxofoon werd uitgevonden door een Belg, Adolphe Sax.",
            "België heeft meer kastelen per km² dan Frankrijk.",
            "De eerste ponskaart voor computers werd uitgevonden in Brussel.",
            "België is het land van Kuifje, Robbedoes en de Smurfen.",
            "De kleinste wolkenkrabber ter wereld staat in Antwerpen."
        ],
        contactsTitre: "Contacten",
        contacts: "Neem contact op via info@belgie.be"
    },
    en: {
        siteTitle: "Welcome to Belgium",
        siteSubtitle: "Discover Belgium, its history, fun facts and famous figures.",
        navAccueil: "Home",
        navCarte: "Map",
        navHistoire: "History",
        histoireTitre: "History of Belgium",
        histoireTexte: [
            "Belgium, located at the crossroads of Europe, has a rich and complex history. It was successively occupied by Celts, Romans, Franks, Spaniards, Austrians, French, and Dutch. In 1830, Belgium gained independence and became a constitutional monarchy.",
            "The country experienced two world wars, rapid industrialization, and evolved into a federal state. Today, Belgium is known for its cultural diversity, three official languages, and central role in the European Union."
        ],
        histoirePersonnages: "Among the important figures in Belgian history:",
        aProposTitre: "About",
        aProposTexte: "This site was created to discover Belgium, its history, fun facts and famous figures.",
        anecdotesTitre: "Fun facts",
        anecdotes: [
            "Belgium holds the record for the longest government without a majority (541 days in 2010-2011).",
            "The word 'spa' comes from the Belgian city Spa, famous for its thermal springs.",
            "Belgium has more than 1,000 types of beer.",
            "The saxophone was invented by a Belgian, Adolphe Sax.",
            "Belgium has more castles per km² than France.",
            "The first punch card for computers was invented in Brussels.",
            "Belgium is the country of Tintin, Spirou and the Smurfs.",
            "The world's smallest skyscraper is in Antwerp."
        ],
        contactsTitre: "Contacts",
        contacts: "Contact us at info@belgium.be"
    }
};

function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    // Titre du site
    const h1 = document.querySelector('.hero h1');
    if (h1) h1.textContent = t.siteTitle;
    // Sous-titre
    const subtitle = document.querySelector('.hero p');
    if (subtitle) subtitle.textContent = t.siteSubtitle;
    // Navigation
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    if (navLinks.length >= 3) {
        navLinks[0].textContent = t.navAccueil;
        navLinks[1].textContent = t.navCarte;
        navLinks[2].textContent = t.navHistoire;
    }
    // Histoire
    const histoireTitle = document.querySelector('#histoire h2');
    if (histoireTitle) histoireTitle.textContent = t.histoireTitre;
    const histoirePs = document.querySelectorAll('#histoire .history-content p');
    if (histoirePs.length >= 2) {
        histoirePs[0].textContent = t.histoireTexte[0];
        histoirePs[1].textContent = t.histoireTexte[1];
    }
    // Phrase personnages
    const histoirePerso = document.querySelector('#histoire .history-content .personnages-intro');
    if (histoirePerso) histoirePerso.textContent = t.histoirePersonnages;
    // À propos
    const aProposTitle = document.querySelector('#apropos h2');
    if (aProposTitle) aProposTitle.textContent = t.aProposTitre;
    const aProposText = document.querySelector('#apropos .apropos-content');
    if (aProposText) aProposText.textContent = t.aProposTexte;
    // Anecdotes
    const anecdotesTitle = document.querySelector('.anecdotes-banderole h3');
    if (anecdotesTitle) anecdotesTitle.textContent = t.anecdotesTitre;
    const anecdotesList = document.querySelectorAll('.anecdotes-banderole ul li');
    for (let i = 0; i < anecdotesList.length && i < t.anecdotes.length; i++) {
        anecdotesList[i].textContent = t.anecdotes[i];
    }
    // Contacts
    const contactsTitle = document.querySelector('#contacts h2');
    if (contactsTitle) contactsTitle.textContent = t.contactsTitre;
    const contactsText = document.querySelector('#contacts .contacts-content');
    if (contactsText) contactsText.textContent = t.contacts;
}

document.getElementById('langSelect').addEventListener('change', function() {
    updateLanguage(this.value);
});
// Script JavaScript de base pour le site web

// Exemple : Afficher une alerte au chargement de la page
window.onload = function() {
    console.log("Le site web est chargé !");
};

// Exemple : Ajouter un événement de clic sur les liens de navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Vous pouvez ajouter plus de fonctionnalités ici, comme des formulaires, des animations, etc.

// Script pour ouvrir/fermer la modal et appliquer les modifications du site
document.getElementById('settingsBtn').addEventListener('click', function() {
    document.getElementById('settingsModal').classList.add('active');
});
document.getElementById('closeSettings').addEventListener('click', function() {
    document.getElementById('settingsModal').classList.remove('active');
});
document.getElementById('applySettings').addEventListener('click', function() {
    const newTitle = document.getElementById('siteTitle').value;
    const newColor = document.getElementById('siteColor').value;
    if (newTitle) {
        const h1 = document.querySelector('.hero h1');
        if (h1) h1.textContent = newTitle;
    }
    document.documentElement.style.setProperty('--main-color', newColor);
    // Thème
    const theme = document.getElementById('themeSelect').value;
    document.body.classList.remove('dark-theme', 'light-theme');
    if (theme === 'sombre') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
    // Galerie
    const galleryToggle = document.getElementById('galleryToggle').checked;
    const gallery = document.querySelector('.history-gallery');
    if (gallery) gallery.style.display = galleryToggle ? '' : 'none';
    // Anecdotes
    const anecdoteToggle = document.getElementById('anecdoteToggle').checked;
    const anecdotes = document.querySelector('.anecdotes-banderole');
    if (anecdotes) anecdotes.style.display = anecdoteToggle ? '' : 'none';
    // Taille du texte
    const fontSize = document.getElementById('fontSize').value;
    document.body.style.fontSize = fontSize + 'px';
    // Langue (placeholder)
    const lang = document.getElementById('langSelect').value;
    // À compléter si le site propose plusieurs langues
    document.getElementById('settingsModal').classList.remove('active');
});

document.getElementById('resetSettings').addEventListener('click', function() {
    document.getElementById('siteTitle').value = '';
    document.getElementById('siteColor').value = '#ffd600';
    document.getElementById('themeSelect').value = 'clair';
    document.body.classList.remove('dark-theme');
    document.getElementById('galleryToggle').checked = true;
    const gallery = document.querySelector('.history-gallery');
    if (gallery) gallery.style.display = '';
    document.getElementById('anecdoteToggle').checked = true;
    const anecdotes = document.querySelector('.anecdotes-banderole');
    if (anecdotes) anecdotes.style.display = '';
    document.getElementById('fontSize').value = 16;
    document.body.style.fontSize = '16px';
    document.getElementById('langSelect').value = 'fr';
});