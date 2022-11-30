/*Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: 
[1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.*/

let array = [1, 2, 3, 0, 4, 5, 6];

let isNull = false;

let newArray = array.reduce((sum, item) => {
   if(item == 0){
        isNull = true
   }
   if(!isNull){
      return sum + item 
   }
   return sum

})


let a = newArray
console.log(a);