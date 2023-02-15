/*
Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, 
присутствующих в массиве (true означает наличие).
*/

const countSheeps = (arrayOfSheep) =>  {
    return arrayOfSheep.reduce((count, item) =>{
        if(item == true){
            count += 1;
        }
        return count
    }, 0)
}

const res = countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false]);

    console.log(res);

    /*
    function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
*/