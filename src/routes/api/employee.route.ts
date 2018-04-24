import * as multer from 'multer';
import { Router } from "express";
import EmployeeRoutes from "../../controllers/EmployeeCtrl";

const crypto = require('crypto');
const mime = require('mime');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(undefined, 'public/images/employees/');
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(undefined, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
        });
    }
});
const upload = multer({ storage: storage });
const router = Router();

router.route('/all').get(EmployeeRoutes.getAllEmployees);

router.route('/').put(upload.single('file'), EmployeeRoutes.addEmployee);

router.route('/:id').get(EmployeeRoutes.getEmployeeById);

router.route('/:id').post(upload.single('file'), EmployeeRoutes.editEmployee);

router.route('/:id').delete(EmployeeRoutes.deleteEmployee);

export default router;