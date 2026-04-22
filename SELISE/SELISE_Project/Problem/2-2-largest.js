function findLargest(nums){
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    return largest;
}
console.log(findLargest([3, 5, 7, 2, 9,1])); // 8
console.log(findLargest([-5, -2, -10])); // -2
console.log(findLargest([42])); // 42
console.log(findLargest([100, 100, 100])); // 100