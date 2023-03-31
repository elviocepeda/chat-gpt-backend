import mongoose from "mongoose";

const secureKeySchema = mongoose.Schema(
  {
    owner: {
      type: String,
      ref: "User",
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SecureKey", secureKeySchema);
