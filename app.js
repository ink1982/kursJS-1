// map
const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInGRN = [];
for (const transaction of transactionInUSD) {
	transactionInGRN.push(transaction * 41.0);
}

// console.log(transactionInUSD);
// console.log(transactionInGRN);

const transactionInGRN2 = transactionInUSD.map((transaction, i) => {
	console.log(i);
	return transaction * 41;
});

console.log(transactionInUSD);
console.log(transactionInGRN2);
