// returns rbg or rgba format
function getStyle (element, cssRule) {
  let value = ''
  if (document.defaultView && document.defaultView.getComputedStyle) {
    value = document.defaultView.getComputedStyle(element, '').getPropertyValue(cssRule)
  } else if (element.currentStyle) {
    cssRule = cssRule.replace(/\-(\w)/g, (res, val) => val.toUpperCase() )
    value = element.currentStyle[cssRule]
  }
  return value
}

function invertRgb (element, cssRule) {
  let color = getStyle(element, cssRule)
  let temp = color.split('(')
  let colors = temp[1].substring(0, temp[1].length - 1).split(',')
  for (let i = 0; i < 3; i++) {
    colors[i] = 255 - parseInt(colors[i])
  }
  colors = colors.join(',')
  element.style[cssRule] = temp[0] + '(' + colors + ')'
  console.log(element.style[cssRule])
}

module.exports = {
    invertRgb
}
