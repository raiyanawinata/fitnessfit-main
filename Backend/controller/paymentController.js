const Payment = require('../models/paymentModel');

// POST /paymen
exports.createPayment = (req, res) => {
  const { id, cardnumber, expireddate, cvv } = req.body;

  Payment.create({
    id,
    cardnumber,
    expireddate,
    cvv
  })
    .then(() => {
      console.log('Payment created successfully');
      res.status(200).send('Payment created successfully');
    })
    .catch((err) => {
      console.error('Error creating payment:', err);
      res.status(500).send('Error creating payment');
    });
};

// GET /paymen
exports.getPayments = (req, res) => {
  Payment.findAll()
    .then((payments) => {
      res.json(payments).status(200);
    })
    .catch((err) => {
      console.error('Error querying payments:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
};
