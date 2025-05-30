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



let index = 0;
const sections = document.querySelectorAll('.section');

function showSection(i) {
  sections.forEach((sec, idx) => {
    sec.classList.toggle('active', idx === i);
  });
}

/*function onScroll(e) {
  if (e.deltaY > 0 && index < sections.length - 1) {
    index++;
  } else if (e.deltaY < 0 && index > 0) {
    index--;
  }
  showSection(index);
}
*/ 
document.addEventListener('wheel', onScroll, { passive: true });
showSection(index);
