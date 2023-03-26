/*
9. Напишите функцию, которая принимает строку на английском языке в качестве аргумента и возвращает количество гласных, 
содержащихся в этой строке.
*/

function countVowels(str) {
    const words = ("aeiou")

    return str.split("").filter(item => words.includes(item.toLowerCase())).length;
}

let string = countVowels("This website is for losers LOL!");
console.log(string);