function greet(name, hour) {{
    if(hour< 12){
        return "Morning, ${name}!";
    }else if(hour>=12 && hour <=17)
    {
        return "Afternoon,${name}!";
    }else{
        return "Evening,${name}!";
    }
    }
}

console.log(greet("Karma", 9));// "Good morning, Karma!"
console.log(greet("Dorji", 14)); // "Good afternoon, Dorji!"
console.log(greet("Sonam", 20)); // "Good evening, Sonam!"Greeting