let sliders = document.querySelectorAll('.slider__item');
let slidersArr = Array.from(sliders);

let dots = document.querySelectorAll('.slider__dot');
let dotsArr = Array.from(dots);

let arrowNext = document.querySelector('.slider__arrow_next');

arrowNext.onclick = function() {
    
    let sliderActive = document.querySelector('.slider__item_active');
    let index = indexDot = slidersArr.indexOf(sliderActive);
     
    if (index+1 === slidersArr.length) {
        slidersArr[index].className = 'slider__item';
        slidersArr[0].className = 'slider__item slider__item_active';
        dotsArr[indexDot].className = 'slider__dot'; 
        dotsArr[0].className = 'slider__dot slider__dot_active';
    } else {
        slidersArr[index].className = 'slider__item';
        slidersArr[index+1].className = 'slider__item slider__item_active';
        dotsArr[indexDot].className = 'slider__dot';
        dotsArr[indexDot+1].className = 'slider__dot slider__dot_active';
    } 
}

let arrowPrev = document.querySelector('.slider__arrow_prev');

arrowPrev.onclick = function() {
    
    let sliderActive = document.querySelector('.slider__item_active');
    let index = indexDot = slidersArr.indexOf(sliderActive);
     
    if (index - 1 < 0) {
        slidersArr[index].className = 'slider__item';
        slidersArr[slidersArr.length - 1].className = 'slider__item slider__item_active';
        dotsArr[indexDot].className = 'slider__dot'; 
        dotsArr[dotsArr.length - 1].className = 'slider__dot slider__dot_active';
    } else {
        slidersArr[index].className = 'slider__item';
        slidersArr[index-1].className = 'slider__item slider__item_active';
        dotsArr[indexDot].className = 'slider__dot';
        dotsArr[indexDot-1].className = 'slider__dot slider__dot_active';
    }
}

for (let i = 0; i < dotsArr.length; i++) {
    dotsArr[i].onclick = function() {

        let dotActive = document.querySelector('.slider__dot_active');
        
        if (dotActive) {
            dotActive.className = 'slider__dot';
            slidersArr[dotsArr.indexOf(dotActive)].className = 'slider__item';
        }

        dotsArr[i].className = 'slider__dot slider__dot_active';               
        slidersArr[i].className = 'slider__item slider__item_active';     
    }
}
