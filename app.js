// Шаблонні рядки
const projectName = 'Сайт магазину'
const price = 2000
const author = 'Кривенко Максим'

const template = author + ' замовив ' + projectName + ' по ціні ' + price + '$'
console.log(template)

const template2 = `${author} замовив ${projectName} по ціні ${price}$`
console.log(template2)

const template3 = 'Проект \n' + 'Ціна: ' + price + '$'
console.log(template3)

const template4 = `Проект
Ціна: ${price}$`
console.log(template4)
