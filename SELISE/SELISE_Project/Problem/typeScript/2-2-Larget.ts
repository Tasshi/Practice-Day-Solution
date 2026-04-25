function Largests(arr: number[]): number {
    let largets = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > largets) {
            largets = arr[i];
        }
    }
    return largets;
}
console.log(Largests([3, 5, 7, 2, 9,1])); // 8
console.log(Largests([-5, -2, -10])); // -2
console.log(Largests([42])); // 42
console.log(Largests([100, 100, 100])); // 100