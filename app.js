// Перетворення типів
const age = '18'
console.log(Number(age) + 5)
console.log(+age + 5)
console.log(age - 3)

const userName = 'Peter'
console.log(Number(userName) + 5)

console.log(typeof NaN)

console.log(String(4) + 7)
console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(100))
console.log(Boolean(-100))
console.log(Boolean('gjhgjh'))
console.log(Boolean(''))

const a = 2 + '10'
console.log(a - 10)
// =========== False із інших типів ==============

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(Number('sx')))
