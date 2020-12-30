const { cleanPrice, cleanInfo } = require('./cleaners');

////////////    Printers    ////////////
function showByConsole(queue,expensive,cheap,modelWithY){
    printingCars(queue);
    printerEquals();
    console.log(expensive);
    console.log(cheap);
    console.log(modelWithY);
    printerEquals();
    console.log(queue.orderBy());


}

function printingCars(queue) {
    for (let i = 0; i < queue.size(); i++) {
        let cleanCar = cleanInfo(queue.store[i]);
        printInLine(cleanCar);
    };
};

//Printer Line Helper
function printerEquals() {
    console.log('===========================');
};

//Print in the same line
function printInLine(car){
    const keys = Object.keys(car);
    const values = Object.values(car);
    let strToShow = '';

    for(let i = 0; i < keys.length; i++){
        if(keys[i] === 'Precio'){
            strToShow += (`${keys[i]} : ${cleanPrice(values[i])} `);
        }else {
            strToShow += (`${keys[i]} : ${values[i]} // `);
        };
    };
    console.log(strToShow);
};

module.exports = {
    showByConsole,
    printingCars,
    printerEquals,
    printInLine
};