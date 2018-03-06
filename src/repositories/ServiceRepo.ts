import { Service } from "../models/Service";

class ServiceRepo {

    constructor() {    }

    getAllServices() {
        return Service.findAll();
    }
}

export default new ServiceRepo();