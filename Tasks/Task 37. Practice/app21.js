/*21 . Дано два массива и число k Найти числа по одному из каждого массива сумма которых будет равна k */

let array1 = [1, 2, 3, 4, 5, 6];

let array2 = [2, 4, 5, 8];

let k = 10;

let num = array1.forEach(item => {
        if(array2.includes(k -item)){
            console.log(item, k - item);
        }
})




