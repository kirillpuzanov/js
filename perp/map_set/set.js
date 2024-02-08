// TODO сеты - не упорядоченная коллекция уникальных!! элементов

const fights = ['rus', 'usa', 'london', 'london']

const set1 = new Set(fights)

console.log(set1)

// перебор сета
let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) {
    // alert(value);
} 

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value)
});

// в forEach у Set имеет 3 аргумента: значение value, 
// потом снова то же самое значение valueAgain, и только потом целевой объект.
