const knex = require('knex');
const dbConfig = require('./knexfile');


let db = knex(dbConfig.development);

// if (NODE_ENV === 'test') {
//   db = knex(dbConfig.test);
// } else {
//   db = knex(dbConfig.development);
// }

module.exports = db;