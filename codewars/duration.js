// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
    let dur = [];
    dur[14] = Math.floor(seconds / (60 * 60 * 24 * 365));
    dur[13] = dur[14] > 1 ? " years" : " year";
    dur[12] = ", ";
    dur[11] = Math.floor(seconds / (60 * 60 * 24));
    dur[11] = dur[11] > 364 ? dur[11] % 365 : dur[11];
    dur[10] = dur[11] > 1 ? " days" : " day";
    dur[9] = ", ";
    dur[8] = Math.floor(seconds / (60 * 60));
    dur[8] = dur[8] > 23 ? dur[8] % 24 : dur[8];
    dur[7] = dur[8] > 1 ? " hours" : " hour";
    dur[6] = ", ";
    dur[5] = Math.floor(seconds / 60);
    dur[5] = dur[5] > 59 ? dur[5] % 60 : dur[5];
    dur[4] = dur[5] > 1 ? " minutes" : " minute";
    dur[3] = ", ";
    dur[2] = seconds % 60;
    dur[1] = dur[2] > 1 ? " seconds" : " second";
    dur[0] = ", ";
    dur.reverse();
    for (i = dur.length - 3; i > -1; i -= 3) {
        dur[i] === 0 ? dur.splice(i, 3) : 0;
    };
    dur[dur.length - 4] = " and ";
    dur.splice(dur.length - 1, 1);
    if (seconds === 0) dur[0] = "now";
    return dur.join('');
};
console.log(formatDuration(0));