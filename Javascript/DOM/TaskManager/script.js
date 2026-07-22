const addButton = document.getElementById("add");
const taskAdderContainer = document.querySelector(".taskAdder");

addButton.addEventListener("click", function () {
  taskAdderContainer.classList.toggle("hide");
});
