import { Router } from "express";
import ServiceRoutes from "../../controllers/ServiceCtrl";

const router = Router();

router.route('/all').get(ServiceRoutes.getAllServices);

router.route('/').put(ServiceRoutes.addService);

router.route('/:id').get(ServiceRoutes.getServiceById);

router.route('/:id').post(ServiceRoutes.editService);

router.route('/:id').delete(ServiceRoutes.deleteService);

export default router;