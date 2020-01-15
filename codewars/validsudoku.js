// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript,

function validSolution(board) {
    let valid = true;
    let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < 9; i++) {
        valid = valid && (board[i].reduce((sum, current) => sum + +current, 0) === 45) ? true : false;
        for (j = 0; j < 9; j++) {
            sum[i] = sum[i] + board[i][j];
        };
        valid = valid && (sum[i] === 45) ? true : false;
    };
    sum = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < 3; i += 1) {
        sum[3 * i + 0] = sum[3 * i + 0] + board[3 * i + 0][0] + board[3 * i + 0][1] + board[3 * i + 0][2];
        sum[3 * i + 0] = sum[3 * i + 0] + board[3 * i + 1][0] + board[3 * i + 1][1] + board[3 * i + 1][2];
        sum[3 * i + 0] = sum[3 * i + 0] + board[3 * i + 2][0] + board[3 * i + 2][1] + board[3 * i + 2][2];
        valid = valid && (sum[3 * i + 0] === 45) ? true : false;
        sum[3 * i + 1] = sum[3 * i + 1] + board[3 * i + 0][3] + board[3 * i + 0][4] + board[3 * i + 0][5];
        sum[3 * i + 1] = sum[3 * i + 1] + board[3 * i + 1][3] + board[3 * i + 1][4] + board[3 * i + 1][5];
        sum[3 * i + 1] = sum[3 * i + 1] + board[3 * i + 2][3] + board[3 * i + 2][4] + board[3 * i + 2][5];
        valid = valid && (sum[3 * i + 1] === 45) ? true : false;
        sum[3 * i + 2] = sum[3 * i + 2] + board[3 * i + 0][6] + board[3 * i + 0][7] + board[3 * i + 0][8];
        sum[3 * i + 2] = sum[3 * i + 2] + board[3 * i + 1][6] + board[3 * i + 1][7] + board[3 * i + 1][8];
        sum[3 * i + 2] = sum[3 * i + 2] + board[3 * i + 2][6] + board[3 * i + 2][7] + board[3 * i + 2][8];
        valid = valid && (sum[3 * i + 2] === 45) ? true : false;
    }
    return valid;
};

// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]);
// true

// validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]);
// false