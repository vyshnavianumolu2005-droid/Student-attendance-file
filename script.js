document.getElementById('attendance-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('student-name');
  const rollInput = document.getElementById('roll-number');

  const name = nameInput.value.trim();
  const roll = rollInput.value.trim();

  if (name === '' || roll === '') return;

  const tbody = document.getElementById('student-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${roll}</td>
    <td>${name}</td>
    <td class="status-cell">Not Marked</td>
    <td>
      <button class="btn-present" onclick="markAttendance(this, 'Present')">Present</button>
      <button class="btn-absent" onclick="markAttendance(this, 'Absent')">Absent</button>
    </td>
  `;

  tbody.appendChild(row);

  nameInput.value = '';
  rollInput.value = '';
});

function markAttendance(button, status) {
  const row = button.parentElement.parentElement;
  const statusCell = row.querySelector('.status-cell');

  statusCell.textContent = status;

  if (status === 'Present') {
    statusCell.className = 'status-cell status-present';
  } else {
    statusCell.className = 'status-cell status-absent';
  }
}
