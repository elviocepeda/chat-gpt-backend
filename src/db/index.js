import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${user}:${password}@cluster0.zu2gvnp.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("¡Database connected successfully!"))
  .catch((e) => console.log(e));
