const buttonsEl = document.querySelectorAll("button");

const inputEl = document.querySelector(".result");

const disNumber = document.querySelectorAll(".number");

const disOper = document.querySelectorAll(".operate");

const enabToggle = document.querySelector(".enab");

const disToggle = document.querySelector(".dis");

const signChange = document.querySelectorAll(".operator");

const enabBorder = document.querySelector(".border");

if (!/^[0-9]/.test(inputEl.value)) {
  enableDisable("disable");
  enDisOff("disable");
} 

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    let buttonDisplay = buttonsEl[i].textContent.trim();

    if (buttonDisplay === "AC") {
      clearInput();
      enableDisable("enable");
      enDisOff("disable");
      changeSign("enable");
    } else if (buttonDisplay === "on") {
      loadingScreen("yes");
      styleText("on");
      inputOn();
      setTimeout(combineFunc, 2500);
      function combineFunc() {
        styleText("off");
        loadingScreen("no");
        enableBorder("enable");
        enableDisable("enable");
        enDisOff("disable");
        enabHead("disable");
        disHead("enable");
        outBlocks("enable");
        changeSign("enable");
      }
    } else if (buttonDisplay === "off") {
      offScreen();
      outText("on");
      setTimeout(joinFunc, 1500);
      inputOff();
      function joinFunc() {
        changeSign("on");
        outText("off");
        clearInput();
        enableBorder("disable");
        enableDisable("disable");
        enabHead("enable");
        disHead("disable");
        outBlocks("disable");
        enDisOff("disable");
        changeSign("disable");
      }
    } else if (buttonDisplay === "DEL") {
      deleteInput(buttonDisplay);
      enableDisable("enable");
    } else if (buttonDisplay === "=") {
      enableDisable("disable");
      enDisOff("enable");
      calculateValue();
      changeSign("enable");
    } else if (buttonDisplay === "*" || buttonDisplay === "/") {
      enDisOff("disable");
      enableDisable("enable");
      displayValue(buttonDisplay);
    } else if (buttonDisplay === "+") {
      changeSign("off");
      enDisOff("disable");
      enableDisable("enable");
      displayValue(buttonDisplay);
      changeSign("open");
    } else if (buttonDisplay === "-") {
      changeSign("close");
      enDisOff("disable");
      enableDisable("enable");
      displayValue(buttonDisplay);
      changeSign("on");
    } else {
      changeSign("enable");
      displayValue(buttonDisplay);
      enableDisable("enable");
      enDisOff("enable");
      changeSign("on");
      changeSign("open");
    }
  });
}

function clearInput() {
  inputEl.value = "";
}

function inputOn() {
  inputEl.placeholder = "0.00";
}
function inputOff() {
  inputEl.placeholder = "";
}

function calculateValue(key) {
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

function enabHead(arg) {
  if (arg === "enable") {
    enabToggle.classList.remove("close");
  } else if (arg === "disable") {
    enabToggle.classList.add("close");
  } else {
    return;
  }
}

function disHead(arg) {
  if (arg === "enable") {
    disToggle.classList.remove("close");
  } else if (arg === "disable") {
    disToggle.classList.add("close");
  } else {
    return;
  }
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
    } else if (arg === "off") {
      exit.classList.add("hidden");
    } else if (arg === "on") {
      exit.classList.remove("hidden");
    } else if (arg === "close") {
      exit.classList.add("block");
    } else if (arg === "open") {
      exit.classList.remove("block");
    }
  });
}

function enableBorder(arg) {
  if (arg === "enable") {
    enabBorder.classList.add("active");
  }
  if (arg === "disable") {
    enabBorder.classList.remove("active");
  }
}

function loadingScreen(arg) {
  if (arg === "yes") {
    inputEl.value = "loading...";
  } else if (arg === "no") {
    inputEl.value = "";
  }
}

function offScreen() {
  inputEl.value = "turning off";
}

function styleText(arg) {
  if (arg === "on") {
    inputEl.classList.add("change");
  } else if (arg === "off") {
    inputEl.classList.remove("change");
  }
}
function outText(arg) {
  if (arg === "on") {
    inputEl.classList.add("out");
  } else if (arg === "off") {
    inputEl.classList.remove("out");
  }
}
