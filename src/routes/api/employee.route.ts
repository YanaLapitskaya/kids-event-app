import { Router } from "express";
import EmployeeRoutes from "../../controllers/EmployeeCtrl";

const router = Router();

router.route('/all').get(EmployeeRoutes.getAllEmployees);

router.route('/').put(EmployeeRoutes.addEmployee);

router.route('/:id').get(EmployeeRoutes.getEmployeeById);

router.route('/:id').post(EmployeeRoutes.editEmployee);

router.route('/:id').delete(EmployeeRoutes.deleteEmployee);

export default router;