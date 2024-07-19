const express = require("express");
const app = express();
require("dotenv").config();
const postRouter = require('./Routers/post.router')



const port = process.env.PORT || 8081;

app.get("/", postRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
