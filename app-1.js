// Дано додатнє ціле число n. Знайдіть всі числа в діапазоні [1, n] включно, які діляться на 3, 5 або 7. Поверніть масив цих чисел.

/*
Приклад:
    Вхід: n = 7
    Вихід: [3, 5, 6, 7]
    Пояснення: Числа в діапазоні [1, 7], які діляться на 3, 5 або 7, це 3, 5, 6, 7. Сума цих чисел дорівнює 21.
*/

function getListOf(length, ...targets) {
    // const result = [];
    // for (let i = 1; i <= length; i++) {
    //     if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
    //         result.push(i);
    //     }
    // }
    // return result;
    
    // return Array.from({ length }, (_, i) => i + 1).filter((i) => i % 3 === 0 || i % 5 === 0 || i % 7 === 0);
    
    if (!targets.length) {
        throw new Error('No targets provided');
    }
    
    return Array.from({ length }, (_, i) => i + 1).filter((i) => targets.some((target) => i % target === 0));
}

console.log(getListOf(50, 3, 8, 7));