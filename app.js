var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

const db = require("./app/models");
const CustomerController = require("./app/controllers/customer.controller");

db.sequelize.sync();

var indexRouter = require("./app/routes/index");
var customerRouter = require("./app/routes/customer");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/dist/client')));
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "DELETE", "PATCH", "POST"],
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
  })
);

app.use("/", indexRouter);
app.use("/customers", customerRouter);


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname,'client/dist//client/index.html'));
})


module.exports = app;
