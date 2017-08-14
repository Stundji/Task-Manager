var taskInput = document.getElementById("tasktext");
var addButton = document.getElementById("createtask");
var incompletedTaskHolder = document.getElementById("taskincomplete");
var completedTaskHolder = document.getElementById("taskcomplete");

	
var createNewTaskItem = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var deleteButton = document.createElement("button");
  
  checkBox.type = "checkbox";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

var addTask = function() {
	if(taskInput.value){
	  var listItem = createNewTaskItem(taskInput.value);
	  incompletedTaskHolder.appendChild(listItem);
	  bindTaskEvents(listItem, taskCompleted);
	  taskInput.value = "";
	} else {
	  alert("You can't add empty tasks!");
	}
}


var deleteTask = function() {
	if (this.parentNode != null) {
        this.parentNode.remove();
            }  
}

var taskCompleted = function() {
	if(this.checked){
		var listItem = this.parentNode;
		completedTaskHolder.appendChild(listItem);
		// bindTaskEvents(listItem, taskIncomplete);
	} else {
		var listItem = this.parentNode;
		incompletedTaskHolder.appendChild(listItem);
	}
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var deleteButton = taskListItem.querySelector("button.delete");
	deleteButton.onclick = deleteTask;
	checkbox.onchange = checkBoxEventHandler;
	
}
