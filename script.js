let students = [
  { name: "Caleb", age: 18, mark: 75 },
  { name: "John", age: 19, mark: 45 },
  { name: "Sarah", age: 18, mark: 90 },
  { name: "Mike", age: 20, mark: 60 }
];


// ==============================
// STUDENT INFORMATION
// ==============================

function studentInformation(students) {
  for (let i = 0; i < students.length; i++) {
    console.log(
      "Student name: " + students[i].name +
      ", Current age: " + students[i].age +
      ", Achieved result: " + students[i].mark
    );
  }
}

studentInformation(students);


// ==============================
// CALCULATE GRADE
// ==============================

function calculateGrade(mark) {
  if (mark < 0 || mark > 100) {
    return "Invalid mark";
  }

  if (mark >= 80) {
    return "A";
  }
  else if (mark >= 70) {
    return "B";
  }
  else if (mark >= 60) {
    return "C";
  }
  else if (mark >= 50) {
    return "D";
  }
  else {
    return "F";
  }
}


// ==============================
// CALCULATE CLASS AVERAGE
// ==============================

function calculateAverage(students) {
  let totalMarks = 0;

  for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].mark;
  }

  let average = totalMarks / students.length;

  return average;
}

console.log("Class average: " + calculateAverage(students));


// ==============================
// FIND HIGHEST MARK
// ==============================

function findHighestMark(students) {
  let highest = students[0].mark;

  for (let i = 1; i < students.length; i++) {
    if (students[i].mark > highest) {
      highest = students[i].mark;
    }
  }

  return highest;
}

console.log("Highest mark: " + findHighestMark(students));


// ==============================
// FIND LOWEST MARK
// ==============================

function findLowestMark(students) {
  let lowest = students[0].mark;

  for (let i = 1; i < students.length; i++) {
    if (students[i].mark < lowest) {
      lowest = students[i].mark;
    }
  }

  return lowest;
}

console.log("Lowest mark: " + findLowestMark(students));


// ==============================
// COUNT PASSING STUDENTS
// ==============================

function countPassingStudents(students) {
  let passedCount = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 50) {
      passedCount++;
    }
  }

  return passedCount;
}

console.log(
  "Number of passing students: " +
  countPassingStudents(students)
);


// ==============================
// ADD STUDENT
// ==============================

function addStudent(students, name, age, mark) {
  let newStudent = {
    name: name,
    age: age,
    mark: mark
  };

  students.push(newStudent);

  return students;
}


// ==============================
// SEARCH STUDENT
// ==============================

function searchStudent(students, searchName) {
  for (let i = 0; i < students.length; i++) {
    if (searchName === students[i].name) {
      return students[i];
    }
  }

  return "Student not found";
}


// ==============================
// DISPLAY STUDENTS IN TABLE
// ==============================

function displayStudents(students) {
  let tableBody = document.getElementById("studentTableBody");

  for (let i = 0; i < students.length; i++) {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${students[i].name}</td>
      <td>${students[i].age}</td>
      <td>${students[i].mark}</td>
      <td>${calculateGrade(students[i].mark)}</td>
    `;

    tableBody.appendChild(row);
  }
}


// ==============================
// DISPLAY CLASS STATISTICS
// ==============================

function displayClassStats(students) {
  document.getElementById("classAverage").textContent =
    calculateAverage(students).toFixed(2);

  document.getElementById("highestMark").textContent =
    findHighestMark(students);

  document.getElementById("lowestMark").textContent =
    findLowestMark(students);

  document.getElementById("passingStudents").textContent =
    countPassingStudents(students);
}


// ==============================
// INITIAL DISPLAY
// ==============================

displayStudents(students);
displayClassStats(students);


// ==============================
// ADD STUDENT FORM
// ==============================

let studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("studentName").value;
  let age = Number(document.getElementById("studentAge").value);
  let mark = Number(document.getElementById("studentMark").value);

  addStudent(students, name, age, mark);

  // Clear existing table
  document.getElementById("studentTableBody").innerHTML = "";

  // Display updated students
  displayStudents(students);

  // Display updated statistics
  displayClassStats(students);

  // Clear form
  studentForm.reset();
});


// ==============================
// SEARCH STUDENT FORM
// ==============================

let searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let searchName = document.getElementById("searchName").value;

  let result = searchStudent(students, searchName);

  let searchResult = document.getElementById("searchResult");

  if (result === "Student not found") {
    searchResult.textContent = result;
  }
  else {
    searchResult.textContent =
      "Name: " + result.name +
      " | Age: " + result.age +
      " | Mark: " + result.mark +
      " | Grade: " + calculateGrade(result.mark);
  }
});