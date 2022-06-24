/* eslint-disable no-restricted-syntax */
const projects = [
  {
    name: 'Multi-Post Stories',
    description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    languages: ['html', 'bootstrap', 'Ruby on rails'],
    projectdetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/recenttitle.svg',
    projectimage: 'images/desktop.svg',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
  }];

const buildCard1 = (projects) => {
  const card1 = document.querySelector('.card-1');
  const div1left = document.createElement('div');
  div1left.setAttribute('id', 'div-1--left');
  const img = document.createElement('img');
  img.setAttribute('id', 'card-1-img');
  img.setAttribute('src', projects.image);
  img.setAttribute('alt', 'Gymfit logo');
  div1left.append(img);
  card1.append(div1left);
  const div1right = document.createElement('div');
  div1right.setAttribute('id', 'div-1--right');
  card1.append(div1right);
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'works-title-text');
  h2.setAttribute('id', 'works-title-text-1');
  h2.innerHTML = projects.name;
  div1right.append(h2);
  const p = document.createElement('p');
  p.setAttribute('id', 'card-1-text');
  p.innerHTML = projects.description;
  div1right.append(p);
  const skilltext = document.createElement('div');
  skilltext.setAttribute('id', 'skill-text');
  div1right.append(skilltext);
  const ul = document.createElement('ul');
  for (let i = 0; i < projects.languages.length;) {
    const li = document.createElement('li');
    const a1 = document.createElement('a');
    a1.setAttribute('class', 'read-text');
    a1.innerHTML = projects.languages[i];
    li.append(a1);
    ul.append(li);
    // eslint-disable-next-line no-plusplus
    i++;
  }
  skilltext.append(ul);
  div1right.append(skilltext);
  const button = document.createElement('button');
  button.setAttribute('class', 'div-1--right-btn');
  button.setAttribute('id', 'div-1--right-btn');
  button.setAttribute('data-open', 'modal1');
  button.innerHTML = 'See Project';
  div1right.append(button);
};

projects.forEach((projectPage) => buildCard1(projectPage));

const createDialog = () => {
  const body = document.querySelector('body');
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  modal.setAttribute('id', 'modal1');
  body.append(modal);
  const modaldialog = document.createElement('div');
  modaldialog.setAttribute('class', 'modal-dialog');
  modal.append(modaldialog);
  const header = document.createElement('header');
  header.setAttribute('class', 'title-header');
  modaldialog.append(header);
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'header-title');
  h2.innerHTML = `${projects.name}`;
  header.append(h2);
  const closebtn = document.createElement('button');
  closebtn.setAttribute('class', 'close-modal');
  closebtn.setAttribute('data-close', 'data-close');
  closebtn.innerHTML = '&times;';
  header.append(closebtn);
  const ul = document.createElement('ul');
  for (let j = 0; j < 3;) {
    const li = document.createElement('li');
    const a1 = document.createElement('a');
    a1.setAttribute('class', 'read-text');
    a1.innerHTML = projects.languages[j];
    li.append(a1);
    ul.append(li);
    // eslint-disable-next-line no-plusplus
    j++;
  }

  header.append(ul);
  const leftDiv = document.createElement('div');
  leftDiv.setAttribute('class', 'left-div');
  const projectImage = document.createElement('img');
  projectImage.setAttribute('class', 'project-img');
  projectImage.setAttribute('src', `${projects.projectimage}`);
  leftDiv.append(projectImage);
  modaldialog.append(leftDiv);
  const rightDiv = document.createElement('div');
  rightDiv.setAttribute('class', 'right-div');
  modaldialog.append(rightDiv);
  const p = document.createElement('p');
  p.setAttribute('class', 'project-details');
  p.innerHTML = projects.projectdetails;
  rightDiv.append(p);
  const bottomDiv = document.createElement('div');
  bottomDiv.setAttribute('class', 'live-section');
  const btn1 = document.createElement('button');
  btn1.setAttribute('class', 'div-1--right-btn');
  btn1.innerHTML = projects.liveVersion;
  bottomDiv.append(btn1);
  rightDiv.append(bottomDiv);
  const btn2 = document.createElement('button');
  btn2.setAttribute('class', 'div-1--right-btn');
  btn2.innerHTML = projects.sourceLink;
  bottomDiv.append(btn2);
  rightDiv.append(bottomDiv);
};

const displayProject = document.querySelectorAll('[data-open]');
const isVisible = 'is-visible';

for (const btn of displayProject) {
  btn.addEventListener('click', () => {
    document.getElementById('modal1').classList.add(isVisible);
  });
}

createDialog();

const hideProject = document.querySelectorAll('[data-close]');
// eslint-disable-next-line no-restricted-syntax
for (const btn of hideProject) {
  btn.addEventListener('click', () => {
    document.getElementById('modal1').classList.remove(isVisible);
  });
}

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible'));
  document.querySelector('.modal.is-visible').classList.remove(isVisible);
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
});