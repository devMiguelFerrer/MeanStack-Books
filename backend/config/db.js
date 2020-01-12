const mongoose = require('mongoose');

const connectDB = async () => {

  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  // @ts-ignore
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB; 