// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    let result = [];
    l.forEach(element => {
        if ((element === parseInt(element, 10)) && (element >= 0))
            result.push(element);
    });
    return console.log(result);;
};
filter_list([1, 2, 'a', 'b']);