document.querySelector('.toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const newTheme = e.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  updateIcon(newTheme);
});

document.getElementById('themeToggle').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  const icon = document.getElementById('icon');
  icon.innerHTML = theme === 'dark' ? 'nights_stay' : 'wb_sunny';
}

const translations = {
  en: {
    experience: "Experience",
    projects: "Projects",
    achievements: "Achievements",
    contact: "Contact",
  },
  fr: {
    experience: "Expérience",
    projects: "Projets",
    achievements: "Réalisations",
    contact: "Contact",
  },
  ar: {
    experience: "الخبرة",
    projects: "المشاريع",
    achievements: "الإنجازات",
    contact: "الاتصال",
  },
  ur: {
    experience: "تجربہ",
    projects: "پروجیکٹس",
    achievements: "کارنامے",
    contact: "رابطہ",
  }
};

  function translatePage() {
    const targetLang = localStorage.getItem('preferredLang') || 'en';
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = translations[targetLang][key] || key;
    });
  }

  translatePage();
