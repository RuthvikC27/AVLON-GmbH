import mongoose from 'mongoose';
import { app } from './app';

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

    console.log(`service-1 started on http://localhost:${PORT}`)
})