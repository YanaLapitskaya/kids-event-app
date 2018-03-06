import { Client } from "./../models/Client";

class ClientRepo {

    constructor() {    }

    getAllClients() {
        return Client.findAll();
    }
/*
    getById(courseId) {
        return Course.findById(courseId, {
            include: [
                {
                    model: Lesson
                }
            ]
        });
    }*/
}

export default new ClientRepo();