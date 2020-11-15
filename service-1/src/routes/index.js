import {
    Router
} from 'express';
import {
    authModel
} from '@rc27/validation-model';

const router = Router();

router.get("/api/service1", (req, res) => {

    // test
    req.body = {
        username: ""
    }

    try {
        const value = authModel.validate(req.body);
        return res.send({
            message: value
        })
    } catch (err) {
        return res.status(400).send({
            message: error
        });
    }
});

export default router;