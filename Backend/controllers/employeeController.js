import db from '../config/db.js';

export const listEmployees =(req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if(err) return res.status(500).json({erro: 'Failed to find employees'});
        res.json(results);
    });
}

export const addEmployee = (req, res) => {
    const {name, role, salary} = req.body;
    const sql = 'INSERT INTO employees (name, role, salary) VALUES (?, ?, ?)';
    db.query(sql, [name, role, salary], err => {
        if(err) return res.status(500).json({erro: 'Failed to create a employee'});
        res.json({mensagem: 'Employee created!'});
    });
}