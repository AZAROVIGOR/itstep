/*2. Дан числовой массив. Сформировать два новых массива: в первом - четные элементы массива, во втором - нечетные элементы. 
Сравнить суммы полученных массивов (определить большую).*/

let array = [5, 2, 1, 8, 25, 16, 3];


let arrayEvenElements = array.filter(item => item % 2 == 0)
    .reduce((sum,item) => sum += item);

let arrayOddElements = array.filter(item => item % 2 != 0)
    .reduce((sum,item) => item += item);

  if(arrayEvenElements > arrayOddElements){
    console.log(`${arrayEvenElements}: большая сумма`)
  }
else {
      console.log(`${arrayOddElements}: большая сумма`)
}
  
  
  
    

