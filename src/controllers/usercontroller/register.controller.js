import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../../utils/cloudImage.js";
import fs from "fs";



const register = asyncHandler(
    async (req, res) => {
        const { name, username, role = "visitor", email, password, phone = "" } = req.body;
        let avatarLocalPath = "";
        if (req.file) {
            avatarLocalPath = req.file.path;
        }
        if ([name, username, email, password].some(
            (field) => {
                return field.trim() === "";
            }
        )) {
            if (avatarLocalPath) {
                fs.unlinkSync(avatarLocalPath);
            }
            throw new ApiError(400, "Some fields are missing");
        }


        const existingUser = await User.findOne(
            {
                $or: [{ email }, { username }]
            }
        );

        if (existingUser) {
            if (avatarLocalPath) {
                fs.unlinkSync(avatarLocalPath);
            }
            throw new ApiError(400, "User with same credentials are present in db");
        }

        let avatarUrl = "";
        if (avatarLocalPath) {
            let avatar = await uploadOnCloudinary(avatarLocalPath);
            avatarUrl = avatar.url;
        }
        let registeredUser;
        try {
            registeredUser = await User.create(
                {
                    name,
                    username,
                    role,
                    email,
                    password,
                    phone,
                    avatar: avatarUrl || "",
                }
            );
        } catch (err) {
            await deleteFromCloudinary(avatarUrl);
            throw new ApiError(400, "Invalid credentials");
        }

        const createdUser = await User.findById(registeredUser._id).select("-password");

        if (!createdUser) {
            if (avatarUrl) {
                await deleteFromCloudinary(avatarUrl);
            }
            throw new ApiError(500, "Something went wrong while registering the user");
        }
        return res.status(201).json(
            new ApiResponse(201, "New user created", createdUser)
        );
    }
);

export {
    register
};