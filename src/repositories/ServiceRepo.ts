import { Service } from "../models/Service";

export default class ServiceRepo {
    static getAllServices() {
        return Service.findAll();
    }

    static getServiceById(id: number) {
        return Service.findById(id);
    }

    static createService(props: any) {
        return Service.create(props);
    }

    static updateService(id: number, props: any) {
        return Service.update(props, {where: { id }});
    }

    static deleteService(id: number) {
        return Service.destroy({where: { id }});
    }
}