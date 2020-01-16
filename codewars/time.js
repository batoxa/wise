// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
    let dur = [];
    dur[4] = Math.floor(seconds / (60 * 60));
    dur[3] = ":";
    dur[2] = Math.floor(seconds / 60);
    dur[2] = dur[2] > 59 ? dur[2] % 60 : dur[2];
    dur[1] = ":";
    dur[0] = seconds % 60;
    dur[0] = dur[0] < 10 ? '0' + String(dur[0]) : dur[0];
    dur[2] = dur[2] < 10 ? '0' + String(dur[2]) : dur[2];
    dur[4] = dur[4] < 10 ? '0' + String(dur[4]) : dur[4];
    dur.reverse();
    return dur.join('');
}