
exports.up = function (knex) {
    return knex.schema
        .createTable('contacts', table => {
            table.increments('id')
            table.text('Name')
                .notNullable()
            table.string('Email')
                .notNullable()
            table.string('Message')
                .notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('contacts')
};
