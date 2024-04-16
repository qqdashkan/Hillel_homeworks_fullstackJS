class Weather {
        monday = 20;
        tuesday = 19;
        wednesday = 22;
        thursday = 20;
        friday = 19;
        saturday = 18;
        sunday = 21;

    getAverageDegree(values) {
        const result = values.reduce((acc, sum) => acc + sum, 0);
        return Math.round(result / values.length);
    };

    getMaxDegree(values) {
        return Math.max(...values);
    };

    getMinDegree(values) {
        return Math.min(...values);
    };

    print(weather) {
        //Array(20).fill('*').join('');
        //const arr = [[`${weather.key}`, `${this[key]}`]];
        const arr = Object.entries(weather);
        for (let item of arr) {
            console.log(Array(25).fill('*').join(''));
            console.log( `|   `, `${Array.from(item[0]).join('')}`, `   `, `${item[1]}`, `   |`);
        }
    }
}

const weather = new Weather();
const arrOfValues = Object.values(weather);

console.log(weather.getAverageDegree(arrOfValues));
console.log(weather.getMaxDegree(arrOfValues));
console.log(weather.getMinDegree(arrOfValues));
weather.print(weather);


//task 2

class Vehicle {
    start() {
        console.log('in move');
    };

    stop() {
        return 'stopped';
    };
}

class Car extends Vehicle {
    constructor() {
        super();
        }

    startEngine() {
        return 'starting the engine!';
    };

    lockDoors() {
        return 'locking the doors!';
    };
}

class Bike extends Vehicle {
    constructor() {
        super();
        }

    ringBell() {
        return 'beep beep!'; 
    };
    accelerate() {
        return 'accelerating!'; 
    }    
}

class Truck extends Car {
    constructor() {
        super();
        }

    startEngine() {
        return 'starting the engine!';
    };

    lockDoors() {
        return 'locking the doors!';
    };
}

class Sedan extends Car {
    constructor() {
        super();
        }

    park() {
        return 'parking the sedan!'; 
    };
    radio() {
        return 'music is playing'; 
    }    
}

