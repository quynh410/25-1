// window.addEventListener('DOMContentLoaded', (event) => {
//     let overlay = document.getElementById('overlay');
//     let percentage = document.getElementById('percentage');
//     let opacity = 1;
//     let percent = 0;

//     let fadeInterval = setInterval(() => {
//         opacity -= 0.02;
//         percent += 2;
//         overlay.style.opacity = opacity;
//         percentage.innerText = percent + '%';

//         if (opacity <= 0) {
//             clearInterval(fadeInterval);
//             overlay.style.display = 'none';
//         }
//     }, 20);
// });

const image = document.getElementById("image");
const percentTest = document.getElementById("percentage");
image.classList.add('mờ-nhạt');

let percent = 0;
const interval = setInterval(() => {
    percent += 5;
    if(percent > 100){
        percent = 100;
        clearInterval(interval);
    }
    image.style.filter = `brightness(${percent}%)`;
    image.style.opacity = percent / 100;
    percentTest.textContent = `${percent}%`;
}, 200);