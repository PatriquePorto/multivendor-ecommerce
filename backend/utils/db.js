const mongoose = require('mongoose')

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,

        })
        console.log('Database Connected!!!')
    } catch (error) {
        console.log(error)
    }
}