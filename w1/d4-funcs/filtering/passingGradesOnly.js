const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passing = grades.filter(function(grade){
  grade = grade >= 70;
  return grade;
});
console.log("passing rades are: ", passing);