const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get ('/', (req, res, next) => {
        return res.send('Survey');
    });

    router.post('/', (req, res, next) =>{
        return res.send('Form');
    });

    return router;
};