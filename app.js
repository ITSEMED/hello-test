const express = require("express"); // CommonJS syntax
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World! SEMed Alien!");https://github.com/ITSEMED/hello-test
});

app.get("/dog", (req, res) => {
  res.send("Hello Dog!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
