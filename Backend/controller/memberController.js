const Member = require('../models/memberModel');

// POST /members
exports.createMember = (req, res) => {
  const { member_id, username, phone, address, email } = req.body;

  Member.create({
    member_id,
    username,
    phone,
    address,
    email
  })
    .then(() => {
      console.log('Member created successfully');
      res.status(200).send('Member created successfully');
    })
    .catch((err) => {
      console.error('Error creating member:', err);
      res.status(500).send('Error creating member');
    });
};

// GET /members
exports.getMembers = (req, res) => {
  Member.findAll()
    .then((members) => {
      res.json(members).status(200);
    })
    .catch((err) => {
      console.error('Error querying members:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};
