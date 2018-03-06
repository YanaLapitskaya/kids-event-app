import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import OrderRepo from "../repositories/OrderRepo";

export default class OrderRoutes {

    constructor() {
    }

    static getAllOrders(req: Request, res: Response, next: NextFunction) {
        OrderRepo.getAllOrders()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Reviews failed.");
            });
    }
}