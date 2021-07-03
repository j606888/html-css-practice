const boxes = document.querySelectorAll('.box')

function open() {
  removeActive()
  this.classList.add('active')
}

function removeActive() {
  boxes.forEach(box => box.classList.remove('active'))
}

boxes.forEach(box => box.addEventListener('click', open))
