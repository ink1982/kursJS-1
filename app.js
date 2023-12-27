// filter
const operations = [100, -20, 7, 50];
// const positiveOperations = [];
// for (const operation of operations) {
// 	if (operation > 0) {
// 		positiveOperations.push(operation);
// 	}
// }
// console.log(positiveOperations);

const positiveOperations = operations.filter(operation => {
	return operation > 0;
});
console.log(positiveOperations);

const positiveGRNOperations = operations
	.filter(operation => {
		return operation > 0;
	})
	.map(operation => operation * 41);
console.log(positiveGRNOperations);
