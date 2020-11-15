import { Router } from 'express';

const router = Router();

router.get("/api/service2", (req, res) => {
    res.send({
        message: "service-2 api's"
    })
});

export default router;