function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function studentMsg(totalScores, studentScore) {
    const averageScore = getAverage(totalScores).toFixed(1); // Format to one decimal place
    const studentGrade = getGrade(studentScore);
    const passed = studentGrade !== "F"; // Determine if the student passed based on grade
  
    return `Class average: ${averageScore}. Your grade: ${studentGrade}. You ${passed ? 'passed' : 'failed'} the course.`;
  }
  
  // Test cases
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
  