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
body.classList.add(Theme.LIGHT)


// СЛУШАТЕЛИ
changeTheme.addEventListener('change', themeSwitcher)

//THEME SWITCHER
function themeSwitcher() {
    if (body.classList.contains(Theme.LIGHT)) {
        body.classList.remove(Theme.LIGHT)
        localStorage.removeItem("theme", "LIGHT")
        body.classList.add(Theme.DARK)
        localStorage.setItem("theme", "DARK")

        changeTheme.checked = true;
    }

    else {

        body.classList.remove(Theme.DARK)
        localStorage.removeItem("theme", "DARK")
        body.classList.add(Theme.LIGHT)
        localStorage.setItem("theme", "LIGHT")
        //changeTheme.checked = false;
    }

}

//MENU CREATOR
const menuCreator = menuTemplate(menu);
list.insertAdjacentHTML('beforeend', menuCreator)
//console.log(menuCreator)
