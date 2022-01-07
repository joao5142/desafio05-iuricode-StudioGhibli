// Script para disparar a animação apenas quando o container e a imagem chegarem na posição inicial
const image = document.getElementById("imageChiriro");
const imageBox = document.querySelector(".image-box");
const initalXPosition = Math.floor(imageBox.getBoundingClientRect().left);

let firstClick = false;

imageBox.addEventListener('mouseenter', () => {

    let x = Math.floor(imageBox.getBoundingClientRect().left);
    console.log(x);
    if (!firstClick) {
        if (!image.classList.contains('active')) {
            setAnimation();

        }
    } else {

        if (!image.classList.contains('active') && x == initalXPosition) {
            setAnimation();

        }
    }

})

function setAnimation() {
    image.classList.add('active');
    imageBox.classList.add('active');

    firstClick = true;
    setTimeout(() => {
        image.classList.remove('active');
        imageBox.classList.remove('active');


    }, 700);

}