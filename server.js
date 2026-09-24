import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "/routes/userRoute.";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDb Atlas:", error);
  });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/users", userRoute);
app.use("/users", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
