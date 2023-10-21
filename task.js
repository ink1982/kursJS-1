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
