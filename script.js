const ul = document.getElementById('todoList');
const input = document.getElementById('newTask');
const button = document.getElementById('addTask');

button.addEventListener('click',(even) => {
    const li = document.createElement('li');
    li.addEventListener('click',(event)=>{
        li.remove();
    })
    
    li.textContent = input.value;clear
    ul.appendChild(li);
})