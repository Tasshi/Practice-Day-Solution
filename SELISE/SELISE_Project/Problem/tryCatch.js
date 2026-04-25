const name = "Alice";
const age = 30;//This will cause an error
if (age < 0) {
  throw new Error("Age cannot be negative");
}
try {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
} catch (error) {
  console.error("An error occurred:", error);
}
