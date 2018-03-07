import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import ServiceRepo from "../repositories/ServiceRepo";

export default class ServiceRoutes {
    static getAllServices(req: Request, res: Response) {
        ServiceRepo.getAllServices()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Services failed.");
            });
    }

    static getServiceById(req: Request, res: Response) {
        ServiceRepo.getServiceById(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => {
                apiErrorHandler(err, req, res, `Service ${req.params.id} not found.`);
            });
    }

    static addService(req: Request, res: Response) {
        ServiceRepo.createService(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Add Service failed.");
            });
    }

    static editService(req: Request, res: Response) {
        ServiceRepo.updateService(req.params.id, req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Edit Service failed.");
            });
    }

    static deleteService(req: Request, res: Response) {
        ServiceRepo.deleteService(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Delete Service failed.");
            });
    }
}