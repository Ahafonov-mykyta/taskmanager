const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to the database"))
  .catch((e) => {
    console.log(e);
  });
