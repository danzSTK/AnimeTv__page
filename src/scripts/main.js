let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.hero__carousel');
let listItemDom = document.querySelector('.hero__carousel__list');
let thumbnailDom = document.querySelector('.hero__carousel__thumbnail');
let buttonOpenLinks = document.getElementById('button--open');
let buttonCloseLinks = document.getElementById('close__menu');
let abaLinks = document.querySelector('.header__links__list');


buttonOpenLinks.onclick = () => {
    abaLinks.classList.add('header__links__list--open')
}

buttonCloseLinks.onclick = () => {
    abaLinks.classList.remove('header__links__list--open')
}

nextDom.onclick = () =>{
    showSlider('next');
}

prevDom.onclick = () => {
    showSlider('prev');
}

let timeRunnig = 3000;
let timeAutonext = 7000;
let runAutoRun;
let runTimeOut;

clearTimeout(runAutoRun);
runAutoRun = setTimeout(() => {
    nextDom.click()
}, timeAutonext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.hero__carousel__list__item');
    let itemThumbnail = document.querySelectorAll('.hero__carousel__thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runAutoRun);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunnig)
}

document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const positionAtual = window.scrollY;

        if(positionAtual < alturaHero){
            ocultaElementoDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })

    function ocultaElementoDoHeader(){
        const header = document.querySelector('.header');
        const search = document.querySelector('.header__search');
        search.classList.add('dp--none')
        header.classList.remove('color');
    }

    function exibeElementosDoHeader(){
        const header = document.querySelector('.header');
        const search = document.querySelector('.header__search');
        search.classList.remove('dp--none')
        header.classList.add('color')
    }
})