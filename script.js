class Employee {
    constructor(name, age, department, salary) {
      this.name = name;
      this.age = age;
      this.department = department;
      this.salary = salary;
    }
  }
  
  let employees = [];
  
  function addEmployee() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const department = document.getElementById("department").value;
    const salary = parseInt(document.getElementById("salary").value);
  
    if (name && !isNaN(age) && department && !isNaN(salary)) {
      const employee = new Employee(name, age, department, salary);
      employees.push(employee);
      displayResult();
    } else {
      alert("Please fill all fields with valid data.");
    }
  }
  
  function displayResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    employees.forEach(employee => {
      resultDiv.innerHTML += `<div>Name: ${employee.name}</div>
                              <div>Age: ${employee.age}</div>
                              <div>Department: ${employee.department}</div>
                              <div>Salary: $${employee.salary}</div>
                              <hr>`;
    });
  }
  
  document.getElementById("addEmployeeBtn").addEventListener("click", addEmployee);
  