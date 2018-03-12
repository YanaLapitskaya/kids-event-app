import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import OrderRepo from "../repositories/OrderRepo";

export default class OrderRoutes {

    constructor() {
    }

    static getAllOrders(req: Request, res: Response) {
        OrderRepo.getAllOrders()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Reviews failed.");
            });
    }

    static getOrderById(req: Request, res: Response) {
        OrderRepo.getOrderById(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => {
                apiErrorHandler(err, req, res, `Order ${req.params.id} not found.`);
            });
    }

    static addOrder(req: Request, res: Response) {
        OrderRepo.createOrder(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Add Order failed.");
            });
    }

    static editOrder(req: Request, res: Response) {
        OrderRepo.updateOrder(req.params.id, req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Edit Order failed.");
            });
    }

    static deleteOrder(req: Request, res: Response) {
        OrderRepo.deleteOrder(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Delete Order failed.");
            });
    }
}