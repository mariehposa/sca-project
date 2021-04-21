const db = require("../database/dbConfig");

function getContactId(id) {
  return db("contacts as c")
    .where("c.id", id)
    .select("c.Name", "c.Email", "c.Message");
}

function addContact(user) {
  return db("contacts as c")
    .insert(user, "id")
    .then(([id]) => this.getContactId(id));
}

module.exports = {
  getContactId,
  addContact,
};
