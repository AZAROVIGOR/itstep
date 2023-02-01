//В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.


const highAndLow = (numbers) => {
   
    let arr = numbers.split(" ").map(item => +item).sort((a, b) => a - b)
    return String(`${arr[arr.length -1]} ${arr[0]}`)
    
}

let x = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
console.log(x);

// function highAndLow(numbers) {
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// function highAndLow(numbers) {
//     let arr = numbers.split(' ').map(Number);
//     return Math.max(...arr) + ' ' + Math.min(...arr);
// }