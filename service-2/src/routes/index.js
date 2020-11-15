import { Router } from 'express';

const router = Router();

router.get("/api/service2", (req, res) => {
    res.send({
        message: "Service 2 Homepage"
    })
});

export default router;