require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development'


const knexFile = require('./knexfile')[NODE_ENV]
console.log(knexFile);
const knex = require('knex')(knexFile)

// let query = knex.select("*").from("users").where("email", "brabidge2@desdev.cn");
// query.then((user) => {
//     console.log(user[0].id)
// });

app
    .engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main'
    })
    )
    .set('view engine', '.hbs')

    .use(session({
        store: new RedisStore(),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
      }))

    .use(passport.initialize())
    .use(passport.session())


    // .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(require('./routes/auth'))


    //set up routes
    .get('/', (req, res) => {
        res.render('login');
    })

    .get('/session', (req, res) => {
        res.send(req.session);
    })

    // .get('/set', (req, res) => {
    //     req.session.name = "Jon";
    //     res.redirect('/session');
    // })


    .listen(port, () => {
        console.log('Listening on', port);
    })