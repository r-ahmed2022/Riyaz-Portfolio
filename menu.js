// eslint-disable-next-line linebreak-style
const showMenu = document.getElementById('open-menu');
showMenu.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '100%';
});

const closebtn = document.getElementById('btn-close');
closebtn.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '0%';
});

const portfolioElement = document.getElementById('portfolio');
portfolioElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  // eslint-disable-next-line no-use-before-define
  reloadBrowser();
});

const aboutElement = document.getElementById('about');
aboutElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  // eslint-disable-next-line no-use-before-define
  reloadBrowser();
});

const contactElement = document.getElementById('contact');
contactElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  // eslint-disable-next-line no-use-before-define
  reloadBrowser();
});

function reloadBrowser() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}