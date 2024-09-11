document.body.style.overflow = 'hidden'

const navText = document.querySelectorAll('.navText')
console.log(navText);

const doneProjects = document.querySelector('.doneProjects')
const aboutUs = document.querySelector('.aboutUs')
const buttonContact=document.querySelector('.buttonContact')

const arrowRight = document.querySelector('.arrowRight')
const arrowLeft = document.querySelector('.arrowLeft')

const iteration = document.querySelectorAll('.iteration')
const iteration1 = document.querySelector('.iteration1')
const iteration2 = document.querySelector('.iteration2')
const iteration3 = document.querySelector('.iteration3')
const iteration4 = document.querySelector('.iteration4')
const iteration5 = document.querySelector('.iteration5')


function clickHandler(event) {
    switch (event.target) {
        case doneProjects:
            addingHiddenOrNot()
            iteration2.classList.remove('hiddenOrNot')
            removingCurrentPage()
            doneProjects.classList.add('currentPage')
            break;
        case arrowRight:
            addingHiddenOrNot()
            iteration3.classList.remove('hiddenOrNot')
            removingCurrentPage()
            doneProjects.classList.add('currentPage')
            break;
        case arrowLeft:
            addingHiddenOrNot()
            iteration2.classList.remove('hiddenOrNot')
            removingCurrentPage()
            doneProjects.classList.add('currentPage')
            break;
        case aboutUs:
            addingHiddenOrNot()
            iteration4.classList.remove('hiddenOrNot')
            removingCurrentPage()
            aboutUs.classList.add('currentPage')
            break;
        case buttonContact:
            addingHiddenOrNot()
            iteration5.classList.remove('hiddenOrNot')
            removingCurrentPage()
            buttonContact.classList.add('currentPage')
            break;
    }
}




document.addEventListener('click',clickHandler)




const addingHiddenOrNot=()=>{
    for(let i=0; i<iteration.length;i++ ){
        let currentIteration = iteration[i]
        if(!currentIteration.classList.contains('hiddenOrNot')){
            currentIteration.classList.add('hiddenOrNot')
}}
}

const removingCurrentPage=()=>{
    for(let i=0; i<navText.length;i++ ){
        let tab = navText[i]
        tab.classList.remove('currentPage')
    }
}