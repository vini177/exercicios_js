let display = document.getElementById("display")
let displayValue = display.innerHTML

function updateDisplay() {
  display.innerHTML = display
}

function showOnDisplay(input) {
  display.value += input
}

function clearDisplay() {
  display.value = ""
}

function toggleSign() {
  let value = document.getElementById("display").value
  document.getElementById("display").value = value * -1
}

function calc() {
  try {
    display.value = eval(display.value)
  }
  catch(error) {
    display.value = "Error"
  }
}

function eraseDigit() {
  let value = document.getElementById("display").value
  document.getElementById("display").value = value.substring(0, value.length - 1)
}