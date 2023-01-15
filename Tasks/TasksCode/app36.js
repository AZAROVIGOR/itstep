/*
В маленьком городке население р0 = 1000 в начале года. Население регулярно увеличивается на 2 процента в год, и более 50 новых 
жителей ежегодно переезжают в город. Сколько лет нужно городу, чтобы его население стало больше или равно p = 1200 жителей?
*/

function nbYear(p0, percent, aug, p) {
   let count = 0;
   percent = percent/100;
   for (let i = p0; i <= p; i = i + (i * percent) + aug){
       
        count ++
    }
    return count
}




let nb = nbYear(1500000, 0.25, 1000, 2000000)   // 3

console.log(Math.floor(nb));