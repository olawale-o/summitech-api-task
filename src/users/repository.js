const db = require('../database/connection');

module.exports = {
  insertOne: async (credentials) => {
    return db('users').insert(credentials)
    .then((id) => {
      console.log(id);
      return db('users').where('id', id[0]).first('id', 'email', 'full_name', 'created_at', 'updated_at');
    })
  },
  findByEmail: async ({ email }) => {
    return db('users').where({ email, }).first('id', 'email', 'full_name', 'password', 'created_at', 'updated_at');
  },
  findById: async ({ id }) => {
    return db('users').where({ id }).first('id');
  },
};
