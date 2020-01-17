// clear; node test.js
// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript
function bowlingScore(frames) {
    const num2 = frames.split('');
    const num = num2.filter(el => el !== ' ');
    let sum = 0;
    for (i = 0; i < num.length; i++) {

        if (num[i] === 'X') {
            // sum += 10;
            sum += i > num.length - 4 ? 0 : 10;

            if (num[i + 1]) {
                if (num[i + 1] === 'X') {
                    sum += 10;
                } else {
                    sum += +num[i + 1];
                };
            };
            if (num[i + 2]) {
                if (num[i + 2] === 'X') {
                    sum += 10;
                } else if (num[i + 2] === '/') {
                    sum += 10 - +num[i + 1];

                } else {
                    sum += +num[i + 2];
                };
            };

        } else if (num[i] === '/') {
            sum += 10 - +num[i - 1];
            if (num[i + 1]) {
                if (num[i + 1] === 'X') {
                    sum += 10;
                } else {
                    sum += +num[i + 1];
                };

            };

        } else {
            sum += +num[i];
        };
    };



    console.log(sum);
    console.log(num);
    return sum;
};

// bowlingScore('11X1');
// bowlingScore('01235/');

bowlingScore('34 2/ 90 61 08 X X 34 80 XX1');
// bowlingScore('1/ 11 X1 11 1/ 11 11 11 11 11');
// bowlingScore('X X 9/ 80 X X 90 8/ 7/ 44');

// https://bowlinggenius.com/