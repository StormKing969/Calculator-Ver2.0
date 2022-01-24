// console.log(module);

// required to send a local file
module.exports = calculationResult;

function calculationResult(userInput) {
    let display = userInput;

    let multiply = /X/;
    // let percentage = /%/;

    if(multiply.test(display) === true) {
        display = display.replace(multiply, "*");
    }

    // if(percentage.test(display) === true) {
    //     display = display.replace(percentage, "");
    //     display = display;
    // }
    return eval(display);
}