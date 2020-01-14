// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

function sumStrings(a, b) {
    const first = a.split("").map(function(name) {
        return Number(name);
    });
    const second = b.split("").map(function(name) {
        return Number(name);
    });
    let sum = [];
    let dec = 0;
    for (i = 0; i <= (first.length > second.length ? first.length : second.length); i++) {
        sum[i] = dec + (first[first.length - i - 1] > 0 ? first[first.length - i - 1] : 0) + (second[second.length - i - 1] > 0 ? second[second.length - i - 1] : 0);
        sum[i] > 9 ? dec = 1 : dec = 0;
        sum[i] > 9 ? sum[i] = sum[i] % 10 : 0;
    };
    sum.reverse();
    while (sum[0] === 0) {
        sum.splice(0, 1);
    };
    return sum.join('');
}

// sumStrings('00103', '08567') - Expected: '8670', instead got: '08670'
// Test.assertEquals(sumStrings('123','456'),'579')
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
//  - Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'
// console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));
//  - Expected: '131151201344081895336534324866', instead got: '1.3115120134408189e+29'