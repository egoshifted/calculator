const keys = document.getElementById('keys');
let resultValue = document.getElementById('result-value');

// CURRENT OPERATOR STATUS
let currentStatus = "add";
let operatorEngaged = false;
let pointStatus = false;
let currentNumber = 0;
let storedNumber = 0;

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
    switch (currentNumber) {
        case 0:
            currentNumber = parseInt(e.target.id);
            resultValue.innerText = currentNumber;
            break;
        default:
            selectedNumber = parseInt(e.target.id);
            currentNumber = `${currentNumber}${selectedNumber}`;
            resultValue.innerText = currentNumber;
    }
}


function clearFunc(e) { // TODO
    resultValue.innerText = "0";
    currentNumber = 0;
}

function switchFunc(e) {
    if (currentStatus === "add") {
        currentStatus = "subtract"
    } else {
        currentStatus = "add"
    }

}


function percentFunc(e) { // TODO
}


function multiplyFunc(e) {
    operatorEngaged = true;
    currentStatus = "multiply";
    console.log(currentStatus);
}


function divideFunc(e) {
    operatorEngaged = true;
    currentStatus = "divide";
    console.log(currentStatus);

}

function subtractFunc(e) {
    operatorEngaged = true;
    currentStatus = "subtract";
    console.log(currentStatus);

}

function addFunc(e) {
    operatorEngaged = true;
    currentStatus = "add";
    storedNumber = currentNumber;
    console.log(currentStatus);
}

function pointFunc(e) {
    pointStatus = true;
    console.log(pointStatus);

}

function backspaceFunc(e) { // TODO

}

function equalsFunc(e) { 
switch (currentStatus) {
    case "add": ///;
    break;
    case "subtract": ///;
    break;
    case "multiply": ///;
    break;
    case "divide": ///;
    break;
    }
}
