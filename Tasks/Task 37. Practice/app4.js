//4. Проверить 2 массива на полное совпадение.

let array1 = [1, 2, -2, -3, 4];

let array2 = [1, 2, -2, -3, 5];

if (array1.length == array2.length) {
    let isEqual = array1.every((item, index) => {
        return a[index] == b[index]  // item == a[index]
    });

    if (isEqual) {
        console.log("Совпадают")
    }
    else {
        console.log("Не совпадает")
    }


}
else {
    console.log("Не совпадают")
}









