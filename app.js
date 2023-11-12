// Цикл в циклі
// for (let i = 1; i < 5; i++) {
// 	console.log(`Цикл 1 - ${i}`);
// 	for (let k = 1; k < 5; k++) {
// 		console.log(`Цикл 2 - ${k}`);
// 	}
// }

const tasks = [
	[1, 'Задача 1'],
	[2, 'Задача 2'],
];

for (let i = 0; i < tasks.length; i++) {
	for (let k = 0; k < tasks[i].length; k++) {
		console.log(tasks[i][k]);
	}
}
