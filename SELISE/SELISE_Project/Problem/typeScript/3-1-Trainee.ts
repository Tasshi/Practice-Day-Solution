type traineeType ={
    name: string;
    age: number;
    vertical: string;
}

function greet(traineeList: traineeType): string {
  return `Hi ${traineeList.name}, you're ${traineeList.age}, and you're in the ${traineeList.vertical} vertical.`;
}
console.log(greet({name: "Tashi Phuntsho", age: 25, vertical: "Devt"}));