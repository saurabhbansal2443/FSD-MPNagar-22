const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextInput = document.querySelector(".taskText");
const taskAdderColorsContainer = document.querySelector(".priotityColors2");

let selectedColor = "red";

addButton.addEventListener("click", function () {
  taskAdderContainer.classList.toggle("hide");
});

taskTextInput.addEventListener("keydown", function (event) {
  if (event.key != "Enter") {
    return;
  }
  const taskText = taskTextInput.value;
  console.log(taskText);
});

taskAdderColorsContainer.addEventListener("click", function (event) {
  const selectedElement = event.target;

  if (selectedElement.classList[0] !== "color2") {
    return;
  }
  const newSelectedColor = selectedElement.classList[1];
  selectedColor = newSelectedColor;
  selectedElement.classList.add("border");
  console.log(newSelectedColor);
});
