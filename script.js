const canvas = document.querySelector('.space');
const colors = document.querySelector('.colors');

canvas.addEventListener('dblclick', function () {
    const newAvailableColor = document.createElement('div');
    colors.appendChild(newAvailableColor);
    newAvailableColor.classList.add('availableColor');

    const red = Math.random() * 257;
    const green = Math.random() * 257;
    const blue = Math.random() * 257;

    newAvailableColor.style = `background-color: rgb(${red}, ${green}, ${blue});`;
});

colors.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    if(event.target.className === 'availableColor') {
        openModalWindow(event);
    }
});

colors.addEventListener('click', function (event) {
        
        const modal = document.querySelector('.modal');
        
        /* const rgb = event.target.style.backgroundColor;
        const opacity = rgb.slice(0, rgb.length - 1)  + ', 0.5)';
        event.target.style.backgroundColor = opacity; */
        event.target.style.opacity = '0.5';
        //openedModalWindow.style.opacity = "none";
});

function openModalWindow(event) {
    const openedModalWindow = document.querySelector('.modal');
    if(colors.closest(openedModalWindow)) {
        return;
    }

    const chosenColor = event.target;
    chosenColor.setAttribute('status', 'current');
    const x = event.clientX;
    const y = event.clientY;

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    chosenColor.appendChild(modalWindow);
    modalWindow.style.top = y + 'px';
    modalWindow.style.left = x + 'px';

    const form = document.createElement('form');
    form.classList.add('formStyle');
    modalWindow.appendChild(form);

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    form.before(deleteElement);

    const diameter = document.createElement('label');
    diameter.innerHTML = `Діаметр кола:
    <input
        type="number"
        name="name"
        id="name"
        placeholder=""
        class="diameter-input"
        required
        autofocus
    >`;

  const color = document.createElement('label');
  color.innerHTML = `Колір кола:
  <input
        type="text"
        name="name"
        id="name"
        placeholder=""
        class="color-input"
        required
        autofocus
    >`;

    form.appendChild(diameter);
    form.appendChild(color);

    const updateBtn = document.createElement('button');
    updateBtn.innerHTML = 'Update';
    form.appendChild(updateBtn);

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'Cancel';
    form.appendChild(resetBtn);

    modalWindow.addEventListener('submit', (event) => {
        event.preventDefault();
        const diameterValue = document.querySelector('.diameter-input');
        const colorValue = document.querySelector('.color-input');
        modalWindow.parentElement.style.backgroundColor = colorValue.value;
        modalWindow.parentElement.style.width = diameterValue.value + 'px';
        modalWindow.parentElement.style.height = diameterValue.value + 'px';
    });

    resetBtn.addEventListener('click', () => {
        const modalForm = document.querySelector('.formStyle');
        modalForm.reset();
    });

    deleteElement.addEventListener('click', () => {
        closeModalWindow();
    });

    document.addEventListener( "keydown", (event) => {
        const keyName = event.key;
            if (keyName === "Escape") {
                closeModalWindow();
            }
    });
};

function closeModalWindow() {
    const modalWindow = document.querySelector('.modal');
    const currentCircle = modalWindow.parentElement;
    currentCircle.removeChild(modalWindow);
}