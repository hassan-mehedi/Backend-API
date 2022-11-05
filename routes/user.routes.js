const router = require("express").Router();
const { createUser, getUsers, getUserByID, updateUserByID, deleteUserByID } = require("../controllers/user.controllers");

router.route("/").post(createUser).get(getUsers);

router.route("/:id").get(getUserByID).put(updateUserByID).delete(deleteUserByID);

module.exports = router;
