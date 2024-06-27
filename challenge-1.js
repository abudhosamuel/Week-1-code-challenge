const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getStudentGrade() {
  rl.question('Please enter the student marks (between 0 and 100): ', (marks) => {
    // Convert the input to a number
    marks = Number(marks);

    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
      rl.close();
      return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    // Output the grade
    console.log(`The grade for marks ${marks} is: ${grade}`);
    rl.close();
  });
}

// Call the function to prompt the user and output the grade
getStudentGrade();
