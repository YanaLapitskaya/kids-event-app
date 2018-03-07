import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import ClientRepo from "../repositories/ClientRepo";

export default class ClientRoutes {
    static getAllClients(req: Request, res: Response, next: NextFunction) {
        ClientRepo.getAllClients()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Clients failed.");
            });
    }

    static getClientById(req: Request, res: Response) {
        ClientRepo.getClientById(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => {
                apiErrorHandler(err, req, res, `Client ${req.params.id} not found.`);
            });
    }

    static addClient(req: Request, res: Response) {
        ClientRepo.createClient(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Add Client failed.");
            });
    }

    static editClient(req: Request, res: Response) {
        ClientRepo.updateClient(req.params.id, req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Edit Client failed.");
            });
    }

    static deleteClient(req: Request, res: Response) {
        ClientRepo.deleteClient(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Delete Client failed.");
            });
    }
}