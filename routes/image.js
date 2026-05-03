const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    file: req.file.filename
  });
});

router.post("/generate", async (req, res) => {
  res.json({
    imageUrl: "https://via.placeholder.com/512"
  });
});

module.exports = router;
