
for (let year = 1900; year <= 2100; year++) {
    if (year % 4 == 0 || year % 100 != 0 && year % 400 == 0) {
        console.log(`${year} - leap year`);
    } else console.log(`${year} - not a leap year`);
}

//game

let playCasino = document.getElementById('casino');

playCasino.addEventListener('click', Casino);

function Casino() {
    let money = getMoney();
    let bet = getBet(money);
    let colorOfPlayer = getColorOfPlayer();
    let randomColor = getPlay(bet, colorOfPlayer);
    compareColors(colorOfPlayer, randomColor, money, bet);
    return;
}

function getMoney() {
    let value = prompt('Введи кількість грошей:');

    if ((Number.isInteger(+value))) {
        if (+value === 0) {
            alert('Недостатньо коштів, введи іншу сумму або поповни баланс');
            return getMoney();
        } else return +value;
    } else {
        alert('Невірне значення, введи ще раз.');
        return getMoney();
    } 
}

function getBet(money) {
    let bet = prompt('Введи свою ставку:');

    if ((Number.isInteger(+bet))) {
        if (+bet > money || +bet === 0) {
            alert('Недостатньо коштів, введи іншу сумму або поповни баланс');
            return getBet(money);
        } else return +bet;
    } else {
        alert('Невірне значення, введи ще раз.');
        return getBet(money);
    }
}

function getColorOfPlayer() {
    let value = prompt('Введи колір (black або red) на який ти робиш ставку:');

    if (value === 'black' || value === 'red') {
        return value;
        
    } else {
        alert('Невірне значення, введи ще раз.');
        return getColorOfPlayer();
    }; 
}

function getPlay(bet, colorOfPlayer) {
    console.log(colorOfPlayer);
    console.log(bet);
    alert(`Отже, ваша ставка ${Number(bet)} на ${colorOfPlayer} колір, крутити рулетку - натисни ОК:`);
    return getRandomColor();
}

function getRandomColor() {
    let random = Math.floor(Math.random() * 2) + 1;

    if (random % 2 == 0) {
        return random = 'red';
    } else return random = 'black';
}

function compareColors(colorOfPlayer, randomColor, money, bet) {
    if (colorOfPlayer === randomColor) {
        money = Number(bet)*2 + Number(money);
        alert(`Вітаю. Ти виграв, твій баланс ${money}`);
    } else {
        money = Number(money) - Number(bet);
        alert(`Нажаль ти програв, твій баланс ${money}`);
    }
    return nextSpin(money);
}


function nextSpin(money) {
    if (money > 0) {
        let newSpin = confirm(`Граємо далі чи забрати виграш?`);

        if (newSpin) {
            let bet = getBet(money);
            let newColor = getColorOfPlayer();
            let randomColor = getPlay(bet, newColor);
            compareColors(newColor, randomColor, money, bet);
        } else return alert(`Вітаю, твій виграш ${money}. Приходь ще!`);
    } else return alert('Недостатньо коштів, введи іншу сумму або поповни баланс');
}


