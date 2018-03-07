import { Client } from "./../models/Client";

export default class ClientRepo {
    static getAllClients() {
        return Client.findAll();
    }

    static getClientById(id: any) {
        return Client.findById(id);
    }

    static createClient(props: any) {
        return Client.create(props);
    }

    static updateClient(id: Number, props: any) {
        return Client.update(props, {where: {id}});
    }

    static deleteClient(id: Number) {
        return Client.destroy({where: {id}});
    }
}