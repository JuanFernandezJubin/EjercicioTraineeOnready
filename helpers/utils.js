const { Car , Queue } = require('../classes/classes')

////////////    Charging    ////////////
function chargingCars(queue) {
    //in a more optimal case this function would receive a queue and a car, 
    //and would push it up at the end. But for the resolution of the exercise, 
    //the load is done completely here.
    const car1 = new Car({ Marca: 'Peugeot', Modelo: '206', Puertas: 4, Precio: 200000 });
    const car2 = new Car({ Marca: 'Honda', Modelo: 'Titan', Cilindrada: '125cc', Precio: 60000 });
    const car3 = new Car({ Marca: 'Peugeot', Modelo: '208', Puertas: 5, Precio: 250000 });
    const car4 = new Car({ Marca: 'Yamaha', Modelo: 'YBR', Cilindrada: '160cc', Precio: 80500.50 });

    queue.enqueue(car1);
    queue.enqueue(car2);
    queue.enqueue(car3);
    queue.enqueue(car4);
};

module.exports = {
    Queue,
    Car,
    chargingCars,
};

