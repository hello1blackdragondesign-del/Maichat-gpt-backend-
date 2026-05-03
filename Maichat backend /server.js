const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/chat", require("./routes/chat"));
app.use("/api/image", require("./routes/image"));
app.use("/api/video", require("./routes/video"));
app.use("/api/voice", require("./routes/voice"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Maichat backend running on port ${PORT}`);
});
