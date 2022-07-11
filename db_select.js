const express = require("express");

const db = require("./db/db");

const app = express();

app.use(express.json());
require('dotenv').config()

app.get("/", async (req, res) => {
  const gameword = await db(process.env.DB_table_GM)
  res.json({ gameword });

});


const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));