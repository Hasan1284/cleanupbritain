const express = require("express");
const app = express();
const db = require("./models");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "..." });
});
require("./routes/users")(app);
require("./routes/locations")(app);
/*
require("./routes/image")(app);
 */

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
