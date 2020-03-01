const result: HTMLElement = document.getElementById("res");

function handleButtonClick(event: Event): void {
// function handleButtonClick(event: MouseEvent): void {
  // source = event.target || event.srcElement;
  // event => source => id => innerHTML
  console.dir(event);
  // let target: HTMLElement = event.target;
  let id: string = "btn0";
  let button: HTMLElement = document.getElementById(id);
  let foo: Button;
  console.dir(button);
  const action: string = button.innerHTML;
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
      } catch (e) {
        console.log(e.message);
      }
      break;

    default:
      console.error("Should not get here.");
      break;
  }
}
