export function fillSelectOptions (selectId, arrayOfObject, contentKey) {
  const selectField = document.getElementById(selectId)
  var innerValue
  arrayOfObject.forEach(obj => {
    innerValue += '<option value = "' + obj.value + '>"' + obj[contentKey] + '</option>\r\n'
  })
  selectField.innerHTML = innerValue
}
