// https://www.codewars.com/kata/541c8630095125aba6000c00

// function digital_root(n) {
//     let x = String(n).split("").reduce((sum, current) => sum + +current, 0);
//     return x > 9 ? digital_root(x) : x;
// };
// console.log(digital_root(1633));



function solution(str) {
    let x = str.split("");
    x.length % 2 ? x.push('_') : 0;
    console.log(x);
};



solution('abcw') // should return ['ab', 'c_']
    // solution('abcdef') // should return ['ab', 'cd', 'ef']