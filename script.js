const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];

const task = () => {
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
    return;
  } else if (number.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (number.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  let result = "";
  let n = number.value;
  for (let i = 0; i < romanNumerals.length; i++) {
    while (n >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      n -= romanNumerals[i].value;
    }
  }

  output.innerText = result; 
};

button.addEventListener("click", task);
