const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/admin");
const categoryRouter = require('./routers/category')
const categoryVideos = require('./routers/video')
const app = express();
const cors=require('cors')

app.use(express.json());
app.use(cors())
app.use(userRouter);
app.use(categoryRouter)
app.use(categoryVideos)

module.exports = app;
