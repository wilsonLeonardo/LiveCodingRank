const express = require("express");

const route = express.Router();

const character = require('../controllers/getCharacter')

route.get("/", character.getAll);
route.get("/:id", character.getSingle);
route.get("/episodio/:id", character.getEp);

module.exports = route;
