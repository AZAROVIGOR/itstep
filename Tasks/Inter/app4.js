/*
1. Что такое HTML и для чего он используется?
    HTML - язык гипертекстовой разметки,скелет или каркас любой веб страницы содержащей разметку. Основная задача помочь браузеру как нкжно 
    отобразить 
    информацию и какого типа информация используется на странице.HTML стандартизированный язык позволяющий состовлять форматированный текст, 
    данный
    текст интерпретируется браузером, после чего браузер отображает его на экране в виде элементов веб страницы

2. Типы input элементов в HTML?
    В HTML для коммуникации с пользователем существует input элемент, который предназначен для получения вводимых данных. У него есть атрибут type 
    и в зависимости от значения этого атрибута будет применен тот или инной тип. Input type text самый распространненый вариант предназначенный 
    для вода букв  цифр и спк=ециальных символов. input type password используется для паролей, его особенность в том что вводимые символы 
    отображаются как звездочки.input type email предназначен для ввода email пользователя , если открыть намобильном телефоне то клавиатура будет 
    содержать специальные кнопки которые ускоряют ввод электронного адресса. input type number позволяет вводить только числовые значения при 
    фокусировки открывается клавиатура содержащая только цифры. input type button / input type submit поле для ввода превращается в кнопку 
    с помощью submit можно отправить форму. input type checkbox и input type radio - заменяют поле ввода на спец элементы.input type date / month /
    local  предназначены для ввода  даты  , такие типы полей могут содержать доп элементы в виде кнопок и выпадающего календаря

   
3. Что такое элемент canvas? И для чего он используется?
    HTML5 элемент который можно использовать для вставки изображений , градиентов и сложной анимации, а так же он создает область с помощью в
    которой  с помощью JS можно можно создавать различные обьекты , преобразовывать их

4. Что такое CSS-правило?
    CSS правило формируется из двух основных состовляющих  селектор - правило по которому будет происходить выборка правил для стилизации ,
     блок обьявления - это стуктура содержащая фигурные скобки внутри которых  описываются свойства и их значения
    

5. Разница между классом и идентификатором в CSS?
    для добавления стилей лучше использовать класс, а для добавления логики через JS оптимальнее применять id. id используются на странице только 
    один раз. id у элемента только один .У id больший вес для CSS (100). Class можно задавать много раз , у одного элемента может быть несколько 
    классов

6. Что такое CSS спрайт? И для чего он используется?
    CSS спрайт это картинка которая объединяет несколько изображений в одно большое.Обычно такой подход используетяс для специфичных наборов иконок
    В первую очередь это сокращает количество обращений к серверу т.к. вместо нескольких запросов достаточно сделать только один 

7. Как превратить любой тип данных в булевый? Перечислите ложные значения в JS?
Для того что бы  осуществить преобразование любого типа данных в булевое значение  (true ; false) можем использовать функцию Boolean() внутри 
которой пердаем данные а на выходе получаем булевые значения
Boolean(null) // false
Boolean(0)  //false
Boolean(1) // true
Boolean("str") // true

Так же можем использовать двойное отрицание

!!{}  // true
!!"str"  //  true
!!""  //  false  Данные типа пустая строка , NaN , undefined , null — преобразуются в false 
!!undefined  // false

В JS есть 6 основных элементов которые возвращают ложные значения (false)
это  "", 0, NaN, undefined, false, null

8. Методы строк в JavaScript?

const str = "Hi, my name is Jack!"

str.length - помогает узнать длинну строки и возвращает числовое значение  // 20
str.charAt(1) - можно получить определенные символ  // 'i'
str.toUpperCase() - верхний регистр строки
str.toLowerCase() - нижний регистр строки
str.indexOf(,) - используется для поиска указанного текста в строке,возвращает числовой индекс если символы найдены и -1 если нет // 2
str.lastIndexOf("а") - используется для поиска указанного текста в строке, возвращает индекс последнего вхождения, если в строке есть несколько символов "а" то вернется индекс послендего найденого // 16
str.slice(0, 3) - для исвлечения подстроки и строки. Указываем индексы с которых начинается и заканчивается подстрока
str.substr(0, 6) - для исвлечения подстроки и строки. Указываем индексы с которых начинается и заканчивается подстрока В качестве второго параметра принимает длинну вырезаемых символов
str.substring(0, 6) - для исвлечения подстроки и строки НЕ МОЖЕТ принимать отрицательные значения
str.replace("Jack", "Mike") - предназначен для замены значений  в строке  // "Hi, my name is Mike!"
str. - по
"     Hello!    ".trim(); - отсекает пробельные символы в начале и конце строки // "Hello!"

9. Методы массивов в JavaScript?

const arr = ["Tommy", "Artur", "John"]

arr.length - можно узнать длинну массива // 3
arr.push("Finn") - добавляет в конец исходного массива значение  // ["Tommy", "Artur", "John","Finn"]
arr.unshift("Finn") - добавляет в начало  исходного массива значение // ["Finn","Tommy", "Artur", "John"]
arr.shift("Finn") - ничего не принимает и удаляет первый элемент массива ВОЗВРАЩАЕТ ИМЕННО УДАЛЕННЫЙ ЭЛЕМЕНТ  // "Tommy"  ["Artur", "John"]
arr.pop() - ничего не принимает и удаляет последний элемент массива ВОЗВРАЩАЕТ ИМЕННО УДАЛЕННЫЙ ЭЛЕМЕНТ // "John"  ["Tommy", "Artur"]
arr.concat(["Finn"]) - можно обьеденить несколько массивов в один Исходный массив не изменяет а всегда возвращает новый массив //  ["Tommy", "Artur", "John","Finn"]
arr.splice(1, 1, "Finn") - это универсальный метод для работы массивами, используя его элементы в массиве можно добавлять, удалять, заменять на новые и объединять ["Tommy", "Finn", "John"]
arr.toString() - помогает превратить массив в строку // "Tommy, Artur, John"
arr,join("-") - помогает превратить массив в строку, можно передать значение которое будет использоваться в качестве разделителя // "Tommy-Artur-John"
arr.map()
arr.filter()
arr.reduce()
arr.forEach()
arr.every()
arr.some()


10. Разница между e.preventDefault() и e.stopPropagation()?
метод e.preventDefault()  отключает поведение элемента по умолчанию
метод e.stopPropagation() отключает распространение события

11. Методы поиска элементов в DOM?

В браузерном JS есть шесть основных методов поиска элементов в DOM
-   document.getElementById("id");
-   document.getElementByName("name");
-   document.getElementByTagName("div");
-   document.getElementClassName("class");
-   document.querySelector("nav + p");
-   document.qquerySelectorAll("nav > ul > li");




12. Функция суммирования всех цифр числа?

*/

const sumNumber = (num) => Math.abs(num)
                           .toString()
                           .split("")
                           .reduce((acc, item) => +acc + +item)    // в массиве числа  будут строкой поэтому  ставим + что бы преабразовать в число

let n = sumNumber(-22222);
console.log(n);                           