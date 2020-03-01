  function buttonClicked() {
    let button =  document.getElementById("btn");
    let buttonvalue = +button.innerHTML;
    buttonvalue++;
    button.innerHTML = buttonvalue;
  }