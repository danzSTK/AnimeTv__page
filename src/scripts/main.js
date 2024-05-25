/* elementos do carousel */
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.hero__carousel');
let listItemDom = document.querySelector('.hero__carousel__list');
let thumbnailDom = document.querySelector('.hero__carousel__thumbnail');

/* elemento header */
let buttonOpenLinks = document.getElementById('button--open');
let buttonCloseLinks = document.getElementById('close__menu');
let abaLinks = document.querySelector('.header__links__list');

/* Elementos de informção sobre o anime */
let animeInformacao = document.getElementsByClassName('anime__informacao');
let animeContent = document.querySelector('.hero__info')
let slider = document.querySelectorAll('.hero__carousel__list__item');
let contentInfo = document.querySelectorAll('.hero__info__content__item');
let position;


function addClass() {
    animeContent.classList.add('hero__info--active')
    if(slider[position].classList.contains('bleach')){
        for(let valor of contentInfo){
            if(valor.classList.contains('active')){
                valor.classList.remove('active')
            }
        }
        contentInfo[0].classList.add('active')
    } else if(slider[position].classList.contains('black')){
        for(let valor of contentInfo){
            if(valor.classList.contains('active')){
                valor.classList.remove('active')
            }
        }
        contentInfo[1].classList.add('active')
    }
    else if(slider[position].classList.contains('demon')){
        for(let valor of contentInfo){
            if(valor.classList.contains('active')){
                valor.classList.remove('active')
            }
        }
        contentInfo[2].classList.add('active')
    }
    else if(slider[position].classList.contains('stone')){
        for(let valor of contentInfo){
            if(valor.classList.contains('active')){
                valor.classList.remove('active')
            }
        }
        contentInfo[3].classList.add('active')
    }
    else if(slider[position].classList.contains('rurouni')){
        for(let valor of contentInfo){
            if(valor.classList.contains('active')){
                valor.classList.remove('active')
            }
        }
        contentInfo[4].classList.add('active')
    }
    else{
        alert('Encontramos um erro')
    }
}

let removeClose;
function removeClass(){
    animeContent.classList.remove('hero__info--active')
    animeContent.classList.add('hero__info--close')

    removeClose = setTimeout(() => {
        animeContent.classList.remove('hero__info--close');
    }, 2000)
    clearInterval(removeClass);
}


buttonOpenLinks.onclick = () => {
    abaLinks.classList.add('header__links__list--open')
}

buttonCloseLinks.onclick = () => {
    abaLinks.classList.remove('header__links__list--open')
}

nextDom.onclick = () =>{
    showSlider('next');
    position = 1
}

prevDom.onclick = () => {
    showSlider('prev');
    position = 4
}

let timeRunnig = 3000;
let timeAutonext = 7000;
let runAutoRun;
let runTimeOut;

clearTimeout(runAutoRun)
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
        slider = itemSlider
        position = 1

    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
        slider = itemSlider
        position = 4
    }

    
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunnig)
    clearInterval(runAutoRun);
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