// Знайомство з функціями
function logName(name, surname) {
	console.log(`Моє ім\'я ${name} ${surname}`);
}

logName('John', 'Dou');

function countDepositSum(depositInUSD, month, rate) {
	return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);
