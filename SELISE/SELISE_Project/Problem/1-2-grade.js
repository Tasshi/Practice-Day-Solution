function gradeClassifier(score) {
    if(score>=90){
        return 'A';
    }else if(score>=75){
        return 'B';
    }else if(score>=60){
        return 'C';
    }else{
        return 'F';
    }
}
console.log(gradeClassifier(95));
console.log(gradeClassifier(78));
console.log(gradeClassifier(45));