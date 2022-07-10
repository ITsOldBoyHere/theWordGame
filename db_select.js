const express = require("express");

const db = require("./db/db");

const app = express();

app.use(express.json());


app.get("/", async (req, res) => {
  const gameword = await db("gameword").orderBy('users_name');
  res.json({ gameword });
  console.log( gameword[0].users_name);
});


const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));