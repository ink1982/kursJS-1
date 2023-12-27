// Функції вищого порядку, Callback, повернення функції

// function add(a, b) {
// 	return a + b;
// }

// function subtract(a, b) {
// 	return a - b;
// }

// function power(a, b) {
// 	return a ** b;
// }

// Функція вищого порядку
// function calculate(a, b, fn) {
// 	console.log(fn.name);
// 	const res = fn(a, b);
// 	return res;
// }

// let res = calculate(3, 5, add);
// console.log(res);

// res = calculate(3, 5, subtract);
// console.log(res);

// res = calculate(3, 5, power);
// forEach
const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) {
// 	console.log(`Раунд ${i + 1}: ${el}`);
// }

score.forEach((el, i) => {
	console.log(`Раунд ${i + 1}: ${el}`);
});
