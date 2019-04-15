const express = require("express");

require("dotenv").config();
const massive = require("massive");
// const products_controller = require("./products_controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));

app.use(express.json());

app.get(".api/inventory", (req, res) => {
    const db = req.app.get("db")

    db.get().then()
})



app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
});
