const inputTag = document.getElementById("input");
const addBtnTag = document.getElementById("btn");

const taskArray = [];
//  [{task :"hello learn js",id:1}]

addBtnTag.addEventListener("click", function () {
  const taskText = inputTag.value.trim();
  if (taskText.length() == 0) {
    alert("Task is Empty");
    return;
  }
  let taskObj = {
    task: taskText,
    id: Date.now(),
  };
  taskArray.push(taskObj);
});
