function BasicStudentDetails(students) {
  return students.map(student => ({
    name: student.name,
    email: student.email,
    phone: student.phone
  }));
}


const students = [
  {
    name: "Anubhav",
    age: 23,
    email: "anubhav@gmail.com",
    phone: "9876543210",
    city: "Patna"
  },
  {
    name: "Rahul",
    age: 22,
    email: "rahul@gmail.com",
    phone: "9123456789",
    city: "Delhi"
  }
];

const result = BasicStudentDetails(students);
console.log(result);