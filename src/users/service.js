const repository = require('./repository');
const bcrypt = require('bcryptjs');

module.exports = {
  createUser: async (credentials) => {
    const data = await repository.insertOne({
      ...credentials,
      password: await bcrypt.hashSync(credentials.password, 10),
    });
    return data;
  },
  findUser: async (credentials) => {
    const { email, password } = credentials;
    const data = await repository.findByEmail({ email });
    const isMatch = await bcrypt.compareSync(password, data.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    return {
      id: data.id,
      email: data.email,
      full_name: data.full_name,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };
  }
};
