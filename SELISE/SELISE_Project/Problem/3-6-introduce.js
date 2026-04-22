const trainee ={
    name: "Karma",
    vertical: "Dev"
};
function introduce({ name, vertical }) {
    return `Hi, I'm ${name} and I work in the ${vertical} vertical.`;
}
console.log(introduce(trainee));
