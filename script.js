let first_number = "";
let second_number = "";
let sign_id = "";
let trig_id = "";
let finish = false;

const digits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "zero",
];
const signs = ["plus", "minus", "multiply", "divide", "dash", "power"];
const trigs = ["cosine", "sine", "tangent", "cotangent", "percent"];

const out = document.querySelector(".screen");

function clear_screen() {
  first_number = "";
  second_number = "";
  sign_id = "";
  finish = false;
  out.textContent = 0;
}

document.getElementById("ac").onclick = clear_screen;

document.getElementById("calculator").onclick = (e) => {
  // нажата не кнопка
  if (!e.target.classList.contains("btn")) return;

  // получатую нажатую кнопку

  const button_id = e.target.id;

  if (digits.includes(button_id)) {
    const button_content = e.target.textContent;
    if (second_number === "" && sign_id === "") {
      console.log("condition1");
      first_number += button_content;
      out.textContent = first_number;
      console.log("first number entered: ", first_number);
    } else if (first_number !== "" && second_number !== "" && finish) {
      second_number = button_content;
      console.log("condition2");
      finish = false;
      out.textContent = second_number;
    } else if (first_number != "" && second_number === "" && sign_id === "") {
      first_number = +button_content;
      out.textContent = first_number;
    } else {
      second_number += button_content;
      console.log("condition3");
      out.textContent = second_number;
      console.log("second number entered: ", second_number);
    }

    return;
  }

  if (signs.includes(button_id)) {
    sign_id = button_id;
    console.log("sign entered: ", sign_id);
  }

  if (trigs.includes(button_id)) {
    trig_id = button_id;
    console.log("trig entered: ", trig_id);
  }
  if (button_id === "equal") {
    if (second_number == "" && trig_id == "") second_number = first_number;
    console.log("equal was pressed");
    switch (sign_id) {
      case "plus":
        first_number = +first_number + +second_number;
        break;
      case "minus":
        first_number = first_number - second_number;
        break;
      case "multiply":
        first_number = first_number * second_number;
        break;
      case "divide":
        if (second_number == 0) {
          out.textContent = "Error";
          first_number = second_number = "";
          sign_id = "";
        }
        first_number = first_number / second_number;
        break;
      case "power":
        first_number = Math.pow(first_number, second_number);
        break;
    }

    switch (trig_id) {
      case "sine":
        first_number = Math.sin(first_number);
        break;
      case "cosine":
        first_number = Math.cos(first_number, second_number);
        break;
      case "tangent":
        first_number = Math.tan(first_number, second_number);
        break;
      case "cotangent":
        first_number = Math.cot(first_number, second_number);
        break;
      case "percent":
        first_number = first_number / 100;
        break;
      case "percent":
        if (second_number == "") first_number *= -1;
        else second_number *= -1;
    }
    console.table(
      " irst:",
      first_number,
      " second: ",
      second_number,
      " sign: ",
      sign_id
    );
    second_number = "";
    sign_id = "";
    trig_id = "";
    finish = true;
    out.textContent = first_number;
  }
};
