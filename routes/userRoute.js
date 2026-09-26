import express from "express";
import { createUser, getSingleUser, updateUser, deleteUser } from "../controller/userController.js";

const userRoute = express.Router();


userRoute.post('/new-user', createUser);
userRoute.get('/single-user/:userId', getSingleUser);
userRoute.patch('/update-user/:userId', updateUser);
userRoute.delete('/delete-user/:userId', deleteUser);

export default userRoute;
