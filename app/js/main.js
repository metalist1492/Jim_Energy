document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('.portfolio__link');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.portfolio__inner--hiden').classList.toggle('portfolio__inner--hiden');
  })
});






/*
let buttons = document.querySelectorAll('.btn1');
  console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('click', () => {
      buttons[i].classList.toggle('hidden');
      buttons[i].nextElementSibling.classList.toggle('hidden');
      buttons[i].closest('.btn-box').querySelector('.btn3').classList.toggle('hidden');
    });
  }
*/ 