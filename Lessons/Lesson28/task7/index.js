export const sum = num => num === 1 ? 1 : num + sum(num - 1);
