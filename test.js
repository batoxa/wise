// clear; node test.js
// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript
function bowlingScore(frames) {
    const num2 = frames.split('');
    const num = num2.filter(el => el !== ' ');
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        if (num[i] === 'X') {
            sum += 10;
            sum += num[i + 1] === 'X' ? 10 : +num[i + 1];
            sum += num[i + 2] === 'X' ? 10 : +num[i + 2];
        } else if (num[i] === '/') {
            sum += 10 - +num[i - 1];
            if (num[i + 1]) {
                if (num[i + 1] === 'X') {
                    sum += 10;
                } else {
                    sum += +num[i + 1];
                };
                console.log('!!!');
            };
        } else {
            sum += +num[i];
        };
    };



    console.log(sum);
    return console.log(num);
};

bowlingScore('0123X5/');
// bowlingScore('1/ 11 X1 11 1/ 11 11 11 11 11');
// bowlingScore('X X 9/ 80 X X 90 8/ 7/ 44');

// https://bowlinggenius.com/