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

    const value = authModel.validate(req.body);
    if (value) {
        return res.status(400).send({
            message: value
        })
    }

    res.status(200).send({
        message: "service1-api"
    })

});

export default router;