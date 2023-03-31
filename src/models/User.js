import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uuid: {
      type: String,
      default: "",
      required: true,
    },
    username: {
      type: String,
      default: "",
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      default: "",
      required: true,
      min: 6,
      max: 1024,
    },
    password: {
      type: String,
      default: "",
      required: true,
    },
    avatar: {
      type: String,
      default: "",
      required: false,
    },
    verified: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
