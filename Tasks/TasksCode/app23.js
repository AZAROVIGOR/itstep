/*
Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
*/

function isIsogram(str) {
    const arr = str.toLowerCase().split('').sort();

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }

    return true;
}

//  return new Set(str.toUpperCase()).size == str.length;


let s = isIsogram("moooseeee");
console.log(s);

// let x = ("moossseeeee");
// console.log(new Set(x));
