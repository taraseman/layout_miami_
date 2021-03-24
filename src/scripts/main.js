'use strict';

const submit = document.querySelector('.contact-as__button');
const formContactUs = document.querySelector('.contact-as__form');
const formSubmit = document.querySelector('.consultation__form');

document.querySelector('.contact-as__textarea').value = '';

submit.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.contact-as__textarea').value = '';
  formContactUs.reset();
});

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  formSubmit.reset();
});
