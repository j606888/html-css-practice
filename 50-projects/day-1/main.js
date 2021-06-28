const panels = document.querySelectorAll('.panel')

function active(e) {
  removeActive()
  console.log(this.className)
  this.classList.add('active')
}

function removeActive() {
  panels.forEach(panel => panel.classList.remove('active'))
}

panels.forEach(panel => panel.addEventListener('click', active))