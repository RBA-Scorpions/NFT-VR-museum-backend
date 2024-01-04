import { User } from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { isLoggedIn } from "../../middlewares/auth.middleware.js";

const updateUser = asyncHandler(
    async (req, res) => {
        const { name = req.user.name, email = req.user.email, role = req.user.role, phone = req.user.phone } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.user?._id,
            {
                $set: {
                    name: name,
                    email: email,
                    role: role,
                    phone: phone
                }
            },
            { new: true, runValidators: true },
        ).select("-password -refreshToken");
        return res.status(200).json(new ApiResponse(200, "Update successful", updatedUser));
    }
);

export { updateUser };