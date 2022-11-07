/*Дан следующий массив: ['a', 'b', 'c', 'd']. Выведите с помощью этого массива 
следующую строку: 'a+b+c+d' с использованием цикла и без.*/

let letters = ['a', 'b', 'c', 'd'];

console.log(letters[0] + '+' + letters[1] + '+' + letters[2] + '+' + letters[3] );


let str = letters[0];
for(i = 1; i < letters.length ; i++){
   
  str += "+" + letters[i];
    

        
}

console.log(str);
