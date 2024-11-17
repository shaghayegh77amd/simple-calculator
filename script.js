const display = document.getElementById("display");
const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const backSpace = document.getElementById("backSpace");
const equal = document.getElementById("equal");
const root = document.getElementById("root");
const power = document.getElementById("power");
const buttons = document.getElementById("buttons");

let memoryNumber = 0;
let action = "";
let finalResult = false;

const numberButtons = document.getElementsByClassName("numberButton");

for (let numberButton of numberButtons) {
  numberButton.addEventListener("click", numberButtonHandle);
}
function numberButtonHandle(event) {
  if (display.textContent.length > 15) {
    return;
  }

  const data = event.target.dataset.input;
  if (data === ".") {
    if (display.textContent.includes(".")) {
      return;
    }
  }
  if (finalResult) {
    finalResult = false;
    display.textContent = data;
  } else {
    display.textContent += data;
  }
  if (!display.textContent.includes(".")) {
    display.textContent = Number(display.textContent);
  }
}

clear.addEventListener("click", () => {
  display.textContent = 0;
  memoryNumber = 0;
  action = "";
});

divide.addEventListener("click", () => {
  action = "divide";
  memoryNumber = Number(display.textContent);
  display.textContent = 0;
});

multiply.addEventListener("click", () => {
  action = "multiply";
  memoryNumber = Number(display.textContent);
  display.textContent = 0;
});

plus.addEventListener("click", () => {
  action = "plus";
  memoryNumber = Number(display.textContent);
  display.textContent = 0;
});

minus.addEventListener("click", () => {
  action = "minus";
  memoryNumber = Number(display.textContent);
  display.textContent = 0;
});

equal.addEventListener("click", () => {
  if (action !== "") {
    const number = Number(display.textContent);
    switch (action) {
      case "plus":
        display.textContent = memoryNumber + number;
        break;
      case "minus":
        display.textContent = memoryNumber - number;
        break;
      case "divide":
        display.textContent = memoryNumber / number;
        break;
      case "multiply":
        display.textContent = memoryNumber * number;
        break;
    }
    action = "";
    finalResult = true;
  }
});

backSpace.addEventListener("click", () => {
  if (display.textContent.length === 1) {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.l
    );
  }
});

root.addEventListener("click", () => {
  display.textContent = Math.sqrt(display.textContent);
});

power.addEventListener("click", () => {
  display.textContent **= 2;
});
