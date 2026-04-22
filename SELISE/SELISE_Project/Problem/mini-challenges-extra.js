function swap(value1, value2) {
  
  [value1, value2] = [value2, value1];
  return [value1, value2];
}
const result = swap(10, 20);
console.log(result);