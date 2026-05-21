import express from 'express';
import {listEmployees, addEmployee} from '../controllers/employeeController.js'

const router = express.Router();

router.get('/', listEmployees);
router.post('/', addEmployee);

export default router;