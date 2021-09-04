import './styles.css';
import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './setTheme.js';
let menu = document.querySelector('.js-menu');
function createMenu(template) {
  return  menuTemplate(menuElement)
}


menu.insertAdjacentHTML('beforeend', createMenu(menuElement));