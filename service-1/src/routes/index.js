import { Router } from 'express';

const router = Router();

router.get("/api/service1", (req, res) => {
    res.send({
        message: "Service 1 Homepage"
    })
});

export default router;