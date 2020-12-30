////////////    Cleaners    ////////////
function cleanInfo (car){
    let currentCar = {};
    //Clean the nulls 
    if(car.Puertas === null){
        currentCar.Marca = car.Marca;
        currentCar.Modelo = car.Modelo;
        currentCar.Cilindrada = car.Cilindrada;
        currentCar.Precio = car.Precio.toFixed(2);
    }else if(car.Cilindrada === null){
        currentCar.Marca = car.Marca;
        currentCar.Modelo = car.Modelo;
        currentCar.Puertas = car.Puertas;
        currentCar.Precio = car.Precio.toFixed(2);
    }
    return currentCar;
}

function cleanPrice (price){
    let splitPrice = price.toString().split('.');
    let splitLeft = splitPrice[0];
    var regx = /(\d+)(\d{3})/;
    
    while (regx.test(splitLeft)) {
        //Separete with a '.' the groups
        splitLeft = splitLeft.replace(regx, '$1' + '.' + '$2');
    }

    return('$'+ splitLeft + ',' + splitPrice[1])
}

module.exports = {
    cleanPrice,
    cleanInfo
};