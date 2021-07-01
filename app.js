"use strict";

function askForLimitNumber () {
    const limit = Number.parseInt(prompt("Ingrese un número entre 1 y 20"));
    if (limit >= 1 && limit <= 20){
        console.log("El número está dentro del rango");
        return limit;
    } else {
        console.log("El número está fuera del rango");
        return null;
    }
}

const limitNumber = askForLimitNumber();

for (let i = 1; i <= limitNumber; i++){
    console.log(`${i} x ${limitNumber} = ${i*limitNumber}`);
}

for (let factoryNumber = 1; factoryNumber <= limitNumber; factoryNumber++){
    let result = 1;
    for (let multiplier = 1; multiplier <= factoryNumber; multiplier++){
        result = result * multiplier;
    }
    console.log(`El factorial de ${factoryNumber} es; ${result}`);
}

console.log({limitNumber});