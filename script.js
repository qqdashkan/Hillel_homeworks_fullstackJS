//Task 1
/* function createCurrencyConverter(rate) {
    function toLocalCurrency(currency) {
        return parseInt(currency) * rate;
    }

    function toForeignCurrency(currency) {
        return parseInt(currency) / rate;
    }

    return {
        toLocalCurrency,
        toForeignCurrency
    }
}

const converter = createCurrencyConverter(0.89);

console.log(new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    converter.toLocalCurrency("100 USD"),
  ),
);
console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    converter.toForeignCurrency("89 EUR"),
  ),
); */

//Task 2

let balance = 0;
let projection = 0;

function createInvestmentAccount(initialAmount, annualInterestRate) {

    function deposit(amount) {
        return balance = initialAmount + amount;
    }

    function withdraw(amount)  {
        return balance -= amount;
    }

    function calculateProfit(years) {
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

    function getAccountInfo() {
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

const myAccount = createInvestmentAccount(550, 5);

console.log(new Intl.NumberFormat("en-GB", { 
    style: "currency", 
    currency: "GBP" })
    .format(myAccount.deposit(850)));

console.log(new Intl.NumberFormat("en-GB", { 
    style: "currency", 
    currency: "GBP" })
    .format(myAccount.withdraw(225)));

console.log(new Intl.NumberFormat("en-GB", { 
    style: "currency", 
    currency: "GBP" })
    .format(myAccount.calculateProfit(5).toFixed(2)));

    //console.log(myAccount.calculateProfit(5));

//console.log(myAccount.getAccountInfo());