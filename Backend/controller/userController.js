const { User } = require('../models/userModel');

exports.createUser = async (req, res) => {
  const { name, username, phone, address, email, password, tipe } = req.body;

  User.create({
    name,
    username,
    phone,
    address,
    email,
    password,
    tipe
  })
    .then(() => {
      console.log('User created successfully');
      res.status(200).send('User created successfully');
    })
    .catch((err) => {
      console.error('Error creating user:', err);
      res.status(500).send('Error creating user');
    });
};

exports.getUsers = async (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users).status(200);
    })
    .catch((err) => {
      console.error('Error querying users:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};
