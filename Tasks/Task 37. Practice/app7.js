// Дано предложение на русском языке. Определить, является ли оно панграммой.

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let str = "Любя съешь щипцы  вздохнёт мэр  кайф жгуч";

let panogram = str.toLowerCase().replaceAll(" ", "").split('');




console.log(panogram);

