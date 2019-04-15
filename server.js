const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './app/views'));

const routes = require('./app/routing')

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}))
app.get('/favicon.ico', (req, res, next)=>{
    return res.sendStatus(204);
});
app.use('/', routes());
app.listen(process.env.PORT || 5000);

module.exports = app;