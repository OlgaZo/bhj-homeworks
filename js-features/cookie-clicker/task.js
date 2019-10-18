const clicker = document.getElementById('clicker__counter');
clicker.textContent = 0;

const image = document.getElementById('cookie');
image.onclick = function() {
    clicker.textContent++;
    image.width = (clicker.textContent %2 === 0) ? 200 : 250;
}