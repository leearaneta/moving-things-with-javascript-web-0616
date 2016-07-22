const app = "I don't do much."



function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function hopefullyThisWorks() {
  document.addEventListener("keydown", function(event) {
    if (event.which === 39) {
      moveDodgerRight()
    }
  })
}

function hopefullyThisToo() {
  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
      moveDodgerLeft()
    }
  })
}


$(document).ready(function() {
  hopefullyThisWorks()
  hopefullyThisToo()
})
