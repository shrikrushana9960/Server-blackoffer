import mongoose from "mongoose";

export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}