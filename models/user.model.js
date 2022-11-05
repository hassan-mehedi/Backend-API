const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, trim: true, unique: true, match: [/.+\@.+\..+/, "Invalid Email"] },
    password: { type: String, require: true },
    role: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
