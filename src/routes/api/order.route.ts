import { Router } from "express";
import OrderRoutes from "../../controllers/OrderCtrl";
import { isAuthenticated } from "../../passport-setup";

const router = Router();

router.route('/all').get(OrderRoutes.getAllOrders);

router.route('/').put(OrderRoutes.addOrder);

router.route('/:id').get(OrderRoutes.getOrderById);

router.route('/:id').post(OrderRoutes.editOrder);

router.route('/:id').delete(OrderRoutes.deleteOrder);

export default router;