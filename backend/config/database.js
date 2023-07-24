const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    } ).then(
        (data)=>{
            console.log(`MongoDB connected successfully ${data.connection.host}`);
        }
    );
}
module.exports = connectDatabase;




