/*
1. Написать функцию, котороя на вход принимает две даты в формате "день.месяц.год". Функция возвращает 1, если первая дата больше второй, 
0 - при равенстве дат, и -1 в противном случае.
*/



function result(date1, date2){
    let d1 = date1.split(".").map(item => +item);
    let d2 = date2.split(".").map(item => +item);
    
    if(d1[2] > d2[2] || d1[1] > d2[1] || d1[0] > d2[0]){
        return 1
    }
    else if (d1[2] < d2[2] || d1[1] < d2[1] || d1[0] < d2[0]){
        return -1
    }
    else  {
        return 0
    }
    
} 

let res = result("30.07.2022", "30.08.2022");

console.log(res)