const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    voiceReply: "Voice endpoint working"
  });
});

module.exports = router;
