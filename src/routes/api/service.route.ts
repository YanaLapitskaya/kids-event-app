import { Router } from "express";
import ServiceRoutes from "../../controllers/ServiceCtrl";

const router = Router();

router.route('/all').get(ServiceRoutes.getAllServices);

export default router;