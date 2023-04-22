/*2. Дан полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 61. Practice\task.txt"). 
Вывести количество папок, которые входят в заданный путь.
*/

function countFolders(str) {

    return str.split("\\").length - 2
}

console.log(countFolders("D:\\ITStep\\itstep2\\Tasks\\Task 61. Practice\\task.txt"));



