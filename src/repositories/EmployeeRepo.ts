import { Employee } from "../models/Employee";

class EmployeeRepo {

    constructor() {    }

    getAllEmployees() {
        return Employee.findAll();
    }
}

export default new EmployeeRepo();