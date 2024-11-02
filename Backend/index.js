// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const userModel = require('./userModel');
// const mongourl = 'mongodb://localhost:27017/reactnative';
// mongoose
//   .connect(mongourl)
//   .then(() => {
//     console.log('Database connected successfully');

//     app.listen(8080, (req, res) => {
//       console.log('server is running on port number 8080');
//     });
//   })
//   .catch(error => {
//     console.log('Error in mongodb connection.');
//     console.error(error.message);
//   });
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('started');
// });

// app.get('/create', async (req, res) => {
//   let createdUser = await userModel.create({
//     name: 'laxmi Rajput',
//     email: 'guptaaman6378@gmail.com',
//     contact: 7596854785,
//     password: '123456',
//   });
//   res.send(createdUser);
// });

// app.get('/update', async (req, res) => {
//   let updatedUser = await userModel.findOneAndUpdate(
//     {name: 'laxmi Rajput'},
//     {name: 'Aryan Gupta'},
//     {new: true},
//   );
//   res.send(updatedUser);
// });

// app.get('/read', async (req, res) => {
//   let users = await userModel.find();
//   res.send(users);
// });

// app.get('/delete', async (req, res) => {
//   let user = await userModel.findOneAndDelete({name: 'Aman Gupta'});
//   console.log(`${user} deleted successfully.`);
//   res.send(user);
// });
