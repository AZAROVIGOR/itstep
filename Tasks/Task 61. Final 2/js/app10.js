/*
10. Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
б) Добавить конструктор в оба класса. 
в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, 
   иначе 80$. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.
*/


class Student {
    firstName;
    lastName;
    group;
    averageMark;

    constructor(firstName, lastName, group, averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }

    getScholarship(averageMark) {
        if (this.averageMark == 5) {
            return "Сумма стипендии 100$"
        }
        else {
            "Сумма стипендии 80$"
        }
    }
}

class Aspirant extends Student {

    scientificWork;

    constructor(firstName, lastName, group, averageMark, scientificWork) {
        super(firstName, lastName, group, averageMark);
        this.scientificWork = scientificWork;

    }
    getScholarship(averageMark) {
        if (this.averageMark == 5) {
            return ("Сумма стипендии 200$")
        }
        return ("Сумма стипендии 180$")
    }

}

let arrayStudent = [];

let student = new Student("Павел", "Петров", "35A", 5);
arrayStudent.push(student);

let aspirant = new Aspirant("Василий", "Иванов", "-", 4, 3, "Бакалавр");
arrayStudent.push(aspirant);

console.log(arrayStudent);

arrayStudent.forEach(item => {
    console.log(item.getScholarship());
})
