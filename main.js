const list = document.querySelector(".todo");
const add = document.getElementById("add-action");

const taskComplete = task => {
  task.classList.toggle("task-done");
};

const taskDelete = task => {
  const liDelete = task.closest("li");
  task.closest("ul").removeChild(liDelete);
};

add.addEventListener(
  "click",
  function() {
    const value = document.getElementById("action").value;
    if (value) {
      addItem(value);
      document.getElementById("action").value = "";
    }
  },
  false
);

const addItem = title => {
  const item = document.createElement("li");
  item.innerHTML = title;
  list.insertBefore(item, list.childNodes[0]);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("button-wrapper");
  item.appendChild(buttonWrapper);

  const buttonComplete = document.createElement("button");
  buttonComplete.classList.add("button", "complete-btn");
  buttonWrapper.appendChild(buttonComplete);
  const iconComplete = document.createElement("i");
  iconComplete.classList.add("fa", "fa-check");
  buttonComplete.appendChild(iconComplete);
  buttonComplete.addEventListener("click", function() {
    taskComplete(this);
  });

  const buttonRemove = document.createElement("button");
  buttonRemove.classList.add("button", "remove-btn");
  buttonWrapper.appendChild(buttonRemove);
  const iconRemove = document.createElement("i");
  iconRemove.classList.add("fa", "fa-times");
  buttonRemove.appendChild(iconRemove);
  buttonRemove.addEventListener("click", function() {
    taskDelete(this);
  });
};
