const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "merch",
        user: "Charles",
        password: "charles"
    }
});
let query = knex.select("*").from("products").where("id", "2");
query.then((user) => {
    if(user[0])
    console.log(user[0]);
})