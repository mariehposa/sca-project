const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const contactRouter = require("./contacts/contactRouter");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json("Its working!");
});

server.use("/api", contactRouter);

module.exports = server;
