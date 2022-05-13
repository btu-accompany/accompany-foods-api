const express = require('express');
const { foodList } = require('./utils/foods');
require("dotenv/config");

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    try {
        const foods = foodList()
        res.json(foods)
    } catch (err) {
        res.json({ message: err })
    }
})

app.listen(port, () => {
    console.log(port + ". portta çalışıyor");
});