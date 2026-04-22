function isPalindrome(str){
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return str+ ' is a palindrome: ' + (cleanedStr === reversedStr);  
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true