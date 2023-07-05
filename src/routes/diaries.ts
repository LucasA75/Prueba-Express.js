import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Fetching all data entry diaries");
});

router.post("/", (_req, res) => {
  res.send("Saving my diary");
});

export default router;
