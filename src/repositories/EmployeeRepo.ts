import { Employee } from "../models/Employee";

export default class EmployeeRepo {
    static getAllEmployees() {
        return Employee.findAll();
    }

    static getEmployeeById(id: any) {
        return Employee.findById(id);
    }

    static createEmployee(props: any) {
        return Employee.create(props);
    }

    static updateEmployee(id: Number, props: any) {
        return Employee.update(props, {where: {id}});
    }

    static deleteEmployee(id: Number) {
        return Employee.destroy({where: {id}});
    }
}