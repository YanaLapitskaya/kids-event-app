import { Router } from "express";
import ClientRoutes from "../../controllers/ClientCtrl";

const router = Router();

router.route('/all').get(ClientRoutes.getAllClients);

router.route('/').put(ClientRoutes.addClient);

router.route('/:id').get(ClientRoutes.getClientById);

router.route('/:id').post(ClientRoutes.editClient);

router.route('/:id').delete(ClientRoutes.deleteClient);

export default router;