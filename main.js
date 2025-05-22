import translations from './language.js';

const userLang = 'he'; // or 'en', based on selection
const contentDiv = document.getElementById('content');

// Create a paragraph
const para = document.createElement('p');
para.textContent = translations[userLang].greeting;

// Apply font class if Hebrew
if (userLang === 'he') {
  para.classList.add('hebrew');
}

contentDiv.appendChild(para);