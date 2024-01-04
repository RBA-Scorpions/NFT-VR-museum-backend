import { User } from "../../src/models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { ApiError } from "../../src/utils/ApiError.js";

const isLoggedIn = asyncHandler(
    async (req, res, next) => {
        try {
            const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
            if (!accessToken) {
                throw new ApiError(401, "No access token provided");
            }
            const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decodedToken?._id);
            if (!user) {
                throw new ApiError(401, "No user matched in the db");
            }
            req.user = user;
            return next();
        } catch (err) {
            throw new ApiError(400, "No access token or invalid token provided");
        }
    }
);

export { isLoggedIn };