import './styles.css';
import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './setTheme.js';
const menu = document.querySelector('.js-menu');
function createMenu(array) {
  return  menuTemplate(array)
}


menu.insertAdjacentHTML('beforeend', createMenu(menuElement));