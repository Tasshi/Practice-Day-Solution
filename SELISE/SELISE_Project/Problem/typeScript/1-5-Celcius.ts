function CToF(celsius: number): number {
    const F = celsius * 9/5 + 32;
    const C = (F - 32) * 5/9;
    return F;
}
function FToC(fahrenheit: number): number {
    const C = (fahrenheit - 32) * 5/9;
    const F = C * 9/5 + 32;
    return C;
}
console.log(CToF(0));// 32
console.log(CToF(100)); // 212
console.log(FToC(32)); // 0
console.log(FToC(212)); // 100
