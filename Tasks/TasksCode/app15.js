/*Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).

Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
*/

function findShort(s) {
    let short = s.split(" ").sort((a, b) => (a.length - b.length));
    return short[0].length;
}



let result = findShort("Let's travel abroad shall we");
console.log(result);

