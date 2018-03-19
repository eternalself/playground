require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcryptjs');
const NODE_ENV = process.env.NODE_ENV || 'development'
const knexFile = require('./knexfile')[NODE_ENV]
const knex = require('knex')(knexFile)

// passport.use('local-register', new LocalStrategy({
//     passReqToCallback: true
// }, register))

passport.use('local-login', new LocalStrategy(authenticate));

passport.serializeUser((user, done) => {
  
    console.log(user);
    done(null, user[0].id);
});

passport.deserializeUser((id, done) => {
    console.log(id);
    let query = knex.select("*").from("users").where("id", id);
    query.then((user) => {
        if (!user[0]) {
            done(new Error('Wrong user id.'));
        }
        done(null, user)
    })
        .catch((err) => {
            done(err);
        })
});

function authenticate(email, password, done) {
    let query = knex.select("*").from("users").where("email", email);
    query.then((user) => {
        console.log(user)
        if (!user[0] || password !== user[0].password) {
            return done(null, false, { message: "Incorrect email or password." });
        }
        return done(null, user)
    })
        .catch((err) => {
            return done(err);
        })
}

