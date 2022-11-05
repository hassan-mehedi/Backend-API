require("dotenv").config();

const config = {
    port: process.env.PORT || 5000,
    mongooseURI: process.env.MONGOOSE_ATLAS_URI,
};

module.exports = config;
