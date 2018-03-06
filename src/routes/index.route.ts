import { apiErrorHandler } from "../handlers/errorHandler";
import ReviewRepo from "../repositories/ReviewRepo";
import EmployeeRepo from "../repositories/EmployeeRepo";
import { Router } from "express";
import ServiceRepo from "../repositories/ServiceRepo";
import reviewRoutes from "./api/review.route";
import orderRoutes from "./api/order.route";
import serviceRoutes from "./api/service.route";
import employeeRoutes from "./api/employee.route";
import clientRoutes from "./api/client.route";

const router = Router();

// api routes
router.use('/api/review', reviewRoutes);
router.use('/api/order', orderRoutes);
router.use('/api/service', serviceRoutes);
router.use('/api/employee', employeeRoutes);
router.use('/api/client', clientRoutes);

router.route('/').get((req, res) => {
    res.redirect('/about');
});

router.route('/about').get((req, res, next) => {
    Promise.all([EmployeeRepo.getAllEmployees(), ReviewRepo.getAllReviews()])
        .then((result) => {
            res.render("pages/index", {
                employees: result[0],
                reviews: result[1]
            });
        })
        .catch((err) => {
            apiErrorHandler(err, req, res, "Fetch data failed.");
        });
});

router.route('/gallery').get((req, res, next) => {
    res.render("pages/gallery");
});

router.route('/services').get((req, res, next) => {
    ServiceRepo.getAllServices()
        .then((services) => {
            res.render("pages/services", {services: services});
        })
        .catch((err) => {
            apiErrorHandler(err, req, res, "Fetch data failed.");
        });
});

router.route('/charity').get((req, res, next) => {
    res.render("pages/charity");
});

export default router;