function classifyBMI(weight, height){
    let bmi = weight / (height * height);
    if (bmi<18.5){
        return "Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "Normal";
    }else if(bmi >= 25.0 && bmi <= 29.9){
        return "Overweight";
    }else{
        return "Obese";
    }
}
console.log(classifyBMI(55, 1.70)); // "Normal"
console.log(classifyBMI(95, 1.75)); // "Obese"