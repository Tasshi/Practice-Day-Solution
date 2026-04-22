function getEmail(user) {
  return user.contact?.email;
}

// Examples
console.log(getEmail({ name: "Karma", contact: { email: "karma@selisegroup.com" } }));
// → "karma@selisegroup.com"

console.log(getEmail({ name: "Dorji" }));
// → undefined (no crash)