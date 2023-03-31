import "./db/index.js";
import cors from "cors";
import express from "express";
import {
  login,
  register,
  getUsers,
  contactMe,
  updateUser,
  updateUserPassword,
  deleteUser,
  setAvatar,
  getResponse,
  verifyAccount,
  forgotPassword,
  setPassword,
} from "./controllers/controller.js";
import { multerUploadSettings } from "./utils/multerStorage.js";
import { verifyKey, verifyNewPwdKey } from "./middlewares/verifyKey.js";

const app = express();

const uploadSettings = multerUploadSettings();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/avatar", express.static("./src/db/avatar"));

app.post("/login", login);
app.post("/register", register);
app.post("/verify-account", verifyKey, verifyAccount);
app.get("/", (req, res) => res.send("Home Page Route"));
app.patch("/forgot-password", forgotPassword);
app.patch("/set-password", verifyNewPwdKey, setPassword);
app.patch("/new-password/:uuid", updateUserPassword);
app.patch("/:uuid", updateUser);
app.delete("/:uuid", deleteUser);
app.post("/set-avatar/:uuid", uploadSettings, setAvatar);
app.post("/chat", getResponse);
app.post("/contact-me", contactMe);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
