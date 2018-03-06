import { Router } from "express";
import EmployeeRepo from "../../repositories/EmployeeRepo";

const router = Router();

router.route('/all').get(EmployeeRepo.getAllEmployees);

export default router;