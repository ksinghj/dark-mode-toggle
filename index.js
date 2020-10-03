let button = document.querySelector('.button')
let buttonHead = document.querySelector('.button-head')

// transform: translateX(100%);
button.addEventListener('click', () => {
  console.log('roggled')
  buttonHead.classList.toggle('toggled')
})
