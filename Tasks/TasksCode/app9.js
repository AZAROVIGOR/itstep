/*Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2).
if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    let result = weight / height ** 2;
    return result <= 18.5 ? "Underweight" : 
    result <= 25.0 ? "Normal" : 
    result <= 30.0 ? "Overweight" : 
     "Obese" ;
}

let a = bmi(80, 1.80);
console.log(a);