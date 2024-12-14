import { Router } from "express";
import { deleteEmployee, getEmployeeById, getEmployees, saveEmployee, updateEmployee } from "../controllers/employee.controller.js";

const router = Router();

router.get('/employee', getEmployees);

router.get('/employee/:id', getEmployeeById);

router.post('/employee', saveEmployee);

router.patch('/employee/:id', updateEmployee);

router.delete('/employee/:id', deleteEmployee);

export default router;
