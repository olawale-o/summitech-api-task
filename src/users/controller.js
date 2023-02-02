const service = require('./service');

module.exports = {
  new: async (req, res) => {
    try {
      const { email, password, fullName } = req.body;
      const data = await service.createUser({
        email,
        password,
        full_name: fullName,
      });
      return res.status(201).json(data);
    } catch (error) {
      console.log(error);
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Please login with your credentials' });
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await service.findUser({
        email,
        password,
      });
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
}