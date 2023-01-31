const keys = document.getElementById('keys');
let resultValue = document.getElementById('result-value');

// Set ID to keys on window load (Operators & Numbers)
window.onload = function () {
    for (i = 0; i < keys.children.length; i ++) {
        const currentKeyName = keys.children[i].innerText;
        keys.children[i].id = currentKeyName;
        keys.children[i].addEventListener('click', operateFunc)
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

function operateFunc(e) {
    if(e.target.className === "number") {
      resultValue.innerText += e.target.id;
    } 
      
    }
  

