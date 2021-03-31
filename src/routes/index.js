const express = require("express");

const characterRoute = require("./character");

const route = express.Router();

route.use('/character', characterRoute);

route.get("/", (req, res) => {
    return res.send({ ok: true })
})

module.exports = route;
