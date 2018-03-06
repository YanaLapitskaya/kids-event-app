import { Router } from "express";
import OrderRoutes from "../../controllers/OrderCtrl";

const router = Router();

router.route('/all').get(OrderRoutes.getAllOrders);

export default router;