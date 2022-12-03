const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./util/database");

const purchaseOrderRoutes = require("./routes/purchaseOrder");



app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(purchaseOrderRoutes);



app.use((req, res, next) => {
  res.redirect('/')
});

app.listen(3000);
