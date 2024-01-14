
const items = ['chicken', 'beef', 'turkey', 'gammon', 'tofu'];

export default function loadMenu(){
  const menu = document.createElement('section');
  menu.classList.add('menu-section');
  const span = document.createElement('span');

  span.innerHTML = 'Menu';
  menu.appendChild(span);

  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  for (let i = 0; i < items.length; i++){
    let menuItem = document.createElement('div');

    let menuTitle = document.createElement('h2');
    menuTitle.innerHTML = items[i];
    menuItem.appendChild(menuTitle);
    menuItems.appendChild(menuItem);
  }

  menu.appendChild(menuItems);

  return menu
}