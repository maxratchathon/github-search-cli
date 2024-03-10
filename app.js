const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server listening on port ${PORT}`);
  } else {
    console.log(error);
  }
});


