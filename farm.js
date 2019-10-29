const world = "CXC[CC]CC[CCXCF]CC[CFC]FCC";
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
    if ((world[i] === "[") && (cell === false)) {
        farm[i].cell = true;
        cell = true;
    } else if ((world[i - 1] === "]") && (cell === true)) {
        farm[i].cell = false;
        cell = false;
    }
}
console.log(farm);