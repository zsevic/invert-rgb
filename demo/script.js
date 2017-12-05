const { invertRgb } = require('../lib')

let element = document.getElementById('test')

document.getElementById('invertColor').addEventListener('click', e => {
  invertRgb(element, 'color')
})

document.getElementById('invertBackground').addEventListener('click', e => {
  invertRgb(element, 'background-color')
})

document.getElementById('invertBorder').addEventListener('click', e => {
  invertRgb(element, 'border-color')
})
