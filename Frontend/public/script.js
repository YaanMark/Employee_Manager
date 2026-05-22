const API_URL = 'http://localhost:3000/employees';

async function loadEmployees() {
    const response = await fetch(API_URL);
    const employees = await response.json();

    const table = document.getElementById('employees-table');
    table.innerHTML = '';

    employees.forEach(emp => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.role}</td>
            <td>${parseFloat(emp.salary).toFixed(2)}</td>
            <td>
                <button class="edit" onclick="editEmployee(${emp.id}, '${emp.name}', '${emp.role}', ${emp.salary})">Edit</button>
                <button class="delete" onclick="deleEmployee(${emp.id})">Delete</button>
            </td>
        `;
        table.appendChild(tr);
    });
}

document.getElementById('employeeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const salary = document.getElementById('salary').value;

    const employeeData = { name, role, salary };

    if (id) {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData)
        });
    }else {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData)
        });
    }

e.target.reset();
document.getElementById('id').value = '';
loadEmployees();
});

function editEmployee(id, name, role, salary) {
    document.getElementById('id').value = id;
    document.getElementById('name').value = name;
    document.getElementById('role').value = role;
    document.getElementById('salary').value = salary;
}

async function deleEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        loadEmployees();
    }
}

loadEmployees();