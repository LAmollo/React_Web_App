// backend/src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/db');
const postRouter = require('./routes/post');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
