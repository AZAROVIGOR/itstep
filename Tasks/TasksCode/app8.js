/*Дан массив целых чисел.

Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 
0 не является ни положительным, ни отрицательным.

Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
*/

let arr = [null];

function newArray(){
    if (arr === null || arr.length === 0) return [];
    
    let positiveNumbers = arr.filter(item => item > 0).length;
    let sumNegativeNumbers = arr.filter(item => item < 0).reduce((sum, item) => {
        if(item < 0){
            return sum + item;
        }
    },0)
    
   return [positiveNumbers, sumNegativeNumbers];
  
}

let a = newArray(arr);
console.log(a);




