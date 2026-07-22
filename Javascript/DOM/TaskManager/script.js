const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");
const taskTextInput = document.querySelector(".taskText");

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
