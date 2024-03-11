const a = Number(prompt("Napište první číslo:"))
const b = Number(prompt("Napište druhé číslo:"))
const c = Number(prompt("Napište třetí číslo:"))
let max3;

    if (a >= b && a >= c){
        max3 = a;
    } else if (b >= a && b >= c) {
        max3 = b;
    } else {
        max3 = c;
    }

console.log("Nejvyšší číslo je " + max3)