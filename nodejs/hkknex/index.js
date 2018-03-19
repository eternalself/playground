const knex = require('knex')({
    client: 'pg',
    connection: {
        database: "play",
        user: "Charles",
        password: "charles"
    }
});
knex("citrus").insert({name: "test", color: "test", taste: "test"})
.then((id)=> {
    console.log(id);

})