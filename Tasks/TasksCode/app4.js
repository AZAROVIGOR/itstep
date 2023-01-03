/*Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.*/


class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => a - b);
        return args[0]
    }
  
}


class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce(function (prev, curr, index, array) {
            return prev < curr ? prev : curr;
        });
    }
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}
