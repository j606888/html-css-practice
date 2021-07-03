const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progessBar = document.getElementById("progressBar")
const circles = document.querySelectorAll('.circle')

let currentStep = 1

next.addEventListener('click', () => {
  currentStep++

  if (currentStep > circles.length) {
    currentStep = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentStep--

  if (currentStep < 1) {
    currentStep = 1
  }

  update()
})

function update() {
  if (currentStep === circles.length) {
    next.disabled = true
  } else if (currentStep === 1) {
    prev.disabled = true
  } else {
    next.disabled = false
    prev.disabled = false
  }

  progessBar.style.width = ((currentStep - 1) / (circles.length - 1) * 100) + '%'

  circles.forEach((circle, idx) => {
    if (currentStep > idx) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}