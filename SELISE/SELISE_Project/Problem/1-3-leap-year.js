function isLeapYear(year) {
  if (year % 400 === 0) {
    return 'Leap Year';
    } else if (year % 100 === 0) {  
    return 'Not a Leap Year';
    } else if(year % 4===0){
        return "Leap Year";
    }else{
        return "Not a Leap Year";
    }
}
console.log(isLeapYear(2024)); // true (÷4, not ÷100)
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(1900)); // false (÷100 but not ÷400)
console.log(isLeapYear(2000)); // true (÷400)