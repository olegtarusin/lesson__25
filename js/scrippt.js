"use strict";
'esversion: 6';
function donloaded(event) {
    let doc = document.documentElement;
    doc.classList.add('load');
    window.removeEventListener('load', donloaded);

}
window.addEventListener('load', donloaded);
//loading
function metric(elem) {
    const windowHeight = window.innerHeight;
    const elemHeight = elem.offsetHeight;
    const elemPosition = elem.getBoundingClientRect().top;
    let headerHeight = document.querySelector('.header');
    headerHeight = headerHeight.offsetHeight;
    if (windowHeight > 450) {
        if (elemPosition > headerHeight && (elemPosition + elemHeight) <= windowHeight - windowHeight / 10) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    } else {
        if (elemPosition > headerHeight / 2 && elemPosition < windowHeight) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    }
}
const list = document.querySelector('.list');
function getAppear(event) {
    metric(list)
}
window.addEventListener('scroll', getAppear);
//scroll appear

const popupButtons = document.querySelector('.popup__boxbutton');
const popupBlock = document.querySelector('.popup__block');
function showForm(event) {
    popupBlock.classList.toggle('show');
    popupButtons.classList.toggle('clicked');
    if (popupBlock.classList.contains('show')) {
        window.addEventListener('keydown', indefender);
        window.addEventListener('keyup', indefender);
        document.body.style.overflow = "hidden";
        function out(event) {
            const target = event.target;
            if (target === popupBlock) {
                popupBlock.classList.remove('show');
                popupButtons.classList.remove('clicked');
                popupBlock.removeEventListener('click', out);
            }
        }
        popupBlock.addEventListener('click', out)
        //click-out
    }
    if (!popupBlock.classList.contains('show')) {
        document.body.style.overflow = "auto";
    }
}
popupButtons.addEventListener('click', showForm);
function indefender(event) {
    if (event.type === "keydown") {
        if (event.code === "Escape") {
            popupBlock.classList.remove('show');
            popupButtons.classList.remove('clicked');
        }
    }
    if (event.code === "Escape" && event.type === "keyup") {
        window.removeEventListener('keydown', indefender);
        window.removeEventListener('keyup', indefender);
    }
}
//key-out
const inputSearch = document.querySelector('.form__input')
const letterCount = document.querySelector('.form__letter');
const letterContent = letterCount.innerHTML
let letterCountContent = letterCount.innerHTML;
const letterLimit = inputSearch.getAttribute('maxlength');

let count = 0;
letterCount.innerHTML = `${letterContent}: ${count} /${letterLimit}`;
inputSearch.addEventListener('keyup', entertext);
inputSearch.addEventListener('keydown', (event) => {
    if (event.repeat) entertext(event);
});
function entertext() {
    count = inputSearch.value.length;
    letterCount.innerHTML = `${letterContent}: ${count} /${letterLimit}`;

}
const stepList = document.querySelectorAll('.steps__item');
for (let i = 0; i < stepList.length; i++) {
    stepList[i].style.width = `${i * 10 + 35}%`;
}
