/*
5. Написать функцию, принимающая на вход массив дат и сортирующая их в порядке возрастания. объект date
*/

let data = ["2010-01-10", "2001-02-07", "2022-05-04", "2023-03-25", "2023-02-25", "2023-03-24"];

// console.log(new Date(data))

// let year = data.



data.forEach(item =>{
    let d = new Date(item).getTime();
    console.log(Array.from(d))
})