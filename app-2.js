// Дано ціле число x. Поверніть true, якщо число є паліндромом, і false в іншому випадку.

/*
Приклад 1:
    Вхід: x = 121
    Вихід: true
    Пояснення: 121 читається як 121 зліва направо і справа наліво.
Приклад 2:
    Вхід: x = -121
    Вихід: false
    Пояснення: Зліва направо читається як -121. Справа наліво стає 121-, тому це не паліндром.
* */

function isPalindrome(x = -1) {
    if (x < 0) {
        return false;
    }
    
    return x === Number(String(x).split('').reverse().join(''));
}

console.log(isPalindrome([]));
console.log(isPalindrome('daw'));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(122));
console.log(isPalindrome(345));
console.log(isPalindrome(343));