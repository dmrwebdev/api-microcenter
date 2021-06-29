const express = require("express");
const microcenter = express();
const path = require("path");


microcenter.set("views", __dirname + "/views");
microcenter.use("/", express.static(__dirname + "/public"));

microcenter.get("/", (req, res) => {
  res.render("index");
});

const timestampRouter = require(path.join(__dirname, '/routes/timestamp'));
microcenter.use("/timestamp", timestampRouter);

const metadataRouter = require(path.join(__dirname, '/routes/metadata'));
microcenter.use("/metadata", metadataRouter);

const headerParserRouter = require(path.join(__dirname, '/routes/headerParser'));
microcenter.use("/headparser", headerParserRouter);


//const urlShortenerRouter = require('./routes/urlShortenerRouter');
//microcenter.use('/urlshortener', urlShortenerRouter);


//REMOVE FOR PRODUCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
microcenter.use(express.urlencoded({ extended: true }));
microcenter.use(express.json());
microcenter.set('view engine', 'pug')
microcenter.listen('3001', '127.0.0.1', () => {
  console.log('Listening on PORT 3001');
});
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = microcenter;
