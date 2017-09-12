module.exports = function multiply(first, second) {
    let result = [];
    let mas1 = first.split('');
    let mas2 = second.split('');
    let step1 = 1;
    let step2 = 1;
    let n = 1;
    let i = 0;
    let number = 0;
    let number1 = 0;
    let number2 = 0;
    let check = 0;
    let equal = 0;
    if (mas1.length > mas2.length) {
        length = mas1.length;
        mas1 = first.split('');
        mas2 = second.split('');
    } else {
        length = mas2.length;
        mas1 = second.split('');
        mas2 = first.split('');
    }
    equal = mas1.length - mas2.length;
    for (i = 0; i < equal; i++){
        mas2.unshift(0);
    }
    for (i = mas1.length - 1; i > 0; i--) {
        if (mas1[i] == 0){
            result.unshift(mas1[i]);
            mas1.pop();
        } else {
            i = 0;
        }
    }
    for (i = mas2.length - 1; i > 0; i--) {
        if (mas2[i] == 0) {
            result.unshift(mas2[i]);
            mas2.pop();
        } else {
            i = 0;
        }
    }
    while (n !== 0){
        number1 = number2;
        for (i = 0; i < n; i++) {
            number1 = mas1[mas1.length - step1]*mas2[mas2.length - step2] + number1;
            step1--;
            step2++;
        }
        if (number1 > 9) {
            number2 = (number1 - (number1 % 10)) / 10;
            number = number1 % 10;
        } else {
            number = number1;
            number2 = 0;
        }
        if (n === mas1.length) {
            check = 1;
        }
    if (check) {
        n--;
        step1 = mas1.length;
        step2 = mas2.length - n + 1;
    } else {
        n++;
        step1 = n;
        step2 = 1;
    }
    result.unshift(number);
    if (n === 0 && number2 !== 0) {
        result.unshift(number2);
    }
}
    for (i = 0; i < result.length; i++) {
        if (result[0] === 0) {
            result.shift();
        } else {
            i = result.length;
        }
    }
    let r = result.join('');
    return r;
}
