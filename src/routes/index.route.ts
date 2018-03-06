import { apiErrorHandler } from "../handlers/errorHandler";
import ReviewRepo from "../repositories/ReviewRepo";
import EmployeeRepo from "../repositories/EmployeeRepo";
import { Router } from "express";

const router = Router();

router.route('/').get((req, res, next) => {
    Promise.all([EmployeeRepo.getAllEmployees(), ReviewRepo.getAllReviews()])
        .then((result) => {
            res.render("index", {
                employees: result[0],
                reviews: result[1]
            });
        })
        .catch((err) => {
            apiErrorHandler(err, req, res, "Fetch data failed.");
        });
});

export default router;