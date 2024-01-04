import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { generateAccessAndRefreshTokens } from "../../controllers/usercontroller/generateAcessAndRefreshTokens.js";

const login = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        if ([email, password].some(
            (field) => {
                return field.trim() === "";
            }
        )) {
            throw new ApiError(400, "Some fields are missing");
        }
        const user = await User.findOne(
            {
                email
            }
        );
        if (!user) {
            throw new ApiError(400, "No user with this email id");
        }
        const passwordCorrect = await user.isPasswordCorrect(password);
        if (!passwordCorrect) {
            throw new ApiError(400, "Wrong password recheck your password");
        }
        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);
        const options = {
            httpOnly: true,
            secure: true
        };
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(200, "User logged in successfully", {
                    user: loggedInUser, accessToken, refreshToken
                })
            );
    }
);


export { login };