let students = [
  { name: "Caleb", age: 18, mark: 75 },
  { name: "John", age: 19, mark: 45 },
  { name: "Sarah", age: 18, mark: 90 },
  { name: "Mike", age: 20, mark: 60 }
];

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

function calculateGrade(mark) {
    
}