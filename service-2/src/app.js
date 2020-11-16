import express from "express";
import mongoose from 'mongoose';

const app = express();

// ROUTER
import router from './routes';
app.use(router);

// LISTENING
const PORT = 5000;
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB connected!");
    })
    .catch(err => {
        console.log(err);
    })

    console.log(`service-2 started on http://localhost:${PORT}`)
})