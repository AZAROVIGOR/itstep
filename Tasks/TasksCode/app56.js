//В этом простом задании вам дается число, и вы должны сделать его отрицательным. А может быть, число уже отрицательное?


const makeNegative = (num) =>{
    if(num > 0){
        return num * -1
    }
    else{
        return num
    }

   // return num > 0 ? num * -1 : num   //return num > 0 ? -num : num;
}

let number = makeNegative(0);
console.log(number)


// function makeNegative(num) {
//     return -Math.abs(num);
// }