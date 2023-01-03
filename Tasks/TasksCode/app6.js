/*Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат!

Верните True, если вам лучше, иначе False!

Примечание:
Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!
*/



function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((aver, item) => ((aver + item) / classPoints.length));
    console.log(average);

    if(yourPoints > average){
        return true
    }
    return false;
    
}

let av = betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);

console.log(av);
