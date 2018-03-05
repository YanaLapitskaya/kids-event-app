import { Router, Request, Response, NextFunction } from "express";
import ReviewRepo from "../repositories/ReviewRepo";
import { apiErrorHandler } from "../handlers/errorHandler";

export default class ReviewRoutes {

    constructor() {
    }

    static getAllReviews(req: Request, res: Response, next: NextFunction) {
        ReviewRepo.getAllReviews()
            .then((result) => {
                res.render("index", {
                    reviews: result
                });
            })
            .catch((err) => {
                apiErrorHandler(err, req, res, "Fetch All Lessons failed.");
            });
    }
}