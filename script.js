const canvas = document.querySelector('.space');
const colors = document.querySelector('.colors');

canvas.addEventListener('dblclick', function () {
    const newAvailableColorWrapper = document.createElement('div');
    const colorCircle = document.createElement('div');
    colors.appendChild(newAvailableColorWrapper);
    newAvailableColorWrapper.appendChild(colorCircle);
    colorCircle.classList.add('availableColor');
    newAvailableColorWrapper.style.borderRadius = '50%';

    const red = Math.random() * 257;
    const green = Math.random() * 257;
    const blue = Math.random() * 257;

    colorCircle.style = `background-color: rgb(${red}, ${green}, ${blue});`;
});

colors.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    if(event.target.className === 'availableColor') {
        openModalWindow(event);
    }
});

colors.addEventListener('click', function (event) {
    const availableColorElement = setOpacity(event);

        document.body.addEventListener('mousemove', moveAt);

        document.body.addEventListener('keydown', (event) => {
            const keyName = event.key;
            if (keyName === "Escape") {
                document.body.removeEventListener('mousemove', moveAt);
            }
        });

        function moveAt(event) {
            availableColorElement.style.position = 'absolute';
            availableColorElement.style.top = event.y + 'px';
            availableColorElement.style.left = event.x + 'px';
        };
});

function setOpacity(event) {
    if(event.target.className === 'availableColor') {
        event.target.style.opacity = '0.5';
        return event.target.parentElement;
    }
}

function openModalWindow(event) {
    const openedModalWindow = document.querySelector('.modal');
    if(colors.closest(openedModalWindow)) {
        return;
    }

    const chosenColor = event.target.parentElement;
    chosenColor.setAttribute('status', 'current');
    const x = event.clientX;
    const y = event.clientY;
    console.log(event);

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    chosenColor.appendChild(modalWindow);
    modalWindow.style.top = y + 'px';
    modalWindow.style.left = x + 'px';
    modalWindow.style.zIndex = '9999';
    modalWindow.style.position = 'absolute';

    const form = document.createElement('form');
    form.classList.add('formStyle');
    modalWindow.appendChild(form);

    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    deleteElement.style.cursor = 'pointer';
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
        modalWindow.parentElement.firstChild.style.backgroundColor = colorValue.value;
        modalWindow.parentElement.firstChild.style.width = diameterValue.value + 'px';
        modalWindow.parentElement.firstChild.style.height = diameterValue.value + 'px';
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
};
