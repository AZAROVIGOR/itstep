/*3. Дан числовой массив. Сформировать два новых массива: в первом - элементы с четными индексами, во втором - элементы с нечетными индексами.
 Сравнить суммы полученных массивов (определить большую).*/

let array = [5, 2, 1, 8, 25, 16, 3];

let evenIndex = array.filter((item, index) => index % 2 ==  0).reduce((sum, item) => sum += item, 0);

let oddIndex = array.filter((item, index) => index % 2 != 0).reduce((sum, item) => sum += item, 0);

if(evenIndex > oddIndex){
    console.log(`Большая  сумма : ${evenIndex}`);
}

else{
    console.log(`<Большая сумма: ${oddIndex}`);
}


