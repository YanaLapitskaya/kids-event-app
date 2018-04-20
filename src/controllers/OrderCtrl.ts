import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import OrderRepo from "../repositories/OrderRepo";

export default class OrderRoutes {

    constructor() {
    }

    static getAllOrders(req: Request, res: Response) {
        OrderRepo.getAllOrders()
            .then((result) => {
                res.status(200).send({orders: result.map((order) => order.dataValues)});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static getOrderById(req: Request, res: Response) {
        OrderRepo.getOrderById(req.params.id)
            .then((order) => {
                res.status(200).send({order: order});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static addOrder(req: Request, res: Response) {
        OrderRepo.createOrder(req.body)
            .then((order: any) => {
                res.status(200).send({order: order});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static editOrder(req: Request, res: Response) {
        OrderRepo.updateOrder(req.params.id, req.body)
            .then((result: any) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static deleteOrder(req: Request, res: Response) {
        OrderRepo.deleteOrder(req.params.id)
            .then((result) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }
}