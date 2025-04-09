import express from "express";
import {
  addJob,
  getJobs,
  updateJobStatus,
  deleteJob
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", addJob);
router.get("/", getJobs);
router.put("/:id", updateJobStatus);
router.delete("/:id", deleteJob);

export default router;
