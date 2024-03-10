const express = require("express");
const axios = require("axios");
const { program } = require("commander");

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server listening on port ${PORT}`);
  } else {
    console.log(error);
  }
});

function generateActivity() {
  axios
    .get("http://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
