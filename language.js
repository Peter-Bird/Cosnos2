const translations = {
    en: {
        navAbout: "About",
        navServices: "Services",
        navSolutions: "Solutions",
        navResources: "Resources",
        navContact: "Contact",
        aboutTitle: "About Cosnos",
        aboutText: "<span class='star'>*</span><strong>COSNOS</strong> is a boutique consulting firm that combines deep technological and managerial expertise to support established startups. We offer executive consulting services, custom software solutions, and tailored AI integration based on each organization’s unique needs.",
        servicesTitle: "Our Services",
        servicesText: "Detail your consulting and software offerings here.",
        solutionsTitle: "Solutions",
        solutionsText: "Case studies, frameworks, methodologies…",
        resourcesTitle: "Resources",
        resourcesText: "Whitepapers, blog posts, webinars, etc.",
        contactTitle: "Contact Us",
        contactText: "Contact form or your email / phone information.",
        labelName: "Name",
        labelEmail: "Email",
        labelMessage: "Message",
        submitButton: "Send Message"
    },
    he: {
        navAbout: "על קוסנוס",
        navServices: "השירותים שלנו",
        navSolutions: "פתרונות",
        navResources: "משאבים",
        navContact: "צור קשר",
        aboutTitle: "על COSNOS",
        aboutText: "<span class='star'>*</span><strong>COSNOS</strong> היא חברת ייעוץ בוטיק שמשלבת מומחיות טכנולוגית וניהולית לתמיכה בסטארט-אפים בשלים. אנו מציעים שירותי ייעוץ ניהולי, פתרונות תוכנה בהתאמה אישית ואינטגרציית AI מותאמת לצרכי הארגון.",
        servicesTitle: "השירותים שלנו",
        servicesText: "פרט כאן את שירותי הייעוץ והתוכנה שלך.",
        solutionsTitle: "פתרונות",
        solutionsText: "מחקרי מקרה, מסגרות עבודה, מתודולוגיות…",
        resourcesTitle: "משאבים",
        resourcesText: "מסמכים, פוסטים בבלוג, וובינרים וכו׳.",
        contactTitle: "צור קשר",
        contactText: "טופס יצירת קשר או פרטי טלפון / מייל.",
        labelName: "שם",
        labelEmail: "דוא\"ל",      // Hebrew for email
        labelMessage: "הודעה",
        submitButton: "שלח הודעה",
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
        toggle.textContent = newLang === 'en' ? '🇬🇧' : '🇮🇱';
        toggle.setAttribute(
            'aria-label',
            newLang === 'en'
                ? 'Switch to Hebrew'
                : 'Switch to English'
        );
    });
});
