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

// Exercício 03
var i = 0
function addOne() {
  document.getElementById("counter-txt").value = ++i
}

function resetCounter() {
  i = 0
  document.getElementById("counter-txt").value = i
}

// Exercício 04
function changePic(fileName) {
  let img = document.querySelector("#photo")
  img.setAttribute("src", fileName)  
}

// Exercício 05
function calc() {
  let num1 = parseFloat(document.getElementById("v1").value)
  let num2 = parseFloat(document.getElementById("v2").value)
  let operation = document.getElementById("op").value
  let res

  switch (operation) {
    case "sum":
      res = num1 + num2
      break
    case "sub":
      res = num1 - num2
      break
    case "multi":
      res = num1 * num2
      break
    case "divi":
      if(num2 !== 0) {
        res = num1 / num2
      } else {
        res = "Erro: Divisão por zero"
      }
      break
      default:
        res = "Erro: Operação Inválida"
  }

  document.getElementById("result").value = res
}

function clear() {
  document.getElementById("v1").value = ''
  document.getElementById("v2").value = ''
  document.getElementById("op").value = 'sum'
  document.getElementById("result").value = ''
}