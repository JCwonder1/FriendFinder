const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get ('/', (req, res, next) => {
        return res.send('API FRIENDS ROUTE');
    });

    router.post('/', (req, res, next) =>{
        return res.send('Form');
    });

    return router;
};