const express = require('express');
const router = express.Router();

const surveyRoute = require('./survey');
const apiRoute = require('./apiFriends')

module.exports = () => { 
    router.get('/', (req, res, next)=>{
        return res.render('index');
    })

    router.use('/survey', surveyRoute());
    router.use('/apifriends', apiRoute());
    router.use((req, res, next)=>{
        return res.render('index');
    })

    return router;
}