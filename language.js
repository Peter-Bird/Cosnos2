const translations = {
  en: {
    navAbout: "Home",
    navServices: "Services",
    navSolutions: "Solutions",
    navWho: "Who we are",
    navContact: "Contact",
    aboutText: `<strong>COSNOS</strong> is a boutique consulting firm that combines deep technological and managerial
      expertise to support established startups.<br>We offer executive consulting services, custom software
      solutions, and tailored AI integration based on each organization’s unique needs.`,
    servicesTitle: "Our Services",
    servicesList: `
      <li>🎯 Consult Startups - in growth process</li>
      <li>🤖 Develop AI solutions tailored to customer needs</li>
      <li>💡 Analyze and Improve Software Architecture</li>
      <li>🧠 Personal guidance throughout the improvement process</li>
      <li>🛡️ Analysis of vulnerabilities and provision of solutions</li>
    `,
    solutionsTitle: "Solutions",
    solutionsText: `T AI LY - TAILORED AI FOR ANALYZING DOCUMENTS AND REQUIREMENTS,<br>GENERATES REQUIREMENTS AND TEST CASES`,
    whoweTitle: "Who we are",
    profile1Text: `<h3>Sigal Tayar</h3>Experienced manager <br> software architect<br>Expertise in management and development methodologies.`,
    profile2Text: `<h3>Julian Pollak</h3>Computer architect.<br>Expertise in AI solutions <br>tailored to your needs.`,
    contactTitle: "Contact Us",
    contact1Text: `<h3>Sigal Tayar</h3>Sigal@Cos-nos.com<br>tel : 0549575861`,
    contact2Text: `<h3>Julian Pollak</h3>Julian@Cos-nos.com<br>tel : 0547491346`,
    footerText: "© 2025 COSNOS. All rights reserved.",
  },
  he: {
    navAbout: "בית",
    navServices: "שירותים",
    navSolutions: "פתרונות",
    navWho: "מי אנחנו",
    navContact: "צור קשר",
    aboutText: `<strong>Cosnos</strong> היא חברת ייעוץ בוטיק שמשלבת מומחיות טכנולוגית וניהולית עמוקה לתמיכה בסטארטאפים. <br> אנו מציעים ייעוץ ניהולי, פתרונות תוכנה מותאמים, ושילוב AI מותאם לצרכים הארגוניים.`,
    servicesTitle: "השירותים שלנו",
    servicesList: `
      <li>🎯 ייעוץ לסטארטאפים בתהליך צמיחה</li>
      <li>🤖 פיתוח פתרונות AI מותאמים אישית</li>
      <li>💡 ניתוח ושיפור ארכיטקטורת תוכנה</li>
      <li>🧠 ליווי אישי לאורך כל תהליך השיפור</li>
      <li>🛡️ ניתוח פגיעויות ומתן פתרונות</li>
    `,
    solutionsTitle: "פתרונות",
    solutionsText: `TAILY – בינה מלאכותית מותאמת אישית לניתוח מסמכים ודרישות<br>מחוללת דרישות ומקרי בדיקה`,
    whoweTitle: "מי אנחנו",
    profile1Text: `<h3>סיגל טייר</h3>מנהלת מנוסה <br> וארכיטקטית תוכנה.<br>מומחית במתודולוגיות ניהול ופיתוח.`,
    profile2Text: `<h3>ג'וליאן פולק</h3>ארכיטקט מחשבים.<br>מומחה לפתרונות AI <br> מותאמים לצרכי הארגון `,
    contactTitle: "צור קשר",
    contact1Text: `<h3>סיגל טייר</h3>Sigal@Cos-nos.com<br>טל : 0549575861`,
    contact2Text: `<h3>ג'וליאן פולק</h3>Julian@Cos-nos.com<br>טל : 0547491346`,
    footerText: "© 2025 קוסנוס. כל הזכויות שמורות.",
  }
};

let currentLang = 'en';

function updateText() {
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    const content = translations[currentLang][key];
    if (content) el.innerHTML = content;
  });

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
}

document.addEventListener('DOMContentLoaded', () => {
  updateText();

  const langBtn = document.getElementById('lang-toggle');
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'he' : 'en';
    updateText();
    langBtn.textContent = currentLang === 'en' ? '🇮🇱' : 'EN';
  });
});
