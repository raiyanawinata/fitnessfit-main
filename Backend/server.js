const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models/userModel');
const usersController = require('./controller/userController');
const paymentController = require("./controller/paymentController");
const registrasiController = require("./controller/registrasiController");
const membersController = require("./controller/memberController");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());


app.post('/users', usersController.createUser);
app.get('/users', usersController.getUsers);
app.post('/payment', paymentController.createPayment);
app.get('/payment', paymentController.getPayments);
app.post('/registrasi', registrasiController.createRegistrasi);
app.get('/registrasi', registrasiController.getRegistrasi);
app.post('/members', membersController.createMember);
app.get('/members', membersController.getMembers);



sequelize.sync()
.then(() =>{
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})
.catch((error) => {
  console.error('Failed to synchronize models with database', error);
  }); 