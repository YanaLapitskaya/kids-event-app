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
import * as passport from 'passport';
import { isAuthenticated } from "../passport-setup";
import { INSPECT_MAX_BYTES } from "buffer";

const router = Router();

// api routes
router.use('/api/review', reviewRoutes);
router.use('/api/order', orderRoutes);
router.use('/api/service', serviceRoutes);
router.use('/api/employee', employeeRoutes);
router.use('/api/client', clientRoutes);

router.route('/google-login').get(passport.authenticate('google', { failureRedirect: '/error' }),  function(req, res) {
    res.send(200);
});

router.route('/login').get(passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

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

router.route('/gallery').get(isAuthenticated, (req, res, next) => {
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