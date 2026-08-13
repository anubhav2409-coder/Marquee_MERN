const marks = [85, 90, 78, 88, 95];
const total = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = (total / (marks.length * 100)) * 100;
console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");