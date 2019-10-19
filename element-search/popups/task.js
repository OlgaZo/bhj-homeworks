let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');

let modalShowSuccess = document.querySelector('.show-success');
let modalClose = document.querySelectorAll('.modal__close_times');

modalMain.className = 'modal modal_active';

modalShowSuccess.onclick = function() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
}

for (let i = 0; i < modalClose.length; i++) {

    modalClose.item(i).onclick = function() {
        if (modalMain.className === 'modal modal_active') modalMain.className = 'modal';
        if (modalSuccess.className === 'modal modal_active') modalSuccess.className = 'modal';
    }
    
}









