let date = new Date();

const timer = document.getElementById('timer');
timer.textContent = date.getSeconds();

const timerReverse = setInterval (function(){    
    if (timer.textContent > 0) {
        timer.textContent--; 
    } else {
        alert('Вы победили в конкурсе'); 
        clearInterval(timerReverse);           
    }  
}, 1000);



 


