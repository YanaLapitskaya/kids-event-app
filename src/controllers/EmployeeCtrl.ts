import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import EmployeeRepo from "../repositories/EmployeeRepo";

export default class EmployeeRoutes {
    static getAllEmployees(req: Request, res: Response) {
        EmployeeRepo.getAllEmployees()
            .then((result) => {
                res.status(200).send({employees: result.map((empl) => empl.dataValues)});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static getEmployeeById(req: Request, res: Response) {
        EmployeeRepo.getEmployeeById(req.params.id)
            .then((empl) => {
                res.status(200).send({employee: empl});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static addEmployee(req: Request, res: Response) {
        if (req.file) {
            const image = req.file;
            req.body.photo = '/' + image.path.split('\\').splice(1).join('/');
        }

        EmployeeRepo.createEmployee(req.body)
            .then((empl: any) => {
                res.status(200).send({employee: empl});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static editEmployee(req: Request, res: Response) {
        if (req.file) {
            const image = req.file;
            req.body.photo = '/' + image.path.split('\\').splice(1).join('/');
        }

        EmployeeRepo.updateEmployee(req.params.id, req.body)
            .then((result) => {
                res.status(200).send({photo: req.body.photo});
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }

    static deleteEmployee(req: Request, res: Response) {
        EmployeeRepo.deleteEmployee(req.params.id)
            .then((result) => {
                res.sendStatus(200);
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err));
            });
    }
}