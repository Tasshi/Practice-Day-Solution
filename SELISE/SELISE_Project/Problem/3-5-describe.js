const describes={
  name: "Karma",
  age: 25,
  city: "Gelephu",
  vertical: "Dev"
};

function describe({ name, age, city, vertical }) {
  return `${name} is ${age} years old, based in ${city}, working in the ${vertical}`;
}

console.log(describe(describes));