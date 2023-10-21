// Булева логіка

const isAdmin = true;
const canWrite = true;

console.log(`System file --- ${isAdmin && canWrite}`);
console.log(`Regular file --- ${isAdmin || canWrite}`);
console.log(`Invert admin permissions --- ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(
	`System edited file --- ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`
);

let a = 7;
if (a === -8 || a === 22) {
}
