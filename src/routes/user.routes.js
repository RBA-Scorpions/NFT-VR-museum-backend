import { Router } from "express";
import { register } from "../controllers/usercontroller/register.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { login } from "../controllers/usercontroller/login.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { updateUser } from "../controllers/usercontroller/updateUser.controller.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), register);
router.route("/login").post(login);


// secure route
router.route("/update-user").put(isLoggedIn, updateUser);

export default router;