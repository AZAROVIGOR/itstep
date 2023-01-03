/*Завершите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.*/


function getGrade(s1, s2, s3) {
    let result = (s1 + s2 + s3) / 3;

    if (result >= 90 && result <= 100) {
        return "A"
    }
    else if (result >= 80 && result < 90) {
        return "B";
    }
    else if (result >= 70 && result < 80) {
        return "C";
    }
    else if (result >= 60 && result < 70) {
        return "D";
    }
    else return "F"
}

let sum = getGrade(20, 30, 48);
console.log(sum);


/*
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}
*/

