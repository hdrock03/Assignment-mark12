const input = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(input[0].value),
    Number(input[1].value),
    Number(input[2].value)
  );
  if (sum === 180) {
    console.log("Yay, the angles form a triangle!");
    output.innerText = "Yay, the angles form a triangle!";
  } else {
    console.log("Oh no The angle doesn't form a triangle");
    output.innerText = "Oh no The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
