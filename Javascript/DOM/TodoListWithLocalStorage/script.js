const inputTag = document.getElementById("input");
const addBtnTag = document.getElementById("btn");
const taskContainer = document.querySelector(".taskContainer");
const themeButton = document.getElementById("themeButton");
const inputContainer = document.querySelector(".inputContainer");

let isLightTheme = true;
if (localStorage.getItem("theme") != null) {
  isLightTheme =
    localStorage.getItem("theme") && JSON.parse(localStorage.getItem("theme"));
}

if (isLightTheme) {
  themeButton.innerHTML = "Light";
  themeButton.style.backgroundColor = "white";
  themeButton.style.color = "black";
  inputContainer.style.backgroundColor = "#e3f2fd";
} else {
  themeButton.innerHTML = "Dark";
  themeButton.style.backgroundColor = "black";
  themeButton.style.color = "white";
  inputContainer.style.backgroundColor = "red";
}

themeButton.addEventListener("click", function () {
  if (isLightTheme) {
    themeButton.innerHTML = "Dark";
    themeButton.style.backgroundColor = "black";
    themeButton.style.color = "white";
    inputContainer.style.backgroundColor = "red";
  } else {
    themeButton.innerHTML = "Light";
    themeButton.style.backgroundColor = "white";
    themeButton.style.color = "black";
    inputContainer.style.backgroundColor = "#e3f2fd";
  }
  isLightTheme = !isLightTheme;
  localStorage.setItem("theme", JSON.stringify(isLightTheme));
});

let taskArray = [];
//  [{task :"hello learn js",id:1}]

let taskDataLocal = localStorage.getItem("TaskData");

if (taskDataLocal) {
  taskArray = JSON.parse(taskDataLocal);
  createTaskAndAddtoUI();
}

function taskAdder() {
  const taskText = inputTag.value.trim();
  inputTag.value = "";
  if (taskText.length == 0) {
    alert("Task is Empty");
    return;
  }
  let taskObj = {
    task: taskText,
    id: Date.now(),
  };
  taskArray.push(taskObj);
  // update local storage
  updateLocalStorage();
  createTaskAndAddtoUI();
}

addBtnTag.addEventListener("click", taskAdder);

inputTag.addEventListener("keydown", function (event) {
  let key = event.key;
  if (key !== "Enter") {
    return;
  }
  taskAdder();
});
function createTaskAndAddtoUI(arr = taskArray) {
  taskContainer.innerHTML = "";
  arr.forEach(function (taskObj) {
    let { id, task } = taskObj;
    let taskEle = document.createElement("div");
    taskEle.classList.add("task");
    taskEle.innerHTML = `
     <p contentEditable="false" id="taskText" >${task}</p>
        <div class="taskOptions">
          <svg
            id="edit"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"
            ></path>
          </svg>

          <svg
            id="delete"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
            ></path>
          </svg>`;

    const deleteIcon = taskEle.querySelector("#delete");
    const editIcon = taskEle.querySelector("#edit");
    const taskTextEle = taskEle.querySelector("#taskText");
    let isTextEditable = false;

    deleteIcon.addEventListener("click", function () {
      // UI Layer
      taskContainer.removeChild(taskEle);
      // Data Layer
      taskArray = taskArray.filter(function (taskObj) {
        return taskObj.id !== id;
      });
      // update local storage
      updateLocalStorage();
    });

    editIcon.addEventListener("click", function () {
      if (isTextEditable) {
        // UI layer
        taskTextEle.setAttribute("contentEditable", "false");
        editIcon.setAttribute("fill", "black");
        //Data Layer
        taskObj.task = taskTextEle.innerHTML;
        // update local storage
        updateLocalStorage();
      } else {
        // UI layer
        taskTextEle.setAttribute("contentEditable", "true");
        editIcon.setAttribute("fill", "red");
      }
      isTextEditable = !isTextEditable;
    });

    taskContainer.appendChild(taskEle);
  });
}

function updateLocalStorage() {
  localStorage.setItem("TaskData", JSON.stringify(taskArray));
}
