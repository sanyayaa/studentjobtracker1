import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
  dateOfApplication: { type: Date, required: true },
  link: { type: String },
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
