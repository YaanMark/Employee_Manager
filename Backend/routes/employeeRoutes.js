import express from 'express';
import {listEmployees, addEmployee, updateEmployee, deleteEmployee} from '../controllers/employeeController.js'

const router = express.Router();

router.get('/', listEmployees);
router.post('/', addEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;