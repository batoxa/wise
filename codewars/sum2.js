// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    let numbers = String(n).split("");
    let x = numbers.reduce((sum, current) => sum + +current, 0);
    if (x > 9) {
        return digital_root(x);
    } else {
        return x;
    };
};
console.log(digital_root(1633));