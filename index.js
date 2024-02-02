const menuBtn = document.querySelector('.menuBtn');
const menuList = document.querySelector('.menuList');
const menuArray = ['Home', 'Product', 'Pricing', 'Contact'];


menuBtn.addEventListener('click', function () {
    if (menuList.style.display === 'flex') {
        menuList.style.display = "none";
        menuBtn.innerHTML = '<span class="material-symbols-outlined">sort</span>';
        menuList.firstElementChild.remove();
    }
    else renderMenu();
});

function renderMenu() {
    menuBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
    let list = document.createElement('ul');
    list.classList = 'list';
    menuList.appendChild(list);
    menuList.style.display = 'flex';

    menuArray.forEach(element => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = element;
        list.appendChild(li);
    });
}