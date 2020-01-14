// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

function sumStrings(a, b) {
    const first = a.split("").map(function(name) {
        return Number(name);
    });
    const second = b.split("").map(function(name) {
        return Number(name);
    });
    let sum = [];
    console.log(first);
    console.log(second);

    for (i = 1; i < (first.length > second.length ? first.length : second.length); i++) {
        sum[i - 1] = sum[i - 1] + first[first.length - i] + second[second.length - i];
        sum[i - 1] > 9 ? sum[i + 1]++ : 0;
        sum[i - 1] > 9 ? sum[i - 1] = sum[i - 1] % 10 : 0;
    };

    console.log(first[first.length - 0] + second[second.length - 0]);
    return sum;




}

console.log(sumStrings('925', '456'));
// Test.assertEquals(sumStrings('123','456'),'579')

// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
//  - Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'

// console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));
//  - Expected: '131151201344081895336534324866', instead got: '1.3115120134408189e+29'

// clear; node test.js