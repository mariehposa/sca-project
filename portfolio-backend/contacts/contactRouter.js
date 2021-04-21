const express = require("express");
const db = require("./contactModel");
const router = express.Router();

router.post("/contact", bodyValidator, (req, res) => {
  db.addContact(req.valData)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Cannot register contact" + error.message,
      });
    });
});

function bodyValidator(req, res, next) {
  const data = {
    Name: req.body.name,
    Email: req.body.email,
    Message: req.body.message,
  };

  if (data.Name && data.Email && data.Message) {
    req.valData = data;
    next();
  } else {
    res.status(400).json({
      message: "All parameters are required",
    });
  }
}
module.exports = router;
