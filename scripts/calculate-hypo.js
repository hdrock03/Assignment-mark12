const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse);
