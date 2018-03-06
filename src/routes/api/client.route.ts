import { Router } from "express";
import ClientRoutes from "../../controllers/ClientCtrl";

const router = Router();

router.route('/all').get(ClientRoutes.getAllClients);

export default router;