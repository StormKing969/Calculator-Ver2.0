// console.log(module);

// required to send a local file
module.exports.calculationResult = calculationResult;

function calculationResult(userInput) {
    let display = userInput;

    let multiply = /X/;
    
    if(multiply.test(display) === true) {
        display = display.replace(multiply, "*");
    }
    
    return eval(display);
}

module.exports.percentResult = percentResult;

function percentResult(userInput) {
    let display = userInput;

    let multiply = /X/;
    
    if(multiply.test(display) === true) {
        display = display.replace(multiply, "*");
    }

    display = eval(display)

    if(!isNaN(display)) {
        display = display / 100;
    } 
    
    return display;
}

module.exports.signResult = signResult;
function signResult(userInput) {
    let display = userInput;

    let multiply = /X/;
    
    if(multiply.test(display) === true) {
        display = display.replace(multiply, "*");
    }
    
    display = eval(display)

    // console.log(Math.sign(display))

    if(Math.sign(display) == "-1") {
        display = String(display);
        display = display.substr(1, display.length);
    } else {
        display = "-".concat(display);
    }
    
    return display;
}