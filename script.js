const canvas = document.querySelector('.space');
const colors = document.querySelector('.colors');

canvas.addEventListener('dblclick', function (event) {
    const newAvailableColor = document.createElement('div');
    colors.appendChild(newAvailableColor);
    newAvailableColor.classList.add('availableColor');

    const newCircleElement = document.createElement('div');
    this.appendChild(newCircleElement);
    newCircleElement.classList.add('circle');

    let x = event.clientX;
    let y = event.clientY;

    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;

    newCircleElement.style = `background-color: rgb(${red}, ${green}, ${blue});`;
    newCircleElement.style.left = (x - 22) + 'px';
    newCircleElement.style.top = (y - 20) + 'px';

    newAvailableColor.style = `background-color: rgb(${red}, ${green}, ${blue});`;

})