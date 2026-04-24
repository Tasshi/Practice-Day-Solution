const input = document.getElementById('nameInput');
const addBtn = document.getElementById('addBtn');
const tableBody = document.querySelector('#traineeTable tbody');
const countDisplay = document.getElementById('count');

function updateCount() {
  const count = tableBody.children.length;
  countDisplay.textContent = `${count} trainee${count !== 1 ? 's' : ''} present`;
}

addBtn.addEventListener('click', () => {
  const name = input.value.trim();
  if (name) {
    const row = document.createElement('tr');

    // Index cell
    const indexCell = document.createElement('td');
    indexCell.textContent = tableBody.children.length + 1;

    // Name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    // Action cell
    const actionCell = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'removeBtn';
    removeBtn.addEventListener('click', () => {
      tableBody.removeChild(row);
      updateRowNumbers();
      updateCount();
    });
    actionCell.appendChild(removeBtn);

    row.appendChild(indexCell);
    row.appendChild(nameCell);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
    input.value = '';
    updateCount();
  }
});

function updateRowNumbers() {
  [...tableBody.children].forEach((row, i) => {
    row.children[0].textContent = i + 1;
  });
}

updateCount();
