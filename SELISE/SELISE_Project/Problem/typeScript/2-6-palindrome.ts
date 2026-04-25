function isPalindromeNumber(str: string):string {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return str+ ' is a palindrome: ' + (cleanedStr === reversedStr);  
}
console.log(isPalindromeNumber("madam")); // true
console.log(isPalindromeNumber("Racecar")); // true
console.log(isPalindromeNumber("hello")); // false
console.log(isPalindromeNumber("a")); // true