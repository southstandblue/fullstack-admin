const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Server connected: ${conn.connection.host}`.bgCyan);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = connectDB;
