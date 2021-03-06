// https://www.codewars.com/kata/5916c21917db4a0ad800002d

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

function eating(x, foxIndex) {
    switch (farm[x].type) {
        case "C":
            farm[x].type = ".";
            break;
        case "X":
            farm[foxIndex].type = ".";
    }
    return;
}


function hunt(foxIndex, cellAffiliation) {
    if (cellAffiliation === true) {
        for (let x = (foxIndex - 1);
            (farm[x].type != "[") && (farm[x + 1].type != "X"); x--) {
            eating(x, foxIndex);
        }
        for (let x = (foxIndex + 1);
            (farm[x].type != "]") && (farm[x - 1].type != "X"); x++) {
            eating(x, foxIndex);
        }
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
                eating(x, foxIndex);
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
console.log();
console.log(world);
console.log(result);