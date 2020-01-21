const express = require("express");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.post("/", (req, res) => {
  db("accounts")
    .insert(req.body)
    .then(acc => {
      console.log(acc);
      res.status(200).json(acc);
    })
    .catch(() =>
      res
        .status(400)
        .json({ error: "There was a problem retrieving the account." })
    );
});

server.get("/", (req, res) => {
  db("accounts")
    .then(acc => {
      console.log(acc);
      res.status(200).json(acc);
    })
    .catch(() =>
      res
        .status(400)
        .json({ error: "There was a problem retrieving the accounts." })
    );
});

server.get("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .then(acc => {
      console.log(acc);
      res.status(200).json(acc);
    })
    .catch(() =>
      res
        .status(400)
        .json({ error: "There was a problem retrieving the account." })
    );
});

server.put("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .update(req.body)
    .then(acc => {
      console.log(acc);
      res.status(200).json(acc);
    })
    .catch(() =>
      res
        .status(400)
        .json({ error: "There was a problem updating the account." })
    );
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .del()
    .then(acc => {
      console.log(acc);
      res
        .status(200)
        .json({ message: "The account was successfully deleted." });
    })
    .catch(() =>
      res
        .status(400)
        .json({ error: "There was a problem deleting the account." })
    );
});

module.exports = server;
