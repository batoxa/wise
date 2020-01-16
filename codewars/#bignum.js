// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n) {
    const num = String(n).split('').map(function(name) {
        return Number(name);
    });
    console.log(num);
    for (i = num.length - 1; i > -1; i--) {
        if (num[i] > num[i - 1]) {
            const num2 = num.splice(i, num.length - i).sort();
            const x = num[i - 1];
            for (j = 0; j < num2.length; j++) {
                if (num2[j] > x) {
                    num[num.length - 1] = num2[j];
                    num2[j] = x;
                    break;
                };
            };
            num.push(...num2);
            console.log(num);

            return Number(num.join(''));
        };
    };
    return -1;
};
nextBigger(12);