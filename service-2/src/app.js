import express from "express";

const app = express();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`service-1 started on http://localhost:${PORT}`)
})