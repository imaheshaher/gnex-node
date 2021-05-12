require('dotenv').config()

module.exports.env = {
    mongoURL :process.env.MONGO_URL,
    secrete: process.env.SECRETE
}