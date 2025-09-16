let btn = document.querySelectorAll("button");
let display = document.querySelector("#display");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText.trim();
    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "DLA") {
      display.value = display.value.slice(0, -1);
    } else if (value === "AC") {
      display.value = "";
    } else {
      display.value += value;
    }
  });
});
