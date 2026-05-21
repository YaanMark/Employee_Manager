import express from 'express';
import {listEmployees, addEmployee, updateEmployee} from '../controllers/employeeController.js'

const router = express.Router();

router.get('/', listEmployees);
router.post('/', addEmployee);
router.put('/:id', updateEmployee)

export default router;