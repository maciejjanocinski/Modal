import '../styles/home-page.scss'
import Modal from 'modal-vanilla/lib/modal.js'
const modal = document.querySelector('.modal-cmp');
const buttonX = document.querySelector('.modal-cmp__button-x')
const rateBoxes = document.querySelectorAll('.modal-cmp__rateBox');
const nextStepBtn = document.querySelector('.modal-cmp__button-nextStep')
let currentRate = 0;

const myModal = new Modal({
    el: modal,
    backdrop: 'static',
    backdropTransition: 500,
});


setTimeout(() => {

    nextStepBtn.disabled = true;
    myModal.show();
}, 1500)




rateBoxes.forEach(box => {

    box.addEventListener('click', event => {
        currentRate = event.target.value;
        rateBoxes.forEach(box => box.classList.remove('modal-cmp__rateBox--selected'))
        event.target.classList.add('modal-cmp__rateBox--selected')

        if (currentRate > 0) {
            nextStepBtn.disabled = false;
        }
    })
})




buttonX.addEventListener('click', () => {
    modal.classList.add('animate-close')
})

nextStepBtn.addEventListener('click', () => {
    modal.classList.add('animate-close')
    setTimeout(() => {
        currentRate === 0 ? alert('Error') : alert(`Dziękujemy, że oceniłeś produkt na ${currentRate}!`)
    }, 600)

})

