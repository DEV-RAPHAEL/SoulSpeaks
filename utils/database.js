import mongoose from "mongoose";

let isConnected = 0;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('Mongo DB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB.URL, {
            dbName: 'soulspeaks',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error)

    }
}