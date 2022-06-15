const showMenu = document.getElementById('open-menu');
showMenu.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '100%';
});

const closebtn = document.getElementById('btn-close');
closebtn.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '0%';
});

function reloadBrowser() {
  window.location.reload();
}

const portfolioElement = document.getElementById('portfolio');
portfolioElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  reloadBrowser();
});

const aboutElement = document.getElementById('about-1');
aboutElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  reloadBrowser();
});

const contactElement = document.getElementById('contact');
contactElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  reloadBrowser();
});
