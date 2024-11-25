/* function getAverage(scores) {
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

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const averageScore = getAverage(totalScores); 
  const grade = getGrade(studentScore);  
  if (grade !== "F") {
    return "Class average: " + averageScore.toFixed(1) + "." + " Your grade: " + grade +"." + " You passed the course.";
  } else {
    return  "Class average: " + averageScore.toFixed(1) + "." + " Your grade: " + grade +"." + " You failed  the course.";;
  }
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
 */

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

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
 let courseResult = "You passed the course."
 if(!hasPassingGrade(studentScore))
 {
  courseResult= "You failed the course." 
 }
 return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". " + courseResult
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));



const cat = {
  name: "Whiskers"
}
let check = cat.mame;
console.log(check);