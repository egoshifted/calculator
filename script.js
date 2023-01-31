const keys = document.getElementById('keys');
const keySelect = document.querySelector(`[id="keys"]`)
const resultValue = document.getElementById('result-value').innerText

//Set ID to keys on window load
window.onload = function() {
  for(i = 0; i < keys.children.length; i++) {
    const currentKeyName = keys.children[i].innerText;
    keys.children[i].id = currentKeyName;
  }
}

