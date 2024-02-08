'use strict'

const wetherMap = new Map([
    ['London', '10'],
    ['Moscow', '15'],
    ['Test', '111']
])

console.log(wetherMap)


// TODO создание map из объекта
const wetherObj = {
    London: 10,
    Moscow: 12,
    Test: 11 
}

const mapFromObj = new Map(Object.entries(wetherObj))
console.log(mapFromObj)



// TODO итерация по map 

const wetherMap123 = new Map([
    ['London', 10],
    ['Moscow', 15],
    ['Test', 111]
])

for (const entry of wetherMap123) {
    // можно сразу переписать на деструктуризацию entry -> [key, value]
    console.log(entry)
}

for (const [key, value] of wetherMap123) {
    console.log('key', key)
    console.log('value', value)
}

// конвертация map обратно к arr
console.log([...wetherMap123])  

console.log([...wetherMap123.keys()])   // получить массив ключей мапы
console.log([...wetherMap123.values()])   // получить массив значений мапы



// поменять местами ключ с значением
const wetherMapTask = new Map([
    ['London', '10'],
    ['Moscow', '15'],
    ['Test', '111']
])

console.log( 'res', 
  new Map([ ...wetherMapTask].map((el) => el.reverse())) 
)