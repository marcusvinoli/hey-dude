var microcontrollers = require('../../../config/microcontrollers.json')

function fillSelectOptions (selectId) {
  const select = document.getElementById(selectId)
  var innerValue
  microcontrollers.forEach(microcontroller => {
    innerValue += '<option value = "' + microcontroller.value + '>"' + microcontroller.partnumber + '</option>\r\n'
  })
  select.innerHTML = innerValue
}
