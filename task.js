/*
№16.
Ваша погодинна ставка 80$ і ви готові працювати
не більше 5 год. на день в тиждень (крім вихідних).
До вас звертається замовник і пропонує замовлення на 40 год. роботи.
Зараз понеділок.
Ви повинні поїхати через 11 днів.
Виведіть у консоль:
	- Boolean змінну, чи встигнете ви взятися за роботу;
	- Скільки ви за неї попросите.
*/

const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

console.log('Чи зможу я працювати? ' + (availableHours > projectHours));
console.log('Вартість робіт: ' + projectHours * payRateUSD + '$');

/*
Василь поклав 12 000$ на вклад 7% річних з капіталізацією 1 раз в місяць.
Вивести в консоль, чи зможе він придбати будинок за 13 500$ через 2 роки
після того як зніме вій влад. І залишок після покупки.

Підсумок = Сума * (1 + Ставка вв місяць не в %)^ строк в місяцях
*/

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
	console.log(
		`Ми наскладали: ${res}. Можемо купити. Залишок ${res - houseCost}`
	);
} else {
	console.log('Ми наскладали: ${res}. Купити не зможемо (((');
}

/*
	Користувач бажає придбати гру у магазині.
	Він зможе це зробити, якщо:
	- його баланс більше 1000 (balance), або число бонусів (bonusBalance) більше 100;
	- його не заблоковано (isBanned);
	- гра не куплена (isExist);
	- гар продається (isSelling);
	Напишіть умову для придбання і виводу у консоль.
*/

const balance = 100;
const bonusBalance = 900;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
	(balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;

console.log(`Можу купити гру: ${canBuy ? 'Так' : 'Ні'}`);

// переписати звичайну функцію у стрілкову
const toPower = (num, power) => num ** power;
console.log(toPower(2, 3));

/*
	Користувач:
	- Вік;
	- Наявність роботи;
	- Гроші;
	Потрібно перевірити, чи зможе він купити новий MacBook за 2000$?
	Він може брати не тільки свої гроші, а й взяти кредит.
	Йому дадуть 500$, за умови, шо йому більше 24-х років і він має роботу,
	100$ - якщо йому просто більше 24-х років і 0$ в інших випадках.

	Напишіть функцію, яка приймає дані користувача і товару і повертає true або false
*/

function computeCredit(age, hasJob = false) {
	switch (true) {
		case age > 24 && hasJob:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	}
}

function canBuy1(productPrice, age, money, hasJob = false) {
	const creditMoney = computeCredit(age, hasJob);
	return productPrice <= money + creditMoney;
}
console.log(canBuy1(2000, 25, 1500, true));

/*
Даний список завдань:
	const tasks = ['Завдання 1']
	Створити функції:
	- добавити завдання вкінець;
	- видалення завдання по назві;
	- перенесення завдання на початок списку по назві.
Завжди мутуємо вихідний масив.
*/

const tasks = ['Завдання 1'];

function Add(task) {
	tasks.push(task);
}

function Remove(task) {
	const index = tasks.indexOf(task);
	if (index === -1) {
		return;
	}
	tasks.splice(index, 1);
}

function Prioritize(task) {
	const index = tasks.indexOf(task);
	if (index === -1) {
		return;
	}
	const oldTask = tasks[index];
	tasks.splice(index, 1);
	tasks.unshift(oldTask);
}

Add('Завдання 2');
Add('Завдання 3');
console.log(tasks);

Remove('Завдання 2');
console.log(tasks);

Prioritize('Завдання 4');
console.log(tasks);
