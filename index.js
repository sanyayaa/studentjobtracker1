import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import jobRoutes from "./routes/job.routes.js";

dotenv.config({
  path: "./.env"
});

const app = express();
app.use(express.json());

// Routes
app.use("/api/jobs", jobRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
