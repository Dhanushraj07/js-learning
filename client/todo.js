function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    const taskList = document.getElementById("taskList");
    const completedList = document.getElementById("completedList");
    const pendingList = document.getElementById("pendingList");
  
    // Validate input
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    // Create <li> element
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Actions container (Done & Cancel)
    const actions = document.createElement("div");
    actions.classList.add("actions");
  
    // ✅ Done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.style.background = "green";
    doneBtn.onclick = () => {
      // Move the task to the completed  likkkkkkkk   k k 
       
      taskList.removeChild(li);
    
      
      
      li.removeChild(actions); // Remove actions (Done & Cancel buttons)
      completedList.appendChild(li); 
    };
  
    // ❌ Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "✖";
    cancelBtn.style.background = "red";
    cancelBtn.onclick = () => {
      // Move the task to the pending list
      taskList.removeChild(li);
      
      li.removeChild(actions); // Remove the actions (Done & Cancel buttons)
      pendingList.appendChild(li);
    };
  
    actions.appendChild(doneBtn);
    actions.appendChild(cancelBtn);
  
    li.appendChild(actions);
    taskList.appendChild(li);
  
    // Clear input
    input.value = "";
  }