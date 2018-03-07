import { Review } from "../models/Review";

export default class ReviewRepo {
    static getAllReviews() {
        return Review.findAll();
    }

    static getReviewById(id: number) {
        return Review.findById(id);
    }

    static createReview(props: any) {
        return Review.create(props);
    }

    static updateReview(id: number, props: any) {
        return Review.update(props, {where: { id }});
    }

    static deleteReview(id: number) {
        return Review.destroy({where: { id }});
    }
}
