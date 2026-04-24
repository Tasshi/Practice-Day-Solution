const form = document.getElementById('traineeForm');
const input = document.getElementById('nameInput');
const tableBody = document.querySelector('#traineeTable tbody');
const countDisplay = document.getElementById('count');
const clearBtn = document.getElementById('clearBtn');
const timeDisplay = document.getElementById('time');

function updateCount() {
  const count = tableBody.children.length;
  countDisplay.textContent = `${count} trainee${count !== 1 ? 's' : ''} present`;
}

function saveList() {
  const names = [...tableBody.children].map(row => row.cells[1].textContent);
  localStorage.setItem('trainees', JSON.stringify(names));
}

function loadList() {
  const saved = JSON.parse(localStorage.getItem('trainees')) || [];
  saved.forEach(name => addTrainee(name));
  updateCount();
}

function addTrainee(name) {
  const row = document.createElement('tr');

  const indexCell = document.createElement('td');
  indexCell.textContent = tableBody.children.length + 1;

  const nameCell = document.createElement('td');
  nameCell.textContent = name;

  const actionCell = document.createElement('td');
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    tableBody.removeChild(row);
    refreshIndexes();
    updateCount();
    saveList();
  });
  actionCell.appendChild(removeBtn);

  row.appendChild(indexCell);
  row.appendChild(nameCell);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
}

function refreshIndexes() {
  [...tableBody.children].forEach((row, i) => {
    row.cells[0].textContent = i + 1;
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = input.value.trim();
  if (name) {
    addTrainee(name);
    input.value = '';
    updateCount();
    saveList();
  }
});

clearBtn.addEventListener('click', () => {
  tableBody.innerHTML = '';
  updateCount();
  localStorage.removeItem('trainees');
});

function updateTime() {
  const now = new Date();
  timeDisplay.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

loadList();
updateTime();
