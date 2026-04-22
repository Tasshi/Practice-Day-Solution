
function printTable(n) {
    console.log('The Multiplication Table of ' + n + ' :');
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} × ${n} = ${i * n}`);
  }
}
printTable(7);
