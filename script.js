const display = document.querySelector("#userInput")
var expression = ''

function press(item) {
    expression += item
    display.value = expression
}

function equal() {
    display.value = eval(expression)
    expression = ''
}

function erase() {
    expression = ''
    display.value = expression
}