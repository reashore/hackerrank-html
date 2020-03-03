function handleButtonClick(event: any): void {
  console.log(event);
  let id : string = event.target.id;
  let button: HTMLElement = document.getElementById(id);
  const action: string = button.innerHTML;
  const result: HTMLElement = document.getElementById("res");

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
        let expression: string = result.innerHTML;
        const numbersRegExp: RegExp = /(\d+)/g;

        // replace base 2 numbers with base 10 numbers
        expression = expression.replace(numbersRegExp, function(
          match: string
        ): string {
          return parseInt(match, 2).toString();
        });

        // tslint:disable-next-line: no-eval
        let evaluatedExpression: string = eval(expression).toString(2);
        result.innerHTML = evaluatedExpression;
      } catch (error) {
        console.log(error.message);
      }
      break;

    default:
      console.error("Should not get here.");
      break;
  }
}
