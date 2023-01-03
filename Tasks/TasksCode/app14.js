/*Вам дадут слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная,
 вернуть средний символ. Если длина слова четная, верните средние 2 символа.
 */

function getMiddle(s) {
    if (s.length % 2 !== 0) {
        return s[Math.floor(s.length / 2)];
    }
    else {
        return s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
}

let a = getMiddle("azarovig");

console.log(a);