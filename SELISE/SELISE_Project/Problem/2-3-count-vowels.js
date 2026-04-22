function countVowels(str){
    const vowels = 'AEIOUaeiou';
    let count = 0;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += str[i] + " ";
            count++;
        }    }
    return  str + ' has' + result + " vowels. Total count: " + count;
}
console.log(countVowels("Gelephu")); // 3 (e, e, u)
console.log(countVowels("BHUTAN")); // 2 (U, A)
console.log(countVowels("xyz")); // 0
console.log(countVowels(" ")); // 0