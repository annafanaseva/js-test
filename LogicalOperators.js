console.log('LogicalOperators');

// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let c = 3;

if (c > 0 && c < 5) {
    console.log("Верно!");
} else {
    console.log('Неверно!');
}

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

let d = 1;

if (d === 0 || d === 2) {
    d += 7;
    console.log(d);
} else {
    d /= 10;
    console.log(d);
}

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

let sum;
let residual;
d = 1;

if (d <= 1 && c >= 3) {
    sum = d + c;
    console.log(sum);
} else {
    residual = c - d;
    console.log(residual);
}

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

a = 3;
b = 8;

if ((a > 2 && a < 11) || (b >= 6 && a < 14)) {
    console.log("Верно!");
} else {
    console.log('Неверно!');
}