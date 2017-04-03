function fib(n) {
    var a = [];
    if (n === 1 || n === 2) {
        return 1
    }
    else {
        for (var i = 3; i <= n; i++) {
            a[1] = a[2] = 1;
            a[i] = a[i - 1] + a[i - 2];
        }
        return a[n]
    }
}
/*function fib(n) {
    if (n >= 3) {
        return fib(n - 1) + fib(n - 2)
    }
    else return 1;
}
*/
var n=Number(prompt('Введіть порядковий номер значення послідовності Фібоначчі'))
document.write('Елемент під номером '+ n+' дорівнює ='+fib(n))