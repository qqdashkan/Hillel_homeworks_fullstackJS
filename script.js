//task 1

const books = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
   ];

let author = books.find(item => item.author == 'Джордж Орвелл');

console.log(author);

//task 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = numbers.filter(item => item % 2 === 0);

console.log(newArr);

//task 3

const prices = [100, 200, 300, 400, 500];

let pricesPlusTen = prices.map(elem => (elem * 1.1).toFixed(0));

console.log(pricesPlusTen);

//task 4

const numbers = [45, 80, 32, 100, 105];

let check = numbers.some(item => item > 100);

console.log(check);

//task 5

const nums = [1, 2, 3, 4, 5, -6, 7];

let check = nums.find(item => item < 0);

console.log(check);

//task 6

const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];

let newSentences = sentences.map(elem => elem.split(" ")).map(elem => elem.shift());

console.log(newSentences);

//task 7

const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];

let countWords = sentences.map(elem => elem.split(" ")).flat(2).length;

console.log(countWords);

//task 8

let orders = [];

let order1 = {
    table: 1,
    dishes: [
  { name: "Кава", price: 30 },
  { name: "Чізкейк", price: 50 }
    ],
    status: "в обробці"
};

let order2 = {
    table: 2,
    dishes: [
  { name: "Лате", price: 40 },
  { name: "Тірамісу", price: 60 }
    ],
    status: "готується"
};

let order3 = {
    table: 3,
    dishes: [
  { name: "Картопля", price: 35 },
  { name: "Морозиво", price: 25 },
  { name: "Чай", price: 10 }
    ],
    status: "новий"
};

function manageOrders() {

    function addOrder(orders, order) {
        orders.unshift(order);
        return orders;
    }

    function getTotalAmount(orders, tableNumber) {
        let myOrder = orders.find(order => order.table === tableNumber)
        let dishes = myOrder.dishes;
        let sum = dishes.map(dish => dish.price)
        return sum.reduce((sum, current) => sum + current, 0);
    }

    function changeOrderStatus(orders, tableNumber, status) {
        let myOrder = orders.find(order => order.table === tableNumber)
        return myOrder.status = status;
    }

    function cancelOrder(orders, tableNumber) {
        return orders.filter(order => order.table != tableNumber)
    }
    return {
        addOrder,
        getTotalAmount,
        changeOrderStatus,
        cancelOrder
    }
}

let newOrder = manageOrders();

console.log(newOrder.addOrder(orders, order1));
console.log(newOrder.addOrder(orders, order2));
console.log(newOrder.addOrder(orders, order3));
console.log(newOrder.getTotalAmount(orders, 3));
console.log(newOrder.changeOrderStatus(orders, 3, 'в обробці'));
console.log(newOrder.cancelOrder(orders, 1));