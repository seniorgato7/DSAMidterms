function registerStudent(){
  const studentList = document.getElementById('studentList');
  const listStudents = document.createElement('li');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age')

  const studentName = nameInput.value.trim();
  const studentAge = ageInput.value.trim();


  

  if (studentName, studentAge){
    const now = new Date();
    const time = now.toLocaleString();
    studentList.appendChild(listStudents);

    listStudents.textContent = `${studentName}, Age: ${studentAge}, Date & Time: ${time}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function(){
      listStudents.remove();
    };  

    listStudents.appendChild(deleteButton);

    if (studentAge > 100){
      alert("enter actual age")
      return;
    }
    else if(studentAge <= 0){
      alert("enter actual age")
      return;
    }
    
  }
  else if (studentName === "", studentAge === "")
  {
    alert("fill me up buttercup");
    return;
  }

  nameInput.value = '';
  ageInput.value = '';
}