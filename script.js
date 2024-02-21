let first = document.getElementById('journey');
let second = document.getElementById('discount');

/* travel planner */

first.addEventListener('click', () => {

    let objectOfCountries = {
        Ukraine: 500,
        Italia: 1500,
        Tailand: 1000, 
        Poland: 699,
        Grecce: 1099,
        Moldova: 299
        }   
    
    let country = prompt('Введіть бажану країну для подорожі:');
    let money = prompt('Введіть наявну суму подорожі:');
    function getArrayOfCountries(country, money) {

        if (Number(money) >= objectOfCountries[country]) {
            alert(`Рівень бюджету достатній для подорожі в ${country}`);
        } else {
            let newArr = [];
            for (key in objectOfCountries) {
                if (objectOfCountries[key] <= money) {
                    newArr.push(' ' + key); 
                }
            }
            alert(`Рівень бюджету не достатній для подорожі в ${country}, але ми підібрали для вас кращі варіанти на ваш бюджет: ${newArr}`);
        }
        return;
    }
    
    switch (country) {
        case ('Ukraine'):
            getArrayOfCountries(country, money);
            break;
    
        case ('Italia'):
            getArrayOfCountries(country, money);
            break;
    
        case ('Tailand'):
            getArrayOfCountries(country, money);
            break;
    
        case ('Poland'):
            getArrayOfCountries(country, money);
            break;
    
        case ('Grecce'):
            getArrayOfCountries(country, money);
            break;
    
        case ('Moldova'):
            getArrayOfCountries(country, money);
            break;
    
        default: alert(`Ви бідний! Приходьте через рік.`);
            break;
    };
})

/* розрахунок знижки */

second.addEventListener('click', () => {

    let units = prompt('Введіть кількість:');
    let code = prompt('Введіть код для знижки:');
    let basicPrice = prompt('Введіть вартість без знижки:');
    let discount = 0;
    let sum = 0;

    switch (code) {
        case ('NEWYEAR'):
            discount = 20;
            sum = (basicPrice * units) * 0.8;
    
            if (units > 2) {
                discount += 5;
                sum *= 0.95;
    
                if (sum > 999) {
                    discount += 10;
                    sum *= 0.9;
                } 
                alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            } else alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            break;
    
        case ('BLACKFRIDAY'):
            discount = 30;
            sum = (basicPrice * units) * 0.7;
    
            if (units > 2) {
                discount += 5;
                sum *= 0.95;
    
                if (sum > 999) {
                    discount += 10;
                    sum *= 0.9;
                } 
                alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            } else alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            break; 
            
        case ('SUMMERSALE'):
            discount = 15;
            sum = (basicPrice * units) * 0.85;
    
            if (units > 2) {
                discount += 5;
                sum *= 0.95;
    
                if (sum > 999) {
                    discount += 10;
                    sum *= 0.9;
                } 
                alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            } else alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
            
            break; 
    
        default:
            discount = 5;
            sum = (basicPrice * units) * 0.95;
    
            if (units > 2) {
                discount += 5;
                sum *= 0.95;
    
                if (sum > 999) {
                    discount += 10;
                    sum *= 0.9;
                } 
                alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            } else alert(`Ваша знижка становить ${discount}%, до сплати $${sum.toFixed(2)}`);
    
            break;
    }
})



