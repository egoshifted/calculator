const keys = document.getElementById('keys');
let resultValue = document.getElementById('result-value').innerText

// Set ID to keys on window load (Operators & Numbers)
window.onload = function () {
    for (i = 0; i < keys.children.length; i ++) {
        const currentKeyName = keys.children[i].innerText;
        keys.children[i].id = currentKeyName;
        keys.children[i].addEventListener('click', testFunc)
        switch (currentKeyName) {
            case "C": keys.children[i].className = "operator";
                break;
            case "+/-": keys.children[i].className = "operator";
                break;
            case "/": keys.children[i].className = "operator";
                break;
            case "%": keys.children[i].className = "operator";
                break;
            case "*": keys.children[i].className = "operator";
                break;
            case "-": keys.children[i].className = "operator";
                break;
            case "+": keys.children[i].className = "operator";
                break;
            case ".": keys.children[i].className = "point";
                break;
            case "←": keys.children[i].className = "backspace";
                break;
            case "=": keys.children[i].className = "equals";
                break;
            default: keys.children[i].className = "number";

        }
    }
}

function testFunc(e) {
  console.log(` ${e.target.id} clicked!`)
}