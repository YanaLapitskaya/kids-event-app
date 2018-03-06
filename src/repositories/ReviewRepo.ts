import { Review } from "../models/Review";

class ReviewRepo {

    constructor() {    }

    getAllReviews() {
        return Review.findAll();
    }
}

export default new ReviewRepo();