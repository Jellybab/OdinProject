import _ from 'lodash';
import loadMenu from './menu';
import loadHome from './home';

const navItems = ['home', 'menu'];
const navFunctions = [loadHome(), loadMenu()];

function loadPage(){
  loadNav();
  content.appendChild(loadHome());
};

function loadNav(){
  const nav = document.getElementById('nav');
  nav.classList.add('navbar');

  const navList = document.createElement('ul');

  for(let i = 0; i < navItems.length; i++){
    let navLink = document.createElement('li');
    navLink.innerHTML = navItems[i];
    let itemName = navItems[i]

    navLink.addEventListener('click', () => {
      if (content.firstChild.classList == `${itemName}`) return

      content.firstChild.remove();
      content.appendChild(navFunctions[i]);
    });

    navList.appendChild(navLink);
  }

  nav.appendChild(navList);
}

const content = document.createElement('div');
document.body.appendChild(content);

loadPage();