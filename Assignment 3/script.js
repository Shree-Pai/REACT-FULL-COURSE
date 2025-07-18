const input = document.getElementById('display');
const addButton = document.getElementById('addbutton');
const taskList = document.querySelector('ul');

const createTask = (taskText) => {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';

  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.classList.toggle('strikethrough');
  });

  li.appendChild(deleteBtn);
  return li;
};

const addTask = () => {
  if (input.value.trim()) {
    const taskItem = createTask(input.value);
    taskList.appendChild(taskItem);
    input.value = '';
  } else {
    alert('Please enter a task');
  }
};

addButton.addEventListener('click', addTask);
