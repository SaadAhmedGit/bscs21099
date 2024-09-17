document.querySelector('.toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', _ => {
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const newTheme = e.matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  updateIcon(newTheme);
});

document.querySelector('.themeToggle').addEventListener('click', () => {
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
    // Navbar
    experience: "Experience",
    projects: "Projects",
    achievements: "Achievements",
    contact: "Contact",

    // Introduction
    bio:
    `
A CS undergrad with a passion for engineering and building cool stuff, a hobbyist and a Unix geek who loves and
admires the world of databases, distributed systems, kernels, and their network stacks.
With real-world experience in building and maintaining a product at a startup, I have made design decisions and seen
their implications on the business side of things, which adds a new dimension to the problems one can solve.
This is what keeps me going.
`,
    greeting:
    `
Hi, I'm Saad
`
  },
  fr: {
    experience: "Expérience",
    projects: "Projets",
    achievements: "Réalisations",
    contact: "Contact",

    bio:
    `
Un étudiant de premier cycle en informatique avec une passion pour l'ingénierie et la construction de trucs cool, un amateur et un geek Unix qui aime et admire le monde des bases de données, des systèmes distribués, des noyaux et de leurs piles réseau.
Avec une expérience concrète de la création et de la maintenance d'un produit dans une startup, j'ai pris des décisions de conception et j'ai vu leurs implications sur le plan commercial, ce qui ajoute une nouvelle dimension aux problèmes que l'on peut résoudre. C'est ce qui me fait avancer.
`,
    greeting:
    `
Bonjour, je m'appelle Saad
`
  },
  ar: {
    experience: "الخبرة",
    projects: "المشاريع",
    achievements: "الإنجازات",
    contact: "الاتصال",

    bio:
    `
طالب جامعي في علوم الكمبيوتر لديه شغف بالهندسة وبناء أشياء رائعة ، وهاوي ومهووس يونكس يحب و معجب بعالم قواعد البيانات والأنظمة الموزعة والنواة ومكدسات الشبكات الخاصة بهم. مع خبرة واقعية في بناء وصيانة منتج في شركة ناشئة ، اتخذت قرارات التصميم ورأيت آثارها على الجانب التجاري للأشياء ، مما يضيف بعدا جديدا للمشاكل التي يمكن للمرء حلها. هذا ما يجعلني أستمر.
`,
    greeting:
    `
مرحبا، أنا سعد
`
  },
  ur: {
    experience: "تجربہ",
    projects: "پروجیکٹس",
    achievements: "کارنامے",
    contact: "رابطہ",

    bio:
    `
ایک سی ایس انڈر گریجویٹ جس کو انجینئرنگ اور ٹھنڈی چیزیں بنانے کا شوق ہے، ایک مشغلہ اور ایک یونیکس گیک جو محبت کرتا ہے اور ڈیٹا بیس ، تقسیم شدہ نظام ، کرنل ، اور ان کے نیٹ ورک اسٹیک کی دنیا کی تعریف کرتا ہے۔ اسٹارٹ اپ پر مصنوعات کی تعمیر اور برقرار رکھنے میں حقیقی دنیا کے تجربے کے ساتھ، میں نے ڈیزائن کے فیصلے کیے ہیں اور دیکھا ہے چیزوں کے کاروباری پہلو پر ان کے مضمرات ، جو ان مسائل میں ایک نئی جہت کا اضافہ کرتے ہیں جن کو حل کیا جاسکتا ہے۔ یہی وہ چیز ہے جو مجھے آگے بڑھاتی ہے۔
`,
    greeting:
    `
ہیلو، میں سعد ہوں
`,
  }
};
document.getElementById('language-select').addEventListener('change', function() {
  localStorage.setItem('preferredLang', this.value);
  translatePage();
});
function translatePage() {
  const targetLang = localStorage.getItem('preferredLang') || 'en';
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[targetLang][key] || translations['en'][key];
  });
}

translatePage();

const animateSections = () => {
  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(()=> {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }, 300)
        }
      });
    });

    document.querySelectorAll('.section').forEach(div => {
      observer.observe(div);
    });
  });
}

animateSections();
