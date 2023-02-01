const keys = document.getElementById('keys');
let resultValue = document.getElementById('result-value');

// CURRENT OPERATOR STATUS
let currentStatus = "add";
let pointStatus = false;


// Set ID to keys on window load (Operators & Numbers)
window.onload = function () {
    for (i = 0; i < keys.children.length; i ++) {
        const currentKeyName = keys.children[i].innerText;
        keys.children[i].id = currentKeyName;
        switch (currentKeyName) {
            case "C": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', clearFunc);
                break;
            case "+/-": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', switchFunc);
                break;
            case "/": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', divideFunc);
                break;
            case "%": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', percentFunc);
                break;
            case "*": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', multiplyFunc);
                break;
            case "-": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', subtractFunc);
                break;
            case "+": keys.children[i].className = "operator";
                keys.children[i].addEventListener('click', addFunc);
                break;
            case ".": keys.children[i].className = "point";
                keys.children[i].addEventListener('click', pointFunc);
                break;
            case "←": keys.children[i].className = "backspace";
                keys.children[i].addEventListener('click', backspaceFunc);
                break;
            case "=": keys.children[i].className = "equals";
                keys.children[i].addEventListener('click', equalsFunc);
                break;
            default: keys.children[i].className = "number";
                keys.children[i].addEventListener('click', numberFunc);

        }
    }
}

// OPERATOR & NUMBER FUNCTIONS

function numberFunc(e) {
    if (e.target.className === "number") {
        resultValue.innerText += e.target.id;
    }

}

function clearFunc(e) { // TODO
resultValue.innerText = "0";
}

function switchFunc(e) { 
    if(currentStatus === "add") {
        currentStatus = "subtract"
    } else {
        currentStatus = "add"
    }

}


function percentFunc(e) { // TODO
}


function multiplyFunc(e) { 
    currentStatus = "multiply";
    console.log(currentStatus);
}


function divideFunc(e) { 
    currentStatus = "divide";
    console.log(currentStatus);

}

function subtractFunc(e) { 
    currentStatus = "subtract";
    console.log(currentStatus);

}

function addFunc(e) { 
    currentStatus = "add";
    console.log(currentStatus);
}


function equalsFunc(e) { // TODO

}

function pointFunc(e) { 
    pointStatus = true;
    console.log(pointStatus);

}

function backspaceFunc(e) { // TODO

}

