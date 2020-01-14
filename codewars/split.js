// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

function solution(str) {
    let x = str.split("");
    x.length % 2 ? x.push('_') : 0;
    let y = [];
    for (i = 0; i < x.length; i += 2) {
        y.push(x[i] + x[i + 1]);
    };
};



solution('abcde') // should return ['ab', 'cd', 'e_']
solution('abcdef') // should return ['ab', 'cd', 'ef']