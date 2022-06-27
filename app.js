const express= require('express')
const port = process.env.PORT || 4000
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const session = require('express-session')
const routes = require('./routes/index')
const fs_file = require('./fs')
//const dictionary_preparing = require('./fs')
//dictionary_preparing()

const app = express()
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname,'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use(session({
    secret: 'user word',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(flash())
app.use('/', routes)
app.listen(port)
