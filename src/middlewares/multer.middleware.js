import multer from "multer";
import crypto from "crypto";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        let uniqueSuffix = crypto.randomBytes(3).toString('hex');
        let newFilename = `${uniqueSuffix}-${file.originalname}`;
        cb(null, newFilename);
    }
});

export const upload = multer(
    {
        storage,
    }
);
