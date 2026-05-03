const express = require("express");
const router = express.Router();

router.post("/generate", async (req, res) => {
  res.json({
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  });
});

module.exports = router;
