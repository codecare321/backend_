const express = require('express');
const mongoose = require('mongoose');
const slotRoutes = require('./src/routes/slotRoutes')

const app = express();
require('dotenv').config();

require('./db');


//middleware 

const cron = require('node-cron');

app.use(express.json());

app.use('/api',slotRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


