let sum = 0;

for (let i = 0; i <= 1000; i++) {
    sum += i;
}

const rest = sum % 1234;
const divisionResult = (sum - rest) / 1234;

console.log(divisionResult > rest);
