type traineeList ={
    name: string;
    age: number;
    vertical: string;
}

//The undefine is iportant because if the array of string or name is not found it will return undefined
function findName(ts:traineeList[], name: string): string | undefined {
    const trainee = ts.find(t => t.name === name);
    return trainee?.name;
}

console.log(findName([{name: "Tashi Phuntsho", age:25, vertical: "Devt"}]));

