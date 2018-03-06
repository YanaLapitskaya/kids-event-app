import { Review } from "../models/Review";

class ReviewRepo {

    constructor() {    }

    getAllReviews() {
        return Review.findAll();
    }

    createReview(props: any) {
        return Review.create(props);
    }

    updateReview(id: Number, props: any) {
        return Review.update(props, {where: { id }});
    }

    deleteReview(id: Number) {
        return Review.destroy({where: { id }});
    }
}

export default new ReviewRepo();