import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import ClientRepo from "../repositories/ClientRepo";

export default class ClientRoutes {

    constructor() {
    }

    static getAllClients(req: Request, res: Response, next: NextFunction) {
        ClientRepo.getAllClients()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Reviews failed.");
            });
    }
}