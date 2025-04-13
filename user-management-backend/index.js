const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>User Management System Backedn Server</h1>");
});

const userData = [
  { id: 1, name: "John Brown", email: "johnbrown@yahoo.com" },
  { id: 2, name: "Henry Kamara", email: "henrykamara@yahoo.com" },
  { id: 3, name: "James Taylor", email: "jtaylor@yahoo.com" },
  { id: 4, name: "Harris Kerkula", email: "hkerkula@yahoo.com" },
];

app.get("/users", (req, res) => {
  res.send(userData);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = userData.length + 1;
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`The server is running on port http://localhost:${port}`);
});
