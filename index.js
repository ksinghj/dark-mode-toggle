let DMT = document.querySelector('.dark-mode-toggle')
let button = document.querySelector('.button')
let buttonHead = document.querySelector('.button-head')

// transform: translateX(100%);
button.addEventListener('click', () => {
  console.log('toggled')
  buttonHead.classList.toggle('toggled')
  button.classList.toggle('toggled__bg')
})
