import { Router } from "express";
import ReviewRoutes from "../../controllers/ReviewCtrl";

const router = Router();

router.route('/all').get(ReviewRoutes.getAllReviews);

router.route('/').put(ReviewRoutes.addReview);

router.route('/:id').post(ReviewRoutes.editReview);

router.route('/:id').delete(ReviewRoutes.deleteReview);

export default router;