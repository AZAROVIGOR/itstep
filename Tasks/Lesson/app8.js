


let green = [58, 25, 70, 91, 1, 5, 8];

//(green.pop()); // удаляет последний  элемент массива  из списка
//console.log(green.pop());    //  выводит последний  элеент массива и удаляет его из списка


//console.log(green.push());  // Считает количество  элементов  массива  тоже самое  (green.length)   == 7;
//green.push(33)  // добавляет в  конец  массива  элемент 33 можно добавлять сразу несколько  элементов  (33, 25);



//green.shift()  // Удаляет первый  элемент массива
//console.log(green.shift()); // Выводит первый элемент массива  и  удаляет его из списка
//console.log(green);



//green.unshift(33, 25); // Добавляет элемент в  начало массива , можно добавлять сразу несколько  элементов  (33, 25);
//console.log(green);


// метод вывода  массива  for of
// for(let a of green){               // Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению
//     console.log(a);
// }


/* Свойство length автоматически обновляется при изменении массива. 
Если быть точными, это не количество элементов массива, а наибольший цифровой индекс плюс один.*/

// Создайте массив styles с элементами «Джаз» и «Блюз».

let styles = ['Джаз', 'Блюз'];

//Добавьте «Рок-н-ролл» в конец.

styles.push('Рок-н-ролл');

//Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.

styles[Math.floor(styles.length / 2)] = "Классика";
//console.log(styles);

//Удалите первый элемент массива и покажите его.
styles.shift();
//console.log(styles.shift());

// Вставьте Рэп и Регги в начало массива.

styles.unshift("Рэп", "Регги");

console.log(styles);










let maxElement = green[0];


  for (let i = 1; i < green.length; i++){
    if(green[i] > maxElement){
        maxElement = green[i];
    }
  }

//console.log(maxElement);


let minElement = green[0];

for(let i = 1; i < green.length; i++){
    if(green[i] < minElement){
        minElement = green[i]
    }
}

//console.log(minElement);



// Среднее арифмитическое;
let sum = 0;

for(i = 0; i < green.length; i++){
    sum += green[i];
}
//console.log(sum / green.length);


//Кол -во четных элементов


for(let i = 0; i < green.length; i++){
    if(green[i] % 2 == 0){
       // console.log(green[i]);
    }
}



