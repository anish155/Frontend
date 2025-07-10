const track = document.getElementById('track');
const slides = track.children;
let index = 0;

function slide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    track.style.transform = `translateX(-${index * 400}px)`;
}

setInterval(slide, 3000); 
