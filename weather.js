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
        return 'in move';
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
    start() {
        return 'get into gear';
    };

    stop() { 
        return 'throw out of gear';
    };

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
    start() {
        return 'get into gear';
    };
    stop() { 
        return 'throw out of gear';
    };
        
    roof() {
        return 'roof is open!'; 
    };
    radio() {
        return 'music is playing'; 
    }    
}

class SportBike extends Bike {
    constructor() {
        super();
    }
    start() {
        return 'engine is on';
    };
    
    stop() { 
        return 'engine is off';
    };           
    park() {
            return 'parking the sedan!'; 
    };
    someMethod() {
        return 'doing something'; 
    }    
}

class Scooter extends Bike {
    constructor() {
        super();
    }
    start() {
        return 'engine is on';
    };

    stop() { 
        return 'engine is off';
    };        

    DVR() {
        return 'keeps a record!'; 
    };
    deleteDVR() {
        return 'delete video'; 
    }    
}

//task 3

let orders = [];

let order1 = {
    table: 1,
    dishes: [
  { name: "Чай", price: 30 },
  { name: "Еклер", price: 50 }
    ],
    status: "в обробці"
};

let order2 = {
    table: 2,
    dishes: [
  { name: "Матча", price: 45 },
  { name: "Тірамісу", price: 65 }
    ],
    status: "готується"
};

let order3 = {
    table: 3,
    dishes: [
  { name: "Бургер", price: 40 },
  { name: "Морозиво", price: 25 },
  { name: "Американо", price: 15 }
    ],
    status: "новий"
};

class System {
    changeOrderStatus(order, tableNumber, status) {
        orders.push(order);
        let myOrder = orders.find(order => order.table === tableNumber);
        return myOrder.status = status;
    };

    cancelOrder(tableNumber) {
        return orders.filter(order => order.table != tableNumber);
    };
}

class Table extends System {
    constructor() {
        super();
    };

    getTotalAmount(tableNumber) {
        let myOrder = orders.find(order => order.table === tableNumber)
        let dishes = myOrder.dishes;
        let sum = dishes.map(dish => dish.price)
        return sum.reduce((sum, current) => sum + current, 0);
    };

    addTable(order, table) {
        return {
            table: table,
            dishes: order,
            status: ""
        };
    };
}

class Order extends Table {
    dishes = [];
    constructor() {
        super();
    };

    getTotalAmount(order) {
        let dishes = order.dishes;
        let sum = dishes.map(dish => dish.price)
        return sum.reduce((sum, current) => sum + current, 0);
    };

    addOrder(name, price) {
        let obj = {
            name: name,
            price: price
        };
        return this.dishes.push(obj);
    }
}
const system = new System();
const table = new Table();

const order = new Order();
const position = order.addOrder('Мак Флурі', 25);
const position1 = order.addOrder('Big Mac', 45);
const food = order.dishes;

const order4 = table.addTable(food, 4);

order.getTotalAmount(order4);
system.changeOrderStatus(order4, 4, 'новий');

const barOrder = new Order();
const drink1 = barOrder.addOrder('Tea', 15);
const drinks = barOrder.dishes;

const order5 = table.addTable(drinks, 5);

order.getTotalAmount(order5);
system.changeOrderStatus(order5, 5, 'новий');

orders = system.cancelOrder(5);