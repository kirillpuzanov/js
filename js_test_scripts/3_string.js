const name = 'Владилен'
console.log(name.length)  //8  последний индекс + 1
console.log(name.toUpperCase())  //  приводит  к верхнему регистру
console.log(name.toLowerCase())   //  приводит  к нижнему регистру
console.log(name.charAt(2)) // а  возвращает букву  по такому индексу
console.log(name.indexOf('!'))  //false есть ли в строке такой символ
console.log(name.toLowerCase().startsWith('влад'))  // true начинается ли с переданной строки
console.log(name.startsWith('Влад'))  // true
console.log(name.endsWith('ен!'))  // false заканчивается ли такими символами
console.log(name.repeat(3))  //возвращает строку повторенную  3 раза без пробелов
const string = '     password      '  
console.log(string.trim())  // обрезает все пробелы
console.log(string.trimLeft())  // обрезает все пробелы слева
console.log(string.trimRight())  // обрезает все пробелы справа

function logPerson(s, name, age) {
    if (age < 0) {
      age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
  }
  
  const personName = 'Владилен'
  const personName2 = 'Максим'
  const personAge = 26
  const personAge2 = -10
  
  const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
  const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
  
  console.log(output)
  console.log(output2)