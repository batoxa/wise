// clear; node test.js
// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
function nextBigger(n) {
    const num = String(n).split('').map(function(name) {
        return Number(name);
    });
    console.log(n);
    num.reverse();
    for (i = 0; i < num.length; i++) {
        if (num[i + 1] === 0) {
            const num2 = num.splice(0, i + 2).sort();
            num.reverse();
            const y = num2[0];
            num2[0] = num2[1];
            num2[1] = y;
            num.push(...num2);
            console.log('-----1-----');
            return Number(num.join(''));
        };
        if (num[i] > num[i + 1]) {
            const x = num[i + 1];
            num[i + 1] = num[i];
            num[i] = x;
            const num2 = num.splice(0, i + 1).sort();
            num.reverse();
            num.push(...num2);
            console.log(num, ' ', num2);
            return Number(num.join(''));
        };
    };
    return -1;
};
console.log(nextBigger(82975));

// console.log('-----------');
// console.log(num);
// console.log(num2);
// console.log('-----------');

// 16697788058940
// 16697788059840


80662542980432
80662542984032

80662542982034

// Test.assertEquals(nextBigger(12), 21)
// Test.assertEquals(nextBigger(513), 531)
// Test.assertEquals(nextBigger(2017), 2071)
// Test.assertEquals(nextBigger(414), 441)
// Test.assertEquals(nextBigger(144), 414)