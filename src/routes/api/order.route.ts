import { Router } from "express";
import OrderRoutes from "../../controllers/OrderCtrl";
import { isAuthenticated } from "../../passport-setup";

const router = Router();

router.route('/all').get(isAuthenticated, OrderRoutes.getAllOrders);

router.route('/').put(OrderRoutes.addOrder);

router.route('/:id').get(isAuthenticated, OrderRoutes.getOrderById);

router.route('/:id').post(isAuthenticated, OrderRoutes.editOrder);

router.route('/:id').delete(isAuthenticated, OrderRoutes.deleteOrder);

export default router;