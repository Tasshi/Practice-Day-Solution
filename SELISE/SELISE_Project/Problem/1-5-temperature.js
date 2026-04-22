function cToF(celsius) {
    const F = celsius * 9/5 + 32;
    const C = (F - 32) * 5/9;
    return F;
}

function fToC(fahrenheit) {
    const F = fahrenheit * 9/5 + 32;
    const C = (F - 32) * 5/9;
    return C;
}

console.log(cToF(0));// 32
console.log(cToF(100)); // 212
console.log(fToC(32)); // 0
console.log(fToC(212)); // 100