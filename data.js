const projects = [
  {
    name: 'Multi-Post Stories',
    description:
          "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    languages: ['html', 'bootstrap', 'Ruby on rails'],
    image: 'images/recenttitle.svg',
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

const displayProject = document.querySelectorAll('[data-open]');
// eslint-disable-next-line no-unused-vars
const isVisible = 'is-visible';
displayProject.addEventListener('click', () => {
  alert('display project');
});