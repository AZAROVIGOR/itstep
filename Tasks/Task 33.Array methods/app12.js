/*12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

let array = [1, 2, 3, 4, 5];

array.splice(1, 0, "a", "b",);

array.splice(6, 0 , "c");

array.splice(8, 0, "e");

console.log(array);

 