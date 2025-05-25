const translations = {
    en: {
        navAbout: "Home",
        navServices: "Services",
        navSolutions: "Solutions",
        navWho: "Who we are",
        navContact: "Contact",
        aboutTitle: "Cosnos",
        aboutText: "<strong>COSNOS</strong> is a boutique consulting firm that combines deep technological and managerial expertise to support established startups. We offer executive and software architecture consulting services, and tailored AI integration based on each organization’s unique needs.",
        servicesTitle: "Our Services",
        servicesText: "Detail your consulting and software offerings here.",
        solutionsTitle: "Solutions",
        solutionsText: "T AI LY - TAILORED AI FOR    ANALYZING DOCUMENTS AND REQUIREMENTS ,<br> GENERATES REQUIRMENTS AND TEST CASES",
        whoweTitle: "Who we are",
        whoweText: "Sigal Tayar   , Julian Pollak .",
        contactTitle: "Contact Us",
        
       profile1Text : "Sigal Tayar experienced manager",
              profile2Text : "Julian Pollak experienced manager",
       contact1Text : "Sigal Tayar tel : 0549575861",
contact2Text : "Julian pollak tel : 0549575861",

        servicesList: `
        <li>🎯 Consult Startups - in growth process </li>
                <li>🤖 Develop AI solutions tailored to customer needs </li>
                <li>💡 Analyze and Improve Software Architecture   </li>
                <li>🧠 Personal guidance throughout the improvement process </li>
                <li>🛡️ Analysis of vulnerabilities and provision of solutions</li>  `,
        footerText: "© 2025 COSNOS. All rights reserved."
    },
    he: {

        navAbout: "COSNOS",
        navServices: "השירותים שלנו",
        navSolutions: "פתרונות",
        navWho:"מי אנחנו",
        navContact: "צור קשר",
        aboutTitle: "אודות COSNOS",
        aboutText: "<strong>COSNOS</strong> היא חברת ייעוץ שמשלבת מומחיות טכנולוגית וניהולית לתמיכה בסטארטאפים בשלים.<br>  אנו מציעים שירותי ייעוץ בניהול, ארכיטקטורת תוכנה, ומתודולוגיות פיתוח  בהתאמה אישית. <br> ושילוב כלי AI  מותאמים  לצרכי הארגון",       servicesTitle: "השירותים שלנו",
        servicesText: "פרט כאן את שירותי הייעוץ והתוכנה שלך.",
        solutionsTitle: "פתרונות",
        solutionsText:"TAILY  היא מערכת AI המאפשרת ניתוח של מסמכים ודרישות ,<br> ומייצרת דרישות חדשות ומפרטי בדיקה",
        whoweTitle: "מי אנחנו",
        whoweText: "סיגל טייר , גוליאן פולק",
        contactTitle: "צור קשר",
        contactText:"סיגל טל :   0549575861.",
        profile1Text : "סיגל טייר - מנהלת מנוסה ", 
 profile2Text : "ג'וליאן פולק - ארכיקט מחשבים ", 
 contact1Text : "סיגל טייר טל  : 0549575861",
contact2Text : "ג'וליאן פולק טל  0549575861",
        servicesList: `
        <li>🎯 ייעוץ לחברות סטארטאפ בתהליכי צמיחה </li>
        <li> 🤖 התאמת פתרונות AI לצרכי הארגון  </li>
                <li>💡ניתוח ושיפור ארכיטקטורת תוכנה </li>
                <li>🧠 לווי אישי בתהליך השיפור  והצמיחה </li>
                <li>🛡️ ניתוח חולשות ופגיעויות , ומתן פתרונות</li>
      `,
        footerText: "כל הזכויות שמורות © 2025 COSNOS "
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
  
