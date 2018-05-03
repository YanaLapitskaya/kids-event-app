import { Router } from "express";
import ReviewRoutes from "../../controllers/ReviewCtrl";
import { isAuthenticated } from "../../passport-setup";

const router = Router();

router.route('/all').get(ReviewRoutes.getAllReviews);

router.route('/').put(isAuthenticated, ReviewRoutes.addReview);

router.route('/:id').get(ReviewRoutes.getReviewById);

router.route('/:id').post(isAuthenticated, ReviewRoutes.editReview);

router.route('/:id').delete(isAuthenticated, ReviewRoutes.deleteReview);

export default router;