const { cleanPrice } = require('../helpers/cleaners');

////////////    Classes    ////////////

// My queue to store our cars
class Queue {
    constructor() {
        this.store = [];

        this.enqueue = function (element) {
            this.store.push(element);
        };

        this.mostExpensive = function(){
            let aux = this.store[0].Precio
            let car = '';

            for(let i = 1; i < this.size(); i++){
                
                if(this.store[i].Precio > aux){
                    aux = this.store[i].Precio; 
                    car = this.store[i];
                };

            };

            return `Vehículo mas caro: ${car.Marca} ${car.Modelo}`;
        };  

        this.mostCheap = function () {
            let aux = this.store[0].Precio
            let car = '';

            for(let i = 1; i < this.size(); i++){
                
                if(this.store[i].Precio < aux){
                    aux = this.store[i].Precio; 
                    car = this.store[i];
                };

            };

            return `Vehículo mas barato: ${car.Marca} ${car.Modelo}`;
        };

        this.modelWithY = function () {
            const regx = /y/gi;
            let result = '';
            let model = ''

            for (let i = 0; i < this.size(); i++) {
                model = this.store[i].Modelo;
                
                if(regx.test(model)){
                  result = this.store[i];
                }
                
            };

            return `Vehículo que contiene en el modelo la letra 'Y': ${result.Marca} ${result.Modelo} ${cleanPrice(result.Precio.toFixed(2))}`;
        };

        this.orderBy = function(){
            let auxArray = this.store.sort((carA,carB) => {
                return carB.Precio - carA.Precio;
            });
            let response = 'Vehículos ordenados por precio de mayor a menor:\n' 
            for (let i = 0; i < auxArray.length; i++) {
                response += `${auxArray[i].Marca} ${auxArray[i].Modelo} \n`;      
            }
            return response;
        }

        this.size = function () {
            return this.store.length;
        };

    };
};

//Car class
class Car {
    constructor({ Marca, Modelo, Puertas = null, Cilindrada = null, Precio }) {
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Puertas = Puertas;
        this.Cilindrada = Cilindrada;
        this.Precio = Precio;
    };
};

module.exports = {
    Car,
    Queue
};