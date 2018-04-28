import { Router } from "express";
import * as multer from 'multer';
import ServiceRoutes from "../../controllers/ServiceCtrl";

const crypto = require('crypto');
const mime = require('mime');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(undefined, 'public/images/services/');
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(undefined, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
        });
    }
});
const upload = multer({ storage: storage });
const router = Router();

router.route('/all').get(ServiceRoutes.getAllServices);

router.route('/').put(upload.any(), ServiceRoutes.addService);

router.route('/:id').get(ServiceRoutes.getServiceById);

router.route('/:id').post(upload.any(), ServiceRoutes.editService);

router.route('/:id').delete(ServiceRoutes.deleteService);

export default router;