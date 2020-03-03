function handleButtonClick(event) {
    console.log(event);
    let id = event.target.id;
    let button = document.getElementById(id);
    const action = button.innerHTML;
    const result = document.getElementById("res");
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
            catch (error) {
                console.log(error.message);
            }
            break;
        default:
            console.error("Should not get here.");
            break;
    }
}
//# sourceMappingURL=index.js.map