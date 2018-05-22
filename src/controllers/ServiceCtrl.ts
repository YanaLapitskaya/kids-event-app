import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import ServiceRepo from "../repositories/ServiceRepo";

export default class ServiceRoutes {
    static getAllServices(req: Request, res: Response) {
        ServiceRepo.getAllServices()
            .then((result) => {
                res.status(200).send({services: result.map((s) => s.dataValues)});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static getServiceById(req: Request, res: Response) {
        ServiceRepo.getServiceById(req.params.id)
            .then((service) => {
                res.status(200).send({service: service});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static addService(req: Request, res: Response) {
        if (req.files.length !== 0) {
            if (!req.body.photos) req.body.photos = [];
            req.files.forEach((file: any) => {
                req.body.photos.push('/' + file.path.split('\\').splice(1).join('/'));
            });
        }

        ServiceRepo.createService(req.body)
            .then((service: any) => {
                res.status(200).send({service: service});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static editService(req: Request, res: Response) {
        if (!req.body.photos) {
            req.body.photos = [];
        }

        req.files.forEach((file: any) => {
            req.body.photos.push('/' + file.path.split('\\').splice(1).join('/'));
        });

        ServiceRepo.updateService(req.params.id, req.body)
            .then((result: any) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static deleteService(req: Request, res: Response) {
        ServiceRepo.deleteService(req.params.id)
            .then((result) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }
}