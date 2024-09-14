document.querySelector('.toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

// const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   document.documentElement.setAttribute('data-theme', theme);

//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//     const newTheme = e.matches ? 'dark' : 'light';
//     document.documentElement.setAttribute('data-theme', newTheme);
//   });

