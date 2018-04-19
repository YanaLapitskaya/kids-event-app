import { Request, Response, NextFunction } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import ClientRepo from "../repositories/ClientRepo";

export default class ClientRoutes {
    static getAllClients(req: Request, res: Response, next: NextFunction) {
        ClientRepo.getAllClients()
            .then((result) => {
                res.status(200).send({clients: result.map((empl) => empl.dataValues)});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static getClientById(req: Request, res: Response) {
        ClientRepo.getClientById(req.params.id)
            .then((client) => {
                res.status(200).send({client: client});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static addClient(req: Request, res: Response) {
        ClientRepo.createClient(req.body)
            .then((client: any) => {
                res.status(200).send({client: client});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static editClient(req: Request, res: Response) {
        ClientRepo.updateClient(req.params.id, req.body)
            .then((result) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static deleteClient(req: Request, res: Response) {
        ClientRepo.deleteClient(req.params.id)
            .then((result) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }
}