const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './app/views'));

const routes = require('./app/routing')

app.use(express.static('./app/public'));
app.get('/favicon.ico', (req, res, next)=>{
    return res.sendStatus(204);
});
app.use('/', routes());
app.listen(3000);

module.exports = app;