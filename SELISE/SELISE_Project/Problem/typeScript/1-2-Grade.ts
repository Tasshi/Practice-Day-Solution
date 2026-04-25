function Grade(score: number): string {
    if (score >= 90){
        return "A";
    }else if(score >=75){
        return "B";
    }else if(score>=60){
        return "C";
    }else{
        return "F";
    }
}
console.log(Grade(95));
console.log(Grade(78));
console.log(Grade(45));