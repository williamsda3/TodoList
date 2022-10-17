let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("inputField");

// Adds the Task once the button is clicked
addToDoButton.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    // Puts the 'line-though' a task if it is clicked on once
    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    })

    // Removes the task from the list if it is double clicked
    paragraph.addEventListener("dblclick", function() {
       toDoContainer.removeChild(paragraph);
    })
})