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
  
    // Actions container (Done & Delete)
    const actions = document.createElement("div");
    actions.classList.add("actions");
  
    // ✅ Done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.style.background = "green";
    doneBtn.onclick = () => {
      // Move the task to the completed list
      taskList.removeChild(li);
      li.removeChild(actions); // Remove the actions (Done & Delete buttons)
      completedList.appendChild(li);
    };
  
    // ❌ Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
      li.removeChild(actions); // Remove the actions (Done & Delete buttons)
      pendingList.appendChild(li); // Move the task to the pending list
      
    };
  
    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);
  
    li.appendChild(actions);
    taskList.appendChild(li);
  
    // Clear input
    input.value = "";
  }