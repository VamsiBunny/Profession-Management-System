let Name = document.getElementById("name");
let role = document.getElementById("role");
let age = document.getElementById("age");
let feedback = document.getElementById("feedback");
let employees = [];

function user() {
  let a = Name.value.trim();
  let b = role.value.trim();
  let c = age.value.trim();
  feedback.innerText = "";
  if (a && b && c) {
    Name.value = "";
    role.value = "";
    age.value = "";
    employees.push({ id: employees.length + 1, name: a, profession: b, age: c });
    updateEmployeeList();
    feedback.innerText = "Success: Employee Added!";
    feedback.style.color = "rgb(26, 255, 0)";
  } else {
    feedback.innerText =
      "Error: Please make sure all the fields are filled before adding an employee!";
    feedback.style.color = "red";
  }
}

function updateEmployeeList() {
  let text = document.getElementById("text");
  let employeeList = document.getElementById("employee-list");
  if (employees.length === 0) {
    text.innerHTML = "You have 0 Employees";
    employeeList.innerHTML = "";
    return;
  }
  text.innerHTML = `You have ${employees.length} Employees`;
  employeeList.innerHTML = "";
  employees.forEach((employee, index) => {
    employee.id = index + 1;
    let employeeEntry = document.createElement("div");
    employeeEntry.style.display = "flex";
    employeeEntry.style.alignItems = "center";
    employeeEntry.style.justifyContent = "space-between";
    employeeEntry.style.marginBottom = "10px";
    employeeEntry.style.padding = "10px";
    employeeEntry.style.border = "1px solid white";

    let details = document.createElement("span");
    details.style.flex = "1";
    details.innerHTML = `<p>${employee.id}.</p>
     <p>Name: ${employee.name}</p>    
     <p>Profession: ${employee.profession} </p>   
     <p>Age: ${employee.age}</p>`;
     details.style.cssText="display:flex;align-items:center;justify-content:center;gap:20px"

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete User";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      employees = employees.filter((_, empIndex) => empIndex !== index);
      updateEmployeeList();
    });

    employeeEntry.appendChild(details);
    employeeEntry.appendChild(deleteBtn);
    employeeList.appendChild(employeeEntry);
  });
}
