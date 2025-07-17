// A small program that checks student grades and gives feedback

function calculateAverage(grades: number[]): number {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length; //1 brackets
}

function giveFeedback(name: string, average: number) {
  if (average == 100) {
    console.log(name + " is a genius!");
  } else if (average > 90) {
    console.log(name + " did excellent work.");
  } else if (average > 75 && average < 90) {
    console.log(name + " did well.");
  } else {
    console.log(name + " needs to improve.");
  }
}

const students = [
  // 2 type
  { name: "Ali", grades: [100, 95, 90] },
  { name: "Sara", grades: [70, 60, 50] },
  { name: "Omar", grades: [85, 80, 75] }, // 3 ""
  { name: "Lina", grades: [0, 100, 90] }, // 4 null
];

for (let student of students) {
  const avg = calculateAverage(student.grades);

  giveFeedback(student.name, avg);
}
