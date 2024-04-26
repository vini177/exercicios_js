const display = document.getElementById("display")

function showOnDisplay(input) {
  display.value += input
}

function clearDisplay() {
  display.value = ""
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
  
}