import './styles.css';
import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './setTheme.js';
const menu = document.querySelector('.js-menu');
function createMenu(menuElement) {
    return menuElement.map(menuTemplate).join('');
}


menu.insertAdjacentHTML('beforeend', createMenu(menuElement));

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

function setClassList(e) {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function setLocalStorage(e) {
  const check = refs.switch.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
