let menuMain = document.querySelectorAll('ul.menu_main > li.menu__item > .menu__link');

for (let i = 0; i < menuMain.length; i++) {
    menuMain.item(i).onclick = function() {

        let menuSubActive = document.querySelector('.menu_active');
        if (menuSubActive) {
            menuSubActive.className = 'menu menu_sub';
        }

        if (menuMain.item(i).closest('.menu__item').children.length > 1) {        
            menuMain.item(i).nextSibling.nextSibling.className = 'menu menu_sub menu_active';
            return false;
        }     
    }
}