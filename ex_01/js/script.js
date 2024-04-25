// Exercício 01
function changeText() {
  document.getElementById("loremTxt").innerHTML = "Hello World!!!"
}

function reloadPage() {
  window.location.reload()
}

// Exercício 02
let colorPicker
const defaultColor = "#0000ff"

window.addEventListener("load", startup, false)

function startup() {
  colorPicker = document.getElementById("color-picker")
  colorPicker.addEventListener("input", updateFirst, false)
  colorPicker.select()
}

function updateFirst(event) {
  const colorTxt = document.getElementById("txt-color")
  if (colorTxt) {
    colorTxt.style.color = event.target.value
  }
}

//Exercício 03
var i = 0
function addOne() {
  document.getElementById("counter-txt").value = ++i
}

function resetCounter() {
  i = 0
  document.getElementById("counter-txt").value = i
}
