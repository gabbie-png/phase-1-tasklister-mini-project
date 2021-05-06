document.addEventListener("DOMContentLoaded", () => {
  const mainDocument = document.querySelector("#main-content")
  console.log(mainDocument
    )
  const grabForm = document.getElementById("create-task-form")
  console.log(grabForm);

  const myToDoList = document.getElementById("tasks")
  console.log(myToDoList)

  grabForm.addEventListener("submit", function(thisIsThing){
    thisIsThing.preventDefault()
    console.log(thisIsThing.target)

    const imputBox = document.getElementById("new-task-description").value;
  console.log(imputBox)

    const listImput = document.createElement("li")
    listImput.textContent = imputBox

    myToDoList.appendChild(listImput)

    grabForm.reset();
  })

  


});
