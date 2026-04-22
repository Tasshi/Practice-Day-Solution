function reverseString(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return ' The revese string of ' +str + ' is: ' + reversed;
}
console.log(reverseString("Hello")); // "olleH"
console.log(reverseString("Bhutan")); // "natuhB"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""