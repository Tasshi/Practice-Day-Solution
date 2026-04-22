function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum([100, 200, 350, 75])); // 725
console.log(sum([])); // 0