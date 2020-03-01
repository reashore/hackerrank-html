function rotateButtonText() {
  const edgeButtonArray = [
    "btn1",
    "btn2",
    "btn3",
    "btn6",
    "btn9",
    "btn8",
    "btn7",
    "btn4"
  ];
  const buttonTextArray = [1, 2, 3, 6, 9, 8, 7, 4];
  const button1 = document.getElementById("btn1");
  const button1Text = +button1.innerHTML;
  const button1Index = buttonTextArray.indexOf(button1Text);
  const length = edgeButtonArray.length;

  for (let n = 0; n < length; n++) {
    let buttonId = edgeButtonArray[n];
    let newIndex = button1Index + n - 1;

    if (newIndex < 0) {
      newIndex += length;
    }

    if (newIndex > 7) {
      newIndex -= length;
    }

    let buttonText = buttonTextArray[newIndex];
    setButtonText(buttonId, buttonText);
  }
}

function setButtonText(buttonId, buttonText) {
  let button = document.getElementById(buttonId);
  button.innerHTML = buttonText;
}
