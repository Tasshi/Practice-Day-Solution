const cities = ["Gelephu", "Thimphu", "Paro"]
cities.push("Punakha");
console.log(cities);

console.log(cities.splice(cities.indexOf("Thimphu"),1));
console.log(cities.indexOf("Paro"));
console.log(cities.includes("Bumthang"));
console.log(cities);