//1. Разрабоать функцию для генерации случаного целого числа от min до max.


function randomInteger(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

}

 let x = randomInteger(0, 10);
 console.log(x);

//2. Разработать функцию для заполнения массива случаныйми числами.


function arrayFilling(arrayRandomNumbers, n) {
        for (let i = 0; i < n; i++) {
                arrayRandomNumbers[i] = randomInteger(0, 10);
        }

}

let arrayRandomNumbers = [];
arrayFilling(arrayRandomNumbers, 5);
console.log(arrayRandomNumbers);

//3.  Разработать функцию для нахождения максимального элемента в массиве.

function maxElement(arrayRandomNumbers) {

        let max = arrayRandomNumbers[0];

        for (let i = 1; i <= arrayRandomNumbers.length; i++) {

                if (arrayRandomNumbers[i] > max) {

                        max = arrayRandomNumbers[i];
                }
        }
        return max;
}

let maxNumber = maxElement(arrayRandomNumbers);

console.log(maxNumber);


//4. Разработать функцию для нахождения индекса максимального элемента в массиве.

function indexMaxElement(arrayRandomNumbers) {
        let max = arrayRandomNumbers[0];
        let maxIndex = 0;
        for (let i = 1; i < arrayRandomNumbers.length; i++)
                if (arrayRandomNumbers[i] > max) {
                        maxIndex = i;
                        max = arrayRandomNumbers[i];
                }
        return maxIndex;
}
        


let indexMax = indexMaxElement(arrayRandomNumbers);

console.log(indexMax);






//5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)

function arrayElementSeparatedByCommas(arrayRandomNumbers) {

        let str = arrayRandomNumbers[0];
        for (let i = 1; i < arrayRandomNumbers.length; i++) {
                str += ", " + arrayRandomNumbers[i];
        }

        return str;
}

let separatedByCommas = arrayElementSeparatedByCommas(arrayRandomNumbers);
console.log(separatedByCommas);



//6. Разработать функцию, которая уменьшает четные элементы в 2 раза.

function decreaseNumbers(arrayRandomNumbers) {

        for (let i = 0; i < arrayRandomNumbers.length; i++) {
                if (arrayRandomNumbers[i] % 2 == 0) {
                        arrayRandomNumbers[i] = arrayRandomNumbers[i] / 2
                }
        }
        return arrayRandomNumbers;
}

let decreaseNumberArray = decreaseNumbers(arrayRandomNumbers);
console.log(decreaseNumberArray);



//7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.

function presenceElementInArray(arrayRandomNumbers, x) {

        for (let i = 0; i < arrayRandomNumbers.length; i++) {
                if (arrayRandomNumbers[i] == x) {
                        return true;
                }
        }
        return false;
}

let presence = presenceElementInArray(5);
console.log(presence);




//8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и - 1 - в противном случае.

function searchIndexInArray(arrayRandomNumbers, x){

        for(let i = 0; i <=arrayRandomNumbers.length; i++){
                if(arrayRandomNumbers[i] == x){
                        return i;
                }
                else{
                        return -1;
                }
        }
}

let searchIndex = searchIndexInArray(arrayRandomNumbers, 5);

if(searchIndex);