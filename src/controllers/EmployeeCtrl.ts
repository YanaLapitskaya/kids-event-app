import { Request, Response } from "express";
import { apiErrorHandler } from "../handlers/errorHandler";
import EmployeeRepo from "../repositories/EmployeeRepo";

export default class EmployeeRoutes {
    static getAllEmployees(req: Request, res: Response) {
        EmployeeRepo.getAllEmployees()
            .then((result) => {
                res.status(200).send({employees: result.map((empl) => empl.dataValues)});
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Employees failed.");
            });
    }

    static getEmployeeById(req: Request, res: Response) {
        EmployeeRepo.getEmployeeById(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => {
                apiErrorHandler(err, req, res, `Employee ${req.params.id} not found.`);
            });
    }

    static addEmployee(req: Request, res: Response) {
        EmployeeRepo.createEmployee(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Add Employee failed.");
            });
    }

    static editEmployee(req: Request, res: Response) {
        EmployeeRepo.updateEmployee(req.params.id, req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Edit Employee failed.");
            });
    }

    static deleteEmployee(req: Request, res: Response) {
        EmployeeRepo.deleteEmployee(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Delete Employee failed.");
            });
    }
}