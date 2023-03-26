/*
1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и
 false в противном случае.
*/

let twoStrings = (str1, str2) => {
    let firstStr = str1.toLowerCase().split("").sort().join('');
   let secondStr =  str2.toLowerCase().split("").sort().join('');
    if (firstStr === secondStr){
        return true
    }
    return false
    
}

let result = twoStrings("Мама", "маМа" );
console.log(result)