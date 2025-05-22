const translations = {
    en: {
        navAbout: "Home",
        navServices: "Services",
        navSolutions: "Solutions",
        navWho: "Who we are",
        navContact: "Contact",
        aboutTitle: "Cosnos",
        aboutText: "<strong>COSNOS</strong> is a boutique consulting firm that combines deep technological and managerial expertise to support established startups. We offer executive and software architecture consulting services, , and tailored AI integration based on each organization’s unique needs.",
        servicesTitle: "Our Services",
        servicesText: "Detail your consulting and software offerings here.",
        solutionsTitle: "Solutions",
        solutionsText: "T AI LY - TAILORED AI FOR    ANALYZING DOCUMENTS AND REQUIREMENTS ,<br> GENERATES REQUIRMENTS AND TEST CASES",
        resourcesTitle: "Who we are",
        resourcesText: "Sigal Tayar   , Julian Pollak .",
        contactTitle: "Contact Us",
        contactText: "Contact form or your email / phone information.",
        labelName: "Name",
        labelEmail: "Email",
        labelMessage: "Message",
        submitButton: "Send Message",
        servicesList: `
        <li>🎯 Consult Startups - in growth process </li>
                <li>🤖 Develop AI solutions tailored to customer needs </li>
                <li>💡 Analyze and Improve Software Architecture   </li>
                <li>🧠 Personal guidance throughout the improvement process </li>
                <li>🛡️ Analysis of vulnerabilities and provision of solutions</li>
      `,
        footerText: "© 2024 COSNOS. All rights reserved."
    },
    he: {

        navAbout: "COSNOS",
        navServices: "השירותים שלנו",
        navSolutions: "פתרונות",
        navWho:"מי אנחנו",
        navContact: "צור קשר",
        aboutTitle: "אודות COSNOS",
        aboutText: "<strong>COSNOS</strong> היא חברת ייעוץ שמשלבת מומחיות טכנולוגית וניהולית לתמיכה בסטארטאפים בשלים.<br>  אנו מציעים שירותי ייעוץ בניהול, ארכיטקטורת תוכנה, ומתודולוגיות פיתוח  בהתאמה אישית.  ושילוב כלי AI  מותאמים  לצרכי הארגון",       servicesTitle: "השירותים שלנו",
        servicesText: "פרט כאן את שירותי הייעוץ והתוכנה שלך.",
        solutionsTitle: "פתרונות",
        solutionsText:"TAILY  היא מערכת AI המאפשרת ניתוח של מסמכים ודרישות ,<br> ומייצרת דרישות חדשות ומפרטי בדיקה",
        resourcesTitle: "מי אנחנו",
        resourcesText: "סיגל טייר , גוליאן פולק",
        contactTitle: "צור קשר",
        contactText: "טופס יצירת קשר או פרטי טלפון / מייל.",
        labelName: "שם",
        labelEmail: "דוא\"ל",      // Hebrew for email
        labelMessage: "הודעה",
        submitButton: "שלח הודעה",
        servicesList: `
        <li>🎯ייעוץ לחברות סטארטאפ בתהליכי צמיחה </li>
        <li> 🤖התאמת פתרונות AI לצרכי הארגון  </li>
                <li>💡 ניתוח ושיפור ארכיטקטורת תוכנה </li>
                <li>🧠לווי אישי בתהליך השיפור  והצמיחה </li>
                <li>🛡️ ניתוח חולשות ופגיעויות , ומתן פתרונות</li>
      `,
        footerText: "כל הזכויות שמורות © 2024 COSNOS "
    }
};

function switchLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('lang-toggle');
    toggle.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'en' ? 'he' : 'en';
        switchLang(newLang);
        toggle.textContent = newLang === 'en' ?  '🇮🇱' : '🇬🇧';
        toggle.setAttribute(
            'aria-label',
            newLang === 'en'
                ? 'Switch to Hebrew'
                : 'Switch to English'
        );
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav    = document.querySelector('.navbar');
    const toggle = document.getElementById('menu-toggle');
    
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  });
  
