/*
1.  Для чего используют data-атрибуты?

2.  Разница между script, script async и script defer?
   
Когда браузер загружает HTML и доходит до тега <script>...</script>, он не может продолжать строить DOM. 
Он должен сначала выполнить скрипт. То же самое происходит и с внешними скриптами <script src="..."></script>: 
браузер должен подождать, пока загрузится скрипт, выполнить его, и только затем обработать остальную страницу.
Это ведёт к двум важным проблемам:

Скрипты не видят DOM-элементы ниже себя, поэтому к ним нельзя добавить обработчики и т.д.
Если вверху страницы объёмный скрипт, он «блокирует» страницу. Пользователи не видят содержимое страницы, пока он не загрузится и не запустится:
Конечно, есть пути, как это обойти. Например, мы можем поместить скрипт внизу страницы. 
Тогда он сможет видеть элементы над ним и не будет препятствовать отображению содержимого страницы:
Но это решение далеко от идеального. Например, браузер замечает скрипт (и может начать загружать его) только после того, 
как он полностью загрузил HTML-документ. В случае с длинными HTML-страницами это может создать заметную задержку.

defer
Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, 
а затем запустить этот скрипт, когда DOM дерево будет полностью построено.
Скрипты с defer никогда не блокируют страницу.
Скрипты с defer всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded.
Атрибут defer предназначен только для внешних скриптов
Атрибут defer будет проигнорирован, если в теге <script> нет src.
Маленький скрипт загрузится первым, но выполнится вторым

async
Атрибут async означает, что скрипт абсолютно независим:
скрипт извлекается и исполняется параллельно с HTML документом, обычно применяется для скриптов которые не зависят от других скриптов на странице
Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
Так что если у нас есть несколько скриптов с async, они могут выполняться в любом порядке. То, что первое загрузится – запустится в первую очередь:
Содержимое страницы отображается сразу же : async его не блокирует.
3.  Для чего используется элемент datalist?
<input list="browsers" />
<datalist id="browsers">
          <option value="Opera">
          <option value="Safari">
          <option value="Firefox">
          <option value="Google Chrome">
          <option value="Maxthon">
          </datalist>
          используентся для создания выпадающего списка
          Тег <datalist> используется для создания списка вариантов ввода, предопределенных тегом <input>.
          Изначально варианты скрыты, список вариантов становится доступным, когда пользователь начинает вводить текст.
           Атрибут list тега <input> должен соответствовать идентификатору (id) элемента <datalist>.
           Предопределенные варианты для ввода заключаются во вложенный элемент <option>.

4.  Что такое вендорные префиксы? И для чего они используются?

Вендорный префикс (vendor prefix) — приставка к свойству CSS, обеспечивающая поддержку данного свойства браузерами, 
в которых определенная функция ещё не внедрена на постоянной основе (находится в стадии разработки или тестирования).
 Пример вендорного префикса: -webkit- или -moz-. Информацию о поддержке того или иного свойства в разных браузерах можно посмотреть Can i use

5.  Разница между Progressive Enhancement и Graceful Degradation?

    Оба подхода используютя для кросбраузерных и кроссплатформенных приложений.Progressive Enhancement предпологает поэтапное создание интерфейсов 
    от простого к сложному, на каждом из этапов создается законченый вебинтерфейс как улучшеная версия предыдущего, как вариант это создание преложения
    сначала на мобильном устройстве затем под планшет или полноценную десктоп версию
    Graceful Degradation имеет обратную философию , функционал сайта деградирует от сожного к простому
   

6.  Что такое псевдоэлементы? И для чего они используются?
    Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую часть выбранного элемента.
    Например, псевдоэлемент ::first-line может быть использован для изменения шрифта первой строки абзаца.
    В CSS есть 5 типов псевдоэлементов 
    ::first-letter - для изменения первой буквы в тексте
    ::first-line - для изменения первой строки блочного текста
    ::after - применяется для вставки нужного контента после выбранного элемента
    ::before - применяется для вставки нужного контента до выбранного элемента
    ::selection - позволяет применить стили к части документа, который был выделен пользователем (например, с помощью мыши).


7.  Что такое чистая функция?
    Функция должна удовлетворять двум условиям, чтобы считаться «чистой»:
    - Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов
    -Нет побочных эффектов
    Чистая функция 
    const add = (x, y) => x + y;
    add(2, 4); // 6

    Не чиятая функция 
    let x = 2;
const add = (y) => {
  x += y;
};
add(4); // x === 6 (the first time)
Нечистые функции = непостоянные результаты
Примеры побочных эффектов:

- Видоизменение входных параметров
- console.log
- HTTP вызовы (AJAX/fetch)
- Изменение в файловой системе
- Запросы DOM

8.  Разница между .forEach и .map()?
    Оба метода можно применять к массивам что бы  перебирать их элементы  и каждому из элементов применять переданную функцию
    forEach()  перебирает массив и ничего не возвращает 
    map()  перебирает массив и возвращает новый массив который получен при выполнении функции
    Оба метода не изменяют исходный массив 
    Что бы получить результат работы  forEach()можно обьявить переменную и результат работы присваивать в эту переменную
    Метод forEach() выполняет предоставленную функцию один раз для каждого элемента массива 
    map() выделяет память и сохраняет значение return. forEach() выбрасывает значение return и всегда возвращает undefined.
    const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x => x * x)
//>>>>>>>>>>>>>return value: undefined

myAwesomeArray.map(x => x * x)
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]

Второе различие между этими методами: map() можно привязывать к другим методам -  reduce(), sort(), filter() и т.д. 
А вот forEach(), как вы можете догадаться, возвращается undefined.

map() возвращает совершенно новый массив с преобразованными элементами и тем же количеством данных. 
В случае forEach(), даже если он вернется undefined, он изменит исходный массив с помощью callback.

Выбор между map() и forEach() будет зависеть от варианта использования. Если вы планируете изменять, чередовать или использовать данные, 
лучше выбирать map(), поскольку он возвращает новый массив с преобразованными данными. 
Но, если вам не понадобится возвращаемый массив, не используйте map(), вместо этого используйте forEach() или даже цикл for.


9.  Что обозначает «this» в JavaScript?
    This — это ключевое слово, используемое в JavaScript, которое имеет особое значение, зависящее от контекста в котором оно применяется.
    контекст this меняется в зависимости от его использования.
    Если вы попытаетесь обратиться к ключевому слову this в глобальной области видимости, 
    оно будет привязано к глобальному контексту, то есть — к объекту window в браузере.
    Когда this используется внутри объекта, это ключевое слово ссылается на сам объект.

    var dog = {
  name: 'Chester',
  breed: 'beagle',
  intro: function(){
    console.log(this);
  }
};

dog.intro();

 в консоль выводится представление объекта dog со всеми его свойствами и методами
 {name: "Chester", breed: "beagle", intro: ƒ}
    breed:"beagle"
    intro:ƒ ()
    name:"Chester"
    __proto__:Object

    Применение this во вложенных объектах может создать некоторую путаницу. В подобных ситуациях стоит помнить о том, 
    что ключевое слово this относиться к тому объекту, в методе которого оно используется. Рассмотрим пример.
    
    var obj1 = {
  hello: function() {
    console.log('Hello world');
    return this;
  },
  obj2: {
      breed: 'dog',
      speak: function(){
            console.log('woof!');
            return this;
        }
    }
};
 
console.log(obj1);
console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
console.log(obj1.obj2);
console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2

Стрелочные функции ведут себя не так, как обычные функции. Вспомните: при обращении к this в методе объекта, этому ключевому слову
 соответствует объект, которому принадлежит метод. Однако это не относится к стрелочным функциям. Вместо этого, this в таких функциях 
 относится к глобальному контексту (к объекту window).

 var objReg = {
  hello: function() {
    return this;
  }
};
 
var objArrow = {
    hello: () => this
};
 
objReg.hello(); // возвращает, как и ожидается, объект objReg 
objArrow.hello(); // возвращает объект Window!

Стрелочные функции лучше всего подходят для использования их в роли обычных функций, а не методов объектов, их нельзя использовать в роли конструкторов.

Прислушаемся к MDN и не будем использовать стрелочные функции в качестве методов объектов.

Использование this в обычных функциях

Когда обычная функция находится в глобальной области видимости, то ключевое слово this, использованное в ней, будет привязано 
к объекту window. Ниже приведён пример, в котором функцию test можно рассматривать в виде метода объекта window.
function test() {
  console.log('hello world');
  console.log(this);
}

test();

// hello world
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

Однако если функция выполняется в строгом режиме, то в this будет записано undefined, так как в этом режиме запрещены привязки по умолчанию. 
Попробуйте запустить следующий пример в консоли браузера.
function test() {
  'use strict';
  return this;
}

console.log( test() );
//функция возвращает undefined, а не объект Window
Рассмотрим пример с уже известным нам объектом dog. В качестве метода этого объекта можно назначить функцию chase, 
объявленную за его пределами. Тут в объекте dog никаких методов не было, до тех пор, пока мы не создали метод foo, 
которому назначена функция chase. Если теперь вызвать метод dog.foo, то будет вызвана функция chase. При этом ключевое слово this, 
к которому обращаются в этой функции, указывает на объект dog. А функция chase, при попытке её вызова как самостоятельной функции, 
будет вести себя неправильно, так как при таком подходе this будет указывать на глобальный объект, в котором нет тех свойств, к которым мы, 
в этой функции, обращаемся через this.
var dog = {
  breed: 'Beagles',
  lovesToChase: 'rabbits'
};

function chase() {
  console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.'); 
}

dog.foo = chase;
dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.

chase(); //так эту функцию лучше не вызывать

10. Разница между .call(), .apply() и bind()?

11. Почему в JS функции называют объектами первого класса?
Объектами первого класса  в контексте конкретного языка программирования называются элементы, которые могут быть 
переданы как параметр, возвращены из функции, присвоены переменной[1].
 в js любые типы данных ведут себя как обьекты

12. Функция поиска минимального и максимального значений в массиве?

*/

let arr = [5, 2, 10, 9, 4]

const  minMAx = [Math.min(...arr), Math.max(...arr)];

console.log(minMAx);