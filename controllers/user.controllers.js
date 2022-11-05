const user = require("../models/user.model");

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const userData = await user.create(req.body);

        if (!userData) return res.status(404).json({ success: false, message: "User can't be created" });

        return res.status(200).json({ success: true, message: "User created successfully", data: userData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getUsers = async (req, res) => {
    try {
        const usersData = await user.find();

        return res.status(200).json({ success: true, message: "Users found successfully", data: usersData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const getUserByID = async (req, res) => {
    try {
        const userData = await user.findById({ _id: req.params.id });

        if (!userData) return res.status(404).json({ success: false, message: "User with the given id doesn't exists" });

        return res.status(200).json({ success: true, message: "User found successfully", data: userData });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const updateUserByID = async (req, res) => {
    try {
        const userData = await user.findByIdAndUpdate({ _id: req.params.id }, req.body);
        return res.status(200).json({ success: true, message: "Successfully updated the user" });
    } catch (error) {
        console.error("error at updateUserByID controller: ", error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

const deleteUserByID = async (req, res) => {
    try {
        const userData = await user.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json({ success: true, message: "Successfully deleted the user" });
    } catch (error) {
        console.error("error at deleteUserByID controller: ", error);
        return res.status(500).json({ success: false, message: "Server error", error: error });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID,
};
