const buttonsEl = document.querySelectorAll("button");

const inputEl = document.getElementById("result");

const disNumber = document.querySelectorAll(".number");

const disOper = document.querySelectorAll(".operate");

const disToggle = document.querySelectorAll(".enab");

const signChange = document.querySelectorAll(".operator");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    let buttonDisplay = buttonsEl[i].textContent.trim();

    if (buttonDisplay === "AC") {
      clearInput();
      enableDisable("enable");
      enDisOff("disable");
    } else if (buttonDisplay === "on") {
      enableDisable("enable");
      enDisOff("disable");
      closingBlock("disable");
      outBlocks("enable");
      changeSign("enable");
    } else if (buttonDisplay === "off") {
      clearInput();
      enableDisable("disable");
      enDisOff("disable");
      closingBlock("enable");
      outBlocks("disable");
      changeSign("disable");
    } else if (buttonDisplay === "DEL") {
      deleteInput(buttonDisplay);
      enableDisable("enable");
    } else if (buttonDisplay === "=") {
      enableDisable("disable");
      enDisOff("enable");
      calculateValue();
    } else if (
      buttonDisplay === "*" ||
      buttonDisplay === "/" ||
      buttonDisplay === "+" ||
      buttonDisplay === "-"
    ) {
      enDisOff("disable");
      enableDisable("enable");
      displayValue(buttonDisplay);
    } else {
      displayValue(buttonDisplay);
      enableDisable("enable");
      enDisOff("enable");
    }
  });
}

function clearInput() {
  inputEl.value = "";
}
function calculateValue() {
  inputEl.value = eval(inputEl.value);
}
function deleteInput(buttonDisplay) {
  buttonDisplay = "";
  inputEl.value = (inputEl.value += buttonDisplay).slice(0, -1);

  if (inputEl.value === "") {
    enDisOff("disable");
  }
}

function displayValue(buttonDisplay) {
  let temp = (inputEl.value += buttonDisplay);
}

function enableDisable(arg) {
  disNumber.forEach((number) => {
    if (arg === "enable") {
      number.classList.remove("disabled");
    } else if (arg === "disable") {
      number.classList.add("disabled");
    } else {
      return;
    }
  });
}

function enDisOff(key) {
  disOper.forEach((box) => {
    if (key === "enable") {
      box.classList.remove("off");
    } else if (key === "disable") {
      box.classList.add("off");
    } else {
      return;
    }
  });
}

function closingBlock(arg) {
  disToggle.forEach((block) => {
    if (arg === "enable") {
      block.classList.remove("close");
    } else if (arg === "disable") {
      block.classList.add("close");
    } else {
      return;
    }
  });
}

function outBlocks(arg) {
  buttonsEl.forEach((out) => {
    if (arg === "enable") {
      out.classList.remove("out");
    } else if (arg === "disable") {
      out.classList.add("out");
    } else {
      return;
    }
  });
}

function changeSign(arg) {
  signChange.forEach((exit) => {
    if (arg === "enable") {
      exit.classList.remove("exit");
    } else if (arg === "disable") {
      exit.classList.add("exit");
    } else {
      return;
    }
  });
}


