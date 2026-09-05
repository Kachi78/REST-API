require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');

const atlasString = "mongodb+srv://chukwuemekaonyekachi06_db_user:AZS6sVgl4xoYJoO6@cluster0.xhpkgpt.mongodb.net/kachi_81?appName=Cluster0";

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDb Atlas:', error);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});