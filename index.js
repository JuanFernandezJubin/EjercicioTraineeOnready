const { chargingCars } = require('./helpers/utils');
const { showByConsole } = require('./helpers/printers');
const { Queue } = require('./classes/classes');

////////////    Main    ////////////
const main = () => {
    const carList = new Queue();
    chargingCars(carList);
    const expensive = carList.mostExpensive();
    const cheap = carList.mostCheap();
    const modelWithY = carList.modelWithY();

    showByConsole(carList, expensive, cheap, modelWithY);

};


main();