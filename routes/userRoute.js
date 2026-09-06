import express from "express";

const userRoute = express.Router();
const { createUser, getSingleUser, updateUser, deleteUser } = require('../controller/userController');

userRoute.post('/new-user', createUser);
userRoute.get('/single-user/:userId', getSingleUser);
userRoute.patch('/update-user/:userId', updateUser);
userRoute.delete('/delete-user/:userId', deleteUser);

export default userRoute;
