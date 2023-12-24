import {asyncHandler} from "../utils/aysncHandlers.js"

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "chai aur code"
    })
})



export {registerUser}