const n = 180;
let sum = 0;

for (let i = 1; i <= n; i++) {
    console.log(sum + ' ' + i + ' = ' + (sum += i));
}

console.log(sum);