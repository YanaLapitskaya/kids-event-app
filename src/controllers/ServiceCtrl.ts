import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import ServiceRepo from "../repositories/ServiceRepo";

export default class ServiceRoutes {

    constructor() {
    }

    static getAllServices(req: Request, res: Response) {
        ServiceRepo.getAllServices()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Services failed.");
            });
    }
}