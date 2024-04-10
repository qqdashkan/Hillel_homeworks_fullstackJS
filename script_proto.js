//task 

/* const vehicle = {
    start() {
        console.log("drives")
    },

    stop() {
        console.log("stopped")
    }
};

const car = {
    reverse() {
        console.log("drives in reverse")
    },

    radio() {
        console.log("🔊♫♪♫♩♬♪♫")
    }
};

const bike = {
    signal() {
        console.log("beep beep")
    },

    signaling() {
        console.log("alarm")
    }
};

car.__proto__ = vehicle;
bike.__proto__ = vehicle;

const truck = {
    lightOn() {
        console.log("fog light on")
    },

    lightOff() {
        console.log("fog light off")
    }
};

const sedan = {
    highBeamOn() {
        console.log("high beam on")
    },

    highBeamOff() {
        console.log("high beam off")
    }
};

truck.__proto__ = car;
sedan.__proto__ = car;

const sportBike = {
    turboModeOn() {
        console.log("turbo mode on")
    },

    turboModeOff() {
        console.log("turbo mode off")
    }
};

const scooter = {
    chargingOn() {
        console.log("electric charging on")
    },

    chargingOff() {
        console.log("electric charging off")
    }
};

sportBike.__proto__ = bike;
scooter.__proto__ = bike; */

//task 2

/* Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(bike, vehicle);

Object.setPrototypeOf(truck, car);
Object.setPrototypeOf(sedan, car);

Object.setPrototypeOf(sportBike, bike);
Object.setPrototypeOf(scooter, bike); */

//task 3

/* function Vehicle(type, wheels, weight) {
    this.type = type;
    this.wheels = wheels;
    this.weight = weight;
    this.start = function () {
        console.log("drives");
    };
    this.stop = function () {
        console.log("stopped");
    }
};

function Car(year, model, color){
    this.year = year;
    this.model = model;
    this.color = color;
};

function Bike(year, model, color){
    this.year = year;
    this.model = model;
    this.color = color;
};

function Truck(year, model, color, salon){
    this.year = year;
    this.model = model;
    this.color = color;
    this.salon = salon;
};

function Sedan(year, model, color, engine){
    this.year = year;
    this.model = model;
    this.color = color;
    this.engine = engine;
};

function SportBike(year, model, speed, color){
    this.year = year;
    this.model = model;
    this.color = color;
    this.speed = speed;
};

function Scooter(year, model, color, seats){
    this.year = year;
    this.model = model;
    this.color = color;
    this.seats = seats;
};

const bicycle = new Vehicle('bicycle', 2, 30);
const bmw = new Car(2020, 'BMW', 'black');
const bike = new Bike(2014, 'yamaha', 'black');
const truck = new Truck(2022, 'doodge', 'green', 'leather');
const sedan = new Sedan(2023, 'audi', 'grey', 'electric');
const sportBike = new SportBike(2020, 'bmw', 300, 'red');
const scooter = new Scooter(2021, 'xiaomi', 'white', 2);


Object.setPrototypeOf(Car, Vehicle);


Car.prototype.start = function() { 
    console.log('in move');
};

Car.prototype.stop = function() { 
    console.log('immobilized');
};

bmw.start();
bmw.stop(); */

// task 4

function System() {
    this.users = [];

    this.addUser = function(user) {
        user.account = 'activated';
        return this.users.push(user);
    };

    this.removeUser = function(user) {
        user.account = 'deleted';
        if(user.role !== 'admin' && this.status === 'Online') {
            let index = this.users.findIndex(item => item.username === user.username)
            return this.users.splice(index, 1);
        } else return 'no rights';
    };

    this.getOnlineUsers = function() {
        const result = this.users.filter((user) => user.status === 'Online');
        return result.map(item => item.id);
    };

    this.getUser = function(array) {
        const data = array.map(item => this.users.find(user => user.id === item));
        return data.map(user => console.log(`${user.username}, ${user.email}, ${user.status}`));
    };
};

function Admin(params) {
    User.call(this, params);
    this.name = params.name;
    this.role = 'admin';
    this.status = null;
    this.username = params.username;
    this.email = params.email;
};

function User(username, email) {
    this.username = username;
    this.email = email;
    this.status = null;
    this.id = null;
    this.role = 'player';
    this.account = null;

    this.login = function() {
        if(this.account === 'activated') {
        return {
            status: this.status = 'Online',
            id: this.id = Math.floor(Math.random() * 100000),
            messege: (function() {
                console.log('user online');
            })(),
        }
    } else (function() {
        console.log('account has been deleted');
    })()
    };

    this.logout = function() {
        return {
            status: this.status = 'Offline',
            id: this.id = null,
            messege: (function() {
                console.log('user offline');
            })(),
        }
    };
};


const system = new System();
const user = new User('daria', 'dasha@yahoo.com');

const user1 = new User('valera', 'valerii@icloud.com');
system.addUser(user);

Admin.__proto__ = User.prototype;

const admin = new Admin({
    name: 'Oleg',
    username: 'mainAdmin',
    email: 'azino777.gmail.com'
});

Object.setPrototypeOf(admin, system);

system.addUser(admin);
admin.login();
admin.addUser(user1);

console.log(system.users);
usersOnline = system.getOnlineUsers();
admin.getUser(usersOnline);
admin.removeUser(user1);
console.log(system.users);


console.log('-----------------------------------');
user1.login();
system.addUser(user1);
user1.login();
admin.logout();