const result = document.getElementById("res");
function handleButtonClick(event) {
    // source = event.target || event.srcElement;
    // event => source => id => innerHTML
    console.dir(event);
    //let target: HTMLElement = event.target;
    let id = "btn0";
    //let id: string = target.id;
    console.log(id);
    let button = document.getElementById(id);
    console.dir(button);
    const action = button.innerHTML;
    // const action: string = document.getElementById(event.target.id).innerHTML;
    // const action = document.getElementById(id).innerHTML;
    switch (action) {
        case "0":
        case "1":
        case "+":
        case "-":
        case "*":
        case "/":
            result.innerHTML += action;
            break;
        case "C":
            result.innerHTML = "";
            break;
        case "=":
            try {
                let expression = result.innerHTML;
                const numbersRegExp = /(\d+)/g;
                // replace base 2 numbers with base 10 numbers
                expression = expression.replace(numbersRegExp, function (match) {
                    return parseInt(match, 2).toString();
                });
                // tslint:disable-next-line: no-eval
                let evaluatedExpression = eval(expression).toString(2);
                result.innerHTML = evaluatedExpression;
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        default:
            console.error("Should not get here.");
            break;
    }
}
//# sourceMappingURL=index.js.map