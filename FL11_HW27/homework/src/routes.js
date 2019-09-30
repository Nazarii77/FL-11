const express = require('express');
const myrouter = express.Router();
const handler = require('./handlers/car');

myrouter.get("/", handler.getCars);
myrouter.get("/:id", handler.get);
myrouter.post("/", handler.post);
myrouter.put("/:id", handler.put);
myrouter.delete("/:id", handler.delete);

module.exports = myrouter;
