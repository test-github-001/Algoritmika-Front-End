'use strict';
 
const HEADER = document.querySelector('header');
const MAIN = document.querySelector('main');
const ImagesArr = Array.from(MAIN.querySelectorAll('img'));

ImagesArr.forEach(img => selectImageType(img));

window.onload = recalculateHeaderHeight;
window.addEventListener('resize', recalculateHeaderHeight);

function selectImageType(img) {

    let div = document.createElement('div');

    let imgClass = (
           img.className === 'center'
        || img.className === 'left'
        || img.className === 'right')
        ?  img.className : 'class-error';

    div.className = imgClass;

    if(imgClass === 'class-error') div.innerHTML = `
        ERROR in image class name<br><br>
        class name <b><i>${img.className}</i></b> not supported`;
    else {
        div.style.backgroundImage = `url(${img.src})`;
        div.style.backgroundSize = img.style.backgroundSize;
    }

    MAIN.insertBefore(div, img);
    img.remove();
}

function recalculateHeaderHeight() {
    MAIN.style.margin = `${HEADER.clientHeight + 20}px auto 40px`;
}