const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const bodyParser  = require('body-parser');

const app = express();
const port = process.env.PORT; // 3080;

const getAppointments = require("./controllers/getAppointments");
const getAppointment = require("./controllers/getAppointment");
const addAppointment = require("./controllers/addAppointment");
const deleteAppointment = require("./controllers/deleteAppointment");

const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('React NodeJs Example');
});

app.get('/api/appointments', getAppointments.getAppointments);

app.get('/api/appointments/:id', getAppointment.getAppointment);

app.post('/api/appointment', addAppointment.addAppointment);

app.delete('/api/appointments/:id', deleteAppointment.deleteAppointment);


app.get('/api/users', (req, res) => {
    console.log('api/users called...');
    res.json(users);
});

app.post('/api/user', (req, res) => {
    console.log('api/user called...');

    const user = req.body.user;
    console.log('Adding user : ', user);
    users.push(user);

    res.json('user added');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
