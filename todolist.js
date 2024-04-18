class myApplication {
    constructor() {
        this.taskInput = document.querySelector('.task-input');
        this.taskList = document.querySelector('.collection');
        this.clearBtn = document.querySelector('.clear-tasks');
        this.form = document.querySelector('.create-task-form');

        this.addNewTask(this.form, this.taskList);
        this.removeTask(this.clearBtn);
        this.editTaskList(this.taskList);
        this.renderTasks();
    }

    createSingleTaskElement(newTask) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(newTask));
        
        const deleteElement = document.createElement('span');
        deleteElement.className = 'delete-item';
        deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
        
        const editElement = document.createElement('span');
        editElement.className = 'edit-element';
        editElement.innerHTML = '<i class="fa fa-edit"></i>';
        
        li.appendChild(deleteElement);
        li.appendChild(editElement);
        
        this.taskList.appendChild(li);
    };

    storeTaskInLocalStorage(newTask) {
        const tasks = localStorage.getItem('tasks') !== null 
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];
        
        tasks.push(newTask);
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    renderTasks() {
        const tasks = localStorage.getItem('tasks') !== null 
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];
    
        tasks.forEach((task) => {
            this.createSingleTaskElement(task);
        });
    };

    editTaskList() {
        this.taskList.addEventListener('click', (event) => {
            const iconContainer = event.target.parentElement;
            
            if (iconContainer.classList.contains('delete-item')) {
                iconContainer.parentElement.setAttribute('status', 'delete');
         
                if (confirm('Are you sure?')) {
                    let tasks = Array.from(document.querySelectorAll('.collection-item'));
                    iconContainer.parentElement.remove();
        
                tasks.forEach((task, index) => {
                    if (task.hasAttribute('status')) {
                    tasks.splice(index, 1);
                }
                });
        
                const newTaskList = tasks.map(task => task.textContent);
                localStorage.setItem('tasks', JSON.stringify(newTaskList));
                }
            }
        
            if (iconContainer.classList.contains('edit-element')) {
                let newTask = window.prompt('New name', iconContainer.parentElement.textContent);
                    if (newTask === null) {
                        return;
                    }

                    iconContainer.parentElement.innerHTML = newTask;
        
                    let tasks = Array.from(document.querySelectorAll('.collection-item'));
                    const newTaskList = tasks.map(task => task.textContent);
                    localStorage.setItem('tasks', JSON.stringify(newTaskList));
            }
        });
    };

    addNewTask() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.taskInput.value.trim() === ''){
                return;
            }
        
            this.createSingleTaskElement(this.taskInput.value);
        
            this.storeTaskInLocalStorage(this.taskInput.value);
        
            this.form.reset();
        });

        this.taskList.addEventListener('mouseover', (event) => {
            let target = event.target.closest('li');
            if(!target) {
                return;
            }
            target.classList.toggle('color');      
        });

        this.taskList.addEventListener('mouseout', (event) => {
            let target = event.target.closest('li');
            if(!target) {
            return;
            }
            target.classList.toggle('color'); 
        });
    }

    removeTask() {
        this.clearBtn.addEventListener('click', () => {
            if(confirm('Are you sure?')){
                localStorage.clear();
                this.taskList.innerHTML = '';
            }
        });
    }
};

const toDo = new myApplication();