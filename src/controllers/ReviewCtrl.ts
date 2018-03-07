import { Request, Response, NextFunction } from "express";
import ReviewRepo from "../repositories/ReviewRepo";
import { apiErrorHandler } from "../handlers/errorHandler";

export default class ReviewRoutes {
    static getAllReviews(req: Request, res: Response, next: NextFunction) {
        ReviewRepo.getAllReviews()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Reviews failed.");
            });
    }


    static getReviewById(req: Request, res: Response) {
        ReviewRepo.getReviewById(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => {
                apiErrorHandler(err, req, res, `Review ${req.params.id} not found.`);
            });
    }

    static addReview(req: Request, res: Response) {
        ReviewRepo.createReview(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Add Review failed.");
            });
    }

    static editReview(req: Request, res: Response) {
        ReviewRepo.updateReview(req.params.id, req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Edit Review failed.");
            });
    }

    static deleteReview(req: Request, res: Response) {
        ReviewRepo.deleteReview(req.params.id)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Delete Review failed.");
            });
    }
}