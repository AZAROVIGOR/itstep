/*Задание
Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. 
Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
 Выведите результат с помощью console.log.*/

 var x1 = 5;
 var y1 = 8;
 var x2 = 5;
 var y2 = 5;
 var s = Math.abs((x2 - x1) * (y2 - y1));
 console.log(`Площадь прямоугольника равна ${s}`);