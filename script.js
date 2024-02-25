const btn = document.getElementById('btn');
btn.addEventListener('click', convertMinutes);

function convertMinutes() {
    let minutes = prompt('Введіть кількість хвилин:');

    if (minutes > 9999 || isNaN(minutes)) {
        alert('Значення некоректне або надто велике, введи ще раз');
        return convertMinutes();
    } else if (minutes > 59) {
        let hours = Math.floor(minutes/60);
        let mins = minutes - (hours*60);
        return alert(`${hours} годин, ${mins} хвилин.`)
    } else if (!minutes){
        return alert(`0 годин, 0 хвилин.`);
    } else return alert(`0 годин, ${minutes} хвилин.`);
}
