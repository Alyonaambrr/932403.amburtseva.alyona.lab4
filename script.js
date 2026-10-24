const userName = prompt("Введите ваше имя:");
const displayName = userName ? userName : "гость";
alert("Привет, " + displayName + "! Добро пожаловать на страницу предпринимателя.");

const revenues = [2500, 12000, 8000, 3000, 15000, 4500, 11000];
console.log("Массив выручки за неделю (₽):", revenues);

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterHighRevenue(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10000) {
            result.push(arr[i]);
        }
    }
    return result;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const totalRevenue = calculateSum(revenues);
const highRevenueDays = filterHighRevenue(revenues);
const highRevenueCount = highRevenueDays.length;
const maxRevenue = findMax(revenues);
const averageRevenue = Math.round(totalRevenue / revenues.length);

let lowRevenueCount = 0;
for (let i = 0; i < revenues.length; i++) {
    if (revenues[i] <= 3000) {
        lowRevenueCount++;
    }
}

const lowRevenueShare = Math.round((lowRevenueCount / revenues.length) * 100);

alert("Общая выручка – " + totalRevenue + " ₽, в " + highRevenueCount + " днях показатели были высокими.");

console.log("Дней с низкой выручкой (≤ 3 000 ₽): " + lowRevenueCount);
console.log("Доля дней с низкой выручкой: " + lowRevenueShare + "%");

if (averageRevenue < 5000) {
    console.log("Стоит проанализировать причины низкой выручки.");
} else {
    console.log("Средняя дневная выручка: " + averageRevenue + " ₽. Хороший результат!");
}