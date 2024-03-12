const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const app = express();
const axios = require("axios");
const { program } = require("commander");
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`successfully connected to server, listening on port ${PORT}`);
  } else {
    console.log(`error occur: ${error}`);
  }
});
