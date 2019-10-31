/*  ... ЗАДАЧА ...
Ферма.На ферме есть куры.Кур жрут лисы.
Фермер решил потравить лис.Отрава для кур безвредна, для лис смертельна.
Куры бывают в клетках.Если курица в клетке, то лиса не может съесть курицу,
но если лиса в клетке с курицей, то тогда может.
Надо написать пошаговый симулятор жизни на ферме.
Лисы - F, куры - C, отрава - Х, клетка - [].
Ферма выглядит, например, так: CXC[CC]CC[CCXCF]CC[CFC]FCC.
Голодная лиса съедает за один ход максимальное количество куриц,
пока не дойдет до отравы.Одна отрава может убить любое количество лис.
Лиса может перепрыгивать клетки, но не залезает внутрь и не вылезает наружу.
Длинна строки не меняется, на место сожраной куры или отравившейся лисы ставим "."
*/

const world = "CFXC[CCFCXC]CC[CCXCF]CC[CFC]FCCXCXFC[CCXCFCC]";
let result = "";
const farm = [];
let cell = false;

for (let i = 0; i < world.length; i++) {
    const farmItem = {
        type: world[i]
    };
    farm.push(farmItem);
    if (cell === false) {
        farm[i].cell = false;
    } else {
        farm[i].cell = true;
    }
    if (world[i] === "[") {
        farm[i].cell = true;
        cell = true;
    } else if (world[i - 1] === "]") {
        farm[i].cell = false;
        cell = false;
    }
}

function hunt(foxIndex, cellAffiliation) {
    if (cellAffiliation === true) {
        for (let x = (foxIndex - 1);
            (farm[x].type != "[") && (farm[foxIndex].type != "Y"); x--) {
            switch (farm[x].type) {
                case "C":
                    farm[x].type = ".";
                    break;
                case "X":
                    farm[foxIndex].type = "Y";
            }
        }
        for (let x = (foxIndex + 1);
            (farm[x].type != "]") && (farm[foxIndex].type != "."); x++) {
            switch (farm[x].type) {
                case "C":
                    farm[x].type = ".";
                    break;
                case "X":
                    farm[foxIndex].type = ".";
            }
        }
        if (farm[foxIndex].type === "Y") { farm[foxIndex].type = "."; }
    } else {
        for (let x = (foxIndex - 1);
            (x > -1) && (farm[foxIndex].type != "Y"); x--) {
            if (farm[x].cell === false) {
                switch (farm[x].type) {
                    case "C":
                        farm[x].type = ".";
                        break;
                    case "X":
                        farm[foxIndex].type = "Y";
                }
            }
        }
        for (let x = (foxIndex + 1);
            (x < farm.length) && (farm[foxIndex].type != "."); x++) {
            if (farm[x].cell === false) {
                switch (farm[x].type) {
                    case "C":
                        farm[x].type = ".";
                        break;
                    case "X":
                        farm[foxIndex].type = ".";
                }
            }
        }
        if (farm[foxIndex].type === "Y") { farm[foxIndex].type = "."; }
    }
}

for (let i = 0; i < farm.length; i++) {
    if (farm[i].type === "F") {
        hunt(i, farm[i].cell);
    }
}

for (let i = 0; i < farm.length; i++) {
    result += farm[i].type;
}
console.log(world);
console.log(result);
console.log();