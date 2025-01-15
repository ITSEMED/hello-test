const express = require("express"); // CommonJS syntax
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // ตั้งค่า public เป็น static folder

app.get("/dog", (req, res) => {
  res.send("Hello Dog!");
});

app.get("/", (req, res) => {
  res.send("Hello World! SEMed Alien!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
