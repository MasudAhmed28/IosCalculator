let input = document.getElementById("input");
let button = document.querySelectorAll("button");
input.innerText = 0;

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "AC") {
      input.textContent = "\u00A0";
    } else if (e.target.textContent === "%") {
      input.innerText = eval(input.innerText * 0.01);
    } else if (e.target.textContent === "+/-") {
      input.innerText = eval(input.innerText * -1);
    } else if (e.target.textContent === "=") {
      input.textContent = eval(input.textContent.replace(/x/g, "*"));
    } else if (input.innerText == 0 && e.target.textContent == 0) {
      input.textContent = 0;
    } else if (input.innerText == 0 && e.target.textContent !== 0) {
      input.innerText = e.target.textContent;
    } else {
      input.innerText += e.target.textContent;
      console.log(e.target.textContent);
    }
    input.scrollLeft = input.scrollWidth;
  });
});