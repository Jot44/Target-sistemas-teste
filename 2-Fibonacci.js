function isFibonacci(number) {
    let a = 0;
    let b = 1;
    
    while (b <= number) {
        if (b === number) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return false;
}

function checkFibonacci(number) {
    if (isFibonacci(number)) {
        console.log(number + " pertence à sequência de Fibonacci.");
    } else {
        console.log(number + " não pertence à sequência de Fibonacci.");
    }
}

let numero = 13;
checkFibonacci(numero);