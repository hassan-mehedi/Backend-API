const user = require("../models/user.model");

const signIn = async (req, res) => {
    try {
        const userData = await user.findOne({ email: req.body.email });

        if (!userData) return res.status(404).json({ success: false, message: "User not found" });

        if (userData.password !== req.body.password) return res.status(403).json({ success: false, message: "Invalid password" });

        return res.status(200).json({ success: true, message: "Successfully logged in", data: userData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

module.exports = { signIn };
