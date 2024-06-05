const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { createServer } = require('http');

const PORT = process.env.PORT || 5000;

const app = express();

const server = createServer(app);

app.use(express.json());
app.use(cookieParser());
app.use('/js', express.static('js'));
const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`server started on port ${PORT}`)
    });
  } catch (e) {
    console.log(e);
  }
}

start();
