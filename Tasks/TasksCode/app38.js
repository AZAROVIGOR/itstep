/*
Тролли атакуют ваш раздел комментариев!

Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.

Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.

Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».

Примечание: для этой ката y не считается гласной.
*/


function disemvowel(str) {
    const words = ("aeiou")

    return str.split("").filter(item => !words.includes(item.toLowerCase())).join("");


}

let strin = disemvowel("This website is for losers LOL!");
console.log(strin);