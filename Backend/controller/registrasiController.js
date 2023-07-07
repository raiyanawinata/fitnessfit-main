const Registrasi = require('../models/registrasiModel');

// POST /registrasi
exports.createRegistrasi = (req, res) => {
  const {  username, phone, address, email, password } = req.body;

  Registrasi.create({
    username,
    phone,
    address,
    email,
    password
  })
    .then(() => {
      console.log('Registrasi created successfully');
      res.status(200).send('Registrasi created successfully');
    })
    .catch((err) => {
      console.error('Error creating registrasi:', err);
      res.status(500).send('Error creating registrasi');
    });
};

// GET /registrasi
exports.getRegistrasi = (req, res) => {
  Registrasi.findAll()
    .then((registrasi) => {
      res.json(registrasi).status(200);
    })
    .catch((err) => {
      console.error('Error querying registrasi:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};
