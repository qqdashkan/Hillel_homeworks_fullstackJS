//task 1

/* const books = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
   ];

let author = books.find(item => item.author == 'Джордж Орвелл');

console.log(author); */

//task 2

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = numbers.filter(item => item % 2 === 0);

console.log(newArr); */

//task 3

/* const prices = [100, 200, 300, 400, 500];

let pricesPlusTen = prices.map(elem => (elem * 1.1).toFixed(0));

console.log(pricesPlusTen); */

//task 4

/* const numbers = [45, 80, 32, 100, 105];

let check = numbers.some(item => item > 100);

console.log(check); */

//task 5

/* const nums = [1, 2, 3, 4, 5, -6, 7];

let check = nums.find(item => item < 0);

console.log(check); */

//task 6

/* const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];

let newSentences = sentences.map(elem => elem.split(" ")).map(elem => elem.shift());

console.log(newSentences); */

//task 7

/* const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];

let countWords = sentences.map(elem => elem.split(" ")).flat(2).length;

console.log(countWords); */

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


function manageOrdersToday(order) {

    function addOrder(orders, order) {
        return balance = initialAmount + amount;
    }

    function getTotalAmount(orders, tableNumber)  {
        return balance -= amount;
    }

    function changeOrderStatus(orders, tableNumber, status) {
        let arr = [];
        for (let i = 0; i <= years - 1; i++) {
            arr[i] = balance;
        }
        projection = arr.reduce(function(sum, current) {
            return sum + current * ((annualInterestRate / 100) * years);
        });
        //return projection = (balance * (annualInterestRate / 100)) * years;
        return projection;
    }

    function cancelOrder(orders, tableNumber) {
        return {
            'Поточний баланс': new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" })
                .format(balance),

            'Відсоток річних': new Intl.NumberFormat("en-GB", {
                 style: "percent" })
                .format(annualInterestRate/100),

            'Загальний дохід в кінці': new Intl.NumberFormat("en-GB", { 
                style: "currency", 
                currency: "GBP" })
                .format((balance + projection).toFixed(2))
        }

    }
    return {
        deposit,
        withdraw,
        calculateProfit,
        getAccountInfo
    }
}