const trainees = {
  name: "Karma",
  age: 24,
  city: "Gelephu",
  vertical: "QA"
};

trainees.vertical = "Dev";
trainees.email = "karma@selisegroup.com";
delete trainees.age;

console.log(trainees);