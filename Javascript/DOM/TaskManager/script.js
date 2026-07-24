const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextInput = document.querySelector(".taskText");
const taskAdderColorsContainer = document.querySelector(".priotityColors2");
const taskAdderColors = document.querySelectorAll(".color2");

let selectedColor = "red";

let taskArray = [];
// [{ id: "1", task: "Hello", color: "red" }];

function hideTaskAdder() {
  taskAdderContainer.classList.toggle("hide");
}

addButton.addEventListener("click", hideTaskAdder);

taskTextInput.addEventListener("keydown", function (event) {
  if (event.key != "Enter") {
    return;
  }
  const taskText = taskTextInput.value;
  taskTextInput.value = "";

  hideTaskAdder();

  const taskObj = {
    id: Date.now(),
    task: taskText,
    color: selectedColor,
  };
  console.log(taskObj);
  taskArray.push(taskObj);
  createTicketAndAddTicketToUI(taskArray);
});
// applying event delegation over here
taskAdderColorsContainer.addEventListener("click", function (event) {
  const selectedElement = event.target;

  if (selectedElement.classList[0] !== "color2") {
    return;
  }
  const newSelectedColor = selectedElement.classList[1];
  selectedColor = newSelectedColor;
  taskAdderColors.forEach((element) => {
    element.classList.remove("border");
  });
  selectedElement.classList.add("border");
});

function createTicketAndAddTicketToUI() {}
