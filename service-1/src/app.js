import express from "express";

const app = express();

// ROUTER
import router from './routes';
app.use(router);

export {
    app
}