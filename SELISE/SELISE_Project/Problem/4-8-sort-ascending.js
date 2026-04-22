function sortAscending(nums){
    return nums.sort((a, b) => a - b);
}

console.log(sortAscending([10, 2, 5, 1, 30]));
// → [1, 2, 5, 5, 6, 9]     
console.log(sortAscending([-3, -10, -1]));
console.log(sortAscending([7]));
