const express = require('express')
const path = require('path')
const app = express()
const api = require('./server/routes/api')


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', api)

app.use(express.static(path.join(__dirname,'build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 4200;

app.listen((process.env.PORT || port), function () {
    console.log(`server runs on port : ${port}`)
})