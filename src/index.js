import './styles.css';
import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './setTheme.js';
const menu = document.querySelector('.js-menu');
function createMenu(menuElement) {
    return menuElement.map(menuTemplate).join('');
}


menu.insertAdjacentHTML('beforeend', createMenu(menuElement));
