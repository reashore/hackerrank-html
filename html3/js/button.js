let result = document.getElementById("res");
//let buttons = document.getElementsByTagName("button");

const handleButtonClick = event => {
  //console.log(`Event = ${event}`);
  //console.log(event.target);
  //console.log(event.srcElement);
  //const button = event.target;
  //const button = event.target || event.srcElement;
  console.dir(event);
  let id = event.target.id;
  
  console.log(id);
  const action = document.getElementById(event.target.id).innerHTML;
  //const action = document.getElementById(id).innerHTML;

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
      let expression = result.innerHTML;
      const numbers = /(\d+)/g;

      // Replace all base 2 numbers with base 10 equivalents
      expression = expression.replace(numbers, function(match) {
        return parseInt(match, 2);
      });

      let evaluatedExpression;

      try {
        evaluatedExpression = eval(expression).toString(2);
        result.innerHTML = evaluatedExpression;
      } catch (e) {
        console.log(e.message);
      }

      break;

    default:
      console.error("Should not get here.");
      break;
  }
};

// for (let button of buttons) {
//   button.onclick = onButtonClick;
// }
