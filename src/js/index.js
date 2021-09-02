//IMPORTS
import menu from './menu.json';
import menuTemplate from '../templates/menu-template.hbs';

//ДАННЫЕ
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};



//ДОСТУПЫ
const body = document.querySelector('body');
const list = document.querySelector('.js-menu');
const changeTheme = document.getElementById('theme-switch-toggle');

//по умолчанию
body.classList.add(
    localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
);

if (body.classList.value === Theme.DARK) {
    changeTheme.checked = true;
}

// СЛУШАТЕЛИ
changeTheme.addEventListener('change', themeSwitcher)

//THEME SWITCHER
function themeSwitcher(event) {
    if (event.target.checked) {
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
        body.classList.remove(Theme.LIGHT);

        return;
    }

    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
}

//MENU CREATOR
const menuCreator = menuTemplate(menu);
list.insertAdjacentHTML('beforeend', menuCreator)
//console.log(menuCreator)
