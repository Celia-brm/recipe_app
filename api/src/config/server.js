const express = require("express"),
  cors = require("cors"),
  app = express();



app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


const dish_rooter = require("../modules/dish");
const category_rooter = require("../modules/category");

app.use("/dish", dish_rooter);
app.use("/category", category_rooter);


module.exports = app;
