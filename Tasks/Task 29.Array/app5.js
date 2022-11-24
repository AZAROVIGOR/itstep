/*Дан следующий массив: ['a', 'b', 'c', 'd']. Выведите с помощью этого массива 
следующую строку: 'a+b+c+d' с использованием цикла и без.*/

let letters = ['a', 'b', 'c', 'd'];

console.log(letters[0] + '+' + letters[1] + '+' + letters[2] + '+' + letters[3] );


let str = letters[0];
for(i = 1; i < letters.length ; i++){
   
  str += "+" + letters[i];
    

        
}

console.log(str);



// let str = a[0];
// for (let i = 1; i < a.length; i++) {
//   str += "+" + a[i];
// }
// console.log(str);

// str = "";
// for (let i = 0; i < a.length - 1; i++) {
//   str += a[i] + "+";
// }
// str += a[a.length - 1];
// console.log(str);